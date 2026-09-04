import {
  Monitor, Laptop, Wrench, Code2, Globe, ShieldCheck,
  Printer, Download, Headphones, GraduationCap,
  Sparkles, Star, Award, Zap, Clock, CheckCircle,
  Users, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const ICONS: Record<string, LucideIcon> = {
  Monitor, Laptop, Wrench, Code2, Globe, ShieldCheck,
  Printer, Download, Headphones, GraduationCap,
};

const SERVICE_COLORS = [
  { icon: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50", border: "border-blue-100", shadow: "shadow-blue-500/20", text: "text-blue-600" },
  { icon: "from-purple-500 to-pink-500", bg: "from-purple-50 to-pink-50", border: "border-purple-100", shadow: "shadow-purple-500/20", text: "text-purple-600" },
  { icon: "from-orange-500 to-amber-500", bg: "from-orange-50 to-amber-50", border: "border-orange-100", shadow: "shadow-orange-500/20", text: "text-orange-600" },
  { icon: "from-emerald-500 to-green-500", bg: "from-emerald-50 to-green-50", border: "border-emerald-100", shadow: "shadow-emerald-500/20", text: "text-emerald-600" },
  { icon: "from-red-500 to-rose-500", bg: "from-red-50 to-rose-50", border: "border-red-100", shadow: "shadow-red-500/20", text: "text-red-600" },
  { icon: "from-indigo-500 to-blue-500", bg: "from-indigo-50 to-blue-50", border: "border-indigo-100", shadow: "shadow-indigo-500/20", text: "text-indigo-600" },
  { icon: "from-teal-500 to-cyan-500", bg: "from-teal-50 to-cyan-50", border: "border-teal-100", shadow: "shadow-teal-500/20", text: "text-teal-600" },
  { icon: "from-fuchsia-500 to-purple-500", bg: "from-fuchsia-50 to-purple-50", border: "border-fuchsia-100", shadow: "shadow-fuchsia-500/20", text: "text-fuchsia-600" },
  { icon: "from-rose-500 to-pink-500", bg: "from-rose-50 to-pink-50", border: "border-rose-100", shadow: "shadow-rose-500/20", text: "text-rose-600" },
  { icon: "from-amber-500 to-yellow-500", bg: "from-amber-50 to-yellow-50", border: "border-amber-100", shadow: "shadow-amber-500/20", text: "text-amber-600" },
];

const STATS = [
  { number: "10+", label: "Service Categories", icon: Award },
  { number: "1000+", label: "Happy Clients", icon: Users },
  { number: "4.9", label: "Rating", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
];

export function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 py-16 md:py-24">
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
            Our Services
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Everything You Need in <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">One Place</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Complete hardware, software and technology solutions for your personal, educational and business needs.
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

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            const color = SERVICE_COLORS[i % SERVICE_COLORS.length];
            return (
              <Reveal key={service.title} delay={i * 80}>
                <div className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${color.border} bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50`}>
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color.icon} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  
                  {/* Gradient top bar */}
                  <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${color.icon} transition-transform duration-300 group-hover:scale-x-100`} />

                  {/* Icon container */}
                  <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <Icon className={`h-7 w-7 ${color.text} transition-colors duration-300 group-hover:text-white`} />
                    {/* Icon background on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color.icon} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                    <Icon className={`relative z-10 h-7 w-7 ${color.text} transition-colors duration-300 group-hover:text-white`} />
                  </div>

                  <h3 className="relative text-base font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {service.desc}
                  </p>

                  {/* Service features */}
                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                      <CheckCircle className="h-2.5 w-2.5 text-emerald-500" />
                      Available
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                      <Zap className="h-2.5 w-2.5 text-orange-500" />
                      Quick
                    </span>
                  </div>

                  {/* Learn More link */}
                  <a
                    href="#contact"
                    className="group/link relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-all duration-300 group-hover/link:translate-x-1" />
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover/link:w-full" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal className="mt-12 text-center">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 p-6 shadow-lg shadow-blue-100/30 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-400/30">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-extrabold text-slate-900">Need Help Choosing?</p>
                  <p className="text-xs text-slate-500">We're here to guide you to the right solution</p>
                </div>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-400/40"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}