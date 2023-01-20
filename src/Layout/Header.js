import React from "react";
// you can name the logo whatever you want
// import logo from "./images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

function Header() {
  // const homeImage = (props) => {
  //   return (
  //     <img
  //       src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
  //       className="header__logo"
  //       alt="logo"
  //     />
  //   );
  // };

  return (
    <div className="header">
      {/* clean up the link */}
      <a href="/">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header__logo"
        alt="logo"
      />
      </a>
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
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
          <a href="/checkout" className="header__optionBasket">
          <ShoppingBasketIcon />
          </a>
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
