import React from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () => {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json => {
        const productsWithQuantity = json.map(item => ({ ...item, quantity: 0 }));
        setProducts(productsWithQuantity);
      console.log(productsWithQuantity)
      })
      .catch(error => console.error('Error fetching data:', error));
  };
      
  useEffect(() => {
      fetchData(); 
  }, []);


  const addToCart = (product) => {
    setCartItems(prevCartItems => {
      const isProductInCart = prevCartItems.some(item => item.id === product.id);
      if (!isProductInCart) {
        return [...prevCartItems, { ...product, quantity: 1 }];
      } else {
        const updatedCartItems = prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCartItems;
      }
    });
  };
  

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const removeFromCart = (product) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id));
  };





  return (
    <div>      
      <div className='bg-white'>
      <h1 className='flex justify-center text-white py-2 text-4xl bg-green-600'>SHOPPING CART</h1>
      <div className='flex justify-center'>
        <div  className='w-3/4 text-center'>
          <Products products={products}  addToCart={addToCart} updateCartItemQuantity={updateCartItemQuantity} />
        </div>
        <div className='w-1/4 text-center'>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity} />
        </div>
        
      </div>
      
    </div>
    </div>
  )
}

export default App
