import React from "react";

function ListingCard({ listing, favorites, setFavorites, onDelete }) {
  function addToFavorites() {
    setFavorites([...favorites, listing])
  }
  
  function removeFromFavorites() {
    const newFavorites = favorites.filter(favorite => {
      return favorite.id !== listing.id
    })
    setFavorites(newFavorites);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    }).then(onDelete(listing.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorites.find(favorite => favorite.id === listing.id) ? (
          <button className="emoji-button favorite active" onClick={removeFromFavorites}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={addToFavorites}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
