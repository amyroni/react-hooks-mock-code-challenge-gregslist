import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, favorites, setFavorites, onDelete }) {
  const listingsArray = listings.map(listing => {
    return <ListingCard 
      key={listing.id} 
      listing={listing} 
      favorites={favorites}
      setFavorites={setFavorites}
      onDelete={onDelete}
      />
  })

  return (
    <main>
      <ul className="cards">
        {listingsArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
