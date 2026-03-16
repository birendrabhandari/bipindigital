import { CreditCard, ShieldCheck, Play, Smartphone, Globe, Zap, Palette } from "lucide-react";
import OfferCard from "./OfferCard";

export default function OfferGrid() {
  const offers = [
    {
      title: "Canva Pro Access",
      description: "Unlock premium design tools and templates. Get your Canva Pro invite link instantly after verification.",
      icon: Palette,
      color: "bg-cyan-500",
      badge: "Hot",
      price: "FREE",
      delay: 0.1,
      link: "https://your-cpa-link-here.com" // Yahan apna CPA link dalein
    },
    {
      title: "PayPal Gift Cards",
      description: "Get instant PayPal credit to spend anywhere online. Available in $10, $25, $50, and $100 denominations.",
      icon: CreditCard,
      color: "bg-blue-600",
      badge: "Popular",
      price: "FREE",
      delay: 0.2,
      link: "https://your-cpa-link-here.com"
    },
    {
      title: "Premium VPN Access",
      description: "Secure your connection with top-tier VPN subscriptions. Unlimited bandwidth and global server access.",
      icon: ShieldCheck,
      color: "bg-indigo-600",
      badge: "Best Value",
      price: "FREE",
      delay: 0.3,
      link: "https://your-cpa-link-here.com"
    },
    {
      title: "Google Play Cards",
      description: "Unlock apps, games, and movies on the Play Store. Instant digital delivery to your inbox.",
      icon: Play,
      color: "bg-emerald-600",
      price: "FREE",
      delay: 0.4,
      link: "https://your-cpa-link-here.com"
    },
    {
      title: "Mobile Top-ups",
      description: "Recharge your mobile balance instantly for any carrier worldwide. Fast and reliable service.",
      icon: Smartphone,
      color: "bg-orange-500",
      price: "FREE",
      delay: 0.5,
      link: "https://your-cpa-link-here.com"
    },
    {
      title: "Streaming Subs",
      description: "Premium access to your favorite music and movie streaming platforms at discounted rates.",
      icon: Globe,
      color: "bg-rose-500",
      badge: "New",
      price: "FREE",
      delay: 0.6,
      link: "https://your-cpa-link-here.com"
    },
    {
      title: "Gaming Credits",
      description: "In-game currency and battle passes for the most popular titles. Level up your gaming experience.",
      icon: Zap,
      color: "bg-violet-600",
      price: "FREE",
      delay: 0.7,
      link: "https://your-cpa-link-here.com"
    }
  ];

  return (
    <section id="offers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-4">Featured Digital Offers</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our curated selection of premium digital rewards. All offers are verified and delivered instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard 
              key={index} 
              title={offer.title}
              description={offer.description}
              icon={offer.icon}
              color={offer.color}
              badge={offer.badge}
              price={offer.price}
              delay={offer.delay}
              link={offer.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
