import { Link } from "react-router-dom";

export function Menu(){
    return (
    <div>
        <li>
            <Link to="/">Dogs</Link>
        </li>
        <li>
            <Link to="/cats">Cats</Link>
        </li>
        <li>
            <Link to="/sheeps">Sheeps</Link>
        </li>
        <li>
            <Link to="/goats">Goats</Link>
        </li>
  </div>

);
}