import React from 'react'



const ProductCard = ({product, addToCart, updateCartItemQuantity}) => {

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <img className="w-40 h-40 object-cover" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded">Add to Cart</button> 
      
    </div>

  )
  
}

export default ProductCard
