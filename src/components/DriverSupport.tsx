import { Download, Monitor, Printer, Settings, Bug, SlidersHorizontal, Info, CheckCircle, Sparkles, Wrench, Zap, Phone } from "lucide-react";
import { PHONE_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const SUPPORT_ITEMS = [
  { icon: Monitor, title: "Operating System Installation", desc: "Windows setup and configuration", color: "from-blue-500 to-cyan-500" },
  { icon: Download, title: "Device Driver Installation", desc: "Hardware drivers for all devices", color: "from-purple-500 to-pink-500" },
  { icon: Settings, title: "Application Software Installation", desc: "Essential apps and utilities", color: "from-orange-500 to-amber-500" },
  { icon: Bug, title: "Software Troubleshooting", desc: "Fix errors and software conflicts", color: "from-red-500 to-rose-500" },
  { icon: SlidersHorizontal, title: "System Configuration", desc: "Optimized settings for performance", color: "from-green-500 to-emerald-500" },
  { icon: Monitor, title: "Windows Setup", desc: "Fresh installation and activation", color: "from-teal-500 to-cyan-500" },
  { icon: Printer, title: "Printer Driver Setup", desc: "Printer installation and configuration", color: "from-indigo-500 to-blue-500" },
  { icon: Download, title: "Hardware Driver Setup", desc: "All peripheral device drivers", color: "from-fuchsia-500 to-purple-500" },
  { icon: SlidersHorizontal, title: "Basic System Optimization", desc: "Speed up your computer", color: "from-emerald-500 to-green-500" },
  { icon: Settings, title: "Application Configuration", desc: "Setup apps to your requirements", color: "from-amber-500 to-yellow-500" },
];

// Category labels for visual grouping
const CATEGORIES = {
  "Operating System Installation": "OS",
  "Windows Setup": "OS",
  "Device Driver Installation": "Driver",
  "Hardware Driver Setup": "Driver",
  "Printer Driver Setup": "Driver",
  "Application Software Installation": "App",
  "Application Configuration": "App",
  "Software Troubleshooting": "Support",
  "System Configuration": "Config",
  "Basic System Optimization": "Config",
};

export function DriverSupport() {
  return (
    <section id="drivers" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300/15 to-orange-300/15 blur-3xl" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-16 w-16 rounded-2xl rotate-12 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full -rotate-12 bg-gradient-to-br from-pink-400/10 to-orange-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            Software &amp; Driver Support
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Software &amp; <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Driver Support</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Complete software installation, driver setup, and system configuration for your computers and laptops.
            <span className="block text-sm text-slate-500 mt-2">
              <span className="inline-flex items-center gap-1.5">
                <Wrench className="h-4 w-4 text-indigo-400" />
                Professional support for all your tech needs
              </span>
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SUPPORT_ITEMS.map((item, i) => {
            const category = CATEGORIES[item.title as keyof typeof CATEGORIES] || "General";
            const categoryColors = {
              OS: "border-blue-200 bg-blue-50/50 text-blue-600",
              Driver: "border-purple-200 bg-purple-50/50 text-purple-600",
              App: "border-orange-200 bg-orange-50/50 text-orange-600",
              Support: "border-red-200 bg-red-50/50 text-red-600",
              Config: "border-green-200 bg-green-50/50 text-green-600",
              General: "border-slate-200 bg-slate-50/50 text-slate-600",
            };

            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-200/30 hover:-translate-y-1">
                  {/* Colorful gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  
                  {/* Category badge */}
                  <div className="absolute right-3 top-3">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryColors[category as keyof typeof categoryColors] || categoryColors.General}`}>
                      {category}
                    </span>
                  </div>

                  <div className="relative">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-tight">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    
                    {/* Decorative checkmark on hover */}
                    <div className="absolute -bottom-2 -right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <CheckCircle className="h-5 w-5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Enhanced Disclaimer */}
        <Reveal className="mt-10">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 p-5 shadow-lg shadow-indigo-100/30 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-400/30">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Software availability and licensing depend on the specific software.
                </p>
                <p className="text-sm text-slate-600 mt-0.5">
                  Contact us to discuss your requirements and get personalized recommendations.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle className="h-3 w-3" />
                    Genuine Licenses
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    <Zap className="h-3 w-3" />
                    Fast Setup
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                    <Settings className="h-3 w-3" />
                    Custom Configuration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Enhanced CTA */}
        <Reveal className="mt-8 text-center">
          <a
            href={PHONE_LINK}
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-400/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-400/50"
          >
            <Download className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Get Software Support
            <span className="text-xs font-normal opacity-70">→</span>
          </a>
          <p className="mt-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-indigo-400" />
              Call us for immediate assistance
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}