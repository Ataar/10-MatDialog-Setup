import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userArr: Array<Iuser> = [
 {
  username: "Meena Sharma",
  userId: "101",
  userRole: "English Teacher",
  avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  location: "Delhi, India",
  experience: "5+ years in teaching literature and grammar",

  skills: ["Grammar", "Literature", "Communication", "Classroom Management"]
},

    {
  username: "Faisal Shaikh",
  userId: "102",
  userRole: "Frontend Developer",
  avatar: "./assets/images/WhatsApp Image 2025-06-12 at 18.22.44_23e3a7c9.jpg",
  location: "Pune, India",
  experience: "2+ years experience in Angular & JavaScript",
  skills: ["Angular", "TypeScript", "HTML", "CSS", "Git", "Responsive Design"]
},

  {
    username: "Sana Ali",
    userId: "103",
    userRole: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    location: "Bangalore, India",
    experience: "3+ years in UX/UI design",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    username: "Amit Joshi",
    userId: "104",
    userRole: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    location: "Hyderabad, India",
    experience: "4+ years in Data Analysis",
     phone:'',
    skills: ["Python", "SQL", "Power BI", "Excel"]
  },


  {
    username: "Priya Verma",
    userId: "105",
    userRole: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    location: "Delhi, India",
    experience: "6+ years in Project Management",
    skills: ["Agile", "Scrum", "Jira", "Team Leadership"]
  },

{
  username: "Drx. Kamran Khan",
  userId: "106",
  userRole: "Pharmacy Student",
  avatar: "./assets/images/WhatsApp Image 2025-06-13 at 21.25.44_e1995398.jpg",
  location: "Latur, India",
  experience: "Currently pursuing B.Pharm, Final Year",
   
  skills: [
    "Anatomy",
    "Physiology",
    "Pharmacology",
    "Clinical Diagnosis",
    "Patient Care",
    "Lab Procedures",
    "Human Anatomy",
    "Prescription Analysis",
    "Medicinal Chemistry",
    "Clinical Research"
  ]
},

{
  username: "Yusuf Khan",
  userId: "107",
  userRole: "Mobile Technician & Accessories Seller",
  avatar: "./assets/images/480009934_1721880665345656_7500153995629156868_n.jpg", // You can change this if you have a real image
  location: "Mukaddar Mobile & Watch Shop Udgir Nagar Parishad , India",
  experience: "9+ years in mobile repair and accessories retail",
  phone:'74998 12827',
  skills: [
     "मोबाइल हार्डवेअर दुरुस्ती",
    "सॉफ्टवेअर समस्या निवारण",
    "स्क्रीन बदल",
    "बॅटरी आणि चार्जिंग पोर्ट दुरुस्ती",
    "फ्लॅशिंग आणि अनलॉकिंग",
    "मोबाइल अ‍ॅक्सेसरीज विक्री",
    "ग्राहक समर्थन",
    "साठा व्यवस्थापन"
  ]
},
{
  username: "Toufiq Shaikh",
  userId: "109",
  userRole: "Lab Technician & Owner of Sahara Laboratory",
  avatar: "./assets/images/WhatsApp Image 2025-06-12 at 18.22.44_23e3a7c9.jpg", // Replace with real image URL if available
  location: "अज़ीजा हॉस्पिटल, खादरी फंक्शन हॉल समोर, उदगीर",
  phone: "8999188338 / 93078 10197" ,
  experience: "5+ वर्षांचा रक्त, लघवी व थुंकी तपासणीचा अनुभव",
  skills: [
    "रक्त तपासणी",
    "लघवी तपासणी",
    "थुंकी तपासणी",
    "CBC व साखर तपासणी",
    "नमुना संकलन व प्रक्रिया",
    "24 तास सेवा",
    "रुग्ण सेवा व मार्गदर्शन",
    "लॅब व्यवस्थापन"
  ],
  labName: "सहारा लॅबोरेटरी",
  openHours: "२४ तास सेवा उपलब्ध"
}



  

];



  constructor() {}

  // Api call to get all user data
  fetchAllUserdata(): Observable<Array<Iuser>> {
    return of(this.userArr);
  }

  // Get single user by ID
  getUserData(id: string): Iuser {
    return this.userArr.find((user) => user.userId === id)!;
  }
}
