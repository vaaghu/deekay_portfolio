import Image from "next/image";
import { personImg, personMobileImg } from "../assets/images";
import { menuIcon, navIcons } from "../assets/images/icons";
import { initialSectionStyle } from "../assets/styles";
import { navIconData } from "../utils";
import { DropDown } from "../components";

export const InitialSection: React.FC<{ isMobile: boolean }> = ({
  isMobile = false,
}) => {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <section className={initialSectionStyle.initialSection}>
      <nav className={initialSectionStyle.navBar}>
        <DropDown />
        <div className={initialSectionStyle.navMid}></div>
        <div className={initialSectionStyle.navIconBox}>
          {navIconData.map((icon, index) => {
            return (
              <Image
                title={icon.name}
                key={index}
                onClick={() => openLink(icon.link)}
                src={navIcons[icon.img]}
                alt={`${icon.name} img`}
                width={50}
                height={50}
              />
            );
          })}
        </div>
      </nav>
      <Image
        className={initialSectionStyle.personImg}
        src={isMobile ? personMobileImg : personImg}
        alt="person"
      />
      <div className={initialSectionStyle.textBox}>
        <h1 className={initialSectionStyle.personName}>Deekay</h1>
        <p className={initialSectionStyle.oneLiner}>Artist at large</p>
      </div>
    </section>
  );
};

export default InitialSection;
