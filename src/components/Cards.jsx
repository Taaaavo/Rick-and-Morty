import React, { useEffect, useState } from "react";
import Character from "./Character";
import InfiniteScroll from "react-infinite-scroll-component";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
  const [infoPage, setInfoPage] = useState(null);

  const GetList = (page, url) => {
    let uri =
      page === null
        ? url
        : `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        //console.log("Se solicito data");
        let newData = characters.concat(data.results);

        setCharacters(newData);

        setInfoPage(data.info);
      });
  };

  useEffect(() => {
    GetList(1, null);
  }, []);

  return (
    <div className="infinite-scroll-container">
      {infoPage !== null ? (
        <InfiniteScroll
          dataLength={characters.length}
          next={() => {
            GetList(null, infoPage.next);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget={InfiniteScroll}
        >
          <div className="characters">
            {characters.map((character) => {
              return <Character key={character.id} character={character} />;
            })}
          </div>
        </InfiniteScroll>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;
