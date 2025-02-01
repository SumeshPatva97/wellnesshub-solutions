import React, { useEffect } from "react";

const OnlinePsychologicalCounselling = () => {
  useEffect(() => {
    // Trigger smooth scroll on component mount
    const element = document.getElementById("Online");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div id="Online" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
        <h1>Online Psychological Counselling</h1>
        <p>Unlocking your potential through Psychologist’s Expert Guidance.</p>
        </div>
        
      </div>
    </div>
  );
};

export default OnlinePsychologicalCounselling;
