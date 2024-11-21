import { About } from "@/components/homepage/about";
import { Benefits } from "@/components/homepage/benefits";
import { CTA } from "@/components/homepage/cta";
import { Hero } from "@/components/homepage/hero";
import { More } from "@/components/homepage/more";

export default function Home() {
  return (
    <section className="">
      <section className="px-6 md:px-12 lg:px-16">
        <Hero />
        <Benefits />
      </section>
      <About />
      <section className="px-6 md:px-12 lg:px-16">
        <CTA />
        <More />
      </section>
    </section>
  );
}
