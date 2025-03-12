import React, { useState } from "react";
import "./EduStepper.css"; // Import CSS for styling

const educationData = [
  { title: "School", institution: "[Your School Name]", stream: "General", timeline: "[Start Year] - [End Year]" },
  { title: "Intermediate", institution: "[Your College Name]", stream: "[Your Stream]", timeline: "[Start Year] - [End Year]" },
  { title: "B.Tech", institution: "GVP College of Engineering (A)", stream: "[Your Specialization]", timeline: "[Start Year] - [End Year]" },
];

const EducationStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="stepper-container">
      {/* Stepper UI */}
      <div className="stepper">
        {educationData.map((edu, index) => (
          <div key={index} className="step" onClick={() => setCurrentStep(index)}>
            {/* Step Number */}
            <div className={`circle ${currentStep === index ? "active" : ""}`}>
              {index + 1}
            </div>
            <p className={`step-title ${currentStep === index ? "selected" : ""}`}>
              {edu.title}
            </p>
          </div>
        ))}
        {/* Stepper Line */}
        <div className="line"></div>
      </div>

      {/* Only Display Selected Education Details */}
      <div className="details">
        <div className="card">
          <h3>{educationData[currentStep].title}</h3>
          <p><strong>Institution:</strong> {educationData[currentStep].institution}</p>
          <p><strong>Stream:</strong> {educationData[currentStep].stream}</p>
          <p><strong>Timeline:</strong> {educationData[currentStep].timeline}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationStepper;
