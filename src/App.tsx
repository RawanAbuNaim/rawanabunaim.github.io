import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Link as LinkIcon, Code, Share2, Terminal, Database, ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="bg-background selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0px_12px_32px_rgba(184,134,11,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          {/* Brand Logo (Left) */}
          <div className="flex-1 flex justify-start">
            <div className="font-headline italic text-xl font-bold text-primary">RAWAN ABU NAIM</div>
          </div>
          {/* Navigation Links (Center) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            <a className="text-primary border-b-2 border-primary-container pb-1 font-headline text-lg tracking-tight font-semibold" href="#">Home</a>
            <a className="text-slate-600 hover:text-primary transition-colors font-headline text-lg tracking-tight font-semibold" href="#about">About</a>
            <a className="text-slate-600 hover:text-primary transition-colors font-headline text-lg tracking-tight font-semibold" href="#skills">Skills</a>
            <a className="text-slate-600 hover:text-primary transition-colors font-headline text-lg tracking-tight font-semibold" href="#contact">Contact</a>
          </div>
          {/* Actions & Socials (Right) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3">
              <a aria-label="GitHub" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-primary/10" href="https://github.com/RawanAbuNaim" target="_blank">
                <Github size={20} />
              </a>
              <a aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-primary/10" href="https://linkedin.com/in/rawan-abo-naim-" target="_blank">
                <Linkedin size={20} />
              </a>
            </div>
            <a 
              href="#" 
              download 
              className="gold-gradient-bg text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all duration-300 active:scale-95 text-sm whitespace-nowrap shadow-md inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex px-6 md:px-12 lg:px-24 justify-center items-center">
          {/* Background Elements */}
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="grid gap-16 items-center w-full max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-low rounded-full mx-auto border border-outline-variant/30">
                <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
                <span className="text-xs uppercase tracking-[0.1em] text-on-surface-variant font-bold">Available for new opportunities</span>
              </div>
              <h1 className="serif-display text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter gold-gradient-text font-bold">
                RAWAN <br /> ABU NAIM
              </h1>
              <p className="text-2xl md:text-3xl text-secondary font-light font-body">
                Full Stack Developer & <span className="italic font-headline">Web Architect</span>
              </p>
              <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
                Professional Web Developer with expertise in building responsive, high-performance websites. Skilled in front-end and back-end technologies, with a strong focus on user experience and clean, efficient code.
              </p>
              <div className="flex gap-6 pt-4 justify-center">
                <a href="#skills" className="gold-gradient-bg text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
                  Explore Skills
                </a>
                <a href="#contact" className="bg-surface-container-highest text-primary px-10 py-4 rounded-xl text-lg font-semibold hover:bg-surface-container-high transition-colors">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24" id="about">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="serif-display text-5xl md:text-6xl text-primary italic">The Story Behind the Code</h2>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  I am Rawan Abu Naim, a dedicated Full Stack Developer with a passion for transforming complex ideas into elegant, high-performance digital realities. My journey began with a deep curiosity for how the web works, which led me to specialize in modern technologies like React, Laravel, and Next.js.
                </p>
                <p>
                  With a solid foundation in software development from my technical secondary education and years of freelance experience, I've honed a multidisciplinary approach that bridges the gap between creative vision and technical execution.
                </p>
                <p>
                  My philosophy is simple: every pixel should serve a purpose. I don't just build websites; I architect digital experiences that are as intuitive as they are beautiful, ensuring that performance and user experience are never compromised.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6 max-w-md mx-auto">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm uppercase tracking-widest text-secondary font-bold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm uppercase tracking-widest text-secondary font-bold">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Skills: Bento Grid */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface-container-low" id="skills">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="serif-display text-5xl md:text-6xl text-primary mb-6 italic">Technical Expertise</h2>
              <p className="text-secondary max-w-2xl mx-auto text-lg">A comprehensive toolkit for modern web development and digital design.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Front-End */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="md:col-span-2 bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow group"
              >
                <Terminal className="text-4xl text-on-tertiary-container mb-6" size={40} />
                <h3 className="serif-display text-3xl text-primary mb-4">Front-End Mastery</h3>
                <p className="text-secondary mb-8">Crafting intuitive and performant user interfaces with modern frameworks.</p>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-sm font-semibold">{skill}</span>
                  ))}
                </div>
              </motion.div>

              {/* Back-End */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="md:col-span-2 bg-white p-10 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow"
              >
                <Database className="text-4xl text-on-tertiary-container mb-6" size={40} />
                <h3 className="serif-display text-3xl text-primary mb-4">Back-End Power</h3>
                <p className="text-secondary mb-8">Developing robust server-side logic and efficient database architectures.</p>
                <div className="flex flex-wrap gap-3">
                  {["PHP", "Laravel", "MySQL", "RESTful APIs"].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-sm font-semibold">{skill}</span>
                  ))}
                </div>
              </motion.div>

              {/* Design */}
              <div className="md:col-span-1 bg-primary-container/10 p-8 rounded-xl flex flex-col justify-between border border-primary-container/20">
                <div>
                  <h4 className="font-headline font-bold text-xl text-primary mb-2">Visual Craft</h4>
                  <p className="text-sm text-secondary">Expertise in Adobe Photoshop and digital retouching.</p>
                </div>
                <div className="mt-8 text-on-tertiary-container italic serif-display text-lg">Photoshop Expert</div>
              </div>

              {/* UX/UI */}
              <div className="md:col-span-3 relative overflow-hidden bg-primary p-10 rounded-xl text-white">
                <div className="relative z-10">
                  <h3 className="serif-display text-3xl mb-4">UI/UX Specializations</h3>
                  <p className="text-surface-variant text-lg max-w-xl">Focusing on responsive web design, performance optimization, and custom visual elements.</p>
                  <div className="mt-8 flex gap-4">
                    {["Figma", "UI/UX Design", "Performance Optimization"].map(tool => (
                      <div key={tool} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">{tool}</div>
                    ))}
                  </div>
                </div>
                <div className="absolute right-[-5%] bottom-[-20%] w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Impact Achievements */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="serif-display text-5xl md:text-6xl text-primary mb-6">Key Projects</h2>
                <p className="text-secondary text-lg">Demonstrating technical excellence through real-world impact and creative solutions.</p>
              </div>
              <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mx-12 mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { val: "25%", label: "Speed Boost", desc: "Optimized a legacy e-commerce platform, significantly increasing page speed." },
                { val: "30%", label: "Engagement", desc: "Created a mobile-first portfolio agency website, enhancing user engagement." },
                { val: "15%", label: "Conversion", desc: "Redesigned the UX of a local service platform, boosting conversion rates." },
                { val: "Custom", label: "Visuals", desc: "Developed unique icons and graphics for a tech startup's branding." }
              ].map((ach, i) => (
                <div key={i} className="achievement-card p-8 bg-white rounded-lg shadow-[0px_12px_32px_rgba(184,134,11,0.06)] border-b-4 border-primary">
                  <div className="text-4xl font-headline font-bold text-primary mb-4 italic">{ach.val}</div>
                  <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">{ach.label}</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{ach.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="serif-display text-5xl md:text-6xl text-primary">Professional Journey</h2>
            </div>
            <div className="space-y-24 relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/50 -translate-x-1/2 hidden md:block"></div>
              
              {[
                { year: "2022 — Present", title: "Freelance Web Developer", desc: "Developing and maintaining responsive websites using React and Laravel. Collaborating with clients to translate business requirements into technical solutions.", tag: "Full Stack Development", reverse: false },
                { year: "2019 — 2021", title: "Technical Secondary School", desc: "Specialized in Software Development and Information Technology. Academic grounding in software fundamentals and logic.", tag: "Academic Foundation", reverse: true },
                { year: "Certifications", title: "Continuous Learning", desc: "Advanced Web Development (2022), UI/UX Design Fundamentals (2021), PHP & Laravel Mastery (2023).", tag: "Professional Growth", reverse: false }
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row ${item.reverse ? 'md:flex-row-reverse' : ''} items-center gap-12`}>
                  <div className={`w-full md:w-1/2 ${item.reverse ? 'text-left' : 'md:text-right'}`}>
                    <div className="text-on-tertiary-container font-headline italic text-2xl mb-2">{item.year}</div>
                    <h3 className="text-3xl font-bold text-primary mb-4">{item.title}</h3>
                    <p className="text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface-container"></div>
                  <div className={`w-full md:w-1/2 ${item.reverse ? 'md:text-right' : ''}`}>
                    <div className="bg-white p-6 rounded-lg inline-block text-sm font-bold text-primary uppercase tracking-widest shadow-sm border border-outline-variant/20">{item.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6 md:px-12 lg:px-24" id="contact">
          <div className="max-w-7xl mx-auto bg-primary rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <h2 className="serif-display text-5xl md:text-7xl mb-8 leading-tight">Get in <br /><span className="italic text-primary-container">Touch</span></h2>
              <p className="text-surface-variant text-xl mb-12 max-w-md">Let's discuss how we can elevate your digital presence through strategic design and code.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg">rawanabunaim@gmail.com</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <span className="text-lg">+972 59-242-1260</span>
                </div>
                <a className="flex items-center gap-6 hover:opacity-80 transition-opacity" href="https://linkedin.com/in/rawan-abo-naim-" target="_blank">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <span className="text-lg">LinkedIn Profile</span>
                </a>
                <a className="flex items-center gap-6 hover:opacity-80 transition-opacity" href="https://github.com/RawanAbuNaim" target="_blank">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Github size={24} />
                  </div>
                  <span className="text-lg">GitHub Repository</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12 md:p-20">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">Full Name</label>
                    <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-sm p-4 focus:ring-1 focus:ring-on-tertiary-container transition-all outline-none" placeholder="Your name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">Email Address</label>
                    <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-sm p-4 focus:ring-1 focus:ring-on-tertiary-container transition-all outline-none" placeholder="email@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest">The Project</label>
                  <textarea className="w-full bg-surface-container-low border border-outline-variant/30 rounded-sm p-4 focus:ring-1 focus:ring-on-tertiary-container transition-all outline-none" placeholder="Tell me about your vision..." rows={4}></textarea>
                </div>
                <button className="w-full gold-gradient-bg text-white py-5 rounded-full text-lg font-bold shadow-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mt-20 bg-surface-container">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-6 max-w-7xl mx-auto">
          <div className="font-headline italic text-lg text-primary font-bold">RAWAN ABU NAIM</div>
          <p className="font-sans text-sm tracking-wide text-secondary">© 2024 RAWAN ABU NAIM. Crafted with precision.</p>
          <div className="flex gap-8">
            <a className="text-secondary hover:text-primary font-bold transition-all duration-300 flex items-center gap-2" href="https://github.com/RawanAbuNaim" target="_blank">
              <Github size={16} /> GitHub
            </a>
            <a className="text-secondary hover:text-primary font-bold transition-all duration-300 flex items-center gap-2" href="https://linkedin.com/in/rawan-abo-naim-" target="_blank">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
