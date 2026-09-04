import { Phone, MessageCircle, MapPin, Navigation, Mail, Clock, Sparkles } from "lucide-react";
import { BUSINESS, PHONE_LINK, WHATSAPP_LINK, MAPS_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-300/30 to-pink-300/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-300/30 to-cyan-300/30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300/20 to-orange-300/20 blur-3xl" />

      <div className="container-max relative z-10 px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — contact info */}
          <Reveal direction="left">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                Get in Touch
              </div>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Need a <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technology Solution?</span>
              </h2>

              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                Whether you need a computer, laptop, repair service, software solution or educational
                information, contact <span className="font-semibold text-indigo-600">MAHAVIR INFO CARE</span>.
              </p>

              {/* Info cards — improved */}
              <div className="mt-8 space-y-4">
                {/* Business name — enhanced */}
                <div className="group relative overflow-hidden rounded-2xl border border-indigo-100 bg-white/70 p-5 shadow-lg shadow-indigo-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                      <span className="text-sm font-extrabold text-white">MI</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Business</div>
                      <div className="text-lg font-extrabold text-slate-900">{BUSINESS.name}</div>
                      <div className="text-sm text-slate-500">{BUSINESS.tagline}</div>
                    </div>
                  </div>
                </div>

                {/* Location — enhanced */}
                <div className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/70 p-5 shadow-lg shadow-emerald-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200/50 hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-400/30">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Location</div>
                      <div className="text-lg font-extrabold text-slate-900">{BUSINESS.location}</div>
                      <div className="text-sm text-slate-500">Find us easily on the map</div>
                    </div>
                  </div>
                </div>

                {/* Phone — enhanced */}
                <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/70 p-5 shadow-lg shadow-blue-100/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-400/30">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Phone</div>
                      <a
                        href={PHONE_LINK}
                        className="text-lg font-extrabold text-slate-900 transition-all duration-300 hover:text-blue-600 hover:underline underline-offset-4"
                      >
                        {BUSINESS.phoneDisplay}
                      </a>
                      <div className="text-sm text-slate-500">Call us for quick support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons — improved with gradients */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_LINK}
                  className="group flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-indigo-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-400/50 flex"
                >
                  <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-emerald-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-400/50 flex"
                >
                  <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  WhatsApp Us
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white/80 px-6 py-3.5 text-center text-sm font-bold text-slate-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-200/50 hover:-translate-y-0.5 flex"
                >
                  <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — map */}
          <Reveal direction="right">
            <div className="relative h-full min-h-[28rem] overflow-hidden rounded-3xl border-2 border-white/50 shadow-2xl shadow-indigo-200/30 transition-all duration-300 hover:shadow-3xl hover:shadow-indigo-300/40 lg:min-h-[32rem]">
              <iframe
                title="MAHAVIR INFO CARE location — Ranpur, Nayagarh, Odisha"
                src="https://www.google.com/maps?q=Ranpur,%20Nayagarh,%20Odisha,%20India&output=embed"
                className="h-full min-h-[28rem] w-full lg:min-h-[32rem]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Enhanced overlay badge */}
              <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center justify-between rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur-md lg:left-6 lg:right-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-400/30">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-extrabold text-slate-900 sm:text-base">
                    Ranpur, Nayagarh, Odisha
                  </span>
                </div>
                <div className="hidden items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 sm:flex">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">Open</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}