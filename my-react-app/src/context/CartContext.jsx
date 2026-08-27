import { createContext, useContext, useMemo, useCallback, useState } from "react";
import productsData from "../Data/product.js";

const CartContext = createContext(null);

export function CartProvider({ children }) {
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
  }, []);

  const addToCart = useCallback(
    (id) => {
      const qty = quantities[id] || 0;
      if (qty <= 0) return;

      setCart((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + qty,
      }));
    },
    [quantities]
  );

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

  const value = useMemo(
    () => ({
      cart,
      quantities,
      searchQuery,
      setSearchQuery,
      increment,
      decrement,
      addToCart,
      cartCount,
      visibleProducts,
    }),
    [cart, quantities, searchQuery, increment, decrement, addToCart, cartCount, visibleProducts]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
