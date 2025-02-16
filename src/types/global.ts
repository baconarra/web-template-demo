import { Seo } from "./components/seo";
import { ImageData } from "./file-data";

export interface Global {
  siteName: string;
  favicon: ImageData;
  siteDescription: string;
  defaultSeo: Seo;
}
