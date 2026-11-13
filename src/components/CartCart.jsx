import React, { useContext } from 'react'
import { Trash2 } from 'lucide-react'
import { Auth } from '../context/AuthContext'

function CartCart({ product}) {
  const {setCartItem,increamentQuantity,decreamentQuantity} = useContext(Auth)
  const removeItem = (id)=> {
    setCartItem((prev)=> prev.filter((elem)=> elem.id!==id))
  }
  return (
    <>
    {product.quantity>0 && 
    <div className="flex items-center gap-5 bg-[#0B0714] p-4 rounded-3xl
    border border-[#29213A] hover:border-purple-600 transition duration-300">

      {/* Product Image */}
      <div className="w-24 h-24 sm:w-[110px] sm:h-[110px] bg-white rounded-2xl
      flex items-center justify-center p-3 shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">

        <div>
          <span className="inline-block bg-purple-900/40 text-purple-300
          text-xs px-3 py-1 rounded-full mb-2">
            {product.category}
          </span>

          <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center justify-between gap-3">

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <button onClick={()=> decreamentQuantity(product.id)} className="w-10 h-10 rounded-lg bg-[#1E293B]
            hover:bg-purple-900 text-white text-xl transition">
              -
            </button>

            <span className="text-lg font-semibold text-white w-5 text-center">
              {product.quantity}
            </span>

            <button onClick={()=> increamentQuantity(product.id)} className="w-10 h-10 rounded-lg bg-[#1E293B]
            hover:bg-purple-900 text-white text-xl transition">
              +
            </button>
          </div>

          {/* Item total */}
          <p className="text-xl font-bold text-purple-400">
            ${(product.price * product.quantity).toFixed(2)}
          </p>

          {/* Delete */}
          <button onClick={()=>removeItem(product.id)} className="text-gray-500 hover:text-red-400 transition">
            <Trash2 size={22} />
          </button>

        </div>
      </div>
    </div>
    }
  </>
  )
}

export default CartCart