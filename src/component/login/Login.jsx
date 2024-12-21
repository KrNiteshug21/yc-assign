import React from "react";
import Stats from "./Stats";
import LoginSection from "./LoginSection";
import "./style.css";

const Login = () => {
  return (
    <section className="loginScreen">
      <div className="subtractLogo">
        <img src="/img/login/Subtract.svg" alt="hero" />
      </div>
      <Stats />
      <LoginSection />
    </section>
  );
};

export default Login;
