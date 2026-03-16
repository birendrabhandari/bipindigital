import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OfferGrid from "./components/OfferGrid";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { Zap, Shield, Clock } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display mb-4">How to Claim Your Free Rewards</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Follow these simple steps to unlock your premium digital access.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">1. Choose Offer</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Select your desired reward from our list of verified premium digital offers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">2. Verify Identity</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Complete a quick verification by submitting your email or downloading a sponsored app.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">3. Instant Access</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Once verified, your reward link or code will be delivered instantly to your dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <OfferGrid />

        {/* CTA Section */}
        <section className="py-24 bg-indigo-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
              Ready to Claim Your Reward?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join over 500,000 users who trust BIPIN DIGITAL for their premium digital needs.
            </p>
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
