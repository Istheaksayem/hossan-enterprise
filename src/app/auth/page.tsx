'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { 
  Leaf, 
  ShoppingCart, 
  Tag, 
  History, 
  BellRing, 
  Eye, 
  EyeOff,
  User,
  Mail,
  Phone,
  MapPin,
  Lock
} from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations for the left panel
    if (leftPanelRef.current && featuresRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        leftPanelRef.current.querySelector('.brand-header'),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        leftPanelRef.current.querySelector('.brand-title'),
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.6"
      )
      .fromTo(
        leftPanelRef.current.querySelector('.brand-subtitle'),
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        "-=0.6"
      );

      const features = featuresRef.current.children;
      gsap.fromTo(
        features,
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          stagger: 0.15, 
          duration: 0.6, 
          ease: 'power2.out',
          delay: 0.5
        }
      );

      gsap.fromTo(
        leftPanelRef.current.querySelector('.stats-container'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );
    }
  }, []);

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative z-10" style={{ minHeight: '800px' }}>
        
        {/* Left Panel */}
        <div 
          ref={leftPanelRef}
          className="lg:w-1/2 relative hidden lg:flex flex-col justify-between p-12 text-white overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A4D2E 0%, #4F6F52 100%)' }}
        >
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
                 backgroundSize: '32px 32px' 
               }}>
          </div>
          
          <div className="relative z-10 brand-header">
            <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-green-200 transition-colors">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-wider">Hossan Enterprise</span>
            </Link>
          </div>

          <div className="relative z-10 mt-16 mb-12">
            <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-6 brand-title">
              <Leaf className="w-10 h-10 text-[#FFC107]" />
            </div>
            <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-4 brand-title">
              Your Premium <span className="text-[#FFC107]">Agricultural</span> Partner
            </h1>
            <p className="text-green-100 text-lg max-w-md brand-subtitle">
              Create an account to access premium farming supplies at wholesale prices. Experience seamless agriculture shopping.
            </p>
          </div>

          <div ref={featuresRef} className="space-y-6 relative z-10 mb-16">
            <FeatureItem 
              icon={<ShoppingCart />} 
              title="Easy Ordering System" 
              desc="Order anytime, track easily" 
            />
            <FeatureItem 
              icon={<Tag />} 
              title="Member Discounts" 
              desc="Get exclusive wholesale prices" 
            />
            <FeatureItem 
              icon={<History />} 
              title="Order History" 
              desc="Keep track of past purchases" 
            />
            <FeatureItem 
              icon={<BellRing />} 
              title="Product Notifications" 
              desc="Know when new stock arrives" 
            />
          </div>

          <div className="relative z-10 flex gap-8 pt-8 border-t border-white/20 stats-container">
            <StatItem value="500+" label="Products" />
            <StatItem value="100%" label="Secure" />
            <StatItem value="5★" label="Rating" />
          </div>
        </div>

        {/* Right Panel - Forms */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 xl:p-16 flex flex-col bg-[#FDFDFD]">
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8 text-[#1A4D2E]">
            <Leaf className="w-8 h-8" />
            <span className="text-2xl font-bold">Hossan Enterprise</span>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-100 p-1 rounded-xl mb-10 w-full max-w-md mx-auto relative shadow-inner">
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm"
              animate={{ left: isLogin ? '4px' : 'calc(50%)' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-semibold rounded-lg z-10 transition-colors flex justify-center items-center gap-2 ${isLogin ? 'text-[#1A4D2E]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <User className="w-4 h-4" /> Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-semibold rounded-lg z-10 transition-colors flex justify-center items-center gap-2 ${!isLogin ? 'text-[#1A4D2E]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <User className="w-4 h-4" /> Register
            </button>
          </div>

          <div className="flex-1 w-full max-w-md mx-auto relative">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back! 👋</h2>
                    <p className="text-gray-500">Log in to your account and start shopping.</p>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email or Phone Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] focus:border-transparent transition-all outline-none"
                          placeholder="e.g., email@example.com or 01XXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-sm font-medium text-gray-700">Password *</label>
                        <a href="#" className="text-sm text-[#1A4D2E] hover:underline font-medium">Forgot Password?</a>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input 
                          type={showPassword ? "text" : "password"} 
                          className="pl-10 pr-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] focus:border-transparent transition-all outline-none"
                          placeholder="Enter your password"
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input 
                        id="remember-me" 
                        type="checkbox" 
                        className="h-4 w-4 text-[#1A4D2E] focus:ring-[#1A4D2E] border-gray-300 rounded cursor-pointer"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                        Remember me
                      </label>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-[#1A4D2E] hover:bg-[#133A22] text-white font-semibold rounded-xl shadow-lg shadow-green-900/20 transition-all flex justify-center items-center gap-2"
                    >
                      <Lock className="w-4 h-4" /> Login Now
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="register"
                  variants={formVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account 🌱</h2>
                    <p className="text-gray-500">Join us for premium products and deals.</p>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-gray-400" />
                          </div>
                          <input type="text" className="pl-9 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-gray-400" />
                          </div>
                          <input type="text" className="pl-9 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="tel" className="pl-9 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" placeholder="01XXXXXXXXX" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="email" className="pl-9 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" placeholder="email@example.com (Optional)" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">District / Area *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="text" className="pl-9 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" placeholder="e.g., Dhaka, Gazipur" />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-4 w-4 text-gray-400" />
                          </div>
                          <input 
                            type={showPassword ? "text" : "password"} 
                            className="pl-9 pr-8 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" 
                            placeholder="Password" 
                          />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400">
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-4 w-4 text-gray-400" />
                          </div>
                          <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            className="pl-9 pr-8 w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A4D2E] outline-none transition-all text-sm" 
                            placeholder="Confirm" 
                          />
                          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400">
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start mt-2">
                      <input id="terms" type="checkbox" className="mt-1 h-4 w-4 text-[#1A4D2E] focus:ring-[#1A4D2E] border-gray-300 rounded cursor-pointer" />
                      <label htmlFor="terms" className="ml-2 block text-xs text-gray-600 cursor-pointer">
                        I agree to the <a href="#" className="text-[#1A4D2E] hover:underline font-medium">Terms and Conditions</a> and <a href="#" className="text-[#1A4D2E] hover:underline font-medium">Privacy Policy</a>
                      </label>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 mt-2 bg-[#1A4D2E] hover:bg-[#133A22] text-white font-semibold rounded-xl shadow-lg shadow-green-900/20 transition-all flex justify-center items-center gap-2"
                    >
                      <User className="w-4 h-4" /> Create Account
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social Logins */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#FDFDFD] text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex justify-center items-center gap-2 w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors shadow-sm font-medium text-gray-700">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                  Facebook
                </button>
                <button className="flex justify-center items-center gap-2 w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors shadow-sm font-medium text-gray-700">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-[#1A4D2E] hover:underline"
              >
                {isLogin ? "Register Now" : "Login Now"}
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-green-100 text-sm opacity-90">{desc}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-[#FFC107] mb-1">{value}</div>
      <div className="text-sm font-medium text-green-100 uppercase tracking-wider">{label}</div>
    </div>
  );
}
