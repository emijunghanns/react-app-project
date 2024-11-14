import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="links">
        <div>Recipes</div>
        <div>
          <Link to="/addrecipe"> Add Recipe</Link>
        </div>
        <div>
          <Link to="/aboutus"> About Us</Link>
        </div>
      </div>
    </div>
  );
}
