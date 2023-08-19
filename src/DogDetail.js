import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dogs from "./Dogdata";
import "./DogDetail.css";

const DogDetail = () => {
  const { name } = useParams();
  const [dog, setDog] = useState({});

  useEffect(
    function getDog() {
      function fetchDog(name) {
        const foundDog = dogs.filter((d) => d.name.toLowerCase() === name);
        setDog(foundDog[0] || {});
      }
      fetchDog(name);
    },
    [name]
  );
  if (!dog.name) {
    // Dog not found, don't render anything
    return null;
  }

  return (
    <div className="DogDetail">
      <h1> Hello!, my name is {dog.name}</h1>

      <p> I am {dog.age} years old</p>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts &&
          dog.facts.map((fact, index) => <li key={index}>{fact}</li>)}
      </ul>
    </div>
  );
};

export default DogDetail;
