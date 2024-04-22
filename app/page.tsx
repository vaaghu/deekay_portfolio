"use client";
import { InitialSection, WorkSection } from "./components";
import { indexStyle } from "./assets/styles";
import { worksData } from "./utils";
import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import { Constants } from "./utils";

export default function Home() {
  const sectionRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    if (sectionRef.current != null)
      console.log(
        sectionRef.current.offsetWidth <= Constants.mobileView,
        sectionRef.current.offsetWidth,
        Constants.mobileView
      );
    if (
      sectionRef.current &&
      sectionRef.current.offsetWidth <= Constants.mobileView
    ) {
      setIsMobile(true);
    }
  }, [sectionRef]);
  return (
    <section ref={sectionRef} className={indexStyle.mainSection}>
      <InitialSection isMobile={isMobile} />
      {Object.values(worksData).map((work, index) => (
        <WorkSection
          key={index}
          isMobile={isMobile}
          name={work.name}
          link={work.link}
          image={work.image}
        />
      ))}
    </section>
  );
}
