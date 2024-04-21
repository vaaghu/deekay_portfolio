import { StaticImageData } from "next/image";

import illustration_desktop from "./desktop/illustration.png";
import web_design_desktop from "./desktop/web_design.png";
import brand_design_desktop from "./desktop/brand_design.png";
import motion_design_desktop from "./desktop/motion_design.png";
import photography_desktop from "./desktop/photography.png";
import video_production_desktop from "./desktop/video_production.png";

export const desktopView: { [key: string]: StaticImageData } = {
  illustration: illustration_desktop,
  web_design: web_design_desktop,
  brand_design: brand_design_desktop,
  motion_design: motion_design_desktop,
  photography: photography_desktop,
  video_production: video_production_desktop,
};

import illustration_mobile from "./mobile/illustration.png";
import web_design_mobile from "./mobile/web_design.png";
import brand_design_mobile from "./mobile/brand_design.png";
import motion_design_mobile from "./mobile/motion_design.png";
import photography_mobile from "./mobile/photography.png";
import video_production_mobile from "./mobile/video_production.png";

export const mobileView: { [key: string]: StaticImageData } = {
  illustration: illustration_mobile,
  web_design: web_design_mobile,
  brand_design: brand_design_mobile,
  motion_design: motion_design_mobile,
  photography: photography_mobile,
  video_production: video_production_mobile,
};
