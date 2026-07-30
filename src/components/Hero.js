import "./Hero.css";
import Container from "./Container.js";
import "../index.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <Container>
      <div className="big-brand flex-row gap-4">
        <div className="vert-center flex-row">
          <div className="box"></div>
          <h1 className="big-heading">
            K2Y <br></br>LAB
          </h1>
        </div>
        <div className="flex-column">
          <div className="pill">
            <div className="pill-left">
              <svg
                className="location-icon"
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
            <div className="pill-right">
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
          <div className="flex-row space-between">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kineshakay/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/kiiy_lab/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://github.com/aatarax-moth"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
              </a>
            </div>
            <a className="button" href="#contact">
              Scroll To Projects
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
