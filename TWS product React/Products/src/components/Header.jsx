import React, { useState } from "react";
import business from "../assets/business.svg";
import search from "../assets/icons8-search.gif";
import cart from "../assets/shopping-cart.png";

function Header({ cartCount, onSearch }) {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="head">
      <h1>
        <img src={business} alt="Logitech" />
        TWS
      </h1>

      <nav>
        <a>
          <h2>Products</h2>
        </a>
        <a>
          <img
            src={search}
            alt="Search"
            id="searchicon"
            onClick={() => setShowSearch(true)}
          />
          <input
            type="text"
            id="searchbar"
            placeholder="Search Products"
            value={query}
            onChange={handleChange}
            style={{ display: showSearch ? "block" : "none" }}
          />
        </a>
        <a>
          <img src={cart} alt="Cart" />
          <span id="cart-cont">{cartCount}</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
