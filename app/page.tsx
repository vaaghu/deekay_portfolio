import { InitialSection, WorkSection } from "./components";
import { indexStyle } from "./assets/styles";
import { worksData } from "./utils";

export default function Home() {
  return (
    <section className={indexStyle.mainSection}>
      <InitialSection />
      {worksData.map((work, index) => (
        <WorkSection key={index} name={work.name} link={work.link} />
      ))}
    </section>
  );
}
