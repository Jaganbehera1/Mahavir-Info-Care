import { Phone, MessageSquare, Wrench, PackageCheck, Sparkles, ArrowRight, CheckCircle, Clock, Shield, Award, Star, Zap, Users } from "lucide-react";
import { PROCESS_STEPS } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const STEP_ICONS = [Phone, MessageSquare, Wrench, PackageCheck];

const STEP_COLORS = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-amber-500",
  "from-emerald-500 to-green-500",
];

const STEP_BADGES = [
  { label: "Step 1", color: "bg-blue-100 text-blue-700" },
  { label: "Step 2", color: "bg-purple-100 text-purple-700" },
  { label: "Step 3", color: "bg-orange-100 text-orange-700" },
  { label: "Step 4", color: "bg-emerald-100 text-emerald-700" },
];

const STATS = [
  { number: "500+", label: "Happy Customers", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Star },
  { number: "4.9", label: "Service Rating", icon: Award },
  { number: "24hr", label: "Fast Response", icon: Zap },
];

export function ServiceProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 py-16 md:py-24">
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
            How It Works
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Service Process</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Simple, transparent, and reliable — from first contact to service delivery.
          </p>
        </Reveal>

        {/* Stats Section */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div 
                key={stat.label}
                className="rounded-xl border border-slate-200/80 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 text-center"
              >
                <div className="flex items-center justify-center gap-1.5">
                  <stat.icon className="h-4 w-4 text-blue-500" />
                  <div className="text-xl font-extrabold text-slate-900">{stat.number}</div>
                </div>
                <div className="text-[10px] font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-12 hidden lg:block">
          <div className="relative">
            {/* Enhanced connecting line with gradient */}
            <div className="absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full" />
            
            {/* Animated line progress */}
            <div className="absolute top-14 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20" />

            <div className="relative grid grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = STEP_ICONS[i];
                const color = STEP_COLORS[i];
                const badge = STEP_BADGES[i];
                return (
                  <Reveal key={step.num} delay={i * 150}>
                    <div className="group flex flex-col items-center text-center">
                      {/* Step circle with glow */}
                      <div className="relative">
                        <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30`} />
                        <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                          <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          {/* Step number badge */}
                          <div className={`absolute -top-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full ${badge.color} text-xs font-bold shadow-lg ring-2 ring-white`}>
                            {step.num}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="mt-5 text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[14rem] text-sm text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                      
                      {/* Decorative arrow */}
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="absolute -right-3 top-14 hidden xl:block">
                          <ArrowRight className="h-6 w-6 text-slate-300" />
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline - Enhanced */}
        <div className="mt-12 lg:hidden">
          <div className="relative pl-8">
            {/* Vertical gradient line */}
            <div className="absolute left-7 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full" />

            <div className="space-y-8">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = STEP_ICONS[i];
                const color = STEP_COLORS[i];
                const badge = STEP_BADGES[i];
                return (
                  <Reveal key={step.num} delay={i * 100}>
                    <div className="group relative flex items-start gap-4">
                      {/* Connector dot */}
                      <div className="absolute left-[-29px] top-7 h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ring-4 ring-white shadow-lg" />
                      
                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badge.color}`}>
                            {badge.label}
                          </span>
                          <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        
                        {/* Decorative checkmark */}
                        <div className="mt-2 flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                          <span className="text-[10px] font-medium text-emerald-600">Completed</span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span className="text-xs font-semibold text-slate-700">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-xs font-semibold text-slate-700">Fast Turnaround</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <Award className="h-4 w-4 text-purple-500" />
              <span className="text-xs font-semibold text-slate-700">Certified Experts</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-orange-500" />
              <span className="text-xs font-semibold text-slate-700">Quality Guaranteed</span>
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal className="mt-8 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-400/40"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Start Your Service Today
            <span className="text-xs font-normal opacity-70">→</span>
          </a>
          <p className="mt-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-blue-400" />
              Get a free consultation within 24 hours
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}