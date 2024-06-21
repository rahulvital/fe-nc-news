import NavBar from "./NavBar";
import '../css/Header.css'
import logo from '../assets/primary-logo.png'

const Header = () => {
   return (
    <header className="header">
        <h1>NC News API</h1>
        <img src={logo}></img>
        <NavBar />
    </header>
   )
}

export default Header;