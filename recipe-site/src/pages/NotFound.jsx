import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found Page </h2>
      <p>Ups... You will not be eating today </p>
      <Link to="/">
        <button className="backButton">Try Again!</button>
      </Link>
    </div>
  );
}
