import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
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
    <PageWrapper>
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
        <motion.div
          className="blog-page-banner"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <img src="../assets/blog2.svg" alt="AI Agents Banner" />
        </motion.div>

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
          <motion.p
            className="blog-page-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52 }}
            viewport={{ once: true }}
          >
            <strong>Step aside, ordinary AI. The age of agents has arrived.</strong>
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.07 }}
            viewport={{ once: true }}
          >
            There was a time when AI meant chatbots and recommendation engines. But now, software is shifting: the most meaningful work isn’t done by brittle scripts—it’s flowing through intelligent <b>agents</b> that operate with autonomy, memory, and surprising creativity.
          </motion.p>

          {/* STORY BOX */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, delay: 0.07 }}
            viewport={{ once: true }}
          >
            <div className="blog-page-story-box">
              <h3 className="blog-page-story-title">Meet Ava, Your Digital Teammate</h3>
              <ul className="blog-page-story-list">
                <li>
                  Tired of prepping for job interviews? Ava’s got you. She’ll scan your resume and job descriptions in seconds, spot skills gaps, suggest rewrites, and even run a mock interview using GPT.
                </li>
                <li>
                  The best part? She does all this unprompted the moment a new interview hits your calendar.
                </li>
              </ul>
              <p className="blog-page-moral">
                The difference: Ava doesn’t just respond—she acts. You don’t “use her,” you <b>collaborate</b> with her.
              </p>
            </div>
          </motion.div>

          {/* FEATURED QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.11 }}
            viewport={{ once: true }}
          >
            <div className="blog-page-featured-quote">
              “Working with agents feels like having a creative, tireless digital teammate—always adapting, always learning.”
            </div>
          </motion.div>

          {/* TYPES OF AGENTS: TABLE */}
          <h3 className="blog-page-metrics-title">
            The Types of AI Agents That Power This Revolution
          </h3>
          <motion.table
            className="blog-page-metrics-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.07 }}
            viewport={{ once: true }}
          >
            <tbody>
              <tr>
                <th>Simple Agents</th>
                <td>Follow preset rules. Great for routine tasks, but not for surprises.</td>
              </tr>
              <tr>
                <th>Reactive Agents</th>
                <td>Operate in the present, reacting instantly to inputs—think Roomba, minus memory.</td>
              </tr>
              <tr>
                <th>Goal-Based Agents</th>
                <td>Don’t just react—they plan. Every move serves a larger objective.</td>
              </tr>
              <tr>
                <th>Utility-Based Agents</th>
                <td>Choose actions that maximize benefit, weighing short-term wins against long-term payoffs.</td>
              </tr>
              <tr>
                <th>Learning Agents</th>
                <td>Adapt and improve over time, adjusting automatically as they encounter new problems.</td>
              </tr>
            </tbody>
          </motion.table>

          {/* TOOLS */}
          <h3 className="blog-page-tools-title">
            Build Your Own: Essential AI Agent Libraries
          </h3>
          <motion.ul
            className="blog-page-tools-list"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.49, delay: 0.09 }}
            viewport={{ once: true }}
          >
            <li>LangChain</li>
            <li>Auto-GPT</li>
            <li>ReAct Framework</li>
            <li>CrewAI</li>
          </motion.ul>

          {/* CAREER ANGLE */}
          <h3 className="blog-page-career-title">
            Why Agentic Thinking Makes Devs Stand Out
          </h3>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.43, delay: 0.08 }}
            viewport={{ once: true }}
          >
            In a world where “automation” is everywhere, the devs who master agents are the ones who bridge code and impact. You’ll design workflows, orchestrate goals—and find yourself at the heart of tomorrow’s software revolutions. Being agent-fluent is becoming table stakes for future architects.
          </motion.p>
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
            aria-label="Go to top"
          >
            <IoIosArrowUp />
          </button>
        )}
      </div>
    </PageWrapper>
  );
};

export default BlogPage2;
