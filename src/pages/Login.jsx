
import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { ShoppingBag, Mail, Lock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Auth } from '../context/AuthContext'
import { toast } from "react-toastify";
const Login = () => {
    let navigate = useNavigate()
    let {registeredUser,loggedInUser,setLoggedInUser} = useContext(Auth)
    let {register,
        handleSubmit,
        reset,
        formState:{errors},

    } = useForm();
    let formSubmit = (data)=>{
        let user = registeredUser.find((val)=>{
            return val.email === data.email && val.password === data.password 
        })
        if(!user){
            toast.error("user not found")
            reset
            return
        }
        setLoggedInUser(user)
        localStorage.setItem("loggedInUser",JSON.stringify(user))
        toast.success("User Logged In");
         reset()
        navigate('/main')
       
    }
  return (
    <div className="min-h-screen bg-[#100B1D] flex items-center justify-center px-4 py-10 text-white">

      <div className="w-full max-w-md bg-[#1A1230] border border-purple-900/50 rounded-2xl p-8 shadow-2xl">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-purple-600 p-2 rounded-lg">
            <ShoppingBag size={24} />
          </div>
          <span className="text-2xl font-bold">
            Nova <span className="text-purple-400">Cart</span>
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm">
            Login to continue shopping with Nova Cart
          </p>
        </div>

       <form onSubmit={handleSubmit(formSubmit)}>
         {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>

          <div className="flex items-center gap-3 bg-[#100B1D] border border-purple-900/60 rounded-xl px-4">
            <Mail size={18} className="text-purple-400" />
            <input
            {...register("email",{
                required:"Email is required"
            })}
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent py-3.5 outline-none text-white placeholder-gray-500"
            />
            {errors.email &&  <p>{errors.email.message}</p>}
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <div className="flex items-center gap-3 bg-[#100B1D] border border-purple-900/60 rounded-xl px-4">
            <Lock size={18} className="text-purple-400" />
            <input
            {...register("password",{
                required:"Password is required",
                minLength:{
                    value:6,
                    message:"password must contain 6 charaters"
                }
            })}
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent py-3.5 outline-none text-white placeholder-gray-500"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>

        {/* Login Button */}
        <button type='submit' className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-3.5 rounded-xl font-semibold text-white">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-400 mt-7">
          Don't have an account?{' '}
          <button className="text-purple-400 hover:text-purple-300 font-semibold"
           onClick={()=> navigate('/register')}>
            Create Account
          </button>
        </p>
       </form>

      </div>
    </div>
  )
}

export default Login
