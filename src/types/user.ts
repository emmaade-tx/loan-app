interface UserProfile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar?: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  }
  
  interface Guarantor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  }
  
  interface Socials {
    facebook: string;
    instagram: string;
    twitter: string;
  }
  
  interface Education {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  }
  
  export interface User {
    createdAt: string;
    organizationName: string;
    username: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: UserProfile;
    guarantor: Guarantor;
    accountBalance: string;
    accountNumber: string;
    socials: Socials;
    education: Education;
    id: string;
    status?: string;
  }
  