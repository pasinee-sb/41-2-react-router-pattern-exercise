import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Doglist = () => {
  return;
  <Link exact to="/whiskey">
    <Whiskey />
  </Link>
   <Link exact to="/duke">
   <Duke />
 </Link>;
  <Link exact to="/perry">
  <Perry />
</Link>;
};

export default Doglist;
