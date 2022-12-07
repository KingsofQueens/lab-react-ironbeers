import React from "react";
import { Link } from "react-router-dom";

const BeerList = (props) => {
  const { beers } = props;

  return (
    <div>
      {console.log(beers)}
      {beers.map((beer) => {
        //   {
        //     console.log(beer);
        //   }
        return (
          <div
            style={{
              display: "flex",
              gap: "100px",
              // justifyContent: "center",
              maxWidth: "95%",
              margin: "50px",
            }}
            key={beer._id}
          >
            <div style={{ width: "150px" }}>
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ maxHeight: "200px" }}
              />
            </div>
            <Link to={`/beers/${beer._id}`} style={{ textDecoration: "none" }}>
              <div>
                <h1 style={{ maxWidth: "300px" }}>{beer.name}</h1>
                <h3 style={{ maxWidth: "300px" }}>{beer.tagline}</h3>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BeerList;
