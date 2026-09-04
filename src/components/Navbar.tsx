import { useEffect, useState } from "react";
import { Menu, X, Phone, Cpu, Award, Shield, Sparkles } from "lucide-react";
import { BUSINESS, NAV_LINKS, PHONE_LINK } from "@/data/siteData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10" 
          : "bg-gradient-to-r from-orange-500/20 via-white/5 to-green-500/20 backdrop-blur-sm"
      }`}
    >
      {/* Top tricolor bar - Indian Flag colors */}
      <div className="absolute top-0 left-0 right-0 h-1">
        <div className="flex h-full w-full">
          <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-orange-400" />
          <div className="h-full w-1/3 bg-gradient-to-r from-white to-slate-100" />
          <div className="h-full w-1/3 bg-gradient-to-r from-green-500 to-green-400" />
        </div>
      </div>

      {/* Animated background elements */}
      {!scrolled && (
        <>
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-green-500/10 blur-2xl" />
        </>
      )}

      <nav className="container-max relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo - enhanced with tricolor badge */}
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="relative">
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-white to-green-500 shadow-lg shadow-orange-500/30 transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
              <Cpu className="h-5 w-5 text-white drop-shadow-md" />
            </div>
            {/* Tricolor ring */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="leading-tight">
            <div className={`text-base font-extrabold tracking-tight sm:text-lg transition-colors duration-300 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}>
              MAHAVIR <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-green-500 bg-clip-text text-transparent">INFO CARE</span>
            </div>
            <div className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-slate-500" : "text-white/80"
            }`}>
              {BUSINESS.tagline}
            </div>
          </div>
        </a>

        {/* Desktop nav - with Indian flag colors on hover */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {/* Tricolor underline on hover */}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 via-white to-green-500 transition-all duration-300 group-hover:w-full" />
              <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-orange-50/0 via-white/0 to-green-50/0 group-hover:from-orange-50/50 group-hover:via-white/50 group-hover:to-green-50/50"
                  : "bg-gradient-to-r from-orange-500/0 via-white/0 to-green-500/0 group-hover:from-orange-500/20 group-hover:via-white/20 group-hover:to-green-500/20"
              }`} />
            </a>
          ))}
        </div>

        {/* Call button - with tricolor gradient */}
        <a 
          href={PHONE_LINK} 
          className={`hidden lg:inline-flex items-center gap-2.5 rounded-xl px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-xl ${
            scrolled
              ? "bg-gradient-to-r from-orange-500 via-amber-400 to-green-500 shadow-orange-500/30 hover:shadow-orange-500/40"
              : "bg-gradient-to-r from-orange-500 via-white/90 to-green-500 shadow-orange-400/30 hover:shadow-orange-400/40"
          }`}
        >
          <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          Call Now
        </a>

        {/* Mobile toggle - with tricolor */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
            scrolled 
              ? "text-slate-700 hover:bg-gradient-to-r hover:from-orange-100 hover:via-white hover:to-green-100" 
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu - with tricolor theme */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-4 overflow-hidden rounded-2xl bg-white/95 shadow-2xl shadow-slate-900/20 backdrop-blur-xl ring-1 ring-slate-100">
          {/* Tricolor header in mobile menu */}
          <div className="flex h-1 w-full">
            <div className="h-full w-1/3 bg-gradient-to-r from-orange-500 to-orange-400" />
            <div className="h-full w-1/3 bg-gradient-to-r from-white to-slate-100" />
            <div className="h-full w-1/3 bg-gradient-to-r from-green-500 to-green-400" />
          </div>
          
          <div className="flex flex-col p-3">
            {/* Brand in mobile menu */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-white to-green-500 shadow-lg shadow-orange-500/20">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">
                  MAHAVIR <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">INFO CARE</span>
                </div>
                <div className="text-[10px] font-medium text-slate-500">{BUSINESS.tagline}</div>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group relative overflow-hidden rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-slate-900"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-50/0 via-white/0 to-green-50/0 transition-all duration-300 group-hover:from-orange-50/50 group-hover:via-white/50 group-hover:to-green-50/50" />
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 via-white to-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <a
                href={PHONE_LINK}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/40"
              >
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phoneDisplay}
              </a>
              
              {/* Trust badges in mobile menu */}
              <div className="flex items-center justify-center gap-4 px-2 py-2">
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-orange-500" />
                  <span className="text-[10px] font-medium text-slate-500">Trusted Since 2010</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-[10px] font-medium text-slate-500">1 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}