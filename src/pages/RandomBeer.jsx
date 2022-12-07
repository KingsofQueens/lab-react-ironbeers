import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { randomBeer } from "../service/beers";
import BeerContent from "../components/BeerContent";

const RandomBeer = () => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    randomBeer().then((data) => setBeer(data));
  }, []);

  return (
    <div>
      <Navbar />
      <BeerContent beer={beer} />
    </div>
  );
};

export default RandomBeer;
