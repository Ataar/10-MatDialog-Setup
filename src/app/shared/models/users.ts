export interface Iuser {
  username: string;
  userId: string;
  userRole: string;
  avatar: string; // Kept as string but will be empty in data
  email: string;
  phone: string;
  location: string;
  joinedDate: string;
  Since:string
  skills: string[];
  social: {
    linkedin: string;
    github: string;
  };
  roleLink?: string;
}