import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFavorite = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (fav) => fav.id !== item.id || fav.type !== item.type
      )
    );
  };

  const isFavorite = (item) => {
    return favorites.some(
      (fav) => fav.id === item.id && fav.type === item.type
    );
  };

  const data = { favorites, addFavorite, removeFavorite, isFavorite };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider };
export default FavoritesContext;
