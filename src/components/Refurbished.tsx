import { Laptop, CheckCircle2, GraduationCap, Building2, Briefcase, ShieldCheck, Settings, Sparkles, Star, Award, Zap, Users, Clock, TrendingUp, Cpu, MemoryStick, HardDrive } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const FEATURES = [
  { icon: GraduationCap, title: "Suitable for Students", desc: "Budget-friendly options for study and projects", color: "from-blue-500 to-cyan-500" },
  { icon: Building2, title: "Suitable for Offices", desc: "Reliable machines for daily office work", color: "from-purple-500 to-pink-500" },
  { icon: Briefcase, title: "Suitable for Business", desc: "Cost-effective systems for business use", color: "from-orange-500 to-amber-500" },
  { icon: ShieldCheck, title: "Tested Hardware", desc: "Each unit checked before delivery", color: "from-emerald-500 to-green-500" },
  { icon: Settings, title: "Software Setup Available", desc: "OS and essential software pre-installed", color: "from-red-500 to-rose-500" },
  { icon: CheckCircle2, title: "Budget-Friendly", desc: "Affordable computing without compromise", color: "from-indigo-500 to-blue-500" },
];

const SPECS = [
  { icon: Cpu, label: "Intel Core i3/i5/i7", color: "text-blue-500" },
  { icon: MemoryStick, label: "4GB - 16GB RAM", color: "text-purple-500" },
  { icon: HardDrive, label: "256GB - 1TB Storage", color: "text-emerald-500" },
  { icon: Laptop, label: "14\" - 15.6\" Display", color: "text-orange-500" },
];

const STATS = [
  { number: "500+", label: "Laptops Sold", icon: TrendingUp },
  { number: "4.8", label: "Customer Rating", icon: Star },
  { number: "100%", label: "Tested Quality", icon: ShieldCheck },
  { number: "1 Year", label: "Warranty", icon: Award },
];

export function Refurbished() {
  return (
    <section id="refurbished" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-300/20 to-teal-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300/15 to-orange-300/15 blur-3xl" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-16 w-16 rounded-2xl rotate-12 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full -rotate-12 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/50 shadow-2xl shadow-emerald-200/30 transition-all duration-300 hover:shadow-3xl hover:shadow-emerald-300/40">
                <img
                  src={IMAGES.refurbished}
                  alt="Quality refurbished laptops at MAHAVIR INFO CARE"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge - top */}
              <div className="absolute -top-4 -right-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-right-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-400/30">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Quality Assured</div>
                  <div className="text-xs font-medium text-slate-500">100% Tested</div>
                </div>
              </div>

              {/* Floating badge - bottom */}
              <div className="absolute -bottom-4 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-left-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-400/30">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Save Big</div>
                  <div className="text-xs font-medium text-slate-500">Up to 40% Off</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-blue-500/20 blur-3xl" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="right" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                Refurbished Laptops
              </div>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Quality <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Refurbished Laptops</span>
              </h2>
              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                Looking for an affordable laptop? We offer refurbished and budget-friendly computers
                that are tested and ready to use — perfect for students, offices, and home use.
              </p>

              {/* Stats badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div 
                    key={stat.label}
                    className="rounded-xl border border-emerald-100/80 bg-white/70 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <stat.icon className="h-3.5 w-3.5 text-emerald-500" />
                      <div className="text-lg font-extrabold text-slate-900">{stat.number}</div>
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 text-center mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features grid */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <div 
                    key={f.title} 
                    className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50"
                  >
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <f.icon className="h-4.5 w-4.5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 leading-tight">{f.title}</div>
                      <div className="text-xs text-slate-500 leading-relaxed mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specifications chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {SPECS.map((spec) => (
                  <span 
                    key={spec.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-emerald-200 hover:shadow-md"
                  >
                    <spec.icon className={`h-3.5 w-3.5 ${spec.color}`} />
                    {spec.label}
                  </span>
                ))}
              </div>

              {/* Enhanced Disclaimer */}
              <div className="mt-5 rounded-2xl border border-emerald-100/80 bg-gradient-to-r from-emerald-50/80 via-teal-50/80 to-cyan-50/80 p-4 shadow-lg shadow-emerald-100/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-400/30">
                    <Clock className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Limited Stock Available</p>
                    <p className="text-sm text-slate-600 mt-0.5">Availability varies. Contact us for current models and pricing.</p>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-emerald-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-400/40"
              >
                <Laptop className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Check Laptop Availability
                <span className="text-xs font-normal opacity-70">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}