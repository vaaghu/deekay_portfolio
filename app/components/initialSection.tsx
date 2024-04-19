import Image from "next/image";
// import person from "../assets/images/person.png";
import person from "../assets/images/personMobile.png";
import { menuIcon, navIcons } from "../assets/images/icons";

import { initialSectionStyle } from "../assets/styles";
import { navIconData } from "../utils";
export const InitialSection = () => {
  return (
    <section className={initialSectionStyle.initialSection}>
      <nav className={initialSectionStyle.navBar}>
        <div className={initialSectionStyle.navDropDown}>
          {" "}
          <Image src={menuIcon} alt="menu icon" /> HOME
        </div>
        <div className={initialSectionStyle.navMid}></div>
        <div className={initialSectionStyle.navIconBox}>
          {navIconData.map((icon, index) => {
            return (
              <Image
                key={index}
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
        src={person}
        alt="person"
        width="150"
        height="300"
      />
      <div className={initialSectionStyle.textBox}>
        <h1 className={initialSectionStyle.personName}>Deekay</h1>
        <p className={initialSectionStyle.oneLiner}>Artist at large</p>
      </div>
    </section>
  );
};

export default InitialSection;
