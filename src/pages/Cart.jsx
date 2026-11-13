
import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import CartCart from '../components/CartCart'
import {  ShoppingBag } from 'lucide-react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'

const Cart = () => {
  
  const { cartItem ,setCartItem, total} = useContext(Auth);
  
  
  
  return (
    <>
      {cartItem.length > 0 ? (
        <div className="min-h-screen bg-[#100B1D] text-white px-5 md:px-10 py-5">

          <div className="max-w-7xl mx-auto">

            {/* Cart Header */}
            <div className="mb-14">

              <div className="flex items-center gap-3">
                <ShoppingBag size={35} className="text-purple-500" />

                <h1 className="text-3xl md:text-4xl font-bold">
                  My Cart
                </h1>
              </div>

              <p className="text-gray-400 text-md mt-2">
               {cartItem.length} {cartItem.length===1? 'item' : 'items'} in your Cart
              </p>

            </div>

            {/* Cart Products + Order Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">

              {/* Cart Products */}
              <div className="lg:col-span-2 flex flex-col gap-7">

                {
                  cartItem.map((elem) => {
                    return <CartCart key={elem.id} product={elem}/>
                  })
                }

              </div>
              {/* Order Summary */}
              <div className="lg:col-span-1">

                <div className="bg-[#0B0714] border border-purple-900/50
                rounded-3xl p-8 shadow-xl lg:sticky lg:top-40">

                  <h2 className="text-2xl md:text-3xl font-bold mb-7">
                    Order Summary
                  </h2>

                  {/* Subtotal */}
                  <div className="flex justify-between items-center mb-5">

                    <p className="text-gray-400 text-lg">
                     SubTotal
                    </p>

                    <p className="text-gray-300 text-lg">
                      ${total.toFixed(2)}
                    </p>

                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between items-center mb-6">

                    <p className="text-gray-400 text-lg">
                      Shipping
                    </p>

                    <p className="text-green-400 text-lg">
                      Free
                    </p>

                  </div>

                  {/* Divider */}
                  <div className="border-t border-purple-900/50 pt-6">

                    {/* Total */}
                    <div className="flex justify-between items-center mb-6">

                      <h3 className="text-xl font-bold">
                        Total
                      </h3>

                      <p className="text-2xl font-bold text-purple-400">
                        ${total.toFixed(2)}
                      </p>
                    </div> 
                </div>
                <div className='flex gap-10'>
                    <Link
                        to="/main/products"
                        className="bg-purple-600 hover:bg-purple-700 text-white
                        font-semibold text-sm px-5 py-2 rounded-xl
                        transition duration-300"
                      >
                      Continue Shopping
                    </Link>
                    <button onClick={()=>{
                       setCartItem([])
                       toast.info("Cart Cleared!")
                    }} className="bg-purple-600 hover:bg-purple-700 text-white
                        font-semibold text-md px-5 py-2 rounded-xl cursor-pointer
                        transition duration-300">Clear Cart
                    </button>
                </div>
                </div>
            </div>
            </div>

          </div>

        </div>
      ) : (
        /* Empty Cart UI */
        <div className="min-h-screen bg-[#100B1D] text-white px-6 py-6">

          <div className="flex items-center gap-5">

            <ShoppingBag
              size={30}
              className="text-purple-500"
            />

            <h1 className="text-3xl md:text-4xl font-bold">
              My Cart
            </h1>

          </div>

          <p className="text-gray-400 text-md mt-3">
            0 items in your cart
          </p>

          {/* Empty Cart Section */}
          <div className="flex flex-col items-center justify-center text-center mt-10">

            <ShoppingBag
              size={100}
              strokeWidth={2.5}
              className="text-gray-700 mb-8"
            />

            <h2 className="text-2xl font-semibold mb-4">
              Your cart is empty
            </h2>

            <p className="text-gray-400 text-md mb-9">
              Looks like you haven't added anything yet.
            </p>

            <Link
              to="/main/products"
              className="bg-purple-600 hover:bg-purple-700 text-white
              font-semibold text-md px-7 py-4 rounded-xl
              transition duration-300 "
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </>
  )
}

export default Cart
