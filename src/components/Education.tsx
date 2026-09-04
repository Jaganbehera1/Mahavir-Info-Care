import { GraduationCap, BookOpen, School, Award, ArrowRight, Sparkles, Target, Users, Clock, CheckCircle, Star, TrendingUp } from "lucide-react";
import { IMAGES, WHATSAPP_LINK } from "@/data/siteData";
import { Reveal } from "@/components/Reveal";

const COURSES = [
  { 
    icon: BookOpen, 
    title: "10th Courses", 
    desc: "Complete 10th standard course programs and guidance.", 
    color: "from-blue-500 to-cyan-500",
    badge: "Foundation",
    students: "500+"
  },
  { 
    icon: School, 
    title: "+2 Courses", 
    desc: "Higher secondary (+2) course programs and information.", 
    color: "from-purple-500 to-pink-500",
    badge: "Intermediate",
    students: "350+"
  },
  { 
    icon: Award, 
    title: "University Degree Programs", 
    desc: "Information on university degree programs and pathways.", 
    color: "from-orange-500 to-amber-500",
    badge: "Higher Education",
    students: "200+"
  },
  { 
    icon: BookOpen, 
    title: "Other Educational Programs", 
    desc: "Additional educational programs and course information.", 
    color: "from-emerald-500 to-green-500",
    badge: "Specialized",
    students: "150+"
  },
];

export function Education() {
  return (
    <section id="courses" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 py-16 md:py-24">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/10 to-yellow-500/10 blur-3xl" />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container-max relative z-10 px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <Reveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="h-3.5 w-3.5" />
                Educational Services
              </div>
              <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Educational Courses &amp; <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Degree Programs</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                Explore 10th &amp; +2 courses along with opportunities for university degree programs.
                We help students and learners find the right educational path.
              </p>

              {/* Stats badges */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Users className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-semibold text-white">1000+ Students</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Target className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-semibold text-white">100% Guidance</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-white">4.8 Rating</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {COURSES.map((c) => (
                  <div 
                    key={c.title} 
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} shadow-lg`}>
                            <c.icon className="h-4.5 w-4.5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm font-extrabold text-white leading-tight">{c.title}</h3>
                            <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-white/40">
                              {c.badge}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-semibold text-white/30">
                          <Users className="h-3 w-3" />
                          {c.students}
                        </div>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/60">{c.desc}</p>
                      
                      {/* Decorative arrow on hover */}
                      <div className="absolute -right-2 -bottom-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4 text-white/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Disclaimer */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Latest Course Information</p>
                    <p className="text-xs text-white/60">Contact us for the latest information on available courses and programs.</p>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/40"
              >
                <GraduationCap className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                Enquire About Courses
                <span className="text-xs font-normal opacity-70">→</span>
              </a>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal direction="right" className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:shadow-3xl hover:shadow-purple-500/30">
                <img
                  src={IMAGES.education}
                  alt="Students learning with computers at MAHAVIR INFO CARE educational courses"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge - top */}
              <div className="absolute -top-4 -right-3 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-2xl backdrop-blur-md sm:-right-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-400/30">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">Learn &amp; Grow</div>
                  <div className="text-xs font-medium text-slate-500">Education + Technology</div>
                </div>
              </div>

              {/* Floating badge - bottom */}
              <div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-2xl backdrop-blur-md sm:-left-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-800">Trusted by 1000+</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}