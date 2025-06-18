import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  uId!: string;
  userdata!: Iuser;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  hover = false;
  showOptions = false;

  constructor(
    private userservices: UsersService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.uId = this.routes.snapshot.params['userId'];
    this.userdata = this.userservices.getUserData(this.uId);
    console.log(this.userdata);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.userdata.avatar = reader.result as string;
      };

      reader.readAsDataURL(file); // Converts to base64 string
    }

    // this.showOptions = false;
  }

onRemove() {
 this.userdata.avatar = '';
this.userdata.username = '';
this.userdata.userRole = '';
this.userdata.location = '';
this.userdata.experience = '';
this.userdata.phone = '';
this.userdata.skills = []; // <-- Important fix
this.showOptions = false;

}}



//  ##############################################################################

// onImageChange(event: Event): void {
//   const input = event.target as HTMLInputElement;
//   if (input.files && input.files[0]) {
//     const file = input.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.userdata.avatar = reader.result as string;
//     };
//     reader.readAsDataURL(file);
//   }
// }

// showOptions = false;

// toggleOptions(): void {
//   this.showOptions = !this.showOptions;
// }

// onImageChange(event: Event): void {
//   const input = event.target as HTMLInputElement;
//   if (input.files && input.files[0]) {
//     const file = input.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.userdata.avatar = reader.result as string;
//       this.showOptions = false;
//     };
//     reader.readAsDataURL(file);
//   }
// }

// removePhoto(): void {
//   this.userdata.avatar = 'assets/default-avatar.png'; // Fallback image
//   this.showOptions = false;
// }

// hover = false;
// showOptions = false;
// previewUrl: string | null = null;

// toggleOptions() {
//   this.showOptions = !this.showOptions;
// }

// onImageChange(event: Event): void {
//   const fileInput = event.target as HTMLInputElement;
//   if (fileInput.files && fileInput.files[0]) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.userdata.avatar = reader.result as string;
//     };
//     reader.readAsDataURL(fileInput.files[0]);
//   }
// }

// removePhoto(): void {
//   this.userdata.avatar = 'https://via.placeholder.com/150?text=No+Image';
//   this.showOptions = false;
// }

// onImageSelected(event: any): void {
//   const file: File = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => (this.previewUrl = reader.result as string);
//     reader.readAsDataURL(file);
//   }
// }









// #################################################################################








// with Camera

// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { UsersService } from '../../service/users.service';
// import { ActivatedRoute } from '@angular/router';
// import { Iuser } from '../../models/users';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent implements OnInit {
//   uId!: string;
//   userdata!: Iuser;
//   hover = false;
//   showOptions = false;
//   previewUrl: string | null = null;
//   showCamera = false;
//   capturedImage: string | null = null;

//   @ViewChild('video') videoRef!: ElementRef;
//   @ViewChild('canvas') canvasRef!: ElementRef;

//   constructor(
//     private userservices: UsersService,
//     private routes: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.uId = this.routes.snapshot.params['userId'];
//     this.userdata = this.userservices.getUserData(this.uId);
//     console.log(this.userdata);
//   }

//   toggleOptions(): void {
//     this.showOptions = !this.showOptions;
//   }

//   onImageChange(event: Event): void {
//     const fileInput = event.target as HTMLInputElement;
//     if (fileInput.files && fileInput.files[0]) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.userdata.avatar = reader.result as string;
//         this.showOptions = false;
//       };
//       reader.readAsDataURL(fileInput.files[0]);
//     }
//   }

//   removePhoto(): void {
//     this.userdata.avatar = 'https://via.placeholder.com/150?text=No+Image';
//     this.showOptions = false;
//   }

//   onImageSelected(event: any): void {
//     const file: File = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => (this.previewUrl = reader.result as string);
//       reader.readAsDataURL(file);
//     }
//   }

//   startCamera(): void {
//     this.showCamera = true;
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then((stream) => {
//         const video = this.videoRef.nativeElement;
//         video.srcObject = stream;
//       })
//       .catch((err) => {
//         console.error('Error accessing camera:', err);
//       });
//   }

//   capturePhoto(): void {
//     const video = this.videoRef.nativeElement;
//     const canvas = this.canvasRef.nativeElement;
//     const context = canvas.getContext('2d');
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);
//     this.capturedImage = canvas.toDataURL('image/png');
//     this.userdata.avatar = this.capturedImage;

//     const stream = video.srcObject as MediaStream;
//     stream.getTracks().forEach(track => track.stop());

//     this.showCamera = false;
//   }

//   cancelCamera(): void {
//     const video = this.videoRef.nativeElement;
//     const stream = video?.srcObject as MediaStream;
//     if (stream) {
//       stream.getTracks().forEach(track => track.stop());
//     }
//     this.showCamera = false;
//   }
// }








