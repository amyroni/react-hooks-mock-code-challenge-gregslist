import React from "react";
import Search from "./Search";
import Sort from "./Sort";
import NewListing from "./NewListing";

function Header({ filter, setFilter, sort, setSort, newListing, setNewListing, onNewListingSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filter={filter} setFilter={setFilter} />
      <Sort sort={sort} setSort={setSort} />
      <NewListing newListing={newListing} setNewListing={setNewListing} onNewListingSubmit={onNewListingSubmit}/>
    </header>
  );
}

export default Header;
