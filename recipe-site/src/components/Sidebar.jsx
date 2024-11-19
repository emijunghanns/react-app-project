
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="links">
          <Link to='/'>Recipes</Link>
          <Link to="/addrecipe"> Add Recipe</Link>
          <Link to="/aboutus"> About Us</Link>
      </div>
    </div>
  );
}
