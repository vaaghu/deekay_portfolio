import * as React from "react";
import { initialSectionStyle } from "../assets/styles";
import { menuIcon } from "../assets/images/icons";
import Image from "next/image";
import { worksData } from "../utils";

export const DropDown = () => {
  return (
    <div className={initialSectionStyle.navDropDown} title="drop down button">
      <div className={initialSectionStyle.navDropDownButton}>
        <Image src={menuIcon} alt="menu icon" />
        Home
      </div>
      <div className={initialSectionStyle.navDropDownMenu}>
        {Object.values(worksData).map((work, index) => {
          return (
            <button
              onClick={() => {
                let target = document.body.querySelector(`#${work.link}`);
                if (target)
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
              }}
              key={index}
              className={initialSectionStyle.navDropDownMenuLinks}>
              {work.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
