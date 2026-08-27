import React, { useState, useMemo, useCallback, useEffect } from "react";
import business from "../assets/business.svg";
import search from "../assets/icons8-search.gif";
import cart from "../assets/shopping-cart.png";


function Header({ cartCount, onSearch, inputRef }) {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  

  useEffect(() => {
    if (showSearch) {
      inputRef?.current?.focus();
    }
  }, [showSearch, inputRef]);

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }, [onSearch]);

  const searchInputStyle = useMemo(
    () => ({ display: showSearch ? "block" : "none" }),
    [showSearch]
  );

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
            ref={inputRef}
            type="text"
            id="searchbar"
            placeholder="Search Products"
            value={query}
            onChange={handleChange}
            style={searchInputStyle}
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
