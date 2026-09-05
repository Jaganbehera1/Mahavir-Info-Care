import { Cpu, HardDrive, MemoryStick, Monitor, Keyboard, Mouse, Cable, Network, Power, CheckCircle2, Sparkles, Server, Zap, Shield, Cpu as CpuIcon, Package, TrendingUp, Award, Star, Wrench } from "lucide-react";
import { HARDWARE_ITEMS, IMAGES, PHONE_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const FEATURE_ICONS = [
  Cpu, HardDrive, MemoryStick, Monitor, Keyboard, Mouse,
  Power, Cable, Network, Cpu, HardDrive, Monitor,
];

// Enhanced hardware items with categories
const HARDWARE_CATEGORIES = [
  { name: "Processors", icon: Cpu, color: "from-blue-500 to-cyan-500" },
  { name: "Storage Drives", icon: HardDrive, color: "from-purple-500 to-pink-500" },
  { name: "RAM Modules", icon: MemoryStick, color: "from-orange-500 to-amber-500" },
  { name: "Monitors", icon: Monitor, color: "from-green-500 to-emerald-500" },
  { name: "Keyboards", icon: Keyboard, color: "from-red-500 to-rose-500" },
  { name: "Mice", icon: Mouse, color: "from-indigo-500 to-blue-500" },
  { name: "Power Supplies", icon: Power, color: "from-yellow-500 to-orange-500" },
  { name: "Cables & Wires", icon: Cable, color: "from-teal-500 to-cyan-500" },
  { name: "Network Devices", icon: Network, color: "from-fuchsia-500 to-purple-500" },

];

export function Hardware() {
  return (
    <section id="hardware" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-orange-300/15 to-yellow-300/15 blur-3xl" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-16 w-16 rounded-2xl rotate-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full -rotate-12 bg-gradient-to-br from-pink-400/10 to-orange-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/50 shadow-2xl shadow-blue-200/30 transition-all duration-300 hover:shadow-3xl hover:shadow-blue-300/40">
                <img
                  src={IMAGES.hardware}
                  alt="Computer hardware components and motherboard at MAHAVIR INFO CARE"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge - top */}
              <div className="absolute -top-4 -right-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-right-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-400/30">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Premium Quality</div>
                  <div className="text-xs font-medium text-slate-500">Genuine Products</div>
                </div>
              </div>

              {/* Floating badge - bottom */}
              <div className="absolute -bottom-4 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-left-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-400/30">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">12+ Years</div>
                  <div className="text-xs font-medium text-slate-500">Of Excellence</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            </div>
          </Reveal>

          {/* Content side */}
          <Reveal direction="right" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                Hardware Solutions
              </div>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Computer Sales &amp; <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Hardware Solutions</span>
              </h2>
              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                From complete desktop systems to individual components, we provide quality computer hardware
                for homes, offices, and businesses in Ranpur and surrounding areas.
              </p>

              {/* Stats badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 backdrop-blur-sm">
                  <Server className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">500+ Systems Sold</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-4 py-2 backdrop-blur-sm">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-slate-700">1 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 backdrop-blur-sm">
                  <Star className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-700">4.9 Rating</span>
                </div>
              </div>

              {/* Hardware categories grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {HARDWARE_CATEGORIES.map((category) => (
                  <div 
                    key={category.name}
                    className="group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                  >
                    <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <category.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{category.name}</span>
                  </div>
                ))}
              </div>

              {/* Feature highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/50 px-3 py-2">
                  <Package className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-700">Brand New Parts</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/50 px-3 py-2">
                  <Wrench className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold text-slate-700">Expert Installation</span>
                </div>
              </div>

              <a 
                href={PHONE_LINK} 
                className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-400/40"
              >
                <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Ask About Available Products
                <span className="text-xs font-normal opacity-70">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}