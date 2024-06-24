import React, { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import "./Character.css";

const Character = ({ character }) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const characterWithType = { ...character, type: "character" };

  const handleFavoriteClick = () => {
    if (isFavorite(characterWithType)) {
      removeFavorite(characterWithType);
    } else {
      addFavorite(characterWithType);
    }
  };

  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{character.name}</h2>
        <p className="card-status">
          <span
            className={`status-indicator ${character.status.toLowerCase()}`}
          ></span>
          {character.status} - {character.species}
        </p>
        <p className="card-info">
          <span className="card-label">Last known location:</span>
          {character.location.name}
        </p>
        <p className="card-info">
          <span className="card-label">First seen in:</span>
          {character.origin.name}
        </p>
        <button onClick={handleFavoriteClick}>
          {isFavorite(characterWithType) ? "💔" : "⭐"}
        </button>
      </div>
    </div>
  );
};

export default Character;
