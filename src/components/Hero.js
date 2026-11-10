import Container from "./Container.js";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <Container>
      <div
        className="mt-32 flex h-[305px] flex-row gap-16 max-[1160px]:h-auto max-[1060px]:flex-col max-[767px]:mt-16 max-[767px]:gap-8"
        data-reveal
        style={{ "--reveal-delay": "40ms" }}
      >
        <div className="flex flex-row items-center gap-4">
          <div className="h-full w-[35px] bg-orange max-[1060px]:hidden"></div>
          <h1 className="m-0 font-bold mb-[1.2rem] text-[11.75rem] leading-[0.825] text-orange max-[767px]:text-[7.5rem]">
            K2Y <br></br>LAB
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-fit items-center overflow-hidden rounded-full border border-black transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-black/2 hover:shadow-[0_10px_30px_rgba(26,28,35,0.08)]">
            <div className="flex items-center gap-2 border-r border-black px-4 py-2 text-black">
              <svg
                className="h-4 w-4 text-black"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>Australia</span>
            </div>
            <div className="px-4 py-2">
              <span>Digital Product Developer</span>
            </div>
          </div>
          <p>
            Hi there, I'm Kay. I am a multidisciplinary developer specializing
            in the end-to-end architecture of digital-physical products. My
            expertise bridges user-facing development, 3D graphics pipelines,
            and advanced product design to build high-performance, interactive
            systems. From digital applications to unique products, I build
            things that just make sense. My primary focus is on digital
            software, but my background across both physical and digital build
            cycles helps me create products that are structured, intuitive, and
            complete.
          </p>
          <div className="mt-4 flex flex-row justify-between gap-4">
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/kineshakay/"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-transparent text-black no-underline transition duration-220 ease-portfolio hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-bg hover:shadow-[0_12px_26px_rgba(26,28,35,0.16)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/aatarax-moth"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black bg-transparent text-black no-underline transition duration-220 ease-portfolio hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-bg hover:shadow-[0_12px_26px_rgba(26,28,35,0.16)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
              </a>
            </div>
            <a className="inline-block w-fit rounded-full bg-orange px-8 py-4 text-bg no-underline transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-orange-hover hover:shadow-[0_10px_30px_rgba(254,119,67,0.2)]" href="#projects">
              Scroll To Projects
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
