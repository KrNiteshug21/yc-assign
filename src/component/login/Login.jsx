import React, { useState } from "react";
import "./style.css";

const saasOptions = [
  { img: "/img/login/github.svg", text: "Sign in with Github" },
  { img: "/img/login/bitbucket.svg", text: "Sign in with BitBucket" },
  { img: "/img/login/azure-devops.svg", text: "Sign in with Azure DevOps" },
  { img: "/img/login/gitlab.svg", text: "Sign in with GitLab" },
];

const selfHostedOptions = [
  { img: "/img/login/gitlab.svg", text: "Sign in with GitLab" },
  { img: "/img/login/key.svg", text: "Sign in with SSO" },
];

const Login = () => {
  const [loginOptions, setLoginOptions] = useState("SAAS");

  return (
    <section className="flex loginScreen">
      <div className="subtractLogo">
        <img src="/img/login/Subtract.svg" alt="hero" />
      </div>
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

      <div className="loginSection">
        <div className="login">
          <div className="loginHeader">
            <div className="flex">
              <img src="/img/logo.svg" alt="logo" />
              <h3>CodeAnt AI</h3>
            </div>
            <div>
              <h2>Welcome to CodeAnt AI</h2>
            </div>
            <div className="loginOptionBtns">
              <button
                className={loginOptions == "SAAS" ? "active" : ""}
                onClick={() => setLoginOptions("SAAS")}
              >
                SAAS
              </button>
              <button
                className={loginOptions == "SelfHosted" ? "active" : ""}
                onClick={() => setLoginOptions("SelfHosted")}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <hr />
          <div className="loginOptions">
            {loginOptions === "SAAS" ? (
              <>
                {saasOptions.map((option, index) => (
                  <div className="" key={option.text}>
                    <img src={option.img} alt={option.text} />
                    <p>{option.text}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                {selfHostedOptions.map((option, index) => (
                  <div className="" key={option.text}>
                    <img src={option.img} alt={option.text} />
                    <p>{option.text}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="privary-policy">
          By signing up you agree to the Privacy Policy.
        </div>
      </div>
    </section>
  );
};

export default Login;
