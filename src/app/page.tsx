import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";

const About = dynamic(() =>
  import("@/components/sections/about").then((m) => ({ default: m.About }))
);
const Gramodaya = dynamic(() =>
  import("@/components/sections/gramodaya").then((m) => ({ default: m.Gramodaya }))
);
const OtherProjects = dynamic(() =>
  import("@/components/sections/other-projects").then((m) => ({
    default: m.OtherProjects,
  }))
);
const Services = dynamic(() =>
  import("@/components/sections/services").then((m) => ({ default: m.Services }))
);
const Education = dynamic(() =>
  import("@/components/sections/education").then((m) => ({ default: m.Education }))
);
const Skills = dynamic(() =>
  import("@/components/sections/skills").then((m) => ({ default: m.Skills }))
);
const WhyWorkWithMe = dynamic(() =>
  import("@/components/sections/why-work-with-me").then((m) => ({
    default: m.WhyWorkWithMe,
  }))
);
const Achievements = dynamic(() =>
  import("@/components/sections/achievements").then((m) => ({
    default: m.Achievements,
  }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const CallToAction = dynamic(() =>
  import("@/components/sections/call-to-action").then((m) => ({
    default: m.CallToAction,
  }))
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gramodaya />
        <OtherProjects />
        <Services />
        <Education />
        <Skills />
        <WhyWorkWithMe />
        <Achievements />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
