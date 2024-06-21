import "../css/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">
                    <h3>Home</h3>
                </Link>
                <Link to="/topics">
                    <h3>Topics</h3>
                </Link>
            </div>
        </nav>)
}

export default NavBar;