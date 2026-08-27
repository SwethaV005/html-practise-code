import React, { useMemo, useCallback, useRef, useLayoutEffect } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import { CartProvider, useCart } from './context/CartContext.jsx'
import { useLifecycleLogger } from './hooks/useLifecycleLogger.js';

function AppContent() {
  const {
    cartCount,
    visibleProducts,
    quantities,
    increment,
    decrement,
    addToCart,
    setSearchQuery,
  } = useCart();

  const searchInputRef = useRef(null);

  useLifecycleLogger("App", { cartCount, visibleProducts, quantities, searchQuery: setSearchQuery });

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
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

App.whyDidYouRender = true;
export default App
