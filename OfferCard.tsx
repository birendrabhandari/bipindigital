import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ComponentType, Key } from "react";

interface OfferCardProps {
  key?: Key;
  title: string;
  description: string;
  icon: any;
  color: string;
  badge?: string;
  price?: string;
  delay?: number;
  link?: string;
}

export default function OfferCard({ title, description, icon: Icon, color, badge, price, delay = 0, link = "#" }: OfferCardProps) {
  const handleClaim = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {badge && (
        <span className="absolute top-6 right-6 px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
          {badge}
        </span>
      )}
      
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
        <div>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Starting from</span>
          <p className="text-lg font-bold text-slate-900">{price || "FREE"}</p>
        </div>
        <button 
          onClick={handleClaim}
          className="bg-slate-900 text-white p-3 rounded-xl hover:bg-indigo-600 transition-colors group/btn"
        >
          <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
        </button>
      </div>

      <button 
        onClick={handleClaim}
        className="w-full mt-6 bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-indigo-100"
      >
        Claim Now
      </button>
    </motion.div>
  );
}
