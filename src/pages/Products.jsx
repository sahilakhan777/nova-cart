import React, { useContext, useEffect,useState } from 'react'
import { Auth } from '../context/AuthContext'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { ChevronDown, Search } from 'lucide-react'

const Products = () => {
    const {productsData,setProductsData} = useContext(Auth)
    const [searchData, setSearchData] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let {cartItem} = useContext(Auth)
    console.log(productsData)
    const getProductData = async ()=>{
        try {
            let res = await axios.get("https://fakestoreapi.com/products")
            setProductsData(res.data);
            setIsLoading(false)
            console.log(res.data)
        } catch (error) {
            console.log("error in api",error)
        }
    }
    useEffect(()=>{
        getProductData();
    },[])


    useEffect(()=>{
        let timeout = setTimeout(() => {
            let result =  productsData.filter((val)=>{
            return val.category.toLowerCase().includes(searchData.toLowerCase())
            })
            setFilteredData(result);
        }, 700);
        return ()=> clearTimeout(timeout);
        
    },[searchData,productsData])

   
    const displayData = searchData ? filteredData : productsData
   if (isLoading) return <h1 className='text-2xl'>Loading products...</h1>
   return(
    <>
    <div className="w-full bg-black border border-gray-300 rounded-2xl p-3 ">

      <div className="flex flex-col md:flex-row items-center gap-4 pt-4 pb-3">

        {/* Search Input */}
        <div className="flex items-center gap-3 w-full bg-[#111827] border border-gray-700 rounded-2xl px-5 py-3">
          <Search size={28} className="text-gray-400 shrink-0" />

          <input
            type="text"
            placeholder="Search products..."
            onChange={(e)=> setSearchData(e.target.value)}
            className="w-full bg-transparent outline-none text-white text-xl placeholder-gray-400"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative w-full md:w-[238px] shrink-0">
          <select
           className="w-full appearance-none bg-[#111827] border border-gray-700 rounded-xl px-3 py-2 pr-10 text-white text-xl outline-none cursor-pointer">
            <option >All Categories</option>
            <option >Mens Clothing</option>
            <option >Womens Clothing</option>
            <option >Electronics</option>
            <option >Jewellery</option>
          </select>
          

          <ChevronDown
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
          />
        </div>

        {/* Price Dropdown */}
        <div className="relative w-full md:w-[238px] shrink-0">
          <select className="w-full appearance-none bg-[#111827] border border-gray-700 rounded-xl px-3 py-2 pr-10 text-white text-xl outline-none cursor-pointer">
            <option>Price: Low-High</option>
            <option>Price: High-Low</option>
          </select>

          <ChevronDown
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
          />
        </div>

      </div>
    </div>
    <div className='grid grid-cols-4 gap-5 m-5'>
        { 
            displayData.map((val)=>{
                let isInCart = cartItem.find((elem)=> elem.quantity>0 && elem.id===val.id)
               return <ProductCard key={val.id} product={val} isInCart={isInCart}/>
            })
        }
        
    </div>
    </>
   )
}

export default Products
