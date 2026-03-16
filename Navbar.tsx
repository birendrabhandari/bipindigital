import { motion } from "motion/react";
import { Gift, Shield, PlayCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-slate-900">
              BIPIN <span className="text-indigo-600">DIGITAL</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#offers" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Offers</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How it Works</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#offers" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">Offers</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">How it Works</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-base font-medium text-slate-600">FAQ</a>
          <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl text-base font-semibold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}
