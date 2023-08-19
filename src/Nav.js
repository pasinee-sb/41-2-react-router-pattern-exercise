import React from "react";
import { Link } from "react-router-dom";
import dogs from "./Dogdata";

function Nav() {
  return (
    <ul>
      {dogs.map((dog) => (
        <li>
          <Link to={`/dogs/${dog.name.toLocaleLowerCase()}`}>{dog.name}</Link>
        </li>
      ))}
    </ul>
  );
}
// end

export default Nav;
