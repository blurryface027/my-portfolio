import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (

    
    <div className="bg-black text-white flex flex-col font-grotesk relative overflow-hidden">
     {/* Grid overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      {/* Content Wrapper */}
      <div className=" flex flex-col items-center px-4">
        {/* Top Bar */}
        <div className="absolute top-5 left-5 text-[10px] sm:text-xs md:text-sm font-interTight">
  <a                                         
    href="mailto:krishna158310@gmail.com" 
    className="hover:text-gray-300 transition no-underline"
  >
    WORK@KRISHNASHARMA.DEV
  </a>
</div>

        <div className="absolute top-5 right-5 text-[10px] sm:text-xs md:text-sm font-interTight text-right">
          GRAPHIC DESIGNER<br /> FRONTEND DEVELOPER<br /> DEVOPS PRACTITIONER
        </div>


        {/* Hero Content */}
        <div className="flex flex-col items-center gap-3 mt-80 mb-60 sm:gap-10 md:gap-12">
          {/* Glassmorphic Floating Tags */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-[9px] sm:text-[10px] md:text-[12px] font-interTight">
            <span className="px-3 sm:px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              DESIGN
            </span>
            <span className="px-3 sm:px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              FRONTEND
            </span>
            <span className="px-3 sm:px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              DEVOPS
            </span>
          </div>

          {/* Main Name */} <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-8xl mt-1 font-bold tracking-tight text-center"> KRISHNA SHARMA </h1>

          {/* Down Arrow */}
          <div className="animate-bounce text-2xl mt-10 sm:text-3xl cursor-pointer"
    onClick={() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    ↓</div>
        </div>
      </div>





      {/* About Section */}
<section id="about" className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start font-interTight">
    
    {/* Left Icon */}
    <div className="flex items-start">
      <span className="text-gray-200 text-xl">↳</span>
    </div>

    {/* Short Intro */}
    <div className="text-left">
      <p className="text-base leading-relaxed text-gray-300 text-sm">
        HI, I’M KRISHNA — GRAPHIC DESIGNER<br/>
        FRONTEND DEVELOPER, AND DEVOPS PRACTITIONER, CRAFTING MODERN DIGITAL EXPERIENCES AND PRODUCTION-READY SYSTEMS.
      </p>
    </div>

    {/* Detailed Description */}
    <div className="text-left">
      <p className="text-base leading-relaxed text-gray-300 text-sm">
        I DESIGN AND BUILD FRONTEND APPLICATIONS AND AUTOMATE THEIR DEPLOYMENT USING AWS, DOCKER, KUBERNETES, HELM, CI/CD, AND GITOPS WITH ARGOCD, ENSURING RELIABLE, SCALABLE, AND PRODUCTION-READY SYSTEMS.
      </p>
    </div>
  </div>
</section>



{/* Experiences Section */}
<section className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Title */}
    <h2 className="text-4xl sm:text-4xl font-interTight mb-16 text-left">
      Experiences
    </h2>

    {/* Timeline */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left font-interTight">
      {/* 2019 */}
      <div>
        <p className="text-gray-400 text-sm">2025</p>
        <p className="text-base text-sm">GRAPHIC DESIGN INTERN</p>
        <p className="text-red-500 text-sm">InAmigos Foundation</p>
      </div>

      {/* 2020 */}
      <div>
        <p className="text-gray-400 text-sm">2022</p>
        <p className="text-base text-sm">FRONTEND DEVELOPMENT</p>
        <p className="text-red-500 text-sm">Self Taught</p>
      </div>

      {/* 2021 */}
      <div>
        <p className="text-gray-400 text-sm">2021</p>
        <p className="text-base text-sm">FREELANCE VIDEO EDITOR</p>
        <p className="text-red-500 text-sm">Independent</p>
      </div>

      {/* 2023 */}
      <div>
        <p className="text-gray-400 text-sm">2020</p>
        <p className="text-base text-sm">FREELANCE GRAPHIC DESIGNER</p>
        <p className="text-red-500 text-sm">Independent</p>
      </div>
    </div>
  </div>
</section>

{/* Work / Projects Section */}
<section className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Title */}
    <h2 className="text-4xl sm:text-4xl font-interTight mb-16 text-left">
      Projects
    </h2>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 gap-10 text-left font-interTight">
      
{/* Project 3 */}
      <div className="flex flex-row justify-between items-start border-white/10">
        <div>
          <p className="text-gray-400 text-sm">2026</p>
          <p className="text-base text-sm">GITOPS BASED KUBERNETES DEPLOYMENT</p>
          <a
            href="https://github.com/blurryface027/gitops-k8s-deployment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline flex items-center text-sm mt-1"
          >
            Visit <span className="ml-1">→</span>
          </a>
        </div>
        {/* Technologies Used */}
        <div className="text-right">
          <p className="text-gray-400 text-sm">Technologies</p>
          <p className="text-base text-sm">
            Kubernetes, ArgoCD, Helm, Docker, GitHub, Linux
          </p>
        </div>
      </div>

      {/* Project 1 */}
      <div className="flex flex-row justify-between items-start border-white/10">
        <div>
          <p className="text-gray-400 text-sm">2025</p>
          <p className="text-base text-sm">PORTFOLIO WEBSITE</p>
          <a
            href="https://github.com/blurryface027/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline flex items-center text-sm mt-1"
          >
            Visit <span className="ml-1">→</span>
          </a>
        </div>
        {/* Technologies Used */}
        <div className="text-right">
          <p className="text-gray-400 text-sm">Technologies</p>
          <p className="text-base text-sm">
            React, Tailwind CSS, Typescript, JavaScript
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-row justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">2024</p>
          <p className="text-base text-sm">LOGOFOLIO v1.0</p>
          <a
            href="https://www.behance.net/gallery/206891783/Logofolio-V1-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline flex items-center text-sm mt-1"
          >
            Visit <span className="ml-1">→</span>
          </a>
        </div>
        {/* Design Tools */}
        <div className="text-right">
          <p className="text-gray-400 text-sm">Design Tools</p>
          <p className="text-base text-sm">Illustrator, Photoshop</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="w-full bg-black/70 backdrop-blur-md border-t border-white/10 text-white py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-interTight">
        {/* Left */}
        <div className="uppercase tracking-wide text-center md:text-left">
          LET’S GET IN TOUCH
        </div>

        {/* Center Social Links */}
<div className="flex flex-wrap gap-3 justify-center">
  {[
    { name: "Instagram", url: "https://instagram.com/gh0stfreak027" },
    { name: "Behance", url: "https://behance.net/krishnadzns" },
    { name: "Twitter", url: "https://twitter.com/blurryface027" },
    { name: "GitHub", url: "https://github.com/blurryface027" },
  ].map((platform) => (
    <a
      key={platform.name}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 sm:px-4 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition"
    >
      {platform.name}
    </a>
  ))}
</div>

        {/* Right - Live Clock */}
<div className="font-mono text-center md:text-right">
  {time.toLocaleTimeString([], { 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: true 
  })}
</div>
      </footer>
    </div>
  );
}
