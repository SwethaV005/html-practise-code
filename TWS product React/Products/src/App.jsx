import React, { useMemo, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import productsData from './Data/product.js'

function App() {
  const [cart, setCart] = useState({})
  const [quantities, setQuantities] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  const increment = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const decrement = (id) => {
    setQuantities((prev) => {
      const current = prev[id] || 0
      if (current <= 0) return prev
      return { ...prev, [id]: current - 1 }
    })
  }

  const addToCart = (id) => {
    const qty = quantities[id] || 0
    if (qty <= 0) return
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + qty }))
   
  }

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  const visibleProducts = useMemo(() => {
    const term = searchQuery.toLowerCase()
    return productsData.filter((p) => p.name.toLowerCase().includes(term))
  }, [searchQuery])

  return (
    <>
      <Header cartCount={cartCount} onSearch={setSearchQuery} />
      <div className="images">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={quantities[product.id] || 0}
            onIncrement={increment}
            onDecrement={decrement}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </>
  )
}

export default App
