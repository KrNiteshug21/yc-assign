import React from "react";
import "./style.css";

const RepoHeader = () => {
  return (
    <div className="repoHeader">
      <div className="flex repoHeaderTop">
        <div>
          <h2>Repositories</h2>
          <p>33 total sepositories</p>
        </div>
        <div className="flex repoHeaderBtns">
          <div className="flex refreshBtn">
            <img src="/img/refresh.svg" alt="FilterIcon" />
            <p>Refresh All</p>
          </div>
          <div className="flex addRepoBtn">
            <img src="/img/plus.svg" alt="AddIcon" />
            <p>Add Repository</p>
          </div>
        </div>
      </div>
      <div className="flex repoHeaderSearch">
        <img src="/img/search.svg" alt="SearchIcon" />
        <input type="text" placeholder="Search Repositories" />
      </div>
    </div>
  );
};

export default RepoHeader;
