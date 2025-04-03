// Additional types that may be needed beyond what's in the schema
export interface NavItem {
  title: string;
  href: string;
  isActive: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
