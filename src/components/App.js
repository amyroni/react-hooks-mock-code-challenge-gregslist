import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState("");
  const [newListing, setNewListing] = useState({});
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(data => setListings(data))
  }, [])

  function handleDelete(id) {
    const newListings = listings.filter(listing => {
      return listing.id !== id
    })
    setListings(newListings);
  }

  function handleNewListingSubmit(listing) {
    setListings([...listings, listing])
  }

  function handleSort() {
    setSort(!sort);
  }

  const listingsToDisplay = listings.filter(listing => {
    if (filter !== "") {
      return listing.description.toLowerCase().includes(filter)
    } else { return listing }
  })

  if (sort) {
    listingsToDisplay.sort(function(a, b) {
      const itemA = a.location.toLowerCase();
      const itemB = b.location.toLowerCase();
      if (itemA < itemB) {return -1}
      if (itemA > itemB) {return 1}
      else {return 0}
    })
  }

  return (
    <div className="app">
      <Header 
        filter={filter} 
        setFilter={setFilter}
        sort={sort}
        setSort={handleSort} 
        newListing={newListing}
        setNewListing={setNewListing}
        onNewListingSubmit={handleNewListingSubmit}
      />
      <ListingsContainer 
        listings={listingsToDisplay} 
        favorites={favorites}
        setFavorites={setFavorites}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
