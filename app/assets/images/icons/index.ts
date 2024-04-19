export { default as menuIcon } from "./menu.svg";
import { StaticImageData } from "next/image";

//nav icons
import mailIcon from "./mail.svg";
import callIcon from "./call.svg";
import instagramIcon from "./instagram.svg";
import linkedinIcon from "./linkedin.svg";
import youtubeIcon from "./youtube.svg";

export const navIcons: { [key: string]: StaticImageData } = {
  mail: mailIcon,
  call: callIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
  youtube: youtubeIcon,
};
