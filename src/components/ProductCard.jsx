
import React, { useContext, useState } from 'react'
import { ShoppingCart, Star, Search } from 'lucide-react'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const ProductCard = ({product,isInCart}) => {
    const {setCartItem} = useContext(Auth)
    const [isAdded, setIsAdded] = useState(false);
    const addToCart = ()=>{
      if(isInCart){
        toast.info("Product already in Cart")
        return
      }
        setCartItem((prev)=> [...prev,{...product,quantity:1}])
        toast.success("Product Added into cart")
    }
  return (

    <div className="bg-[#100B1D] text-white">

      {/* PRODUCT CARD */}
      <div className="group bg-[#1A1230] border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/60 hover:-translate-y-2 transition-all duration-300">

        {/* PRODUCT IMAGE */}
        <div className="relative bg-white h-64 flex items-center justify-center p-6">

          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />

          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
            {product.category}
          </span>

        </div>


        {/* PRODUCT DETAILS */}
        <div className="p-5">

          {/* RATING */}
          <div className="flex items-center gap-2 mb-3">

            <div className="flex items-center gap-1 text-yellow-400">

              <Star size={16} fill="currentColor" />

              <span className="text-sm font-semibold">
                {product.rating?.rate}
              </span>

            </div>

            <span className="text-gray-500 text-xs">
              ({product.rating?.count} reviews)
            </span>

          </div>


          {/* TITLE */}
          <h2 className="text-white text-lg font-semibold line-clamp-2 min-h-14">
            {product.title}
          </h2>


          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm leading-relaxed mt-3 line-clamp-3 min-h-[60px]">
            {product.description}
          </p>


          {/* PRICE AND CART */}
          <div className="flex items-center justify-between gap-3 mt-6">

            <div>

              <p className="text-gray-500 text-xs">
                Price
              </p>

              <h3 className="text-purple-300 text-2xl font-bold mt-1">
                ${product.price.toFixed(2)}
              </h3>

            </div>


            <button onClick={()=>{
              addToCart()
              setIsAdded(true)
            }}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 rounded-xl font-semibold text-sm transition duration-300 active:scale-95"
            >

              <ShoppingCart size={18} />

              {isAdded? "Added":"Add to Cart"}

            </button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default ProductCard
