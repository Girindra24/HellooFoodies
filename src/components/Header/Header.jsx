import logo from "../../assets/HellooFoodies_logo.png";
import "./Header.css";

const Header = () => { 
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={logo} alt="HellooFoodies" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;