import { Phone, MessageCircle, ArrowRight, MapPin, Monitor, Code2, GraduationCap, Headphones, Sparkles, Star, Shield, Zap, CheckCircle, Award, TrendingUp, Users, Clock, Wrench } from "lucide-react";
import { BUSINESS, PHONE_LINK, WHATSAPP_LINK, IMAGES } from "@/data/siteData";

const BADGES = [
  { icon: Monitor, label: "Computer Services", color: "from-blue-500 to-cyan-500" },
  { icon: Code2, label: "Software Solutions", color: "from-purple-500 to-pink-500" },
  { icon: Headphones, label: "IT Support", color: "from-orange-500 to-amber-500" },
  { icon: GraduationCap, label: "Educational Courses", color: "from-emerald-500 to-green-500" },
];

const STATS = [
  { number: "12+", label: "Years Experience", icon: Award },
  { number: "1000+", label: "Happy Clients", icon: Users },
  { number: "500+", label: "Systems Sold", icon: TrendingUp },
  { number: "4.9", label: "Rating", icon: Star },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/90 to-purple-950/90 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl animate-float" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-orange-500/15 to-yellow-500/15 blur-3xl animate-pulse-glow" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-32 right-20 h-20 w-20 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-2xl" />
      <div className="absolute bottom-32 left-20 h-24 w-24 rounded-xl rotate-12 bg-gradient-to-br from-pink-400/10 to-orange-400/10 blur-2xl" />

      <div className="container-max relative px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Location badge - enhanced */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/10 px-5 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/20">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              <span className="font-semibold">Ranpur, Nayagarh, Odisha</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Technology Partner</span>{" "}
              in Ranpur
            </h1>

            <p className="mt-5 text-lg font-medium text-white/90 sm:text-xl flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              Computer Sales, Repair, Software Development, IT Solutions &amp; Educational Services
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base lg:mx-0">
              From computer hardware and refurbished laptops to custom software and website development,
              MAHAVIR INFO CARE provides reliable technology solutions for individuals, students, businesses,
              schools and offices.
            </p>

            {/* Stats - new addition */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div 
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <stat.icon className="h-3.5 w-3.5 text-blue-400" />
                    <div className="text-lg font-extrabold text-white">{stat.number}</div>
                  </div>
                  <div className="text-[10px] font-medium text-white/50 text-center mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs - enhanced */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a 
                href={PHONE_LINK} 
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Call Now
              </a>
              <a 
                href="#services" 
                className="group flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/40 hover:bg-white/20"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-400/40"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Mini badges - enhanced */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {BADGES.map((b) => (
                <div
                  key={b.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/5 to-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:border-white/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className={`flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br ${b.color} shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <b.icon className="h-3 w-3 text-white" />
                  </div>
                  {b.label}
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs text-white/50">Trusted Since 2010</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-xs text-white/50">1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-yellow-400" />
                <span className="text-xs text-white/50">Fast Service</span>
              </div>
            </div>
          </div>

          {/* Right visual - enhanced */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Main image */}
              <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:shadow-3xl hover:shadow-purple-500/30">
                <img
                  src={IMAGES.heroTech}
                  alt="Software developer working on code at MAHAVIR INFO CARE"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Floating card 1 — repair */}
              <div className="absolute -bottom-5 -left-3 hidden w-44 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 shadow-2xl backdrop-blur-md sm:block animate-float transition-all duration-300 hover:scale-[1.05] hover:border-white/40">
                <img
                  src={IMAGES.heroRepair}
                  alt="Computer repair technician"
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />
                <div className="flex items-center gap-2 px-3 py-2.5">
                  <Wrench className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-xs font-bold text-white/90">Hardware Repair</span>
                </div>
              </div>

              {/* Floating card 2 — stats */}
              <div className="absolute -top-4 -right-3 hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 px-5 py-4 shadow-2xl backdrop-blur-md sm:block animate-float-slow transition-all duration-300 hover:scale-[1.05] hover:border-white/40">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-400/30">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">3-in-1</div>
                    <div className="text-[10px] font-semibold text-white/50">Hardware • Software • Education</div>
                  </div>
                </div>
              </div>

              {/* Floating card 3 — rating */}
              <div className="absolute -bottom-3 -right-3 hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/90 to-slate-800/90 px-4 py-3 shadow-2xl backdrop-blur-md sm:block animate-float transition-all duration-300 hover:scale-[1.05] hover:border-white/40">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white/90">4.9/5</span>
                </div>
                <div className="text-[9px] font-medium text-white/40 text-center">Excellent Service</div>
              </div>

              {/* Glow ring */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-glow" />
            </div>
          </div>
        </div>

        {/* Scroll indicator - enhanced */}
        <div className="mt-16 flex justify-center">
          <div className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Scroll</span>
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5 transition-all duration-300 group-hover:border-white/40">
              <div className="h-2.5 w-1.5 rounded-full bg-gradient-to-b from-blue-400 to-purple-400 animate-scroll-down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}