import React, { useState } from "react";
import "./EduStepper.css"; // Import CSS for styling

const educationData = [
  { title: "School", institution: "SHARON EM HIGH SCHOOL", stream: "SSC", timeline: "2020" },
  { title: "Intermediate", institution: "SRI CHAITANYA JR COLLEGE", stream: "M.P.C", timeline: "2020-2022" },
  { title: "UNDER GRADUATION", institution: "GVP College of Engineering (A)", stream: "B.TECH (CSE)", timeline: "2022-TILL" },
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
