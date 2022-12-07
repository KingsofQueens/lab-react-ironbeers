import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeerContent from "../components/BeerContent";
import { singleBeer } from "../service/beers";

const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    singleBeer(id).then((data) => setBeer(data));
  }, [id]);

  return (
    <div>
      <Navbar />
      <BeerContent beer={beer} />
    </div>
  );
};

export default SingleBeer;
