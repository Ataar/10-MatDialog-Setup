import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../models/users';
 import { HostListener } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  uId!: string;
  userdata!: Iuser;
  showOptions = false;

  isEditingName = false;
  isEditingAbout = false
  newName = '';
  newAbout = '';

  constructor(
    private userservices: UsersService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.uId = this.routes.snapshot.params['userId'];
    this.userdata = this.userservices.getUserData(this.uId);
    console.log(this.userdata);
      this.newName = this.userdata?.username || '';
       this.newAbout = this.userdata?.userRole || '';
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  uploadPhoto() {
    alert('Upload photo clicked');
    this.showOptions = false;
  }

 viewPhoto() {
    if (this.userdata.avatar) {
      if (this.userdata.avatar.startsWith('data:image')) {
        const win = window.open();
        if (win) {
          win.document.write(`
            <html>
              <head><title>Profile Photo</title></head>
              <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#000;">
                <img src="${this.userdata.avatar}" style="max-width:50%; max-height:50%;" />
              </body>
            </html>
          `);
          win.document.close();
        }
      } else {
        window.location.href = this.userdata.avatar;
      }
    }
    this.showOptions = false;
  }
  


  removePhoto() {
    this.userdata.avatar = 'assets/default-avatar.png'; // or null
    this.showOptions = false;
  }

 
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.avatar-wrapper');
    if (!clickedInside) {
      this.showOptions = false;
    }
  }

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // Set preview as new avatar
      this.userdata.avatar = reader.result as string;
    };

    reader.readAsDataURL(file); // Read file as base64
  }

  this.showOptions = false;
}

@ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
showCamera = false;
private stream!: MediaStream;

takePhoto() {
  this.showCamera = true;

  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }).then(stream => {
    this.stream = stream;
    const video = this.videoRef.nativeElement;
    video.srcObject = stream;
    video.play();
  }).catch(err => {
    alert('Camera access denied or not supported.');
    this.showCamera = false;
  });

  this.showOptions = false;
}

capturePhoto() {
  const video = this.videoRef.nativeElement;
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext('2d');
  if (context) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/png');
    this.userdata.avatar = dataUrl; // ✅ set as new avatar
  }

  // Stop camera stream
  this.stream.getTracks().forEach(track => track.stop());
  this.showCamera = false;
}
cancelCamera() {
  if (this.stream) {
    this.stream.getTracks().forEach(track => track.stop());
  }
  this.showCamera = false;
}




updateNameCount() {
  if (this.newName.length > 25) {
    this.newName = this.newName.slice(0, 25);
  }
}

saveName() {
  this.userdata.username = this.newName;
  this.isEditingName = false;
}
 saveAbout() {
    this.userdata.userRole = this.newAbout;
    this.isEditingAbout = false;
  }


}






// export class UserComponent implements OnInit {
//   uId!: string;
//   userdata!: Iuser;

// //  showOptions = false;
//     constructor(
//     private userservices: UsersService,
//     private routes: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.uId = this.routes.snapshot.params['userId'];
//     this.userdata = this.userservices.getUserData(this.uId);
//     console.log(this.userdata);
//   }

//    toggleOptions() {
//     // this.showOptions = !this.showOptions;
//   }

  
// }








