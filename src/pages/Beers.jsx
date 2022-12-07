import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import BeerList from "../components/BeerList";
import { allBeers } from "../service/beers";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    allBeers().then((data) => setBeers(data));
    //   console.log(data);
  }, []);

  return (
    <div>
      <Navbar />
      <BeerList beers={beers} />
    </div>
  );
};

export default Beers;
