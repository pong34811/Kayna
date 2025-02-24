"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <ParallaxProvider>
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        {/* ✅ Background Layer */}
        <Parallax speed={-50} className="absolute inset-0">
          <div className="w-full h-full relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/bedroom.png")',
                backgroundPosition: "10% 1%",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/1.webp")',
                backgroundPosition: "10% 1%",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </Parallax>

        {/* ✅ Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-900/40"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10 text-white px-6">
          {/* ✅ Small Heading */}
          <Parallax speed={-10}>
            <h6 className="text-xl md:text-3xl uppercase tracking-wide mb-4 drop-shadow-3xl">
              🎀 ยินดีที่ได้รู้จัก! 🎀
            </h6>
          </Parallax>

          {/* ✅ Main Title */}
          <Parallax speed={-10}>
            <h1 className="text-5xl md:text-8xl font-bold mb-4 drop-shadow-2xl">
              My Name is <span className="text-pink-400">Kayna</span>
            </h1>
          </Parallax>

          {/* ✅ Subtitle */}
          <Parallax speed={-10}>
            <p className="text-pink-200 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-xl">
              ✨ "เมดเสมือนสุดคิวยูกิ! พร้อมมอบประสบการณ์
              <span className="text-pink-300 font-semibold">ไลฟ์สตรีม</span> และ
              <span className="text-purple-300 font-semibold">
                คอนเทนต์สร้างสรรค์
              </span>
              ที่จะทำให้ทุกวันของคุณเป็นวันพิเศษ! 💞"
            </p>
          </Parallax>

          {/* ✅ CTA Button */}
          <Parallax speed={-10}>
            <a
              href="#"
              className="inline-flex items-center space-x-3 px-9 py-4 md:px-12 md:py-5 mt-6 font-bold bg-pink-500 text-white text-lg rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-3xl hover:shadow-4xl hover:scale-110"
            >
              <span>👉 เริ่มงานด้วยกันเลย!</span>
              <span className="animate-bounce">🚀</span>
            </a>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
}
