import { Printer, Cpu, Cable, HardDrive, MemoryStick, Keyboard, Mouse, Plug, Wrench, Package, Sparkles, Shield, Award, CheckCircle, Server, Monitor, Smartphone, Headphones, Settings, Zap, Star } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const PARTS = [
  { icon: Cpu, name: "Computer Parts", color: "from-blue-500 to-cyan-500" },
  { icon: Plug, name: "Laptop Parts", color: "from-purple-500 to-pink-500" },
  { icon: Printer, name: "Printer Parts", color: "from-orange-500 to-amber-500" },
  { icon: Cable, name: "Cables", color: "from-emerald-500 to-green-500" },
  { icon: Wrench, name: "Adapters", color: "from-red-500 to-rose-500" },
  { icon: Plug, name: "Power Supplies", color: "from-yellow-500 to-orange-500" },
  { icon: HardDrive, name: "Storage Devices", color: "from-indigo-500 to-blue-500" },
  { icon: MemoryStick, name: "RAM", color: "from-fuchsia-500 to-purple-500" },
  { icon: HardDrive, name: "SSD", color: "from-teal-500 to-cyan-500" },
  { icon: Keyboard, name: "Keyboards", color: "from-rose-500 to-pink-500" },
  { icon: Mouse, name: "Mouse", color: "from-amber-500 to-yellow-500" },
  { icon: Package, name: "Accessories", color: "from-sky-500 to-blue-500" },
];

const FEATURES = [
  { icon: Shield, label: "Genuine Products", color: "text-emerald-500" },
  { icon: Award, label: "1 Year Warranty", color: "text-blue-500" },
  { icon: Zap, label: "Quick Delivery", color: "text-yellow-500" },
  { icon: Star, label: "Quality Assured", color: "text-purple-500" },
];

export function PrinterParts() {
  return (
    <section id="parts" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-orange-300/15 to-yellow-300/15 blur-3xl" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-16 w-16 rounded-2xl rotate-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full -rotate-12 bg-gradient-to-br from-pink-400/10 to-orange-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            Parts &amp; Accessories
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Computer, Laptop &amp; <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Printer Parts</span> Available
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            A wide range of IT components and accessories to keep your systems running smoothly.
            <span className="block text-sm text-slate-500 mt-2">
              <span className="inline-flex items-center gap-1.5">
                <Settings className="h-4 w-4 text-blue-400" />
                All parts are genuine and tested for quality
              </span>
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Product cards grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PARTS.map((part, i) => (
              <Reveal key={part.name} delay={i * 40}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${part.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  
                  <div className="relative flex flex-col items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${part.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <part.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-700 leading-tight">{part.name}</span>
                    
                    {/* Decorative dot indicator */}
                    <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Image + CTA - Enhanced */}
          <Reveal direction="right">
            <div className="relative h-full">
              <div className="overflow-hidden rounded-3xl border border-white/50 shadow-2xl shadow-blue-200/30 transition-all duration-300 hover:shadow-3xl hover:shadow-blue-300/40">
                <img
                  src={IMAGES.printer}
                  alt="Printer and computer parts available at MAHAVIR INFO CARE"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 lg:aspect-auto lg:h-full lg:min-h-[20rem]"
                  loading="lazy"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-3 hidden rounded-2xl bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg shadow-emerald-400/30">
                    <Shield className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">100% Genuine</div>
                    <div className="text-[10px] font-medium text-slate-500">Quality Assured</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden rounded-2xl bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-400/30">
                    <Award className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">1 Year Warranty</div>
                    <div className="text-[10px] font-medium text-slate-500">On All Parts</div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Overlay */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-md ring-1 ring-white/50 transition-all duration-300 hover:bg-white hover:shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-400/30">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-extrabold text-slate-900">Need a specific part?</p>
                    <p className="mt-0.5 text-xs text-slate-500">Contact us — we'll help you find the right component.</p>
                  </div>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-400/40"
                >
                  <Package className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  Ask for Parts
                  <span className="text-xs font-normal opacity-70">→</span>
                </a>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            </div>
          </Reveal>
        </div>

        {/* Features section */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FEATURES.map((feature) => (
              <div 
                key={feature.label}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
              >
                <feature.icon className={`h-4 w-4 ${feature.color}`} />
                <span className="text-xs font-semibold text-slate-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Trust indicator */}
        <Reveal className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 px-4 py-2 backdrop-blur-sm">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-xs font-medium text-slate-600">All parts are genuine, tested, and backed by warranty</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}