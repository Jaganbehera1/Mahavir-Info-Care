import { Code2, Globe, ArrowRight, CheckCircle2, Layers, Database, Cloud, Zap, Sparkles, Shield, Award, Star, Users, Clock, TrendingUp, Cpu, Server } from "lucide-react";
import { SOFTWARE_SERVICES, WEBSITE_SERVICES, IMAGES, WHATSAPP_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  { icon: Layers, label: "Business Software", color: "from-orange-500 to-amber-500" },
  { icon: Globe, label: "Web Development", color: "from-blue-500 to-cyan-500" },
  { icon: Database, label: "Database Apps", color: "from-purple-500 to-pink-500" },
  { icon: Cloud, label: "Cloud Solutions", color: "from-emerald-500 to-green-500" },
];

const STATS = [
  { number: "50+", label: "Projects Delivered", icon: TrendingUp },
  { number: "100%", label: "Client Satisfaction", icon: Star },
  { number: "24/7", label: "Support Available", icon: Clock },
  { number: "4.9", label: "Rating", icon: Award },
];

export function Software() {
  return (
    <section id="software" className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      {/* Animated background orbs - More vibrant */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-3xl animate-float-slow" />
      
      {/* Decorative grid pattern with color */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      {/* Decorative floating shapes */}
      <div className="absolute top-20 right-10 h-20 w-20 rounded-2xl rotate-12 bg-gradient-to-br from-orange-400/15 to-amber-400/15 blur-2xl" />
      <div className="absolute bottom-20 left-10 h-24 w-24 rounded-full -rotate-12 bg-gradient-to-br from-green-400/15 to-emerald-400/15 blur-2xl" />
      <div className="absolute top-1/2 right-20 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-2xl" />

      <div className="container-max relative z-10 px-4">
        {/* Heading */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/40 animate-pulse-slow">
            <Sparkles className="h-3.5 w-3.5" />
            Software Development
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Custom <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-green-400 bg-clip-text text-transparent">Software Development</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Turn your ideas into powerful digital solutions. We build customized software for individuals,
            businesses, schools, organizations and local institutions.
          </p>
        </Reveal>

        {/* Stats Section */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div 
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-orange-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/20 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-green-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-center justify-center gap-1.5">
                  <stat.icon className="h-4 w-4 text-orange-400" />
                  <div className="text-xl font-extrabold text-white">{stat.number}</div>
                </div>
                <div className="relative text-[10px] font-medium text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Pillars - Enhanced */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.label} delay={i * 80}>
              <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-500/20`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-300 group-hover:opacity-15`} />
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${p.color} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
                
                <div className="relative">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} shadow-lg shadow-orange-500/30 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">{p.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Split layout - Enhanced */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Software services */}
          <Reveal direction="left">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/40 hover:shadow-2xl hover:shadow-orange-500/20 sm:p-8">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Top gradient bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
              
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Custom Software</h3>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {SOFTWARE_SERVICES.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-xs font-medium text-orange-200/80 transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-500/20 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    <CheckCircle2 className="h-3 w-3 text-orange-400" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Website services */}
          <Reveal direction="right">
            <div className="group relative h-full overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/20 sm:p-8">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Top gradient bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500" />
              
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg shadow-green-500/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Website Development</h3>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {WEBSITE_SERVICES.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs font-medium text-green-200/80 transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/20 hover:text-white hover:shadow-lg hover:shadow-green-500/20"
                  >
                    <Globe className="h-3 w-3 text-green-400" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Developer image strip - Enhanced */}
        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:shadow-3xl hover:shadow-purple-500/30">
            <img
              src={IMAGES.software}
              alt="Developer writing code for custom software at MAHAVIR INFO CARE"
              className="aspect-[21/9] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-purple-950/80 to-transparent" />
            
            {/* Tricolor accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 flex">
              <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-orange-400" />
              <div className="h-full w-1/3 bg-gradient-to-r from-white/50 to-white/30" />
              <div className="h-full w-1/3 bg-gradient-to-r from-green-500 to-green-400" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/30 to-green-500/30 px-3 py-1 backdrop-blur-sm">
                  <Zap className="h-4 w-4 text-orange-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/90">From Concept to Deployment</span>
                </div>
              </div>
              <p className="mt-3 max-w-md text-lg font-bold text-white sm:text-xl drop-shadow-lg">
                We handle the full cycle — requirements, design, development, testing, and deployment.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  <Shield className="h-3 w-3 text-orange-400" />
                  Quality Assured
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/30 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                  <Award className="h-3 w-3 text-green-400" />
                  Trusted Service
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA - Enhanced with patriotic colors */}
        <Reveal className="mt-8 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-green-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-orange-500/40 transition-all duration-300 hover:scale-[1.05] hover:shadow-3xl hover:shadow-orange-500/60"
          >
            <Code2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-orange-400" />
              Free consultation within 24 hours
            </span>
          </p>
        </Reveal>

        {/* Trust Badges */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/30 hover:bg-white/20 hover:shadow-lg hover:shadow-orange-500/10">
              <Shield className="h-4 w-4 text-orange-400" />
              <span className="text-xs font-semibold text-white/80">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/10">
              <Server className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-semibold text-white/80">Scalable Solutions</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/30 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/10">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span className="text-xs font-semibold text-white/80">Modern Tech Stack</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-green-400/30 hover:bg-white/20 hover:shadow-lg hover:shadow-green-500/10">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-xs font-semibold text-white/80">Quality Guaranteed</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}