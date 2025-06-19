import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userArr: Array<Iuser> = [
 {
  username: "Ravi Niturkar",
  userId: "101",
  userRole: `"Success demands singleness of purpose. You need to be doing fewer things for more effect instead of doing more things with side effects."`,
  avatar: "./assets/images/Ravi Niturkar.jpg",
  location: "Delhi, India",
  experience: "5+ years in teaching literature and grammar",
  phone:'+91 97308 39873',
  skills: ["Grammar", "Literature", "Communication", "Classroom Management"]
},

    {
  username: "Faisal Shaikh",
  userId: "102",
  userRole: "Lab Technician & Owner of Sahara Laboratory",
  avatar: "./assets/images/WhatsApp Image 2025-06-12 at 18.22.44_23e3a7c9.jpg",
  location: "Pune, India",
  experience: "2+ years experience in Angular & JavaScript",
  phone:'+91 93078 10197',
  skills: ["Angular", "TypeScript", "HTML", "CSS", "Git", "Responsive Design"]
},

  {
    username: "Aishwarya K",
    userId: "103",
    userRole: "UI/UX Designer",
    avatar: "assets/images/Aishwarya.jpg",
    location: "Bangalore, India",
    experience: "3+ years in UX/UI design",
    phone:'+91 77670 64030',
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    username: "Rahul Niturkar",
    userId: "104",
    userRole: `हमारे "आदर्श" बदलते हैं तो हमारे "विचार" बदलते हैं। "विचार" बदलते हैं तो "सोचने का तरीका" बदल जाता है।`,
    avatar: "assets/images/Rahul Niturkar",
    location: "Hyderabad, India",
    experience: "4+ years in Data Analysis",
     phone:'+91 73879 21602',
    skills: ["Python", "SQL", "Power BI", "Excel"]
  },


  {
    username: "Rohan",
    userId: "105",
    userRole: "Let me introduce..",
    avatar: "./assets/images/Rohan",
    location: "Delhi, India",
    experience: "6+ years in Project Management",
    phone:"+91 83084 40223",
    skills: ["Agile", "Scrum", "Jira", "Team Leadership"]
  },

{
  username: "Drx. Kamran Khan",
  userId: "106",
  userRole: "I AM NOT ALONE ALLAH ALWAYS WITH ME.☝️",
  avatar: "./assets/images/WhatsApp Image 2025-06-13 at 21.25.44_e1995398.jpg",
  location: "Latur, India",
  experience: "Currently pursuing B.Pharm, Final Year",
   phone:'+91 90219 52196',
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
  username: "BT19CIV097 Aslam Saudagar",
  userId: "109",
  userRole: "",
  avatar: "assets/images/Aslam Saudagar", // Replace with real image URL if available
  location: "अज़ीजा हॉस्पिटल, खादरी फंक्शन हॉल समोर, उदगीर",
  phone: "+91 95611 93088" ,
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
