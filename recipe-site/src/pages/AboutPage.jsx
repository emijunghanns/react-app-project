import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div>
      <div class="container">
        <h1>About Us</h1>
        <div class="bio">
          <p>
            We are two passionate web development students working on a
            delicious project: a website for <span>recipes</span>! Meet the
            team:
          </p>
        </div>

        <div class="team">
          <div class="person">
            <h3>Emilia, 31</h3>
            <p>blah blah</p>
          </div>

          <div class="person">
            <h3>Karim, 21</h3>
            <p>blah blah</p>
          </div>
        </div>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
