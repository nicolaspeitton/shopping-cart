import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const CartProduct = ({product, removeFromCart, updateCartItemQuantity}) => {
  
  
  const handleClick = () => {
    removeFromCart(product);
  };
  
  const addButton = () => {
    updateCartItemQuantity(product.id, product.quantity + 1);

  }

  const removeButton = () => {  
    if (product.quantity > 1) {
      updateCartItemQuantity(product.id, product.quantity - 1);
    } 
    else {
      removeFromCart(product);
    }
  }

  return (
    <div className='m-2'>
      <p className='font-bold'>{product.title}</p>
      <p>${product.price}</p>
      <p>Units: {product.quantity}</p>
      <p>Total: ${product.quantity*product.price}</p>
      <div>
        <button onClick={addButton} className="px-2 m-1 bg-gray-400 hover:bg-gray-700 text-black rounded">+</button>
        <button onClick={removeButton} className="px-2 m-1 bg-gray-400 hover:bg-gray-700 text-black rounded">-</button>  
        <button onClick={handleClick} className="m-1 bg-red-500 hover:bg-red-700 text-white py-0.5 px-1 rounded">Remove from Cart</button> 
      </div>
      
    </div>
  )

  
}

export default CartProduct
