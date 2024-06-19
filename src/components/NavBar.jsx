import "../.css/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h3>Home</h3>
            </Link>
        </nav>)
}

export default NavBar;