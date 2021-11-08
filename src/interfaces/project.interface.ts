export interface IProject {
  _id: string;
  name: string;
  alias: string;
  path: string;
  url: string;
  imageSmall: string;
  image: string;
  technologies: string[];
  description: string;
  message?: string;
}
