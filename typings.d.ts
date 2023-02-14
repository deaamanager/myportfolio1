interface SanityBody {
    _createdAt: String;
    _id: String;
    _rev: String;
    _updatedAt: String;
};

interface Image {
  _type: "image";
  asset: {
     _ref: string;
     _type: "reference";
  };
};
 
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    adress: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;

};

export interface Technology extends SanityBody {
    _type: "technology";
    image: Image;
    progress: number;
    title: string;
};

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
    
};
export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    title: string;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
};

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentLyWorkingHere: boolean;
    jobTittle: string;
    points: string[];
    technologies: Technology[];
};
export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
    
};