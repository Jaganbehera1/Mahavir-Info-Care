import {
  Layers, Cpu, MapPin, MonitorSmartphone, Code2, Users,
  Sparkles, Shield, Award, Star, Zap, CheckCircle, Heart, TrendingUp, Clock,
  type LucideIcon,
} from "lucide-react";
import { REASONS } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Layers, Cpu, MapPin, MonitorSmartphone, Code2, Users,
};

const REASON_COLORS = [
  { icon: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50", border: "border-blue-100", shadow: "shadow-blue-500/30", text: "text-blue-600", hover: "hover:border-blue-300" },
  { icon: "from-purple-500 to-pink-500", bg: "from-purple-50 to-pink-50", border: "border-purple-100", shadow: "shadow-purple-500/30", text: "text-purple-600", hover: "hover:border-purple-300" },
  { icon: "from-orange-500 to-amber-500", bg: "from-orange-50 to-amber-50", border: "border-orange-100", shadow: "shadow-orange-500/30", text: "text-orange-600", hover: "hover:border-orange-300" },
  { icon: "from-emerald-500 to-green-500", bg: "from-emerald-50 to-green-50", border: "border-emerald-100", shadow: "shadow-emerald-500/30", text: "text-emerald-600", hover: "hover:border-emerald-300" },
  { icon: "from-red-500 to-rose-500", bg: "from-red-50 to-rose-50", border: "border-red-100", shadow: "shadow-red-500/30", text: "text-red-600", hover: "hover:border-red-300" },
  { icon: "from-indigo-500 to-blue-500", bg: "from-indigo-50 to-blue-50", border: "border-indigo-100", shadow: "shadow-indigo-500/30", text: "text-indigo-600", hover: "hover:border-indigo-300" },
];

const STATS = [
  { number: "12+", label: "Years Experience", icon: Award },
  { number: "1000+", label: "Happy Clients", icon: Users },
  { number: "4.9", label: "Rating", icon: Star },
  { number: "100%", label: "Satisfaction", icon: Shield },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-green-50/30 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-orange-300/20 to-amber-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-300/20 to-emerald-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/15 to-purple-300/15 blur-3xl" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-16 w-16 rounded-2xl rotate-12 bg-gradient-to-br from-orange-400/10 to-amber-400/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full -rotate-12 bg-gradient-to-br from-green-400/10 to-emerald-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-white/20 to-green-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Us
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Why Choose <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-green-500 bg-clip-text text-transparent">MAHAVIR INFO CARE?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            We bring together hardware, software, and educational expertise to serve our local community.
          </p>
        </Reveal>

        {/* Stats Section */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div 
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-orange-100/50 bg-white/80 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100/50 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-green-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center justify-center gap-1.5">
                  <stat.icon className="h-4 w-4 text-orange-500" />
                  <div className="text-xl font-extrabold text-slate-900">{stat.number}</div>
                </div>
                <div className="relative text-[10px] font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Reasons Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => {
            const Icon = ICONS[reason.icon];
            const color = REASON_COLORS[i % REASON_COLORS.length];
            return (
              <Reveal key={reason.title} delay={i * 100}>
                <div className={`group relative h-full overflow-hidden rounded-2xl border ${color.border} bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100/50 ${color.hover}`}>
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.icon} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
                  
                  {/* Top gradient bar - Tricolor */}
                  <div className="absolute inset-x-0 top-0 h-1 flex">
                    <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-orange-400" />
                    <div className="h-full w-1/3 bg-gradient-to-r from-white/50 to-white/30" />
                    <div className="h-full w-1/3 bg-gradient-to-r from-green-500 to-green-400" />
                  </div>

                  {/* Background glow */}
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${color.icon} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />

                  <div className="relative">
                    {/* Icon container */}
                    <div className={`relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color.icon} shadow-lg ${color.shadow} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-8 w-8 text-white" />
                      {/* Sparkle overlay */}
                      <div className="absolute -top-1 -right-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Sparkles className="h-4 w-4 text-yellow-400" />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {reason.desc}
                    </p>

                    {/* Trust badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        <CheckCircle className="h-2.5 w-2.5 text-emerald-500" />
                        Trusted
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
                        <Zap className="h-2.5 w-2.5 text-blue-500" />
                        Reliable
                      </span>
                    </div>
                  </div>

                  {/* Check mark accent - Enhanced */}
                  <div className={`absolute bottom-4 right-4 text-slate-200 transition-all duration-300 group-hover:${color.text} group-hover:scale-110 group-hover:rotate-12`}>
                    <CheckCircle className="h-6 w-6" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 text-xs font-bold text-slate-300/50 transition-all duration-300 group-hover:text-slate-400">
                    #{String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Trust Section */}
        <Reveal className="mt-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-orange-100/50 bg-gradient-to-r from-orange-50/80 via-white/80 to-green-50/80 p-6 shadow-lg shadow-orange-100/30 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-green-500 shadow-lg shadow-orange-400/30">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-800">We Care About Your Success</p>
                  <p className="text-xs text-slate-500">Join 1000+ satisfied customers in Ranpur</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-green-400 flex items-center justify-center text-xs font-bold text-white">
                    +
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-slate-700">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal className="mt-6 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-green-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/40"
          >
            <Users className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Join Our Happy Customers
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-orange-400" />
              Get started today with a free consultation
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// Add this import at the top
