import React from "react";

const BeerContent = (props) => {
  const {
    name,
    image_url,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = props.beer;
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={image_url} alt={name} style={{ height: "500px" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{name}</h2>
        <h3 style={{ color: "gray" }}>{attenuation_level}</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ color: "gray" }}>{tagline}</h3>
        <h5>{first_brewed}</h5>
      </div>

      <p>{description}</p>
      <p style={{ color: "gray" }}>{contributed_by}</p>
    </div>
  );
};

export default BeerContent;
