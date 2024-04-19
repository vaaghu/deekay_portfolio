import Image from "next/image";
import person from "../assets/person.png";
import { initialSectionStyle } from "../assets/styles";

export const InitialSection = () => {
  return (
    <section className={initialSectionStyle.initialSection}>
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
