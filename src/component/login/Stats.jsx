import React from "react";
import "./style.css";

const Stats = () => {
  return (
    <div className="detailSection">
      <div className="featureCard">
        <div className="flex featureHeader">
          <img src="/img/logo.svg" alt="logo" />
          <h2>AI to Detect & Autofix bad code</h2>
        </div>
        <hr />
        <div className="flex featureStats">
          <div className="stats">
            <h3>30+</h3>
            <p>Language Support</p>
          </div>
          <div className="stats">
            <h3>10K+</h3>
            <p>Developers</p>
          </div>
          <div className="stats">
            <h3>100K+</h3>
            <p>Hours Saved</p>
          </div>
        </div>
        <div className="issueCard">
          <div className="issueHeader">
            <img src="/img/login/vector.svg" alt="login" />
            <div>
              <h3 style={{ color: "blue" }}>14%</h3>
              <p>This Week</p>
            </div>
          </div>
          <div style={{ textAlign: "left" }} className="stats">
            <p>Issues Fixed</p>
            <h3>500K+</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
