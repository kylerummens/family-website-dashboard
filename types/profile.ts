export interface Profile {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  avatar_url?: string;
  username: string;
  domain: string;
}

export interface Resume {
  user_id: string;
  created_at: string;
  about: string;
  summary: string;
  contact: ResumeContact;
  config: any;
  location: string;
  order: string[];
}

export interface ResumeContact {
  tel: string;
  email: string;
  social: ResumeContactSocial[];
}

export interface ResumeContactSocial {
  type: string;
  url: string;
}

export type ProfileWithResume = Profile & { resume: Resume };
