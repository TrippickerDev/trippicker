import { Hero } from "@/components/aboutpage/hero";
import { Info } from "@/components/aboutpage/info";
import { Rocket } from "@/components/aboutpage/rocket";
import { Service } from "@/components/aboutpage/services";

function AboutPage() {
  return (
    <section>
      <section className="px-6 md:px-12 lg:px-16">
        <Hero />
        <Info />
        <Service />
      </section>
      <Rocket />
    </section>
  );
}
export default AboutPage;
