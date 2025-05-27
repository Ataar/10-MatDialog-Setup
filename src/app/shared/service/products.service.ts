import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr: Array<Iproduct> = [
    {
      pname: 'Black Forest Cake',
      pid: '123',
      pstatus: 'InProgress',
      canReturn: 1,
      price: 500, // Realistic price for a 1 kg Black Forest Cake
      image: './assets/images/black-forest-cake.jpg',
      kg: '1kg',
      title: 'Delicious Black Forest Cake with Cherries and Cream'
    },
    {
      pname: 'Choco Cream Cake',
      pid: '456',
      pstatus: 'Delivered',
      canReturn: 0,
      price: 600, // Realistic price for a 1 kg Choco Cream Cake
      image: './assets/images/image-LNVBQ8-1706080822.jpg',
      kg: '1.5kg',
      title: 'Rich Chocolate Cream Cake with Smooth Frosting'
    },
    {
      pname: 'Vanilla-Scented Cake',
      pid: '789',
      pstatus: 'Shipped',
      canReturn: 1,
      price: 700, // Premium price for a 1 kg gourmet Vanilla-Scented Cake
      image: './assets/images/vanilla-scented-cornmeal-cake-with-olive-oil-buttercream-FT-RECIPE0921-31dde73698aa4f0e8609be000480103f.jpg',
      kg: '1kg',
      title: 'Classic Red Velvet Cake with Cream Cheese Frosting'
    }
  ];

  constructor() { }

  // API call to fetch all products data
  fetchAllproducts(): Array<Iproduct> {
    return this.productsArr;
  }

  getProduct(id: string): Iproduct {
    // API call to get a product using pid = id(parameter)
    return this.productsArr.find(prod => prod.pid === id)!;
  }
}