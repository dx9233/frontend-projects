"use client";

import "./FilterNews.css";

const FilterNews: React.FC = () => {
  return (
    <div>
      <h2 className="section-title">Latest News</h2>
      <p className="section-subtitle">
        There are many variations of passages of Lorem Ipsum available...
      </p>

      <div className="news-filter">
        <button className="active">The Edit</button>
        <button>Videos</button>
        <button>Images</button>
        <button>Corporate News</button>
        <button>Games</button>
        <button>Archive</button>
      </div>
    </div>
  );
};

export default FilterNews;
