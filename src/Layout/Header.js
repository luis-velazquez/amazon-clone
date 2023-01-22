import React from "react";
// you can name the logo whatever you want
// import logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../State/StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket }, dispatch] = useStateValue();


  return (
    <div className="header">
      {/* clean up the link */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <Link
            to="/login"
            className="header__optionLineTwo">Sign In
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        {/* Clean up this code */}
        <div className="header__optionBasket">
          <Link to="/checkout" className="header__optionBasket">
            <ShoppingBasketIcon />
          </Link>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
