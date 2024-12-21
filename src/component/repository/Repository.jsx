import React from "react";
import Navigation from "./Navigation";
import RepoHeader from "./RepoHeader";
import RepoData from "./RepoData";

const Repository = () => {
  return (
    <section className="repoPageContainer">
      <Navigation />
      <div className="repoSection">
        <RepoHeader />
        <RepoData />
      </div>
    </section>
  );
};

export default Repository;
