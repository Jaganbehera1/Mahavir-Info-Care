import { Wrench, AlertTriangle, Cpu, HardDrive, MemoryStick, Monitor, Keyboard, Battery, Download, Bug, Settings, Replace, Sparkles, Shield, Clock, Zap, Award, CheckCircle, Users, Star, Microscope, Gauge, Thermometer } from "lucide-react";
import { REPAIR_ISSUES, IMAGES, WHATSAPP_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const ISSUE_ICONS = [
  AlertTriangle, Cpu, Download, Bug, HardDrive, MemoryStick,
  Monitor, Keyboard, Battery, Download, Bug, Settings,
  Download, Replace, Wrench,
];

const REPAIR_FEATURES = [
  { icon: Shield, label: "100% Safe Repair", color: "from-emerald-500 to-green-500" },
  { icon: Clock, label: "Quick Turnaround", color: "from-blue-500 to-cyan-500" },
  { icon: Award, label: "Expert Technicians", color: "from-purple-500 to-pink-500" },
  { icon: Users, label: "Trusted Service", color: "from-orange-500 to-amber-500" },
];

const STATS = [
  { number: "1000+", label: "Devices Repaired", icon: Wrench },
  { number: "4.9", label: "Service Rating", icon: Star },
  { number: "98%", label: "Success Rate", icon: CheckCircle },
  { number: "24hr", label: "Avg. Repair Time", icon: Clock },
];

const SPECIALTIES = [
  { icon: Cpu, label: "Motherboard Repair", color: "text-blue-500" },
  { icon: HardDrive, label: "Data Recovery", color: "text-emerald-500" },
  { icon: Battery, label: "Battery Replacement", color: "text-orange-500" },
  { icon: Monitor, label: "Screen Repair", color: "text-purple-500" },
  { icon: Keyboard, label: "Keyboard Fix", color: "text-rose-500" },
  { icon: Settings, label: "Software Fix", color: "text-cyan-500" },
];

export function Repair() {
  return (
    <section id="repair" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/30 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-orange-300/20 to-amber-300/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300/15 to-orange-300/15 blur-3xl" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-16 w-16 rounded-2xl rotate-12 bg-gradient-to-br from-orange-400/10 to-amber-400/10 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full -rotate-12 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <Reveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                Repair Services
              </div>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Computer &amp; <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">Laptop Repair</span>
              </h2>
              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                Reliable solutions for hardware and software problems. Whether your computer won't start
                or your laptop is running slow, we diagnose and fix the issue.
              </p>

              {/* Stats badges */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div 
                    key={stat.label}
                    className="rounded-xl border border-orange-100/80 bg-white/70 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <stat.icon className="h-3.5 w-3.5 text-orange-500" />
                      <div className="text-lg font-extrabold text-slate-900">{stat.number}</div>
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 text-center mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Repair issues grid */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {REPAIR_ISSUES.map((issue, i) => {
                  const Icon = ISSUE_ICONS[i % ISSUE_ICONS.length];
                  const colors = [
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-orange-500 to-amber-500",
                    "from-emerald-500 to-green-500",
                    "from-red-500 to-rose-500",
                    "from-indigo-500 to-blue-500",
                    "from-yellow-500 to-orange-500",
                    "from-teal-500 to-cyan-500",
                    "from-fuchsia-500 to-purple-500",
                    "from-rose-500 to-pink-500",
                    "from-amber-500 to-yellow-500",
                    "from-sky-500 to-blue-500",
                    "from-lime-500 to-emerald-500",
                    "from-violet-500 to-purple-500",
                    "from-orange-500 to-amber-500",
                  ];
                  const color = colors[i % colors.length];
                  return (
                    <div 
                      key={issue} 
                      className="group flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/70 p-2.5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50"
                    >
                      <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700">{issue}</span>
                    </div>
                  );
                })}
              </div>

              {/* Specialties chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {SPECIALTIES.map((spec) => (
                  <span 
                    key={spec.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-orange-200 hover:shadow-md"
                  >
                    <spec.icon className={`h-3.5 w-3.5 ${spec.color}`} />
                    {spec.label}
                  </span>
                ))}
              </div>

              {/* Repair features */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {REPAIR_FEATURES.map((feature) => (
                  <div 
                    key={feature.label}
                    className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white/70 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-orange-200"
                  >
                    <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} shadow-md`}>
                      <feature.icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700">{feature.label}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-400/40"
              >
                <Wrench className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Get Repair Support
                <span className="text-xs font-normal opacity-70">→</span>
              </a>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal direction="right" className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/50 shadow-2xl shadow-orange-200/30 transition-all duration-300 hover:shadow-3xl hover:shadow-orange-300/40">
                <img
                  src={IMAGES.repair}
                  alt="Computer motherboard being repaired at MAHAVIR INFO CARE"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge - top */}
              <div className="absolute -top-4 -left-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-left-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-400/30">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Expert Diagnosis</div>
                  <div className="text-xs font-medium text-slate-500">Hardware &amp; Software</div>
                </div>
              </div>

              {/* Floating badge - bottom */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-right-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-400/30">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Quality Guarantee</div>
                  <div className="text-xs font-medium text-slate-500">Satisfaction Assured</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-orange-500/20 via-amber-500/20 to-yellow-500/20 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}