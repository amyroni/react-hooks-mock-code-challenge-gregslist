import React from "react";

function NewListing({ newListing, setNewListing, onNewListingSubmit }) {
  function handleChange(event) {
    setNewListing({...newListing, [event.target.name]: event.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newListing)
    })
      .then(response => response.json())
      .then(newListing => onNewListingSubmit(newListing))
    e.target.reset();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="image"
        placeholder="image"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="location"
        placeholder="location"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Add Listing</button>
    </form>
  );
}

export default NewListing;
