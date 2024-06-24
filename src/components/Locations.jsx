import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Location from "./Location";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [infoPageLoc, setInfoPageLoc] = useState(null);

  const GetList = (page, url) => {
    let uri =
      page === null
        ? url
        : `https://rickandmortyapi.com/api/location?page=${page}`;

    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        let newData = locations.concat(data.results);
        console.log(data);

        setLocations(newData);
        setInfoPageLoc(data.info);
      });
  };

  useEffect(() => {
    GetList(1, null);
  }, []);

  return (
    <div className="infinite-scroll-container">
      {infoPageLoc !== null ? (
        <InfiniteScroll
          dataLength={locations.length}
          next={() => {
            GetList(null, infoPageLoc.next);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget={InfiniteScroll}
        >
          <div className="locations">
            {locations.map((location) => {
              return <Location key={location.id} location={location} />;
            })}
          </div>
        </InfiniteScroll>
      ) : (
        ""
      )}
    </div>
  );
};

export default Locations;
