import React, { useEffect } from 'react'
import { createContext,useState } from 'react'
export const Auth = createContext();
export const AuthProvider = ({children})=>{
    const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUser"))||[]);
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser"))||null);
    const [productsData, setProductsData] = useState([]);
   
    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem("cartItem"))||[]);


   useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(cartItem))
   },[cartItem])

   const total = cartItem.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
  )  
  const increamentQuantity = (id) =>{
    setCartItem((prev)=>{
        return prev.map((val)=>{
            return val.id=== id ?{...val,quantity:val.quantity+1}: val;
        })
    })
  }

  const decreamentQuantity = (id) =>{
    setCartItem((prev)=> 
        prev
            .map((val)=>
                val.id=== id ?{...val,quantity:val.quantity-1}: val)
            .filter((val)=> val.quantity>0)
        )
    }
    return <Auth.Provider
     value={{productsData,
        setProductsData,
        loggedInUser,
        setLoggedInUser,
        registeredUser,
        setRegisteredUser,
        cartItem,
        setCartItem,
        increamentQuantity,
        decreamentQuantity,
        total
    }}>{children}</Auth.Provider>
}
