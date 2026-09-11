import React, { useMemo, useState, useCallback, useLayoutEffect, useRef } from 'react';
import  { productItemsData, type  Product } from './Data/product';
import ProductCard from './component/ProductCard';
import Header from './component/Header';

// @ts-ignore CSS is handled by the bundler and has no TypeScript declaration.
import './App.css';
export function App() {


    //we have defined id is a string type and quatity is a number in interface
    interface quantitytype {
        [id: number]: number;
    }
    const [cart, setcart] = useState<quantitytype>({});
    const [quantity, setquantity] = useState<quantitytype>({});
    const [search, setsearch] = useState<string>("");

    const increment = useCallback((id: number): void => {
        setquantity((prev) => ({ ...prev,[id]:(prev[id] || 0) + 1}
    ))
},[])
    const decrement = useCallback ((id:number): void=>{
        setquantity(
            (prev)=>{
                const current:number = prev[id]||0;
                if (current<=0) return prev;
                return {...prev,[id]:current-1}

            })
        setcart(
            (prev)=>{
                const current :number= prev[id]||0;
                if (current<=0) return prev;
                return {...prev,[id]:current-1}
            })
          
    },[])

  const addtocart = useCallback((id:number):void=>{
        
            const qty:number=quantity[id]||0;
            if (qty<=0) return;
            setcart((prev)=>({
                ...prev,[id]:(prev[id]||0)+qty
            }))
    },[])

    const cartCount = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  );
  const searchInputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  const handleSearch = useCallback((value: string): void => {
    setsearch(value);
  }, []);
 const visibleProducts = useMemo<Product[]>(() => {
    const term :string= search.trim().toLowerCase();
    if (!term) return productItemsData;

    return productItemsData.filter((product: Product) =>
      product.name.toLowerCase().includes(term)
    );
  }, [search]);

  const productCards = useMemo(
    () =>
      visibleProducts.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={quantity[product.id] || 0}
          onIncrement={increment}
          onDecrement={decrement}
          onAddToCart={addtocart}
        />
      )),
    [visibleProducts, quantity, increment, decrement, addtocart]
  );

  return (
    <>
      <Header cartCount={cartCount} onSearch={handleSearch} inputRef={searchInputRef} />
      <div className="images">{productCards}</div>
    </>
  );

}

