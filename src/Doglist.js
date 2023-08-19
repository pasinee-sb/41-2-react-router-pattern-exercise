import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import dogs from "./Dogdata";
import DogDetail from "./DogDetail";
const Doglist = () => {
  return (
    <div>
      {dogs.map((dog, index) => {
        <Link exact to={`/${dog.name}`}>
          <DogDetail />
        </Link>;
      })}
    </div>
  );
};

export default Doglist;
