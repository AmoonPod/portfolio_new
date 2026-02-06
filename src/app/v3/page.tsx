import Link from "next/link";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Zap, Eye, MousePointer2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Manuel De Ceglie | v3 Brutalist",
  description: "Bold Brutalist Redesign",
};

export default function V3Page() {
  return (
    <div className="min-h-screen bg-[#E0E0E0] font-sans selection:bg-black selection:text-[#CCFF00]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 border-b-4 border-black bg-[#CCFF00]">
        <div className="flex justify-between items-center h-20 px-6 md:px-12">
          <div className="text-3xl font-black uppercase tracking-tighter">
            MDC<span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">.DEV</span>
          </div>
          <nav className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest">
             {["Work", "About", "Contact"].map((item) => (
               <Link 
                 key={item} 
                 href={`#${item.toLowerCase()}`}
                 className="relative hover:underline decoration-4 underline-offset-4 decoration-black"
               >
                 {item}
               </Link>
             ))}
          </nav>
          <Button className="hidden md:flex rounded-none border-2 border-black bg-white text-black font-black hover:bg-black hover:text-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
            Start Project
          </Button>
        </div>
      </header>

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center px-4 md:px-12 relative overflow-hidden bg-white border-b-4 border-black">
          <div className="absolute top-20 right-[-5%] rotate-12 w-64 h-64 bg-[#CCFF00] rounded-full mix-blend-multiply filter blur-xl opacity-0 md:opacity-100 animate-pulse-slow"></div>
          
          <div className="max-w-[1600px] mx-auto w-full relative z-10">
            <h1 className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter mb-8 break-words text-black">
              Full<span className="text-transparent stroke-black text-stroke-2 md:text-stroke-4">Stack</span><br/>
              Developer
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mt-12">
              <p className="max-w-xl text-xl md:text-3xl font-bold leading-tight border-l-8 border-[#CCFF00] pl-6">
                I build digital products that refuse to be ignored. High impact, high performance, zero compromise.
              </p>
              
              <div className="flex gap-4">
                 <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full animate-bounce">
                    <Zap className="w-8 h-8 fill-[#CCFF00] text-[#CCFF00]" />
                 </div>
                 <div className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center rounded-full animate-spin-slow">
                    <StarIcon />
                 </div>
              </div>
            </div>
          </div>
          
          {/* Running ticker */}
          <div className="absolute bottom-12 right-0 bg-black text-[#CCFF00] px-4 py-2 font-mono text-xs md:text-sm font-bold rotate-[-2deg] shadow-[8px_8px_0px_0px_rgba(204,255,0,1)]">
             AVAILABLE FOR NEW PROJECTS // MARCH 2024
          </div>
        </section>

        {/* MARQUEE */}
        <div className="border-b-4 border-black bg-[#CCFF00] py-6 overflow-hidden transform -skew-y-2 origin-top-left mt-[-2px] z-20 relative">
          <div className="animate-shimmer-slide whitespace-nowrap text-4xl md:text-6xl font-black uppercase tracking-tighter text-black flex gap-12">
             <span>React</span> <span>Next.js</span> <span>Tailwind</span> <span>Framer</span> <span>TypeScript</span> <span>Node.js</span> <span>Flutter</span> <span>React</span> <span>Next.js</span>
          </div>
        </div>

        {/* SERVICES GRID */}
        <section id="services" className="grid md:grid-cols-2 lg:grid-cols-3 border-b-4 border-black">
           {[
             { title: "Web Dev", desc: "SITES THAT SCREAM" },
             { title: "Apps", desc: "SOFTWARE THAT WORKS" },
             { title: "Systems", desc: "LOGIC THAT SCALES" }
           ].map((s, i) => (
             <div key={i} className="group min-h-[400px] border-r-4 border-black bg-white p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 relative">
               <div className="text-8xl font-black opacity-10 group-hover:opacity-100 group-hover:text-[#CCFF00] transition-all">0{i+1}</div>
               <div>
                  <h3 className="text-5xl font-black uppercase mb-4 leading-none">{s.title}</h3>
                  <p className="font-bold text-xl">{s.desc}</p>
               </div>
               <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-12 h-12" />
               </div>
             </div>
           ))}
        </section>

        {/* SELECTED PROJECT */}
        <section id="work" className="border-b-4 border-black">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#111] p-12 md:p-24 flex flex-col justify-center text-white relative overflow-hidden">
               <div className="relative z-10">
                 <div className="inline-block bg-[#CCFF00] text-black font-black px-4 py-1 text-sm mb-6 shadow-[4px_4px_0px_0px_#FFF]">FEATURED</div>
                 <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.8]">
                   Lumen<br/>App
                 </h2>
                 <p className="text-2xl font-bold text-gray-400 mb-12 max-w-md">
                   AI-powered infrastructure inspection tool. Brutally efficient.
                 </p>
                 <Button className="h-16 px-12 text-xl font-black rounded-none bg-white text-black hover:bg-[#CCFF00] hover:text-black border-4 border-transparent hover:border-black transition-all">
                    VIEW CASE STUDY
                 </Button>
               </div>
               
               {/* Decorative background grid */}
               <div className="absolute inset-0 opacity-10" 
                    style={{ backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
               </div>
            </div>
            
            <div className="bg-white p-12 md:p-24 relative flex items-center justify-center border-l-4 border-black">
               <div className="relative w-full aspect-square max-w-md border-4 border-black shadow-[16px_16px_0px_0px_#000] bg-[#eee]">
                  {/* Mockup */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#CCFF00]">
                     <span className="font-black text-4xl uppercase opacity-20 rotate-45">Project Preview</span>
                  </div>
                  <Image
                    src={DATA.projects[3]?.image || ""}
                    alt="Lumen App"
                    fill
                    className="object-cover mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500"
                  />
               </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#CCFF00] py-32 px-6 border-b-4 border-black">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 text-black leading-[0.8]">
                 Ready to<br/>Rumble?
              </h2>
              
              <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#000] max-w-2xl mx-auto text-left">
                  <form className="space-y-6">
                      <div>
                          <label className="font-black uppercase text-xl block mb-2">Who are you?</label>
                          <input type="text" className="w-full bg-gray-100 border-4 border-black p-4 font-bold focus:bg-[#CCFF00] focus:outline-none transition-colors" placeholder="NAME / COMPANY" />
                      </div>
                      <div>
                          <label className="font-black uppercase text-xl block mb-2">What do you need?</label>
                          <select className="w-full bg-gray-100 border-4 border-black p-4 font-bold focus:bg-[#CCFF00] focus:outline-none transition-colors appearance-none cursor-pointer">
                              <option>WEB DEVELOPMENT</option>
                              <option>APP DEVELOPMENT</option>
                              <option>CUSTOM SOFTWARE</option>
                          </select>
                      </div>
                      <Button className="w-full h-20 text-2xl font-black uppercase bg-black text-white hover:bg-white hover:text-black border-4 border-transparent hover:border-black shadow-none hover:shadow-[8px_8px_0px_0px_#000] transition-all rounded-none mt-4">
                          Send Request
                      </Button>
                  </form>
              </div>
           </div>
        </section>

        <footer className="bg-black text-white py-12 px-6 flex flex-col md:flex-row justify-between items-end">
            <div className="text-[#CCFF00] font-black text-4xl uppercase mb-8 md:mb-0">
                Manuel De Ceglie
            </div>
            <div className="text-right font-mono text-sm text-gray-500">
                NO COOKIES. NO TRACKING. JUST CODE.<br/>
                © 2024
            </div>
        </footer>
      </main>
    </div>
  );
}

function StarIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-black" stroke="currentColor" strokeWidth="4">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="black"/>
        </svg>
    )
}
