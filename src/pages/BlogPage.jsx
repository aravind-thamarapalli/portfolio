import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook
import { IoIosArrowUp } from "react-icons/io"; // Icon for the button

const BlogPage = () => {
  const navigate = useNavigate();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="blog-page-container">
        {/* BACK BUTTON */}
        <div className="blog-page-back-button" onClick={() => navigate('/blog')}>
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

        {/* BANNER IMAGE */}
        <div className="blog-page-banner">
        <img
          src="../assets/blog1.svg"
          alt="Blog Banner"
        />
        </div>

        {/* TL;DR */}
        <div className="blog-page-tldr">
          <p>
            Building apps is just half the game. Keeping them alive, fast, and delightful? 
            That’s the real championship. Monitoring transforms a good developer into a guardian of experiences.
          </p>
        </div>

        {/* BLOG CONTENT */}
        <div className="blog-page-content">
          {/* Introduction */}
          <p className="blog-page-intro">
            <strong>Introduction:</strong> Coding is Just the Beginning
          </p>
          <p className="blog-page-paragraph">
            Developing applications is one thing, but ensuring their longevity and smooth functioning 
            is what sets a true developer apart. A great developer isn’t just someone who writes code 
            but also someone who monitors performance and anticipates issues.
          </p>

          {/* STORY BOX */}
          <div className="blog-page-story-box">
            <h3 className="blog-page-story-title">
              Real-World Example: Dev A vs Dev B
            </h3>
            <ul className="blog-page-story-list">
              <li>Dev A launched a shopping app, felt like a rockstar, and moved on.</li>
              <li>Dev B launched a similar app but set up monitoring tools — checking API speed, memory usage, user spikes.</li>
            </ul>
            <p className="blog-page-moral">
              Moral: Monitoring doesn't just prevent failure — it unlocks greatness.
            </p>
          </div>

          {/* FEATURED QUOTE */}
          <div className="blog-page-featured-quote">
            “In the battle of uptime vs downtime, monitoring is your secret weapon.”
          </div>

          {/* KEY METRICS */}
          <h3 className="blog-page-metrics-title">The Key Metrics Every Developer Should Monitor</h3>
          <ul className="blog-page-key-metrics">
            <li>API Latency</li>
            <li>Memory Usage</li>
            <li>Server Response Time</li>
            <li>User Load</li>
          </ul>

          {/* TOOLS */}
          <h3 className="blog-page-tools-title">Popular Tools for Monitoring Applications</h3>
          <ul className="blog-page-tools-list">
            <li>New Relic</li>
            <li>Datadog</li>
            <li>Prometheus</li>
            <li>Grafana</li>
          </ul>

          {/* CAREER */}
          <h3 className="blog-page-career-title">Monitoring as a Career-Boosting Skill</h3>
          <p className="blog-page-paragraph">
            Being proficient in monitoring tools can be a game changer for your career. 
            It helps you stand out as someone who ensures quality and performance, not just functionality.
          </p>
        </div>

        {/* TAGS */}
        <div className="blog-page-tags">
          <span className="blog-page-tag">Software Development</span>
          <span className="blog-page-tag">Application Monitoring</span>
          <span className="blog-page-tag">DevOps</span>
          <span className="blog-page-tag">Engineering Best Practices</span>
          <span className="blog-page-tag">Tech Career Advice</span>
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
          <button className={`go-to-top-button ${showTopButton ? 'show' : ''}`} onClick={scrollToTop}>
            <IoIosArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default BlogPage;
