import React from "react";
import SectionDivider from "../SectionDivider";

const AboutSection: React.FC = () => (
  <div>

    <section id="about" className="about section">
      <div className="about-container">
        <div className="section-title fade-in">
          <h2>About Me</h2>
        </div>
        <div className="about-content fade-in">
          <div className="about-text">
            <p>
              I&apos;m a passionate full-stack developer who transforms ideas into
              elegant, scalable applications. I thrive on solving complex
              problems with clean, efficient code and creating seamless digital
              experiences that make a real impact.
            </p>
            <p>
              With expertise spanning React TSX, React Native, Flutter, Node.js,
              Express, MongoDB, and Rust, I bring your vision to life through
              cutting-edge technologies. From concept to deployment, I&apos;m your
              partner in digital excellence.
            </p>
            <p>
              My approach combines technical mastery with creative
              problem-solving, ensuring that every project not only meets but
              exceeds expectations. I believe in building relationships as much
              as I build applications.
            </p>
          </div>
          <div
            className="about-image"
            aria-label="Professional full-stack developer working in a modern office environment"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3cae41d6-6728-4efe-b96d-921bababa642.png"
              alt="Professional full-stack developer working in a modern office environment with a laptop and multiple monitors displaying code"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <SectionDivider/>
  </div>
);

export default AboutSection;
