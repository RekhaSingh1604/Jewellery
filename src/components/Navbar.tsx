import { useState } from "react";
// import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { IoMdMenu } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBasket } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#" className="logo">
          AURELIA
        </a>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#jewellery">Jewellery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Icons */}
        <div className="nav-actions">
          <button aria-label="Search">
            <IoSearch size={18} />
          </button>

          <button aria-label="Account">
            <FaUserAlt size={18} />
          </button>

          <button aria-label="Shopping bag">
            <LuShoppingBasket size={18} />
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXTwitter size={22} /> : <IoMdMenu size={22} />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;