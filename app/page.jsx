"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Headphones,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Smartphone,
  Terminal as TerminalIcon,
  Wrench,
  X,
  Send,
  Cpu,
  Layers,
  Sparkles,
  Play,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Camera,
  TrendingUp
} from "lucide-react";

// Navigation Links
const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

// eMediCard Screens
const projectShots = [
  {
    src: "/assets/emedicard-landing.png",
    title: "Public Landing Page",
    note: "Health card registration access point with municipal branding, responsive forms, and user support routes."
  },
  {
    src: "/assets/emedicard-system-admin.png",
    title: "System Administrator Dashboard",
    note: "High-level metrics, approval shortcuts, analytics modules, and secure system diagnostic widgets."
  },
  {
    src: "/assets/emedicard-admin.png",
    title: "Admin Approval Queue",
    note: "Governs document registration, status tracking, payment checks, and municipal verification workflows."
  },
  {
    src: "/assets/emedicard-applications.png",
    title: "Applicant Database Records",
    note: "Filterable data table showcasing applicants, category criteria, uploads, and dynamic status badges."
  },
  {
    src: "/assets/emedicard-certificate.png",
    title: "Dynamic Health Certificate Output",
    note: "Official PDF document output generated in real-time with embedded secure QR codes for inspection."
  }
];

