import { Hero } from "../components/Hero";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Tools } from "../components/Tools";
import { Skills } from "../components/Skills";

export function ResumePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Tools />
      <Skills />
    </>
  );
}
