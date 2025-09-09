import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "./BlogPage.css";

const BlogPage4 = () => {
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
        <div className="blog-page-back-button" onClick={() => navigate("/blog")}>
          Blogs
        </div>

        {/* TITLE */}
        <div className="blog-page-title-div">
          <h1 className="blog-page-title">
            MCP in Gen AI: The New Language Between Models and Tools
          </h1>
          <div className="blog-page-meta">
            <span>September 9, 2025</span> | <span>By Aravind</span>
          </div>
        </div>

        {/* BANNER IMAGE */}
        <motion.div
          className="blog-page-banner"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.11 }}
        >
          <img src="../assets/blog4.svg" alt="MCP Banner" />
        </motion.div>

        {/* TL;DR */}
        <div className="blog-page-tldr">
          <p>
            MCP (Model Context Protocol) is like giving AI models a <strong>common language</strong> to interact with APIs, tools, and apps. 
            No more brittle integrations—models can ask, fetch, and deliver reliably. Think of it as <em>plug-and-play intelligence</em>.
          </p>
        </div>

        <hr className="blog-section-divider" />

        {/* BLOG CONTENT */}
        <div className="blog-page-content">

          {/* INTRODUCTION */}
          <motion.p
            className="blog-page-intro"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56 }}
            viewport={{ once: true }}
          >
            <strong>
              INTRODUCTION: AI models are smart, but without a shared protocol, talking to tools feels like a foreign language.
            </strong>
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46, delay: 0.09 }}
            viewport={{ once: true }}
          >
            MCP solves this by acting as a <em>translator</em>. Models and tools can now understand each other through a standardized protocol, making workflows smooth and reliable.
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, y: 7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, delay: 0.13 }}
            viewport={{ once: true }}
          >
            Think of it as teaching AI to politely ask for help instead of guessing it’s collaboration, not chaos.
          </motion.p>

          {/* STORY BOX */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.14 }}
            viewport={{ once: true }}
          >
            <div className="blog-page-story-box">
              <h3 className="blog-page-story-title">A Day in the Life: MCP in Action</h3>
              <ul className="blog-page-story-list">
                <li>
                  <b>You:</b> “Hey AI, summarize last month’s sales.”
                </li>
                <li>
                  <b>AI (without MCP):</b> “I… don’t know how to access the database.”
                </li>
                <li>
                  <b>AI (with MCP):</b> “Got it! I’ll call the sales API, fetch the data, and prepare the summary.”
                </li>
              </ul>
              <p className="blog-page-moral">
                MCP turns guessing into collaboration AI actually understands how to get things done.
              </p>
            </div>
          </motion.div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="blog-page-featured-quote">
              “If Gen AI is the brain, MCP is the nervous system connecting it to the world.”
            </div>
          </motion.div>

          <hr className="blog-section-divider" />

          {/* METRICS TABLE */}
          <h3 className="blog-page-metrics-title">Why MCP Matters</h3>
          <motion.table
            className="blog-page-metrics-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.54, delay: 0.11 }}
            viewport={{ once: true }}
          >
            <tbody>
              <tr>
                <th>Without MCP</th>
                <td>Every tool needs a custom hack</td>
              </tr>
              <tr>
                <th>With MCP</th>
                <td>Tools follow a standard protocol</td>
              </tr>
              <tr>
                <th>Without MCP</th>
                <td>Models struggle with updates</td>
              </tr>
              <tr>
                <th>With MCP</th>
                <td>Models adapt seamlessly</td>
              </tr>
            </tbody>
          </motion.table>

          {/* TOOLS */}
          <h3 className="blog-page-tools-title">Where MCP Can Help</h3>
          <motion.ul
            className="blog-page-tools-list"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.47, delay: 0.09 }}
            viewport={{ once: true }}
          >
            <li>Chatbots → real-time API access</li>
            <li>Productivity apps → calendar & scheduling integration</li>
            <li>Healthcare → secure data fetching</li>
            <li>Developers → standardizing tool connections</li>
          </motion.ul>

          {/* CAREER */}
          <h3 className="blog-page-career-title">Your Career Edge</h3>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.43, delay: 0.09 }}
            viewport={{ once: true }}
          >
            Almost nobody knows MCP yet. Learning it now is like knowing HTTP in the early web days future-proof and in demand.
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Master MCP today, and you’ll orchestrate AI agents better than anyone else tomorrow.
          </motion.p>
        </div>

        {/* EPILOGUE */}
        <motion.div
          className="blog-page-epilogue"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.54, delay: 0.06 }}
          viewport={{ once: true }}
        >
          <p>
            Gen AI’s next step isn’t just smarter models it’s models that <b>collaborate effectively</b>. MCP is the handshake protocol that makes it possible.
          </p>
        </motion.div>

        {/* TAGS */}
        <div className="blog-page-tags">
          <span className="blog-page-tag">MCP</span>
          <span className="blog-page-tag">AI Agents</span>
          <span className="blog-page-tag">Beginner Friendly</span>
          <span className="blog-page-tag">Future of Dev</span>
          <span className="blog-page-tag">Simplicity</span>
        </div>

        {/* FOOTER */}
        <div className="blog-page-footer">
          <p>Blogs Designed by Aravind 🚀</p>
          <p>
            Contact: <a href="mailto:tjsaravind77@gmail.com">tjsaravind77@gmail.com</a>
            {" | "} Follow us on{" "}
            <a
              href="https://linkedin.com/in/aravind-tham"
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

export default BlogPage4;
