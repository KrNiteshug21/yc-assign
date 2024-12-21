import { useState } from "react";
import LoginOptions from "./LoginOptions";

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

const LoginSection = () => {
  const [loginOptions, setLoginOptions] = useState("SAAS");

  return (
    <div className="loginSection">
      <div>
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
                className={loginOptions === "SAAS" ? "active" : ""}
                onClick={() => setLoginOptions("SAAS")}
              >
                SAAS
              </button>
              <button
                className={loginOptions === "SelfHosted" ? "active" : ""}
                onClick={() => setLoginOptions("SelfHosted")}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <hr />
          <div className="loginOptions">
            {loginOptions === "SAAS" ? (
              <LoginOptions data={saasOptions} />
            ) : (
              <LoginOptions data={selfHostedOptions} />
            )}
          </div>
        </div>
        <div className="privary-policy">
          By signing up you agree to the Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
