import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "./BlogPage.css";

const BlogPage3 = () => {
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
            Agentic Backends: No-Code? More Like No-Human!
          </h1>
          <div className="blog-page-meta">
            <span>July 20, 2025</span> | <span>By Aravind</span>
          </div>
        </div>

        {/* BANNER IMAGE */}
        <motion.div
          className="blog-page-banner"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.11 }}
        >
          <img src="../assets/blog3.svg" alt="Agentic Backend Banner" />
        </motion.div>

        {/* TL;DR */}
        <div className="blog-page-tldr">
          <p>
            The days of toiling over REST routes and database configs are ending. A new breed of agent-powered backends promise to handle the plumbing, the wiring—and the boring—leaving humans to just describe what needs building. We’re not in “no code” territory anymore; we’re in “just ask nicely.”
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
              INTRODUCTION: Remember when “no-code” platforms felt like using a vending machine for software?
            </strong>
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46, delay: 0.09 }}
            viewport={{ once: true }}
          >
            Pick your pieces, press a button, and out pops a passable app—if you’re OK with constraints, templates, and always being two features away from what you really wanted. The magic waned the moment you needed to color outside the lines.
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, y: 7 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.41, delay: 0.13 }}
            viewport={{ once: true }}
          >
            But something big is happening now. AI isn’t just generating boilerplate—it's starting to <em>think</em> about your app’s overall ambitions. Suddenly, backends aren’t hand-coded or even drag-and-dropped; they’re <b>delegated</b>.
          </motion.p>

          {/* STORY BOX */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.14 }}
            viewport={{ once: true }}
          >
            <div className="blog-page-story-box">
              <h3 className="blog-page-story-title">A Day in the Life: Meet Zeus, Your Backend Concierge</h3>
              <ul className="blog-page-story-list">
                <li>
                  <b>You:</b> “Hey Zeus, can you whip up an API for events, users, and registrations? PostgreSQL for the database.”
                </li>
                <li>
                  <b>Zeus (the agent):</b> “On it.” — Schema, tables, CRUD routes, auth, docs, and a live link to Render, waiting in your inbox.
                </li>
              </ul>
              <p className="blog-page-moral">
                For the first time, you’re not “using a tool.” You’re having a conversation.
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
              “Backend developer” won’t mean “code mechanic.” It’ll mean, “system composer.”
            </div>
          </motion.div>

          <hr className="blog-section-divider" />

          {/* METRICS (TABLE) */}
          <h3 className="blog-page-metrics-title">
            What’s Actually Different About Agents?
          </h3>
          <motion.table
            className="blog-page-metrics-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.54, delay: 0.11 }}
            viewport={{ once: true }}
          >
            <tbody>
              <tr>
                <th>They remember</th>
                <td>Tell them your style once, and your future APIs just “fit” you.</td>
              </tr>
              <tr>
                <th>They improvise</th>
                <td>Don’t know the right DB settings? Just ask—the agent will explain, suggest, and pick defaults if you’re unsure.</td>
              </tr>
              <tr>
                <th>They coordinate</th>
                <td>Auth? Docs? Schema migration? Imagine a backstage crew, not a solo act.</td>
              </tr>
              <tr>
                <th>They evolve</th>
                <td>Traffic spike? A smart agent detects, scales, and learns for next time.</td>
              </tr>
            </tbody>
          </motion.table>

          {/* TOOLS */}
          <h3 className="blog-page-tools-title">The New Toolbox</h3>
          <motion.ul
            className="blog-page-tools-list"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.47, delay: 0.09 }}
            viewport={{ once: true }}
          >
            <li>LangGraph</li>
            <li>CrewAI</li>
            <li>OpenDevin</li>
            <li>MetaGPT</li>
            <li>Supabase</li>
          </motion.ul>

          {/* CAREER */}
          <h3 className="blog-page-career-title">
            A Glimpse Down the Rabbit Hole—Your Career
          </h3>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.43, delay: 0.09 }}
            viewport={{ once: true }}
          >
            It used to be enough to master a stack, crank out endpoints, and debug SQL. Tomorrow’s elite? They’ll be fluent in English, systems design, and—yes—prompting AI agents. The biggest lever won’t be knowing keywords… it’ll be knowing competitors, contexts, and how to turn an ambiguous business pitch into a live backend in hours.
          </motion.p>
          <motion.p
            className="blog-page-paragraph"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.42, delay: 0.1 }}
            viewport={{ once: true }}
          >
            If you’ve ever wished you could sketch a system on a napkin and watch it become real, that future is peeking over the horizon. Get ready to trade your wrench for a conductor’s baton.
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
            The days of “backend as manual labor” are numbered. In their place: backends on tap, powered by intent, orchestrated by agentic intelligence. It’s not about writing less code—it’s about unleashing bigger ideas.
          </p>
        </motion.div>

        {/* TAGS */}
        <div className="blog-page-tags">
          <span className="blog-page-tag">Agentic Backends</span>
          <span className="blog-page-tag">AI</span>
          <span className="blog-page-tag">Future of Dev</span>
          <span className="blog-page-tag">Automation</span>
          <span className="blog-page-tag">Engineering Philosophy</span>
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

export default BlogPage3;
