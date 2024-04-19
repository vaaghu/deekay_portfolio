import Image from "next/image";
import { InitialSection } from "./components";
import { indexStyle } from "./assets/styles";
export default function Home() {
  return (
    <section className={indexStyle.mainSection}>
      <InitialSection />
    </section>
  );
}
