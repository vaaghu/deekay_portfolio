import Image from "next/image";
import { desktopView } from "../assets/images";
import { workComponentStyle } from "../assets/styles";
import { arrowIcon } from "../assets/images/icons";

export const WorkSection: React.FC<{ name: string; link: string }> = ({
  name,
  link,
}) => {
  console.log(link);
  return (
    <div className={workComponentStyle.workSection}>
      <h2 className={workComponentStyle.title}>{name}</h2>
      <Image
        className={workComponentStyle.image}
        src={desktopView["illustration"]}
        alt="work"
      />
      <Image
        className={workComponentStyle.arrowIcon}
        src={arrowIcon}
        alt="arrow"
      />
    </div>
  );
};
export default WorkSection;
