
import React, { useContext } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,

  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
  Package,
TrendingUp,
Star,
Tag,
Zap,
BadgePercent
} from 'lucide-react'
import { Auth } from '../context/AuthContext'

const Home = () => {
  const {loggedInUser,cartItem,total} = useContext(Auth)
  const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  if (hour < 21) return "Good Evening";
  return "Hello";
};

  return (
    <div className="min-h-screen bg-[#100B1D] text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-5 py-7">

        <div className="relative min-h-[calc(100vh-125px)] overflow-hidden rounded-[2rem] border border-purple-300/40 bg-[#100B1D] flex items-center">

          {/* Background Glow */}
          <div className="absolute -top-32 -right-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />

          <div className="absolute -bottom-32 left-10 w-80 h-80 bg-violet-500/10 blur-[100px] rounded-full" />

          <div className="relative grid w-full lg:grid-cols-[1.7fr_0.8fr] items-center gap-10 px-8 py-12 md:px-12 lg:px-16 lg:py-16">

            {/* LEFT SIDE */}
            <div>

              <div className="inline-flex items-center gap-2 text-purple-300 text-sm md:text-base font-semibold tracking-widest mb-7">
                {getGreeting()}
              </div>

              <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome back,
              </p>

              <h1 className="text-purple-400 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-3">
                {loggedInUser.name}
              </h1>

              <p className="text-gray-400 max-w-xl mt-7 text-base md:text-lg leading-relaxed">
                Discover today's picks — hand-curated products across
                electronics, fashion, and more.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/main/products"
                  className="flex items-center gap-3 bg-purple-500 hover:bg-purple-400 text-[#100B1D] px-7 py-4 rounded-xl font-semibold transition duration-300 shadow-lg shadow-purple-950/40 hover:-translate-y-1"
                >
                  Shop Now <ArrowRight size={19} />
                </Link>

                <Link
                  to="/main/products"
                  className="flex items-center gap-3 border border-purple-400/40 text-purple-200 hover:bg-purple-500/10 px-7 py-4 rounded-xl font-semibold transition duration-300"
                >
                  View All Products
                </Link>

              </div>

            </div>

            {/* RIGHT SIDE - STATISTICS */}
            <div className="flex flex-col gap-5 lg:pl-8">

              <div className="group rounded-[2rem] border border-purple-400/25 bg-[#1A1230]/80 backdrop-blur-sm p-7 md:p-9 hover:bg-purple-500/10 hover:border-purple-400/50 transition duration-300">

                <h3 className="text-4xl md:text-5xl font-bold text-purple-400 group-hover:text-purple-300 transition">
                  20+
                </h3>

                <p className="text-lg text-gray-300 mt-2">
                  Products Available
                </p>

              </div>

              <div className="group rounded-[2rem] border border-purple-400/25 bg-[#1A1230]/80 backdrop-blur-sm p-7 md:p-9 hover:bg-purple-500/10 hover:border-purple-400/50 transition duration-300">

                <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-purple-300 transition">
                  Free
                </h3>

                <p className="text-lg text-gray-300 mt-2">
                  Delivery on ₹999+
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>


      
{/* STATS AND BENEFITS SECTION */}
<section className="max-w-[1800px] mx-auto px-5 md:px-7 pt-12 pb-16">

  {/* TOP STATISTICS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

    {/* CART ITEMS */}
    <div className="min-h-[190px] border border-white/20 rounded-3xl bg-[#0D0D0D] flex items-center justify-center gap-7 p-7 hover:border-lime-400/40 transition duration-300">

      <div className="w-14 h-14 rounded-xl bg-lime-500/15 flex items-center justify-center text-lime-400">
        <Package size={38} />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white">{cartItem.length}</h3>
        <p className="text-lg text-white mt-1">{(cartItem.length==1)? "Cart Item": "Cart Items"}</p>
        <p className="text-gray-500 mt-1">In your bag</p>
      </div>

    </div>

    {/* CART VALUE */}
    <div className="min-h-[190px] border border-white/20 rounded-3xl bg-[#0D0D0D] flex items-center justify-center gap-7 p-7 hover:border-blue-400/40 transition duration-300">

      <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
        <TrendingUp size={38} />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white">${total.toFixed(2)}</h3>
        <p className="text-lg text-white mt-1">Cart Value</p>
        <p className="text-gray-500 mt-1">Ready to checkout</p>
      </div>

    </div>

    {/* TOP PRODUCTS */}
    <div className="min-h-[190px] border border-white/20 rounded-3xl bg-[#0D0D0D] flex items-center justify-center gap-7 p-7 hover:border-yellow-400/40 transition duration-300">

      <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center text-white">
        <Star size={38} />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white">5</h3>
        <p className="text-lg text-white mt-1">Top Products</p>
        <p className="text-gray-500 mt-1">Highly rated</p>
      </div>

    </div>

    {/* CATEGORIES */}
    <div className="min-h-[190px] border border-white/20 rounded-3xl bg-[#0D0D0D] flex items-center justify-center gap-7 p-7 hover:border-purple-400/40 transition duration-300">

      <div className="w-14 h-14 rounded-xl bg-purple-600/50 flex items-center justify-center text-white">
        <Tag size={38} />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-white">6</h3>
        <p className="text-lg text-white mt-1">Categories</p>
        <p className="text-gray-500 mt-1">To explore</p>
      </div>

    </div>

  </div>


  {/* BOTTOM BENEFITS */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-14">

    {/* FAST DELIVERY */}
    <div className="min-h-[178px] border border-white/20 rounded-3xl bg-[#101010] flex items-center gap-7 px-8 py-7 hover:border-lime-400/40 transition duration-300">

      <div className="w-[72px] h-[72px] shrink-0 rounded-2xl bg-lime-500/15 flex items-center justify-center text-lime-400">
        <Zap size={38} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          Fast Delivery
        </h3>
        <p className="text-gray-400 mt-3">
          Same-day delivery on select items
        </p>
      </div>

    </div>


    {/* SECURE PAYMENTS */}
    <div className="min-h-[178px] border border-white/20 rounded-3xl bg-[#101010] flex items-center gap-7 px-8 py-7 hover:border-blue-400/40 transition duration-300">

      <div className="w-[72px] h-[72px] shrink-0 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-400">
        <ShieldCheck size={38} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          Secure Payments
        </h3>
        <p className="text-gray-400 mt-3">
          100% secure checkout
        </p>
      </div>

    </div>


    {/* BEST DEALS */}
    <div className="min-h-[178px] border border-white/20 rounded-3xl bg-[#101010] flex items-center gap-7 px-8 py-7 hover:border-purple-400/40 transition duration-300">

      <div className="w-[72px] h-[72px] shrink-0 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-400">
        <BadgePercent size={38} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">
          Best Deals
        </h3>
        <p className="text-gray-400 mt-3">
          Great products at great prices
        </p>
      </div>

    </div>

  </div>

  {/* BOTTOM DIVIDER */}
  <div className="border-b border-white/10 mt-20" />

</section>



      
{/* FOOTER */}
<footer className="bg-[#0B0714] border-t border-purple-900/40">

  <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-10">

    {/* MAIN FOOTER */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-20">

      {/* BRAND SECTION */}
      <div>

        <h2 className="text-3xl font-bold text-white tracking-tight">
          Nova<span className="text-purple-400">Cart</span>
        </h2>

        <p className="text-gray-400 text-base leading-relaxed mt-6 max-w-xl">
          Discover amazing products across electronics, fashion, and
          more. Shop smarter, faster, and easier with Nova Cart.
        </p>

        <Link
          to="/main/products"
          className="inline-flex items-center gap-3 mt-8 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-base transition duration-300 hover:-translate-y-1 shadow-lg shadow-purple-950/30"
        >
          Start Shopping <ArrowRight size={19} />
        </Link>

      </div>


      {/* QUICK LINKS */}
      <div>

        <h3 className="text-lg font-semibold text-white mb-7">
          Quick Links
        </h3>

        <div className="flex flex-col gap-5 text-gray-400 text-base">

          <Link to="/main" className="hover:text-purple-400 transition">
            Home
          </Link>

          <Link to="/main/products" className="hover:text-purple-400 transition">
            Shop
          </Link>

          <Link to="/main/about" className="hover:text-purple-400 transition">
            About
          </Link>

          <Link to="/main/cart" className="hover:text-purple-400 transition">
            Cart
          </Link>

        </div>

      </div>


      {/* CUSTOMER SUPPORT */}
      <div>

        <h3 className="text-lg font-semibold text-white mb-7">
          Customer Support
        </h3>

        <div className="flex flex-col gap-5 text-gray-400 text-base">
          <p>Help Center</p>
          <p>Shipping & Delivery</p>
          <p>Returns & Refunds</p>
          <p>Contact Us</p>
        </div>

      </div>

    </div>


    {/* BOTTOM FOOTER */}
    <div className="border-t border-purple-900/40 mt-14 pt-7 flex flex-col sm:flex-row justify-between items-center gap-5">

      <p className="text-gray-500 text-sm">
        © 2026 Nova Cart. All rights reserved.
      </p>

      <p className="text-gray-500 text-sm">
        Built with React + Tailwind
      </p>

    </div>

  </div>

</footer>
    </div>
  )
}

export default Home
