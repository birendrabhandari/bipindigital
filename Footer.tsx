import { Gift, Twitter, Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-slate-900">
                BIPIN DIGITAL
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The world's leading platform for digital rewards and premium subscriptions. Trusted by millions worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Browse Offers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Rewards Program</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-500 mb-4">Get the latest offers delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
              <button className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col items-center gap-6">
          <p className="text-sm text-slate-400 text-center">
            © 2026 BIPIN DIGITAL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
