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
  const params = useParams<{ tag: string }>();
  const [info, setInfo] = useState<worksDataDto>();

  const router = useRouter();
  useEffect(() => {
    console.log(params, router, window.history);
    console.log(window.history.state);

    if (params.tag) {
      if (!(params.tag in worksData)) {
        console.log("unintended path");
        router.push("/");
      }
      setInfo(worksData[params.tag]);
    }
  }, [params, router]);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  console.log();
  return (
    <section className={mainStyle.mainSection}>
      <h2 className={mainStyle.title}>
        {params.tag}
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
            return (
              <div
                key={index}
                className={mainStyle.cube}
                onClick={() => {
                  if (element.link) openLink(element.link);
                }}>
                {element.is_comic && (
                  <Image
                    src={icons.crousel}
                    alt="crousel"
                    className={mainStyle.crouselIcon}
                  />
                )}
                {element.link ? (
                  <Image
                    className={mainStyle.cubeImg}
                    src={cubeImages["weird_zebra"]}
                    alt="img"
                  />
                ) : (
                  <AntdImage
                    id={"#" + mainStyle.cubeImg}
                    src={cubeImages["weird_zebra"].src}
                    alt="img"
                  />
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
