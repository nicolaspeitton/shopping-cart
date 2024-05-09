import React from 'react'
import CartProduct from './CartProduct'
import { useState } from 'react'

const Cart = ({cartItems, removeFromCart, updateCartItemQuantity}) => {

  let total = 0

  cartItems.forEach((item) => {
    total += item.quantity*item.price;
  });

  return (
    <div className='m-2 border border-solid border-black border-4'>
      <h2 className='text-2xl bg-green-500'>CART</h2>
      {cartItems.map(item => (
          <CartProduct key={item.id} product={item} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity}/>
        ))}

      <p className='font-bold'>Total Cart: $ {total.toFixed(2)}</p>
      
    </div>
  )
}

export default Cart
