import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import "./BlogPage.css";

const BlogPage = () => {
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
              Why Application Monitoring is the Real Superpower Developers Overlook
            </h1>
            <div className="blog-page-meta">
              <span>April 28, 2025</span> | <span>By Aravind</span>
            </div>
          </div>

          {/* ANIMATED BANNER IMAGE */}
          <motion.div
            className="blog-page-banner"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src="../assets/blog1.svg"
              alt="Application Monitoring Banner"
            />
          </motion.div>

          {/* TL;DR */}
          <div className="blog-page-tldr">
            <p>
              Building apps is just half the game. Keeping them alive, fast, and delightful?
              That’s the real championship. Monitoring transforms a good developer into a guardian of experiences.
            </p>
          </div>

          {/* BLOG CONTENT */}
          <div className="blog-page-content">

            {/* INTRO */}
            <motion.p
              className="blog-page-intro"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52 }}
              viewport={{ once: true }}
            >
              <strong>Let’s be honest:</strong> Writing code gets all the glory — but what happens after “launch” is where reputations are truly forged.
            </motion.p>

            <motion.p
              className="blog-page-paragraph"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.08 }}
              viewport={{ once: true }}
            >
              Everyone loves to demo new features. But the very best developers? They’re the ones keeping apps smooth, resilient, and fast months down the line. The secret weapon that separates “builders” from “guardians” is one habit: relentless, insightful monitoring.
            </motion.p>

            {/* STORY BOX */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              viewport={{ once: true }}
            >
              <div className="blog-page-story-box">
                <h3 className="blog-page-story-title">
                  Real-World: When Monitoring Turns a Loss Into a Win
                </h3>
                <ul className="blog-page-story-list">
                  <li>
                    <b>Saturday night. Two app launches. Both go live and celebrate.</b>
                  </li>
                  <li>
                    <b>By Monday,</b> Dev A is scrambling to fix a surge-induced crash. Users are grumbling on social. Dev B sips their coffee: their monitoring dashboard caught the spike early and autoscaling already kicked in.
                  </li>
                </ul>
                <p className="blog-page-moral">
                  Monitoring means you get to be the hero before there’s a fire.
                </p>
              </div>
            </motion.div>

            {/* FEATURED QUOTE */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.09 }}
              viewport={{ once: true }}
            >
              <div className="blog-page-featured-quote">
                “Amateurs chase bugs. Pros anticipate them.”
              </div>
            </motion.div>

            {/* METRICS TABLE */}
            <h3 className="blog-page-metrics-title">The Metrics That Matter: Your Monitoring Checklist</h3>
            <motion.table
              className="blog-page-metrics-table"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.08 }}
              viewport={{ once: true }}
            >
              <tbody>
                <tr>
                  <th>API Latency</th>
                  <td>How fast does your system talk back? Slow responses mean frustrated users.</td>
                </tr>
                <tr>
                  <th>Memory Usage</th>
                  <td>Leaky code? Out-of-memory errors bring down even the slickest apps.</td>
                </tr>
                <tr>
                  <th>Server Response Time</th>
                  <td>Not just API calls – your overall server health is the heartbeat of the app.</td>
                </tr>
                <tr>
                  <th>User Load</th>
                  <td>Are you crashing under a crowd or scaling like a pro? Understand your breaking point before the crowd gets there.</td>
                </tr>
              </tbody>
            </motion.table>

            {/* TOOLS */}
            <h3 className="blog-page-tools-title">Battle-Tested Tools</h3>
            <motion.ul
              className="blog-page-tools-list"
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.49, delay: 0.09 }}
              viewport={{ once: true }}
            >
              <li>New Relic</li>
              <li>Datadog</li>
              <li>Prometheus + Grafana (open-source dream team)</li>
              <li>Sentry (for error tracking)</li>
            </motion.ul>

            {/* CAREER */}
            <h3 className="blog-page-career-title">Why This Actually Boosts Your Career</h3>
            <motion.p
              className="blog-page-paragraph"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.47, delay: 0.09 }}
              viewport={{ once: true }}
            >
              Hiring managers notice when you talk about monitoring, not just coding. Customers notice when your product is always up. And you? You’ll sleep better — knowing you prevent fires instead of fighting them. Monitoring isn’t just ops. It’s your mark of care and craft.
            </motion.p>
          </div>

          {/* FOOTER */}
          <div className="blog-page-footer">
            <p>Blogs Designed by Aravind 🚀</p>
            <p>
              Contact: <a href="mailto:tjsaravind77@gmail.com" style={{ color: "#00d9d9", fontFamily: 'DM Sans' }}>
                tjsaravind77@gmail.com
              </a> | Follow us on{" "}
              <a href="https://linkedin.com/in/aravind-tham" style={{ color: "#00d9d9" }} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a> 🌟
            </p>
          </div>

          {/* GO TO TOP BUTTON */}
          {showTopButton && (
            <button
              className={`go-to-top-button ${showTopButton ? 'show' : ''}`}
              onClick={scrollToTop}
              aria-label="Go to top"
            >
              <IoIosArrowUp />
            </button>
          )}
        </div>
      </PageWrapper>
    </>
  );
};

export default BlogPage;
