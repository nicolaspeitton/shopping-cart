import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';


  const Products = ({products, addToCart, updateCartItemQuantity}) => {

  return (
    <div>
      <h2 className='text-2xl'>PRODUCTS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product}  addToCart={addToCart} updateCartItemQuantity={updateCartItemQuantity} />
        ))}
      </div>
    </div>
  )
}

export default Products
