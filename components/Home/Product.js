import Image from "next/image";
import React, { useContext } from "react";
import {CartContext} from '../../context/CartContext'


export default function Product({id, title, price, img}) {
  
const {cartData, dispatchCart} = useContext(CartContext)

const addToCart = () => {
  dispatchCart({
    type:"ADD_TO_CART",
    payload:{
      id,
      title,
      price
    }
  })
}
const removeToCart = () => {
  dispatchCart({
    type:"REMOVE_TO_CART",
    payload:{
      id,
      title,
      price
    }
  })
}

  return (
    <div className="max-w-xs m-auto  text-center font-mono shadow-md rounded-none  ">
     
      <Image src={img} alt="Saree"   />
      <h1 className="text-xl font-bold text-black text-center">
        {title}
      </h1>
      <p className="text-gray-600 text-xl ">{price}</p>
      <p>
       {cartData.some(i => i.id === id) ? (
          <button className="border-none p-3 bg-red-500 w-full outline-0 text-white cursor-pointer text-center text-base hover:opacity-70 " onClick={removeToCart}  >
          Remove to Cart
        </button>
         
       ):(
        <button className="border-none p-3 bg-black w-full outline-0 text-white cursor-pointer text-center text-base hover:opacity-70 " onClick={addToCart} >
          Add to Cart
        </button>
       )}
      </p>
    </div>
  );
}

