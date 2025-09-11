"use client";

import FallbackImage from "../FallbackImage";
import SectionDivider from "../SectionDivider";

export default function ProjectSection() {
  return (
    <div>
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-title fade-in">
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio-grid">
          {/* Project 1 */}
          <div className="project-card fade-in">
            <div className="project-image">
              <FallbackImage
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b58aef0-d4ae-4322-a45f-7560f637da83.png"
                fallbackSrc="/image/My-logo.avif"
                alt="Modern e-commerce platform dashboard showing analytics charts and order management interface"
                width={600}
                height={400}
              />
              <div className="project-overlay">
                <h3>NextGen E-Commerce Platform</h3>
                <a href="#" className="overlay-link">
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>NextGen E-Commerce Platform</h3>
              <p>
                A scalable e-commerce solution built with React TypeScript and
                Node.js, featuring real-time inventory management and
                AI-powered recommendations.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">React TSX</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Redis</span>
              </div>
              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card fade-in">
            <div className="project-image">
              <FallbackImage
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe1c0b15-e684-44fa-b86a-dbc87f9c89ef.png"
                fallbackSrc="/image/My-logo.avif"
                alt="Fitness mobile app interface showing workout tracking, progress charts, and nutrition logging features"
                width={600}
                height={400}
              />
              <div className="project-overlay">
                <h3>FitTrack Mobile App</h3>
                <a href="#" className="overlay-link">
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>FitTrack Mobile App</h3>
              <p>
                Cross-platform fitness tracking application with workout
                planning, progress analytics, and social features built with
                React Native.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Redux</span>
                <span className="tech-tag">Charts.js</span>
              </div>
              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card fade-in">
            <div className="project-image">
              <FallbackImage
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d991428f-80e7-4107-a818-d177cb2d61fc.png"
                fallbackSrc="/image/My-logo.avif"
                alt="High-performance backend system architecture diagram with Rust modules and WebAssembly integration"
                width={600}
                height={400}
              />
              <div className="project-overlay">
                <h3>Rust Performance Engine</h3>
                <a href="#" className="overlay-link">
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>Rust Performance Engine</h3>
              <p>
                High-performance backend engine for real-time data processing,
                built with Rust and WebAssembly for maximum efficiency and
                security.
              </p>
              <div className="tech-stack">
                <span className="tech-tag">Rust</span>
                <span className="tech-tag">WebAssembly</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Docker</span>
              </div>
              <a href="#" className="project-link">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SectionDivider/>
    </div>
  );
}
