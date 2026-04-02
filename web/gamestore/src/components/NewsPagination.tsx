"use client";

import "./NewsPagination.css";

const NewsPagination: React.FC = () => {
  return (
    <div className="pagination">
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
    </div>
  );
};

export default NewsPagination;
