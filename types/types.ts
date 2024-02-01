export interface IProcess {
  title: string;
  steps: string[];
}
export interface IProject {
  title: string;
  description: string;
  image: string[];
  id: string;
  link?: string;
  linkLabel?: string;
}
export interface IProduct {
  title: string;
  description: string;
  image: string[];
  logo: string;
  id: string;
  link?: string;
  linkLabel?: string;
}
export interface ICareer {
  date: string;
  company: string;
  position: string;
}
export interface ICaseStudy {
  image: string;
  title: string;
}
