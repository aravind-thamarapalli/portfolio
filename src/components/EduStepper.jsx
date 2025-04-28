import React, { useState } from "react";
import { SiCodechef, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import CountUp from "./CountUp";
import { GoArrowUpRight } from "react-icons/go";
import "./EduStepper.css"; // Import CSS for styling

const codingProfiles = [
  {
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/aravind-thamarapalli",
    counter_1: 131, // Contributions
    counter_2: 16, // Repositories
  },
  {
    title: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/aravind0725",
    counter_1: 126, // Problems solved
    counter_2: 1604, // Rating/Rank
  },
  {
    title: "CodeChef",
    icon: <SiCodechef />,
    link: "https://www.codechef.com/users/aravind_tham",
    counter_1: 28, // Problems solved
    counter_2: 1540, // Rating
  },
];

const EduStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="stepper-container">
      {/* Stepper UI */}
      <div className="stepper">
        {codingProfiles.map((profile, index) => (
          <div key={index} className="step" onClick={() => setCurrentStep(index)}>
            {/* Platform Icon */}
            <div className={`circle ${currentStep === index ? "active" : ""}`}>
              {profile.icon}
            </div>
            <p className={`step-title ${currentStep === index ? "selected" : ""}`}>
              {profile.title}
            </p>
          </div>
        ))}
        <div className="line"></div>
      </div>

      {/* Display Selected Coding Profile Details */}
      <div className="details">
        <div className="card">
          {codingProfiles[currentStep].title !== "GitHub" ? (
            <div className="card-details">
              <div>
              <p><strong>Problems Solved:</strong></p>
              <CountUp from={0} to={codingProfiles[currentStep].counter_1} duration={1} className="count-up-text" />
              </div>
              <div>
              <p><strong>Max Rating</strong></p>
              <CountUp from={0} to={codingProfiles[currentStep].counter_2} duration={1} className="count-up-text" />
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-details">
                <div>
                <p><strong>Total Contributions</strong></p>
                <CountUp from={0} to={codingProfiles[currentStep].counter_1} duration={1} className="count-up-text" />
                </div>
                <div>
                <p><strong>Repositories</strong></p>
                <CountUp from={0} to={codingProfiles[currentStep].counter_2} duration={1} className="count-up-text" />
                </div>
              </div>
            </div>
          )}
          <p>

            <a href={codingProfiles[currentStep].link} target="_blank" rel="noopener noreferrer">
              Visit Profile <GoArrowUpRight />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduStepper;
