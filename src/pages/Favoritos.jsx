import { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import Character from "../components/Character";
import Location from "../components/Location";

export function Favoritos({ auth }) {
  const { favorites } = useContext(FavoritesContext);

  const favoriteCharacters = favorites.filter(
    (fav) => fav.type === "character"
  );
  const favoriteLocations = favorites.filter((fav) => fav.type === "location");

  if (!auth) {
    return <h1>Inicia sesión para ver tus favoritos</h1>;
  }

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div className="columns-container">
        <div className="column">
          <h2>Personajes</h2>
          <div className="character-grid">
            {favoriteCharacters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </div>
        </div>
        <div className="column">
          <h2>Ubicaciones</h2>
          <div className="location-grid">
            {favoriteLocations.map((location) => (
              <Location key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
