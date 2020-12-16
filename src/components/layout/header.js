import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <h1>CaldAR</h1>
      <Link to="/buildings">Buildings</Link> |{" "}
      <Link to="/boilers">Boilers Type</Link>
    </header>
  );
}
