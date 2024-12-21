import "./style.css";
const repoData = [
  {
    title: "design-system",
    tech: "React",
    size: "7320 KB",
    updated: "3 days ago",
    status: "Public",
  },
  {
    title: "codeant-ci-app",
    tech: "Javascript",
    size: "5871 KB",
    updated: "3 days ago",
    status: "Private",
  },
  {
    title: "analytics-dashboard",
    tech: "Python",
    size: "4521 KB",
    updated: "5 days ago",
    status: "Private",
  },
  {
    title: "mobile-app",
    tech: "Swift",
    size: "3096 KB",
    updated: "3 days ago",
    status: "Public",
  },
  {
    title: "e-commerce-platform",
    tech: "Java",
    size: "6210 KB",
    updated: "6 days ago",
    status: "Private",
  },
  {
    title: "blog-website",
    tech: "HTML/CSS",
    size: "1876 KB",
    updated: "4 days ago",
    status: "Public",
  },
  {
    title: "social-network",
    tech: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
    status: "Private",
  },
];

const RepoData = () => {
  return (
    <div className="repoContainer">
      {repoData.map((repo, index) => (
        <div
          style={{
            backgroundColor: index % 2 === 0 ? "#F5F5F5" : "#d5d7da",
          }}
          key={repo.title}
          className="repoItems"
        >
          <h3 className="flex repoItemTitle">
            <span>{repo.title}</span>
            <span className="repoStatus">{repo.status}</span>
          </h3>
          <div className="flex repoItemDetails">
            <p className="flex">
              <span>{repo.tech}</span>
              <span className="dot">{""}</span>
            </p>
            <p>
              <img src="/img/database.svg" alt="dbicons" />
              <span style={{ marginLeft: "6px" }}>{repo.size}</span>
            </p>
            <p>Updated {repo.updated}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoData;
