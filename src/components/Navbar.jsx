import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { ShoppingBag, Store, Info, ShoppingCart, LogOut, Home } from 'lucide-react'
import { Auth } from '../context/AuthContext'
import { toast } from 'react-toastify'

const Navbar = () => {
    let navigate = useNavigate()
    let {loggedInUser,setLoggedInUser} = useContext(Auth)
    let logout = ()=>{
        localStorage.removeItem("loggedInUser")
        toast.warn("User Logged Out")
        setLoggedInUser(null)
        navigate('/')
    }


  return (
    <nav className="w-full bg-[#100B1D] sticky top-0 z-50 border-b border-purple-900/40 shadow-lg shadow-purple-950/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/main" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-800 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition">
            <ShoppingBag size={22} className="text-white" />
          </div>

          <span className="text-2xl font-bold tracking-wide text-white">
            Nova<span className="text-purple-400">Cart</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-9">

          <NavLink className={({isActive})=>
            isActive?"flex items-center gap-2 text-purple-400"
            :"flex items-center gap-2 text-gray-300 hover:text-white"}
             to={'/main'} end>
             Home
            <Home size={17}/>
          </NavLink>

          <NavLink className={({isActive})=>
            isActive?"flex items-center gap-2 text-purple-400"
          :"flex items-center gap-2 text-gray-300 hover:text-white"}
          to={'/main/products'}>Shop
          <Store size={17}/>
          </NavLink>

          <NavLink className={({isActive})=>
            isActive?"flex items-center gap-2 text-purple-400"
          :"flex items-center gap-2 text-gray-300 hover:text-white"}
            to={'/main/about'}>About
            <Info size={17}/>
          </NavLink>

          <NavLink className={({isActive})=>
            isActive?"flex items-center gap-2 text-purple-400"
          :"flex items-center gap-2 text-gray-300 hover:text-white"}
            to={'/main/cart'}>Cart
            <ShoppingCart size={17}/>
          </NavLink>

        </div>

        {/* User Details & Logout */}
        <div className="flex items-center gap-4">

          <div className="hidden sm:flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 font-semibold">
              {loggedInUser && loggedInUser.name.charAt(0).toUpperCase()}
            </div>

            <span className="text-sm text-gray-200 font-medium">
              {loggedInUser && loggedInUser.name}
            </span>
          </div>

          <button  onClick={()=> logout()} className=" cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300">
            <LogOut size={17} />
            <span className="hidden  sm:inline">Logout</span>
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar