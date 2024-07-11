import { TCategory } from "./types.category";

export interface TWebsite {
  _id: string;
  name: string;
  logo: string;
  url: string;
  category: TCategory;
  rounded: boolean;
}
