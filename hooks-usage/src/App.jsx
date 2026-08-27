import React, { useMemo, useCallback, useRef, useLayoutEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import productsData from './Data/product.js'


function AppContent() {
  const [cart, setCart] = useState({});
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const increment = useCallback((id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  }, []);

  const decrement = useCallback((id) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });

    setCart((prev) => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });
  }, []);

  const addToCart = useCallback((id) => {
    const qty = quantities[id] || 0;
    if (qty <= 0) return;

    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + qty,
    }));
  }, []);

  const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  );

  const visibleProducts = useMemo(() => {
    const term = searchQuery.trim().toLowerCase();
    return productsData.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
  }, [searchQuery]);

  const searchInputRef = useRef(null);

  

  useLayoutEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = useCallback((value) => {
    setSearchQuery(value);
  }, [setSearchQuery]);

  const productCards = useMemo(
    () => visibleProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        quantity={quantities[product.id] || 0}
        onIncrement={increment}
        onDecrement={decrement}
        onAddToCart={addToCart}
      />
    )),
    [visibleProducts, quantities, increment, decrement, addToCart]
  );

  return (
    <>
      <Header cartCount={cartCount} onSearch={handleSearch} inputRef={searchInputRef} />
      <div className="images">
        {productCards}
      </div>
    </>
  )
}

function App() {
  return <AppContent />
}


export default App
