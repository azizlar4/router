import React from "react";
import { countries } from "../Data/Data";
import CountrieCard from "./CountrieCard";

const CountrieList = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"30px"}}>
      {countries.map((el) => (
        <CountrieCard countrie={el} key={el.id} />
      ))}
    </div>
  );
};

export default CountrieList;
