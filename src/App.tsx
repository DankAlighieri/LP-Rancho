import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { History } from "./sections/History";
import { FieldCommitment } from "./sections/FieldCommitment";
import { Products } from "./sections/Products";
import { Process } from "./sections/Process";
import { Capacity } from "./sections/Capacity";
import { Certifications } from "./sections/Certifications";
import { Markets } from "./sections/Markets";
import { Location } from "./sections/Location";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <History />
        <FieldCommitment />
        <Products />
        <Process />
        <Capacity />
        <Certifications />
        <Markets />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
