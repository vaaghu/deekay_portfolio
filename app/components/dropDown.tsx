import * as React from "react";
import { initialSectionStyle } from "../assets/styles";
import { menuIcon } from "../assets/images/icons";
import Image from "next/image";
import { worksData } from "../utils";

export const DropDown = () => {
  return (
    <div className={initialSectionStyle.navDropDown}>
      <div className={initialSectionStyle.navDropDownButton}>
        <Image src={menuIcon} alt="menu icon" />
        Home
      </div>
      <div className={initialSectionStyle.navDropDownMenu}>
        {worksData.map((work, index) => {
          return <button key={index}>{work.name}</button>;
        })}
      </div>
    </div>
  );
};

export default DropDown;
