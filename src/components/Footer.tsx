import { Cpu, Phone, MapPin, MessageCircle, Mail, Clock, ArrowUpRight, Heart, Sparkles, ChevronRight } from "lucide-react";
import { BUSINESS, NAV_LINKS, FOOTER_SERVICES, PHONE_LINK, WHATSAPP_LINK } from "@/data/siteData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/90 to-purple-950/90 text-white">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/5 to-yellow-500/5 blur-3xl" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      {/* Top gradient bar with animation */}
      <div className="relative h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </div>

      <div className="container-max relative z-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-extrabold text-white">
                  MAHAVIR <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">INFO CARE</span>
                </div>
                <div className="text-[10px] font-medium text-white/50 tracking-wider">{BUSINESS.tagline}</div>
              </div>
            </div>
            
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Your complete technology partner in Ranpur — providing hardware, software, and educational
              services to the local community.
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white/80">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <span>{BUSINESS.location}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white/80">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                  <Clock className="h-4 w-4 text-emerald-400" />
                </div>
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Social proof badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-yellow-400" />
              <span className="text-[10px] font-semibold text-white/70 tracking-wider">TRUSTED SINCE 2010</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative inline-block text-sm font-bold uppercase tracking-wider text-white/80">
              Quick Links
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="h-3 w-3 text-blue-400/50 transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-0.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative inline-block text-sm font-bold uppercase tracking-wider text-white/80">
              Our Services
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
            </h3>
            <ul className="mt-5 space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="h-3 w-3 text-purple-400/50 transition-all duration-300 group-hover:text-purple-400 group-hover:translate-x-0.5" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="relative inline-block text-sm font-bold uppercase tracking-wider text-white/80">
              Get in Touch
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400" />
            </h3>
            <div className="mt-5 space-y-3.5">
              <a
                href={PHONE_LINK}
                className="group flex items-center gap-3 text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transition-all duration-300 group-hover:from-blue-500 group-hover:to-cyan-500">
                  <Phone className="h-4 w-4 text-blue-400 transition-all duration-300 group-hover:text-white" />
                </div>
                <span className="font-medium">{BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 transition-all duration-300 group-hover:from-emerald-500 group-hover:to-green-500">
                  <MessageCircle className="h-4 w-4 text-emerald-400 transition-all duration-300 group-hover:text-white" />
                </div>
                <span className="font-medium">WhatsApp Chat</span>
              </a>
              <a
                href="mailto:info@maharvinfocare.com"
                className="group flex items-center gap-3 text-sm text-white/60 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-500">
                  <Mail className="h-4 w-4 text-purple-400 transition-all duration-300 group-hover:text-white" />
                </div>
                <span className="font-medium">Email Us</span>
              </a>
            </div>

            {/* CTA buttons */}
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={PHONE_LINK}
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Call Now
                <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-400/40"
              >
                <MessageCircle className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                WhatsApp Us
                <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/40">
              &copy; {currentYear} <span className="font-semibold text-white/60">MAHAVIR INFO CARE</span>. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/30">|</span>
              <a
                href="https://jaganwebsolutions.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs text-white/40 transition-all duration-300 hover:text-white/80 hover:scale-105"
              >
                <span>Developed with</span>
                <Heart className="h-3 w-3 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse" />
                <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Jagan Web Solutions
                </span>
                <ArrowUpRight className="h-3 w-3 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </div>
            
            <p className="text-xs text-white/40 flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-blue-400/50" />
              Ranpur, Nayagarh, Odisha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}