import React from "react";
import { useState } from "react";
import { createBeer } from "../service/beers";
import { useNavigate } from "react-router-dom";

const BeerForm = () => {
  const initialData = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
  const handleFormSubmission = (event) => {
    event.preventDefault();
    createBeer(data).then(() => navigate("/beers"));
  };
  const handleInputData = (event) => {
    const { name, value, valueAsNumber } = event.target;
    setData({ ...data, [name]: valueAsNumber || value });
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          onChange={handleInputData}
        ></input>
        <br />
        <label htmlFor="tagline">Tagline</label>
        <br />
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={data.tagline}
          onChange={handleInputData}
        ></input>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        {/* <input
          type="text"
          name="description"
          id="description"
          value={data.description}
          onChange={handleInputData}
        ></input> */}
        <textarea
          name="description"
          id="description"
          value={data.description}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed</label>
        <br />
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={data.first_brewed}
          onChange={handleInputData}
        ></input>
        <br />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <br />
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={data.brewers_tips}
          onChange={handleInputData}
        ></input>
        <br />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <br />
        <input
          type="text"
          name="attenuation_level"
          id="attenuation_level"
          value={data.attenuation_level}
          onChange={handleInputData}
        ></input>
        <br />
        <label htmlFor="contributed_by">Contributed By</label>
        <br />
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={data.contributed_by}
          onChange={handleInputData}
        ></input>
        <br />
        <button style={{ marginTop: "10px" }}>ADD NEW</button>
      </form>
    </div>
  );
};

export default BeerForm;
