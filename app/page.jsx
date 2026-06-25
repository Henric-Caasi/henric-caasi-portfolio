"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
  Wrench,
  X
} from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const projectShots = [
  {
    src: "/assets/emedicard-landing.png",
    title: "Public landing page",
    note: "Health card access point with city branding and clear user actions."
  },
  {
    src: "/assets/emedicard-system-admin.png",
    title: "System administrator dashboard",
    note: "Overview metrics, filters, admin tools, and quick workflow actions."
  },
  {
    src: "/assets/emedicard-admin.png",
    title: "Admin application workflow",
    note: "Status tracking for approvals, payments, lab findings, and referrals."
  },
  {
    src: "/assets/emedicard-applications.png",
    title: "Applicant records",
    note: "Readable table view for applicant names, categories, dates, and status."
  },
  {
    src: "/assets/emedicard-certificate.png",
    title: "Generated health certificate",
    note: "Certificate output designed for official health card processing."
  }
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Mobile and Backend",
    icon: Smartphone,
    items: ["React Native", "Expo", "Laravel", "Clerk Authentication", "Convex"]
  },
  {
    title: "Data and Tools",
    icon: Database,
    items: ["MySQL", "Git/GitHub", "Figma", "VS Code", "Responsive UI"]
  },
  {
    title: "IT Support",
    icon: MonitorCog,
    items: ["PC Assembly", "Hardware Troubleshooting", "Software Support", "Technical Sales"]
  }
];

