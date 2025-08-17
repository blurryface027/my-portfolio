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
          GRAPHIC DESIGNER<br /> FRONTEND DEVELOPER<br /> BASED IN INDIA
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center gap-3 mt-80 mb-60 sm:gap-10 md:gap-12">
          {/* Glassmorphic Floating Tags */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-[9px] sm:text-[10px] md:text-[12px] font-interTight">
            <span className="px-3 sm:px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              CREATIVE DESIGNER
            </span>
            <span className="px-3 sm:px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              FRONTEND DEVELOPER
            </span>
          </div>

          {/* Main Name */}
          <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-8xl mt-1 font-bold tracking-tight text-center">
            KRISHNA SHARMA
          </h1>

          {/* Down Arrow */}
          <div className="animate-bounce text-2xl mt-10 sm:text-3xl">↓</div>
        </div>
      </div>


      {/* About Section */}
<section className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start font-interTight">
    
    {/* Left Icon */}
    <div className="flex items-start">
      <span className="text-gray-200 text-xl">↳</span>
    </div>

    {/* Short Intro */}
    <div className="text-left">
      <p className="text-base leading-relaxed text-gray-300 text-sm">
        Hi, I'm Krishna, a Brand Designer and Frontend Developer <br />
        passionate about creating meaningful identities and modern web experiences.
      </p>
    </div>

    {/* Detailed Description */}
    <div className="text-left">
      <p className="text-base leading-relaxed text-gray-300 text-sm">
        I create distinctive Visual Identities and seamless Frontend Interfaces powered by Vite, Next, React, Angular, TypeScript, JavaScript, HTML, CSS, Framer Motion and Tailwind.
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
        <p className="text-base text-sm">Graphic Design Intern</p>
        <p className="text-gray-400 text-sm">InAmigos Foundation</p>
      </div>

      {/* 2020 */}
      <div>
        <p className="text-gray-400 text-sm">2022</p>
        <p className="text-base text-sm">Frontend Development</p>
        <p className="text-gray-400 text-sm">Self Taught</p>
      </div>

      {/* 2021 */}
      <div>
        <p className="text-gray-400 text-sm">2021</p>
        <p className="text-base text-sm">Freelance Video Editor</p>
        <p className="text-gray-400 text-sm">Independent</p>
      </div>

      {/* 2023 */}
      <div>
        <p className="text-gray-400 text-sm">2020</p>
        <p className="text-base text-sm">Freelance Graphic Designer</p>
        <p className="text-gray-400 text-sm">Independent</p>
      </div>
    </div>
  </div>
</section>


{/* Quote Section */}
<section className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto mb-10 mt-1"> {/* <- same wrapper */}
    <h2 className="font-interTight text-left text-5xl sm:text-5xl md:text-6xl leading-tight">
      Minimal.<br />
      Modern.<br />
      Meaningful.
    </h2>
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
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </footer>
    </div>
  );
}
