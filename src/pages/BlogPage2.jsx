import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import "./BlogPage.css";

const BlogPage2 = () => {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="blog-page-container">
        {/* BACK BUTTON */}
        <div
          className="blog-page-back-button"
          onClick={() => navigate("/blog")}
        >
          Blogs
        </div>

        {/* TITLE */}
        <div className="blog-page-title-div">
          <h1 className="blog-page-title">
            Why AI Agents Are the Future of Smart Software
          </h1>
          <div className="blog-page-meta">
            <span>May 24, 2025</span> | <span>By Aravind</span>
          </div>
        </div>

        {/* BANNER IMAGE */}
        <div className="blog-page-banner">
          <img src="../assets/blog2.svg" alt="AI Agents Banner" />
        </div>

        {/* TL;DR */}
        <div className="blog-page-tldr">
          <p>
            AI agents aren’t your average bots—they’re autonomous, adaptive, and
            know how to hustle. From solving real-world tasks to optimizing
            workflows, they’re transforming how we build software.
          </p>
        </div>

        {/* BLOG CONTENT */}
        <div className="blog-page-content">
          {/* Introduction */}
          <p className="blog-page-intro">
            <strong>Introduction: Not Just AI, but AI with Purpose</strong>
          </p>
          <p className="blog-page-paragraph">
            We all know AI is powerful, but when you give it goals, memory, and
            autonomy—you get an AI Agent. These aren't just tools; they’re
            digital colleagues. Whether it's planning your day, automating a job
            hunt, or optimizing operations, AI agents are the bridge between
            automation and intelligence.
          </p>

          {/* STORY BOX */}
          <div className="blog-page-story-box">
            <h3 className="blog-page-story-title">
              Real-World Example: Meet Ava, the Interview Prep Assistant
            </h3>
            <ul className="blog-page-story-list">
              <li>Ava scans your job descriptions and your resume.</li>
              <li>
                She finds mismatches, suggests improvements, and even simulates
                mock interviews using GPT.
              </li>
            </ul>
            <p className="blog-page-moral">
              Moral: AI agents can go beyond helping—you can{" "}
              <strong>trust them to act</strong> on your behalf.
            </p>
          </div>

          {/* FEATURED QUOTE */}
          <div className="blog-page-featured-quote">
            "An AI agent isn’t just smart—it’s autonomous, adaptive, and always
            improving."
          </div>

          {/* TYPES OF AI AGENTS */}
          <h3 className="blog-page-metrics-title">
            Types of AI Agents Developers Should Know
          </h3>
          <ul
            className="blog-page-key-metrics"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              padding: "0",
              margin: "0",
              listStyle: "none",
              justifyContent: "flex-start",
            }}
          >
            <li>
              <strong>Simple Agents:</strong> Executes tasks based on predefined
              rules.
            </li>
            <li>
              <strong>Reactive Agents:</strong> Responds to stimuli (no memory).
            </li>
            <li>
              <strong>Goal-Based Agents:</strong> Takes action to reach specific
              objectives.
            </li>
            <li>
              <strong>Utility-Based Agents:</strong> Evaluates choices to
              maximize outcomes.
            </li>
            <li>
              <strong>Learning Agents:</strong> Improves with each task via
              feedback.
            </li>
          </ul>

          {/* TOOLS */}
          <h3 className="blog-page-tools-title">
            Top Libraries to Build Your Own Agent
          </h3>
          <ul className="blog-page-tools-list">
            <li>LangChain</li>
            <li>Auto-GPT</li>
            <li>ReAct Framework</li>
            <li>CrewAI</li>
          </ul>

          {/* CAREER */}
          <h3 className="blog-page-career-title">
            Career Angle: Why AI Agents Give You an Edge
          </h3>
          <p className="blog-page-paragraph">
            Mastering AI agents makes you more than just a dev—you become a
            solution architect. You'll gain skills in logic design, prompt
            engineering, and autonomous system development. Basically, you're
            shaping the future. No biggie 😎.
          </p>
        </div>

        {/* TAGS */}
        <div className="blog-page-tags">
          <span className="blog-page-tag">AI Agents</span>
          <span className="blog-page-tag">LangChain</span>
          <span className="blog-page-tag">Automation</span>
          <span className="blog-page-tag">AI Development</span>
          <span className="blog-page-tag">Emerging Tech</span>
        </div>

        {/* FOOTER */}
        <div className="blog-page-footer">
          <p>Blogs Designed by Aravind 🚀</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:tjsaravind77@gmail.com"
              style={{ color: "#00d9d9", fontFamily: "DM Sans" }}
            >
              tjsaravind77@gmail.com
            </a>{" "}
            | Follow us on{" "}
            <a
              href="https://linkedin.com/in/aravind-tham"
              style={{ color: "#00d9d9" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            🌟
          </p>
        </div>

        {/* GO TO TOP BUTTON */}
        {showTopButton && (
          <button
            className={`go-to-top-button ${showTopButton ? "show" : ""}`}
            onClick={scrollToTop}
          >
            <IoIosArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default BlogPage2;
