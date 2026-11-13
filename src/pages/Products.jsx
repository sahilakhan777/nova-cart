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
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [priceOrder, setPriceOrder] = useState("low-high");
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
              const matchesCategory =
               selectedCategory === "All Categories" ||
              val.category === selectedCategory;
              const matchesSearch = 
              val.category.toLowerCase().includes(searchData.toLowerCase()) ||
              val.title.toLowerCase().includes(searchData.toLowerCase())
              return matchesCategory && matchesSearch
            })
            if(priceOrder === 'low-high'){
              result.sort((a,b)=> a.price - b.price)
            }else if(priceOrder === 'high-low')
              result.sort((a,b)=> b.price - a.price)

            setFilteredData(result);
        }, 700);
        return ()=> clearTimeout(timeout);
        
    },[searchData,productsData,selectedCategory,priceOrder])

   

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
          value={selectedCategory}
          onChange={(e)=> setSelectedCategory(e.target.value)}
           className="w-full appearance-none bg-[#111827] border border-gray-700 rounded-xl px-3 py-2 pr-10 text-white text-xl outline-none cursor-pointer">
            <option value="All Categories">All Categories</option>
            <option value="men's clothing">Mens Clothing</option>
            <option value="women's clothing">Womens Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
          </select>
          

          <ChevronDown
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
          />
        </div>

        {/* Price Dropdown */}
        <div className="relative w-full md:w-[238px] shrink-0">
          <select
          value={priceOrder}
          onChange={(e)=> setPriceOrder(e.target.value)}
           className="w-full appearance-none bg-[#111827] border border-gray-700 rounded-xl px-3 py-2 pr-10 text-white text-xl outline-none cursor-pointer">
            <option value="low-high">Price: Low-High</option>
            <option value="high-low">Price: High-Low</option>
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
           filteredData.length === 0 ? 
           (<p className='text-red-500'>No product Found.</p>):
           (
             filteredData.map((val)=>{
              let isInCart = cartItem.find((elem)=> elem.quantity>0 && elem.id===val.id)
              return <ProductCard key={val.id} product={val} isInCart={isInCart}/>
            })
           )
        }
        
    </div>
    </>
   )
}

export default Products
