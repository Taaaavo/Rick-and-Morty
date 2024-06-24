import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import Character from "./Character";
import Location from "./Location";
import "./FavoriteCards.css";
import Login from "./Login";

export function FavoriteCards({ auth }) {
  const { favorites } = useContext(FavoritesContext);

  const favoriteCharacters = favorites.filter(
    (fav) => fav.type === "character"
  );
  const favoriteLocations = favorites.filter((fav) => fav.type === "location");

  if (!auth) {
    return <Login />;
  }

  return (
    <div className="favorites-container">
      <h1>⭐Favoritos⭐</h1>
      <div className="favorites">
        <div className="fav-characters">
          {favoriteCharacters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>

        <div className="fav-location">
          {favoriteLocations.map((location) => (
            <Location key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}
