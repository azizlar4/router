import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { countries } from "../Data/Data";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();
  const countr = countries.find((el) => el.id == params.id);
  console.log(countr);
  return (
    <div style={{ margin: "10px" }}>
      <h1>Population : {countr.population}</h1>
      <div >
        <Link to="/">
          <button >Home</button>
        </Link>
        <button style={{ margin: "10px",color:"red" }} onClick={() => navigate(-1)}>👈  Back </button>
      </div>
    </div>
  );
};

export default Details;
