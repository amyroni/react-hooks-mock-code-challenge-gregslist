import React from "react";

function Sort({ sort, setSort }) {
  return (
    <div style={{display: "inline"}}>
      <label>
        <input
          type="checkbox"
          name="sort"
          checked={sort}
          onChange={setSort}
        />
        sort
      </label>
    </div>
  );
}

export default Sort;