const highlights = [
  "Built the website side of a real capstone system for Davao City Health Office.",
  "Comfortable working across web, mobile, backend, and support tasks.",
  "Fresh BSIT graduate with hands-on technical support and customer-facing experience."
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeShot, setActiveShot] = useState(0);

  const activeProjectShot = useMemo(() => projectShots[activeShot], [activeShot]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Henric Caasi home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-black text-white shadow-clean">
              HC
            </span>
            <span className="text-sm font-bold tracking-wide text-navy sm:text-base">
              Henric_Caasi
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-skysoft hover:text-ocean"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/assets/Henric_Caasi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-navy transition hover:border-ocean hover:text-ocean"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-ocean px-4 py-2 text-sm font-bold text-white shadow-clean transition hover:bg-blue-700"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 bg-white md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-skysoft"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/assets/Henric_Caasi_Resume.pdf"
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-4 py-3 text-sm font-bold text-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="blueprint-grid relative pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#f7fbff]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-blue-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean">
                BSIT Fresh Graduate
              </span>
              <span className="rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                Davao City, Philippines
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
              Rogel Henric M. Caasi
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Entry-level software developer and IT support professional focused on building
              practical web and mobile systems that are clear, useful, and easy to maintain.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#project"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-5 py-3 text-sm font-bold text-white shadow-clean transition hover:bg-blue-700"
              >
                View Featured Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/SeanPqul"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-navy transition hover:border-ocean hover:text-ocean"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {["Full-stack web", "Mobile apps", "IT support"].map((item) => (
                <div key={item} className="glass-panel rounded-lg p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-ocean" />
                  <p className="text-sm font-bold text-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-4 shadow-clean">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src="/assets/emedicard-landing.png"
                alt="eMediCard landing page screenshot"
                width={1892}
                height={874}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-lg bg-ink p-4 text-white">
                <p className="text-2xl font-black">2026</p>
                <p className="text-sm text-slate-300">BSIT Graduate</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-2xl font-black text-ocean">1</p>
                <p className="text-sm text-slate-600">Real-world capstone</p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-2xl font-black text-ocean">4+</p>
                <p className="text-sm text-slate-600">Tech domains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-ocean">About</p>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              A fresh graduate with developer range and hands-on support experience.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-700">
            <p>
              I am a BSIT graduate from STI College Davao with a strong foundation in
              full-stack web development, mobile development, and technical support. My
              capstone project, eMediCard, was built for a real public health workflow and
              gave me experience turning requirements into usable screens and workflows.
            </p>
            <p>
              I am looking for an entry-level role where I can contribute to software
              development, IT support, or technical operations while continuing to grow as a
              reliable team member.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-skysoft p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-ocean" />
                  <p className="text-sm font-semibold leading-6 text-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-ocean">
                Featured Project
              </p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                eMediCard: Mobile-Based Health Card Management System
              </h2>
            </div>
            <a
              href="https://github.com/SeanPqul/emedicard_project"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-navy transition hover:border-ocean hover:text-ocean"
            >
              <Github className="h-4 w-4" />
              View Repository
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-xl bg-ink p-6 text-white shadow-clean">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-black">What it does</h3>
              <p className="mt-4 leading-8 text-slate-300">
                eMediCard digitizes community health card registration, validation, monitoring,
                and certificate generation for Davao City Health Office workflows.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Developed website-side screens and responsive user interfaces.",
                  "Supported admin workflows for application tracking and verification.",
                  "Worked with React Native, Expo, Next.js, Laravel, Convex, Tailwind CSS, and Clerk Authentication."
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg bg-white/8 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-clean">
              <div className="project-shot overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <Image
                  src={activeProjectShot.src}
                  alt={`${activeProjectShot.title} screenshot`}
                  width={1892}
                  height={874}
                  className="aspect-video w-full object-cover transition duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-black text-navy">{activeProjectShot.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{activeProjectShot.note}</p>
              </div>
              <div className="mt-5 grid grid-cols-5 gap-2">
                {projectShots.map((shot, index) => (
                  <button
                    key={shot.src}
                    onClick={() => setActiveShot(index)}
                    className={`overflow-hidden rounded-md border-2 transition ${
                      activeShot === index ? "border-ocean" : "border-transparent opacity-70"
                    }`}
                    aria-label={`Show ${shot.title}`}
                  >
                    <Image
                      src={shot.src}
                      alt=""
                      width={360}
                      height={180}
                      className="aspect-video w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wider text-ocean">Skills</p>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              Tools and strengths for both development and support roles.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-skysoft text-ocean">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-navy">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-xl bg-white p-6 shadow-clean">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean text-white">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-wider text-ocean">
              Work Experience
            </p>
            <h2 className="mt-3 text-2xl font-black text-ink">
              Technical and Sales Intern
            </h2>
            <p className="mt-2 font-semibold text-slate-700">
              DFE-168 Corporation, Davao City | February 2026 - May 2026
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              {[
                "Assembled and disassembled computer systems based on client specifications.",
                "Troubleshot hardware and software issues for customer devices.",
                "Recommended hardware solutions and handled online customer inquiries.",
                "Processed customer orders while practicing clear technical communication."
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Wrench className="mt-1 h-4 w-4 shrink-0 text-ocean" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-ink p-6 text-white shadow-clean">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-ocean">
              <GraduationCap className="h-6 w-6" />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-wider text-sky-300">
              Education
            </p>
            <h2 className="mt-3 text-2xl font-black">Bachelor of Science in Information Technology</h2>
            <p className="mt-2 font-semibold text-slate-300">
              STI College Davao | 2022 - 2026
            </p>
            <div className="mt-6 rounded-lg bg-white/8 p-5">
              <p className="text-sm font-bold text-white">Honor</p>
              <p className="mt-2 text-slate-300">Dean&apos;s List, 2022 - 2023</p>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-lg bg-white/8 p-5">
              <Headphones className="mt-1 h-5 w-5 text-sky-300" />
              <p className="text-sm leading-6 text-slate-300">
                Open to entry-level Software Development, IT Support, and Technical Operations roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-xl bg-ocean p-6 text-white shadow-clean lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-blue-100">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Let us build something practical.
                </h2>
                <p className="mt-4 max-w-xl leading-8 text-blue-50">
                  I am ready for entry-level opportunities where I can support users, build
                  reliable interfaces, and keep improving with a team.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:caasirogelhenric@gmail.com"
                  className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold text-navy transition hover:bg-skysoft"
                >
                  <Mail className="h-5 w-5 text-ocean" />
                  Email
                </a>
                <a
                  href="tel:+639686675310"
                  className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold text-navy transition hover:bg-skysoft"
                >
                  <Phone className="h-5 w-5 text-ocean" />
                  +63 968 667 5310
                </a>
                <a
                  href="https://www.linkedin.com/in/henric-caasi-7bb28b385"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold text-navy transition hover:bg-skysoft"
                >
                  <Linkedin className="h-5 w-5 text-ocean" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SeanPqul"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold text-navy transition hover:bg-skysoft"
                >
                  <Github className="h-5 w-5 text-ocean" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <footer className="flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Henric_Caasi | Portfolio</p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Davao City, Philippines
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
