import React, { useContext } from "react";
import "./Location.css";
import FavoritesContext from "../contexts/FavoritesContext";

const Location = ({ location }) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const locationWithType = { ...location, type: "location" };

  const handleFavoriteClick = () => {
    if (isFavorite(locationWithType)) {
      removeFavorite(locationWithType);
    } else {
      addFavorite(locationWithType);
    }
  };

  return (
    <div className="location">
      <h2> {location.name}</h2>
      <p>Dimension: {location.dimension}</p>
      <p>Type: {location.type}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite(locationWithType) ? "💔" : "⭐"}
      </button>
    </div>
  );
};

export default Location;
