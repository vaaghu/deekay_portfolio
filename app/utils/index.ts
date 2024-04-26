export { default as navIconData } from "./navIcon.json";
import { default as works } from "./works.json";
export type worksDataDto = {
  name: string;
  image: string;
  link: string;
  works: {
    title: string;
    tools: string[];
    image_name: string;
    image_link_id?: string;
    is_comic: boolean;
    link?: string | boolean;
  }[];
};
export const worksData: { [key: string]: worksDataDto } = works;

export * as Constants from "./constants";
