"use client";
import Image from "next/image";
import { desktopView, mobileView } from "../assets/images";
import { workComponentStyle } from "../assets/styles";
import { arrowIcon } from "../assets/images/icons";

import { useRouter } from "next/navigation";

export const WorkSection: React.FC<{
  isMobile: boolean;
  name: string;
  link: string;
  image: string;
}> = ({ isMobile, name, link, image }) => {
  // console.log(link);
  const router = useRouter();

  return (
    <div className={workComponentStyle.workSection} id={link}>
      <h2 className={workComponentStyle.title}>{name}</h2>
      <Image
        className={workComponentStyle.image}
        src={isMobile ? mobileView[image] : desktopView[image]}
        alt="work"
      />
      <Image
        className={workComponentStyle.arrowIcon}
        src={arrowIcon}
        alt="arrow"
        onClick={() => {
          router.push(`/${link}`);
        }}
      />
    </div>
  );
};
export default WorkSection;