// Graduation & Academic Media
const graduationPhotos = [
  {
    src: "/assets/henric-graduation-portrait.png",
    title: "Graduation Portrait",
    note: "BS in Information Technology graduation photo from STI College Davao."
  },
  {
    src: "/assets/henric-graduation-group.png",
    title: "STI Graduation Ceremony",
    note: "Celebrating with peers and friends at the STI College Davao commencement."
  },
  {
    src: "/assets/henric-graduation-board.png",
    title: "STI Graduation Board",
    note: "Class of 2026 graduation showcase board featuring STI IT graduates."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeShot, setActiveShot] = useState(0);

  // Media Hub States
  const [mediaTab, setMediaTab] = useState("profile"); // profile | media | stats
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // Message dispatcher states
  const [contactName, setContactName] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [sendState, setSendState] = useState("idle"); // idle | sending | success

  // Contact dispatch mock
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactName || !contactMsg) return;
    setSendState("sending");

    setTimeout(() => {
      setSendState("success");
      setContactName("");
      setContactMsg("");
      setTimeout(() => setSendState("idle"), 4000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-bg-obsidian text-white selection:bg-electric-blue selection:text-white font-sans">
      <div className="grain absolute inset-0 pointer-events-none z-40 opacity-50" />

      {/* NAVIGATION HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-bg-obsidian/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 group" aria-label="Henric Caasi home">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-electric-blue/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <Image
                src="/assets/hc-logo.jpg"
                alt="Henric Caasi Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-bold tracking-wide text-white transition-colors group-hover:text-electric-blue sm:text-base">
              Web Developer
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/assets/Henric_Caasi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-electric-blue hover:bg-electric-blue/5 hover:text-electric-blue"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-electric-blue px-4 py-2 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition hover:bg-blue-600 hover:shadow-electric-blue/30"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-white/12 bg-white/5 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/6 bg-bg-obsidian px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-muted hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/assets/Henric_Caasi_Resume.pdf"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/5 px-4 py-3 text-sm font-bold text-white"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-electric-blue px-4 py-3 text-sm font-bold text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="blueprint-grid relative pt-24 sm:pt-32 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-obsidian/10 via-bg-obsidian/90 to-bg-obsidian" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 w-full z-10">
          
          <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <div className="mb-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="rounded-full border border-electric-blue/20 bg-electric-blue/5 px-3.5 py-1 text-xs font-semibold tracking-wider text-electric-blue flex items-center gap-1.5 shadow-[0_0_12px_rgba(59,130,246,0.08)]">
                <span className="h-2 w-2 rounded-full bg-electric-blue animate-pulse" />
                Rogel Henric M. Caasi
              </span>
              <span className="rounded-full border border-white/8 bg-white/5 px-3.5 py-1 text-xs font-semibold tracking-wider text-muted flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-electric-blue" />
                Davao City, PH
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display leading-[1.1]">
              Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-blue-400 to-white">Developer</span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Specialized in building responsive web user interfaces, dynamic dashboards, and interactive database workflows. Experienced in frontend development and mobile UI prototyping.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-electric-blue px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] transition hover:bg-blue-600 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://github.com/SeanPqul"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-electric-blue hover:text-electric-blue hover:-translate-y-0.5"
              >
                <Github className="h-4.5 w-4.5" />
                GitHub Profile
              </a>
            </div>

            <div className="mt-10 grid gap-3 grid-cols-3 max-w-md w-full mx-auto lg:mx-0">
              {[
                { label: "Next.js & React", icon: Code2, color: "text-electric-blue border-electric-blue/10 bg-electric-blue/5" },
                { label: "Figma Prototypes", icon: Layers, color: "text-blue-400 border-blue-400/10 bg-blue-400/5" },
                { label: "Convex DB", icon: Database, color: "text-white border-white/10 bg-white/5" }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col items-center p-3 rounded-xl border text-center ${item.color}`}>
                  <item.icon className="h-5 w-5 mb-2" />
                  <p className="text-xs font-bold text-white/95">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DYNAMIC MEDIA & PROFILE HUB */}
          <div className="flex flex-col justify-center items-center mt-12 lg:mt-0 w-full">
            <div className="w-full max-w-[450px] lg:max-w-none flex flex-col">
              
              {/* Window Wrapper */}
              <div className="glass-panel w-full rounded-2xl overflow-hidden shadow-clean border border-white/8 flex flex-col relative transition-all duration-300">
                
                {/* Window Header */}
                <div className="border-b border-white/8 bg-slate-900/60 px-4 py-3 flex items-center justify-between select-none">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Tabs Selector */}
                  <div className="flex gap-1 bg-black/40 p-0.5 rounded-lg border border-white/6 font-mono text-[10px] sm:text-xs font-bold text-muted">
                    {[
                      { id: "profile", label: "profile.jpg" },
                      { id: "media", label: "my_media.gallery" },
                      { id: "stats", label: "core_metrics.json" }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setMediaTab(tab.id);
                          if (tab.id === "media") setActiveMediaIndex(0);
                        }}
                        className={`px-3 sm:px-4 py-1.5 rounded-md transition-colors ${
                          mediaTab === tab.id 
                            ? "bg-electric-blue text-white" 
                            : "hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="w-10" />
                </div>

                {/* Tab Pane Workspace */}
                <div className="relative aspect-[4/3] bg-[#050811] overflow-hidden flex flex-col">
                  
                  {mediaTab === "profile" && (
                    /* TAB 1: PROFILE PHOTO DISPLAY */
                    <div className="relative w-full h-full flex flex-col justify-between p-4">
                      <div className="absolute inset-0 z-0">
                        <Image
                          src="/assets/henric-main-photo.png"
                          alt="Rogel Henric M. Caasi portrait"
                          fill
                          className="object-cover object-top opacity-85 transition-transform duration-700 hover:scale-105"
                          sizes="(min-width: 1024px) 30vw, 90vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      </div>
                      
                      {/* Top elements */}
                      <div className="relative z-10 flex justify-between items-start">
                        <span className="rounded-md bg-electric-blue/95 backdrop-blur-md px-2.5 py-1 text-[9px] font-bold tracking-wider text-white uppercase shadow-md">
                          Active Focus: Web Dev
                        </span>
                      </div>

                      {/* Bottom elements */}
                      <div className="relative z-10 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl p-3 text-left">
                        <h4 className="text-xs font-bold text-white font-display">Rogel Henric M. Caasi</h4>
                        <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                          BSIT Graduate from STI College Davao. Building high-performance web systems with clean, responsive frontends and relational databases.
                        </p>
                      </div>
                    </div>
                  )}

                  {mediaTab === "media" && (
                    /* TAB 2: INTERACTIVE SLIDESHOW (GRADUATION MEDIA) */
                    <div className="relative w-full h-full flex flex-col justify-between">
                      {/* Current image */}
                      <div className="absolute inset-0 z-0">
                        {/* Blurred Ambient Backdrop */}
                        <Image
                          src={graduationPhotos[activeMediaIndex].src}
                          alt=""
                          fill
                          className="object-cover blur-md opacity-30 scale-105 z-0"
                          sizes="(min-width: 1024px) 30vw, 90vw"
                          priority
                        />
                        {/* Crisp Foreground Portrait */}
                        <Image
                          src={graduationPhotos[activeMediaIndex].src}
                          alt={graduationPhotos[activeMediaIndex].title}
                          fill
                          className="object-contain z-10 relative"
                          sizes="(min-width: 1024px) 30vw, 90vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-20 pointer-events-none" />
                      </div>

                      {/* Top title bar */}
                      <div className="relative z-10 flex justify-between items-center p-3.5 bg-gradient-to-b from-black/85 to-transparent">
                        <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                          Academic Media ({activeMediaIndex + 1}/{graduationPhotos.length})
                        </span>
                        <span className="rounded-md border border-electric-blue/30 bg-electric-blue/10 px-2 py-0.5 text-[8px] font-bold text-electric-blue">
                          STI College Davao
                        </span>
                      </div>

                      {/* Middle navigation buttons */}
                      <div className="relative z-10 flex items-center justify-between px-3.5 mt-auto mb-auto w-full">
                        <button
                          onClick={() => setActiveMediaIndex((prev) => (prev === 0 ? graduationPhotos.length - 1 : prev - 1))}
                          className="h-8 w-8 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="h-4.5 w-4.5" />
                        </button>
                        <button
                          onClick={() => setActiveMediaIndex((prev) => (prev === graduationPhotos.length - 1 ? 0 : prev + 1))}
                          className="h-8 w-8 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue transition-all"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="h-4.5 w-4.5" />
                        </button>
                      </div>

                      {/* Spacing helper */}
                      <div className="h-4 w-full" />
                    </div>
                  )}

                  {mediaTab === "stats" && (
                    /* TAB 3: CORE METRICS DASHBOARD */
                    <div className="flex-1 flex flex-col justify-center p-4 select-none">
                      
                      {/* Metric cards grid */}
                      <div className="grid grid-cols-2 gap-3 text-left">
                        
                        {/* Stat 1: Completed Projects */}
                        <a 
                          href="#projects" 
                          className="group rounded-xl border border-white/6 bg-white/[0.02] p-3 hover:bg-white/[0.04] hover:border-electric-blue/30 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono font-bold tracking-widest text-muted uppercase">Projects</span>
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                          <div className="mt-2.5">
                            <p className="text-2xl font-black text-white leading-none">2</p>
                            <p className="text-[9px] text-slate-400 mt-1 flex items-center gap-1 group-hover:text-electric-blue transition-colors">
                              Completed <ArrowUpRight className="h-2.5 w-2.5" />
                            </p>
                          </div>
                        </a>

                        {/* Stat 2: Internship Hours */}
                        <div className="rounded-xl border border-white/6 bg-white/[0.02] p-3 flex flex-col justify-between">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-muted uppercase">DFE-168 Intern</span>
                          <div className="mt-2.5">
                            <p className="text-2xl font-black text-white leading-none">480+</p>
                            <p className="text-[9px] text-slate-400 mt-1">Practical Hours</p>
                          </div>
                        </div>

                        {/* Stat 3: Tech Stack */}
                        <div className="rounded-xl border border-white/6 bg-white/[0.02] p-3 flex flex-col justify-between">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-muted uppercase">Tech Tools</span>
                          <div className="mt-2.5">
                            <p className="text-2xl font-black text-white leading-none">15+</p>
                            <p className="text-[9px] text-slate-400 mt-1">Languages &amp; Frameworks</p>
                          </div>
                        </div>

                        {/* Stat 4: Dean's List */}
                        <div className="rounded-xl border border-white/6 bg-white/[0.02] p-3 flex flex-col justify-between">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-muted uppercase">STI Honors</span>
                          <div className="mt-2.5">
                            <p className="text-md font-bold text-electric-glow leading-tight truncate">Dean&apos;s List</p>
                            <p className="text-[9px] text-slate-400 mt-1">GPA Excellence</p>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                </div>

              </div>
              
              {/* Info text below console */}
              <p className="mt-3 text-center text-xs text-muted font-mono">
                {mediaTab === "profile" && "Rogel Henric's development profile photo and focus."}
                {mediaTab === "media" && "Click the arrows to slide through academic graduation media."}
                {mediaTab === "stats" && "Quick metrics dashboard of projects, honors, and active experience."}
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-bg-obsidian border-t border-white/6 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
            
            <div className="space-y-6">
              <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-electric-blue">{"//"} 01. Profile Focus</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-display leading-tight">
                Web Interfaces, Practical Systems, and Clean Execution.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Rogel Henric M. Caasi is a web developer focused on building responsive interfaces, practical dashboards, and user-centered digital systems. His work combines frontend development, database-driven workflows, and clear visual presentation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                His strongest direction is web development, with mobile, UI/UX, and systems support skills adding useful range around the main craft.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Web & Mobile Engineering",
                    desc: "Experienced with Next.js, React, Expo, and Tailwind CSS. Focuses on writing performant code, responsive interface cards, and reusable layouts.",
                    icon: Cpu
                  },
                  {
                    title: "Full-Stack Databases & Auth",
                    desc: "Capable of modeling backend schemas using Laravel and Convex, and implementing secure identity handshakes via Clerk Authentication services.",
                    icon: Layers
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-panel rounded-xl p-5 border border-white/6">
                    <div className="h-9 w-9 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-electric-blue flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-md font-bold text-white font-display">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Focus highlights */}
              <div className="rounded-xl border border-white/6 bg-white/[0.01] p-6">
                <h4 className="text-xs font-mono font-bold tracking-widest text-electric-blue uppercase mb-4 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Engineering Highlights
                </h4>
                <ul className="grid gap-3.5 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Delivered a real-world Capstone database system (eMediCard) to digitize Davao City Health Office card processing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Built a strong academic foundation through TVL-ICT Animation at AMACC Davao and BSIT studies at STI College Davao.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Practices clean development workflows, responsive wireframing, and Git-versioned codebases.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 border-t border-white/6 bg-slate-950/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="mb-12 text-left">
            <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-electric-blue">{"//"} 02. Featured Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-display">
              Software Systems & Interface Layouts
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Select systems across web, backend, and mobile platforms alongside custom design prototypes.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* PROJECT 1: eMediCard */}
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-electric-blue/25 bg-electric-blue/5 px-2.5 py-1 font-mono text-xs font-black text-electric-blue">01 // Full-Stack Web &amp; Mobile</span>
                  <span className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-muted">Capstone Project</span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-white font-display">
                  eMediCard: Mobile-Based Health Card Management System
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-300">
                  Developed for the Davao City Health Office to streamline applicant health card registration, review queues, database auditing, and municipal certificate output generation.
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Designed and coded the responsive web panel layout for administrators and applicant review systems.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Integrated backend databases using Convex DB alongside Clerk to govern secure municipal logins.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Participated in writing React Native layouts via Expo for mobile health card storage and QR checking.</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React Native", "Expo", "Next.js", "Laravel", "Convex DB", "Tailwind CSS", "Clerk"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/SeanPqul/emedicard_project"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition hover:border-electric-blue hover:text-electric-blue"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                  </a>
                </div>
              </div>

              {/* Interactive screenshot visualizer */}
              <div className="glass-panel rounded-xl p-4 border border-white/6 shadow-clean">
                <div 
                  className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/6 bg-slate-950 flex items-center justify-center cursor-zoom-in group"
                  onClick={() => setLightboxImage(projectShots[activeShot].src)}
                >
                  <Image
                    src={projectShots[activeShot].src}
                    alt={projectShots[activeShot].title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/85 backdrop-blur-md px-3.5 py-3 border-t border-white/6 z-10">
                    <h4 className="text-xs font-bold text-electric-blue font-display">{projectShots[activeShot].title}</h4>
                    <p className="text-[10px] text-muted leading-relaxed mt-0.5">{projectShots[activeShot].note}</p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-5 gap-1.5">
                  {projectShots.map((shot, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveShot(index)}
                      className={`overflow-hidden rounded border transition-all duration-300 relative aspect-video ${
                        activeShot === index ? "border-electric-blue ring-2 ring-electric-blue/20" : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View screenshot ${index + 1}`}
                    >
                      <Image
                        src={shot.src}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-white/6" />

            {/* PROJECT 2: CHAMEE (Figma UI/UX) */}
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-blue-400/25 bg-blue-400/5 px-2.5 py-1 font-mono text-xs font-black text-blue-400">02 // UI/UX Design system</span>
                  <span className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-muted">Figma Collaboration</span>
                </div>
                
                <h3 className="text-2xl font-extrabold text-white font-display">
                  CHAMEE: Custom Clothing E-Commerce Prototype
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-300">
                  CHAMEE is a Figma-based clothing brand and shopping prototype where users can browse apparel, order online, customize clothing details, and upload their own designs for made-to-order pieces.
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Designed product browsing flows for shirts, hoodies, featured items, checkout, and user profile screens.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Created customization screens that let shoppers upload artwork, preview design placements, and select clothing options.</span>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-electric-blue shrink-0 mt-0.5" />
                    <span>Prepared brand guidelines covering logo usage, typography, color palette, mockups, and visual consistency.</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Figma", "UI/UX Design", "E-Commerce Flow", "Brand Guidelines", "Custom Apparel"].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://www.figma.com/design/ZtgjAAjCjwu3MOTI1Os1qh/CHAMEE-FINAL?node-id=0-1&t=Na3XY2ixGZh5h89C-1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition hover:border-electric-blue hover:text-electric-blue"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Figma Design
                  </a>
                </div>
              </div>

              <div className="glass-panel rounded-xl border border-white/6 bg-[#070c12] p-4 shadow-clean">
                <div 
                  className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/6 bg-slate-950 cursor-zoom-in group"
                  onClick={() => setLightboxImage("/assets/chamee-app-mockups.png")}
                >
                  <Image
                    src="/assets/chamee-app-mockups.png"
                    alt="CHAMEE clothing e-commerce Figma mockup board"
                    fill
                    className="object-cover transition duration-300 group-hover:scale-102"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
                  <div 
                    className="relative aspect-video overflow-hidden rounded-lg border border-white/6 bg-slate-950 cursor-zoom-in group"
                    onClick={() => setLightboxImage("/assets/chamee-brand-guidelines.png")}
                  >
                    <Image
                      src="/assets/chamee-brand-guidelines.png"
                      alt="CHAMEE brand guidelines board"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-102"
                      sizes="(min-width: 1024px) 18vw, 45vw"
                    />
                  </div>
                  <div className="rounded-lg border border-white/6 bg-white/[0.03] p-4">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-400">Design contribution</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Focused on mockups, product flow, and clothing customization screens for a client-facing apparel ordering experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-bg-obsidian border-t border-white/6 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="mb-12 text-left">
            <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-electric-blue">{"//"} 03. Competencies</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-display">
              Technical Stack &amp; Skills Directory
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Languages, libraries, database engines, and systems operation support attributes.
            </p>
          </div>

          {/* Primary Developer Skills Bento Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend Engineering",
                icon: Code2,
                items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
                color: "rgba(59, 130, 246, 0.15)",
                borderColor: "border-blue-500/20",
                glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.12)]",
                textColor: "text-electric-blue"
              },
              {
                title: "Backend & Mobile",
                icon: Smartphone,
                items: ["React Native", "Figma", "Laravel", "Convex DB", "Clerk Authentication", "Node.js"],
                color: "rgba(96, 165, 250, 0.15)",
                borderColor: "border-sky-400/20",
                glowColor: "shadow-[0_0_20px_rgba(96,165,250,0.12)]",
                textColor: "text-sky-400"
              },
              {
                title: "Data & Architecture",
                icon: Database,
                items: ["MySQL", "REST APIs", "Git/GitHub", "Figma", "VS Code", "Vercel Deployment"],
                color: "rgba(255, 255, 255, 0.08)",
                borderColor: "border-white/10",
                glowColor: "shadow-[0_0_20px_rgba(255,255,255,0.06)]",
                textColor: "text-white"
              }
            ].map((group, index) => {
              const Icon = group.icon;
              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border border-white/6 bg-bg-card p-6 flex flex-col justify-between transition-all duration-500 hover:border-white/15 ${group.glowColor}`}
                >
                  <div>
                    <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${group.textColor}`} style={{ backgroundColor: group.color }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-md font-bold text-white font-display leading-tight">{group.title}</h3>
                    
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/6 bg-white/[0.02] px-2.5 py-1 text-xs font-semibold text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DEMOTED AUXILIARY SKILLS: IT Support and PC Hardware */}
          <div className="mt-8 rounded-2xl border border-white/6 bg-white/[0.01] p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex gap-3.5 items-start">
                <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Systems Operations &amp; Hardware Support</h4>
                  <p className="text-xs text-muted mt-1 max-w-xl">
                    Auxiliary systems knowledge derived from diagnostics support work. Competent in hardware setups, troubleshooting pipelines, and device assembly:
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end max-w-md">
                {["PC Custom Assembly", "Hardware Troubleshooting", "Desktop Diagnostics", "CLI Scripting", "Technical Client Consulting"].map((supportSkill) => (
                  <span
                    key={supportSkill}
                    className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-400"
                  >
                    {supportSkill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="journey" className="py-20 border-t border-white/6 bg-slate-950/20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="mb-16 text-center">
            <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-electric-blue">{"//"} 04. Timeline Journey</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-display">
              My Journey &amp; Academic Milestones
            </h2>
          </div>



          <div className="relative max-w-4xl mx-auto">
            {/* Center Timeline rail */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 bottom-1 w-px bg-white/10" />

            <div className="space-y-12">
              
              {/* Event 1: Work Experience */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
                {/* Node dot */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 h-2.5 w-2.5 rounded-full bg-electric-blue border border-electric-blue shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 transition-transform duration-300 group-hover:scale-125" />
                
                {/* Left Card: Experience Details */}
                <div className="w-full md:w-[calc(50%-2rem)] ml-9 md:ml-0 md:text-right flex flex-col md:items-end">
                  <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-wider mb-2">February 2026 - May 2026</span>
                  <div className="glass-panel p-5 rounded-xl border border-white/6 w-full text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-lg bg-electric-blue/10 border border-electric-blue/20 text-electric-blue flex items-center justify-center">
                        <BriefcaseBusiness className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">Technical and Sales Intern</h4>
                        <p className="text-[10px] text-muted font-semibold">DFE-168 Corporation, Davao City</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex gap-2">
                        <span className="text-electric-blue select-none">-</span>
                        <span>Configured client specifications and custom desktop rigs, assuring hardware integrity checks.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-electric-blue select-none">-</span>
                        <span>Diagnosed software diagnostics and troubleshooting issues to restore client operations.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-electric-blue select-none">-</span>
                        <span>Provided technical sales support, managing client inquiries and processing customer configuration cards.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Right spacer for alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>

              {/* Event 2: Education */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
                {/* Node dot */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 h-2.5 w-2.5 rounded-full bg-blue-400 border border-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] z-10 transition-transform duration-300 group-hover:scale-125" />
                
                {/* Left spacer for alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />

                {/* Right Card: Education Details */}
                <div className="w-full md:w-[calc(50%-2rem)] ml-9 md:ml-0 text-left">
                  <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">2022 - 2026</span>
                  <div className="glass-panel p-5 rounded-xl border border-white/6 w-full text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-lg bg-blue-400/10 border border-blue-400/20 text-blue-400 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">BS in Information Technology</h4>
                        <p className="text-[10px] text-muted font-semibold">STI College Davao</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 mb-3 text-left">
                      <li className="flex gap-2">
                        <span className="text-blue-400 select-none">-</span>
                        <span>Studied core computer science and IT concepts, specializing in database systems, computer networking, and system design.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 select-none">-</span>
                        <span>Developed the eMediCard Capstone web and mobile health card management system using React Native, Expo, and Convex NoSQL.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-400 select-none">-</span>
                        <span>Implemented mobile QR code scanning verification and shared TypeScript schema validations across backend functions.</span>
                      </li>
                    </ul>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-400/5 px-2.5 py-0.5 text-[9px] font-bold text-blue-400 uppercase font-mono">
                      Dean&apos;s List (2022 - 2023)
                    </div>
                  </div>
                </div>
              </div>

              {/* Event 3: Senior High School */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full group">
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-1/2 md:-translate-y-1/2 h-2.5 w-2.5 rounded-full bg-white border border-white shadow-[0_0_10px_rgba(255,255,255,0.55)] z-10 transition-transform duration-300 group-hover:scale-125" />
                
                <div className="w-full md:w-[calc(50%-2rem)] ml-9 md:ml-0 md:text-right flex flex-col md:items-end">
                  <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">2020 - 2022</span>
                  <div className="glass-panel p-5 rounded-xl border border-white/6 w-full text-left">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 text-slate-200 flex items-center justify-center">
                        <MonitorCog className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">TVL-ICT Animation</h4>
                        <p className="text-[10px] text-muted font-semibold">AMACC Davao</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Completed senior high school under the ICT strand with animation-focused training, strengthening early foundations in digital media, design tools, and technical project work.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-bg-obsidian border-t border-white/6 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="rounded-3xl border border-white/6 bg-[#040813] p-6 lg:p-10 shadow-clean relative overflow-hidden">
            {/* Neon accent blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] z-10">
              
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-electric-blue">{"//"} 05. Contact</p>
                  <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl font-display">
                    Let&apos;s Build Something Useful.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
                    I am actively seeking junior or entry-level opportunities in web development, frontend engineering, and full-stack project work. I am also open to technical support roles where my systems background can help.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 mt-8">
                  <a
                    href="mailto:caasirogelhenric@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 p-4 font-bold text-white transition hover:border-electric-blue hover:text-electric-blue"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email Me</span>
                  </a>
                  <a
                    href="tel:+639686675310"
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 p-4 font-bold text-white transition hover:border-electric-blue hover:text-electric-blue"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+63 968 667 5310</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/henric-caasi-7bb28b385"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 p-4 font-bold text-white transition hover:border-electric-blue hover:text-electric-blue"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/SeanPqul"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 p-4 font-bold text-white transition hover:border-electric-blue hover:text-electric-blue"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub Hub</span>
                  </a>
                </div>
              </div>

              {/* Message Terminal Sender */}
              <div className="glass-panel p-6 rounded-2xl border border-white/6">
                <h3 className="text-sm font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-2">
                  <Send className="h-4 w-4 text-electric-blue" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono text-muted uppercase font-bold mb-1.5" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="w-full rounded-lg bg-[#030712] border border-white/6 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/20"
                      placeholder="Jane Doe"
                      disabled={sendState !== "idle"}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-muted uppercase font-bold mb-1.5" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      required
                      rows={3}
                      className="w-full rounded-lg bg-[#030712] border border-white/6 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/20"
                      placeholder="Hi Henric, let's connect for an interview..."
                      disabled={sendState !== "idle"}
                    />
                  </div>

                  {sendState === "success" ? (
                    <div className="rounded-lg bg-electric-blue/10 border border-electric-blue/25 text-electric-blue p-3 text-center text-xs font-bold font-mono animate-pulse">
                      MESSAGE READY. Thanks for reaching out.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={sendState === "sending" || !contactName || !contactMsg}
                      className={`w-full rounded-lg p-3 text-xs font-bold flex items-center justify-center gap-2 transition duration-300 ${
                        sendState === "sending" 
                          ? "bg-skysoft text-electric-blue border border-electric-blue/20 cursor-wait" 
                          : "bg-electric-blue text-white hover:bg-blue-600 cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                      }`}
                    >
                      {sendState === "sending" ? (
                        <>
                          <span className="h-3.5 w-3.5 border-2 border-electric-blue border-t-transparent rounded-full animate-spin" />
                          Sending message...
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  )}
                </form>
              </div>

            </div>
          </div>

          <footer className="mt-12 flex flex-col gap-4 border-t border-white/6 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 Rogel Henric M. Caasi. Designed with full-stack precision.</p>
            <p className="flex items-center gap-2">
              <Headphones className="h-3.5 w-3.5 text-electric-blue" />
              Open to Web Developer &amp; Junior Software Engineer Roles
            </p>
          </footer>

        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/15 hover:border-white/20 transition-all shadow-lg"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center select-none cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Fullscreen project preview"
              fill
              className="object-contain rounded-lg"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}

    </main>
  );
}
