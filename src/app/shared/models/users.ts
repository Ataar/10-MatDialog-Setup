// export interface Iuser {
//   username: string;
//   userId: string;
//   userRole: string;
//   avatar: string;
//   location?: string;
//   experience?: string;
//   skills?: string[];
//   phone?:string;
//   labName?:string;
//   openHours?:string;
//   about?:string
// }
export interface Iuser {
  username: string;
  userId: string;
  userRole: string;
  avatar: string;
  location: string;
  experience: string;
  skills: string[];
  phone?: string;
  labName?: string;
  openHours?: string;
  about?: string; // optional field
}
