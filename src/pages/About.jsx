
import { ArrowRight, Headphones, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const About = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Quality Products',
      description: 'We provide premium quality products from trusted sellers.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and secure delivery at your doorstep.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      description: 'Your payments are safe with our secure system.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our support team is always ready to help you.'
    }
  ]
  return (
    <section className="min-h-screen bg-[#100B1D] text-white px-5 md:px-10 py-16">

      <div className="max-w-7xl mx-auto">


        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          About <span className="text-purple-500">Our Store</span>
        </h1>

        <p className=" text-center max-w-5xl mx-auto text-gray-400 text-md md:text-xl leading-relaxed mt-4">
          Welcome to our online shopping platform where quality meets
          convenience. We bring you the best products with a smooth,
          secure and enjoyable shopping experience.
        </p>

      </div>
      <div>
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-9">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="bg-[#1A1230] border border-purple-900/40
                rounded-3xl p-8 hover:border-purple-500
                transition duration-300"
              >
                <Icon
                  size={48}
                  strokeWidth={2}
                  className="text-purple-500 mb-8"
                />

                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  {feature.title}
                </h2>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}

        </div>

        {/* Our Mission */}
        <div className="mt-15 bg-[#1A1230] border border-purple-900/40
        rounded-3xl px-6 md:px-12 py-7 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our <span className="text-purple-500">Mission</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed ">
            Our mission is to deliver a reliable shopping experience
            by combining technology, quality products and excellent
            customer service.
          </p>

        </div>

        {/* Start Shopping */}
        <div className="text-center mt-15">

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Start Shopping <span className="text-purple-500">With Us</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Discover products you'll love and enjoy a seamless shopping
            experience with Nova Cart.
          </p>

          <Link
            to="/main/products"
            className="inline-flex items-center gap-3 bg-purple-600
            hover:bg-purple-700 text-white font-semibold
            px-6 py-3 rounded-3xl transition duration-300"
          >
            Explore Products <ArrowRight size={20} />
          </Link>

        </div>
      </div>
    </section>
  )
}

export default About

