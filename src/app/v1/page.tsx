import Link from "next/link";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Globe, Smartphone, Code2, Database, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Manuel De Ceglie | v1 Design",
  description: "Architectural/Technical Redesign",
};

export default function V1Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-mono selection:bg-blue-500/30 selection:text-blue-200">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Header/Nav - Minimal Terminal Style */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400">
            <Terminal className="w-5 h-5" />
            <span className="text-sm font-bold tracking-tighter">~/manuel-de-ceglie</span>
            <span className="animate-pulse">_</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-slate-500">
            {["Services", "Projects", "Stack", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                [0{["Services", "Projects", "Stack", "Contact"].indexOf(item) + 1}] {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* HERO */}
        <section className="container mx-auto px-6 min-h-[80vh] flex flex-col justify-center border-l border-white/10 pl-8 md:pl-16 relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500 -translate-x-[5px]" />
          
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            SYSTEM ONLINE
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              DIGITAL SOLUTIONS
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed border-l-2 border-blue-500/50 pl-6">
            I architect high-performance web systems, custom software, and mobile applications for businesses that demand precision and scalability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="rounded-none border border-blue-500 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all h-12 px-8 font-mono uppercase tracking-widest text-xs">
              Init_Project()
            </Button>
            <Button variant="outline" className="rounded-none border-slate-700 text-slate-400 hover:border-white hover:text-white transition-all h-12 px-8 font-mono uppercase tracking-widest text-xs bg-transparent">
              View_Source_Code
            </Button>
          </div>
        </section>

        {/* METRICS STRIP */}
        <div className="border-y border-white/10 bg-[#0a0a0a]">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Uptime", value: "99.9%" },
              { label: "Projects", value: "50+" },
              { label: "Commit", value: "Daily" },
              { label: "Location", value: "Modena, IT" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 text-center">
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES GRID */}
        <section id="services" className="container mx-auto px-6 py-32">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">CORE_MODULES</h2>
              <p className="text-slate-500 text-sm uppercase tracking-widest">System Capabilities</p>
            </div>
            <div className="hidden md:block text-slate-600 text-xs">
              // v1.0.0
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { 
                icon: Globe, 
                title: "Web Development", 
                code: "NEXT_JS_14", 
                desc: "High-performance websites optimized for SEO and conversion." 
              },
              { 
                icon: Database, 
                title: "Custom Software", 
                code: "CRM_SYSTEMS", 
                desc: "Tailored management software to streamline complex workflows." 
              },
              { 
                icon: Smartphone, 
                title: "Mobile Apps", 
                code: "FLUTTER_IOS_ANDROID", 
                desc: "Native and cross-platform applications for all devices." 
              },
            ].map((service, i) => (
              <div key={i} className="bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[10px] text-slate-700 font-bold group-hover:text-blue-500 transition-colors">
                  MOD_0{i+1}
                </div>
                <service.icon className="w-8 h-8 text-slate-500 mb-6 group-hover:text-blue-400 transition-colors" />
                <div className="text-xs text-blue-500 font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  {`<${service.code} />`}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK MARQUEE (Simulated with grid for now) */}
        <section className="py-20 border-y border-white/10 bg-[#0f0f0f]">
          <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                <span className="text-xs font-bold text-blue-500 border border-blue-500/30 px-2 py-1 rounded">TECH_STACK_ARRAY</span>
             </div>
             <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
                {DATA.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 text-sm text-slate-300">
                        <Code2 className="w-4 h-4 text-slate-500" />
                        {skill}
                    </div>
                ))}
             </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section id="projects" className="container mx-auto px-6 py-32">
             <div className="mb-16 border-l-4 border-blue-500 pl-6">
                <h2 className="text-3xl font-bold text-white">LATEST_DEPLOYMENT</h2>
             </div>
             
             <div className="border border-white/10 bg-[#111] grid md:grid-cols-2">
                <div className="p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                    <div className="text-blue-400 text-xs font-bold mb-4 tracking-widest">CASE_STUDY: LUMEN</div>
                    <h3 className="text-4xl font-bold text-white mb-6">AI Infrastructure Inspection</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        An intelligent application assisting infrastructure inspectors. Leveraging AI to analyze structural integrity and generate automated reports.
                    </p>
                    <ul className="space-y-3 mb-10 text-sm text-slate-500">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span>Real-time image processing</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span>Automated report generation</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span>Offline-first capabilities</span>
                        </li>
                    </ul>
                    <Button className="w-fit rounded-none bg-white text-black hover:bg-slate-200">
                        Read Analysis <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
                <div className="relative bg-[#0a0a0a] min-h-[400px] flex items-center justify-center p-8 overflow-hidden group">
                    {/* Abstract representation of code/tech */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
                    <div className="relative z-10 border border-white/20 p-2 bg-[#1a1a1a] shadow-2xl transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1">
                        <div className="flex items-center gap-2 p-2 border-b border-white/10 mb-2">
                           <div className="w-2 h-2 rounded-full bg-red-500/50" />
                           <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                           <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        <div className="w-64 h-80 bg-[#0f0f0f] p-4 text-[10px] text-green-400 font-mono overflow-hidden">
                           {`> initializing AI core...\n> loading models...\n> connecting to remote sensor...\n> [SUCCESS] Connection established.\n> ...\n> analyzing stream [FRAME_01492]\n> defect detected: CRACK_TYPE_A\n> confidence: 98.4%\n> logging to database...\n> done.`}
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* CONTACT CLI */}
        <section id="contact" className="container mx-auto px-6 py-32 flex flex-col items-center">
            <div className="w-full max-w-3xl border border-white/10 bg-[#0a0a0a] p-1">
                <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-white/10">
                    <span className="text-xs text-slate-400">root@manuel-server: ~/contact-form</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                        <div className="w-3 h-3 rounded-full bg-slate-700" />
                    </div>
                </div>
                <div className="p-8 md:p-12">
                    <p className="text-slate-400 mb-8 font-mono text-sm">
                        <span className="text-green-500">root@manuel-server:~$</span> ./initiate_contact.sh<br/>
                        <span className="text-blue-400">?</span> Please enter your project details below...
                    </p>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-slate-500">--name</label>
                                <input type="text" className="w-full bg-[#111] border border-white/10 p-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-slate-500">--email</label>
                                <input type="email" className="w-full bg-[#111] border border-white/10 p-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm" placeholder="john@company.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-slate-500">--message</label>
                            <textarea rows={6} className="w-full bg-[#111] border border-white/10 p-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm" placeholder="Describe your mission parameters..." />
                        </div>
                        <Button className="w-full rounded-none bg-blue-600 hover:bg-blue-500 text-white font-mono uppercase tracking-widest h-14">
                            Execute_Transmission <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>

        <footer className="border-t border-white/10 py-12 bg-[#050505] text-center">
            <p className="text-slate-600 text-xs font-mono">
                © {new Date().getFullYear()} MANUEL DE CEGLIE. ALL SYSTEMS OPERATIONAL.
            </p>
        </footer>
      </main>
    </div>
  );
}
