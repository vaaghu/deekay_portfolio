import { initialSectionStyle } from "../assets/styles";
import { menuIcon } from "../assets/images/icons";
import Image from "next/image";
import { worksData } from "../utils";
import { useState } from "react";

export const DropDown = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className={initialSectionStyle.navDropDown} title="drop down button">
      <div
        className={initialSectionStyle.navDropDownButton}
        onClick={() => setIsMenuVisible(true)}>
        <Image src={menuIcon} alt="menu icon" />
        Home
      </div>
      <div
        className={initialSectionStyle.navDropDownMenu}
        style={{ display: isMenuVisible ? "flex" : "none" }}>
        {Object.values(worksData).map((work, index) => {
          return (
            <button
              onClick={() => {
                let target = document.body.querySelector(`#${work.link}`);
                if (target) {
                  setIsMenuVisible(false);
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
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
