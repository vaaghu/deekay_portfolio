"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { mainStyle } from "./styles";
import { useEffect, useState } from "react";
import { worksData, worksDataDto } from "../utils";
import { useParams } from "next/navigation";
import { icons } from "./images/icons";
import { cubeImages } from "./images";
import { Image as AntdImage } from "antd";

export default function Page() {
  const params = useParams<{ link: string }>();
  const [info, setInfo] = useState<worksDataDto>();

  const router = useRouter();
  useEffect(() => {
    if (params.link) {
      if (!(params.link in worksData)) {
        console.log("unintended path");
        router.push("/");
      }
      setInfo(worksData[params.link]);
    }
  }, [params, router]);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section className={mainStyle.mainSection}>
      <h2 className={mainStyle.title}>
        {info ? info.name : params.link}
        <Image
          className={mainStyle.copyright}
          src={icons.copyright}
          alt="copyright"
          width={25}
          height={25}
        />
      </h2>
      <p className={mainStyle.description}>
        All the works showcased below are the original creations of Deekay and
        are protected by copyright. <br />
        Please refrain from copying or reproducing them without permission.
      </p>
      <div className={mainStyle.gallery}>
        {info &&
          info.works.map((element, index) => {
            console.log(element.link ? true : false);
            return (
              <div
                key={index}
                className={mainStyle.cube}
                onClick={() => {
                  if (element.link) {
                    if (typeof element.link == "string") {
                      openLink(element.link);
                    }
                  }
                }}>
                {element.is_comic && (
                  <Image
                    src={icons.crousel}
                    alt="crousel"
                    className={mainStyle.crouselIcon}
                  />
                )}
                {element.image_name in cubeImages ? (
                  element.link ? (
                    <Image
                      className={mainStyle.cubeImg}
                      width={460}
                      height={650}
                      src={cubeImages[element.image_name]}
                      alt="img"
                    />
                  ) : (
                    <AntdImage
                      id={"#" + mainStyle.cubeImg}
                      width={460}
                      height={650}
                      src={
                        element.image_name in cubeImages
                          ? cubeImages[element.image_name].src
                          : ""
                      }
                      alt="img"
                      preview={{
                        src: element.image_link_id
                          ? `https://drive.google.com/thumbnail?id=${element.image_link_id}&sz=w500`
                          : cubeImages[element.image_name].src,
                      }}
                    />
                  )
                ) : (
                  <></>
                )}
                <div className={mainStyle.cubeInfo}>
                  <h4 className={mainStyle.cubeTitle}>{element.title}</h4>
                  <p className={mainStyle.softwareTag}>Tools</p>
                  <div className={mainStyle.iconsBar}>
                    {element.tools.map((tool, softwareIndex) => {
                      if (tool in icons)
                        return (
                          <Image
                            className={mainStyle.cubeIcons}
                            key={softwareIndex}
                            src={icons[tool]}
                            alt="icon"
                          />
                        );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
