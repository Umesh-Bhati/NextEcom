import React,{ createContext, useReducer } from "react";
import { CartReducer } from "./reducers/CartReducer";

export const CartContext = createContext()

export default function CartContextProvider ({children})  {

  const [cartData, dispatchCart] = useReducer(CartReducer, [])

    return (
        <CartContext.Provider value={{cartData, dispatchCart}} >
            {children}
        </CartContext.Provider>
    )

};