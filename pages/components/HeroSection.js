"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <ParallaxProvider>
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden ">
        <Parallax speed={-30} className="absolute inset-0">
          <div
            className="w-full h-full relative"
            style={{
              backgroundImage: 'url("/1.webp"), url("/bedroom.png")', // เพิ่ม background ที่นี่
              backgroundPosition: "10% center",
              backgroundSize: "cover",
              opacity: 0.85,
            }}
          ></div>
        </Parallax>
        {/* ✅ Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/30 to-purple-900/70"></div>

        {/* ✅ Floating Light Effect */}
        <div className="absolute w-[500px] h-[500px] bg-pink-500/40 rounded-full blur-[150px] -top-20 left-1/2 transform -translate-x-1/2 animate-pulse"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10 text-white px-6">
          {/* ✅ Small Heading */}
          <Parallax
            speed={-10}
            translateY={[-20, 10]}
            opacity={[1, 0.8]}
            scale={[1, 1.05]} // ให้เลื่อนแบบเนียนๆ
          >
            <h6 className="text-xl md:text-3xl uppercase tracking-wide mb-4 text-pink-300 drop-shadow-md">
              🎀 Konnichiwa! 🎀
            </h6>
          </Parallax>

          {/* ✅ Main Title */}
          <Parallax
            speed={-15}
            translateY={[-30, 10]}
            opacity={[1, 0.85]} // เพิ่มความเนียนในการเปลี่ยนแปลง
            scale={[1, 1.1]} // เพิ่มการขยายเล็กน้อย
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-4 drop-shadow-lg">
              My Name is <span className="text-pink-400">Kayna</span>
            </h1>
          </Parallax>

          {/* ✅ Subtitle */}
          <Parallax
            speed={-10}
            translateY={[-15, 10]}
            opacity={[1, 0.7]}
            scale={[1, 1.05]} // เพิ่มการขยายแบบเนียน
          >
            <p className="text-pink-200 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              ✨ "เมดเสมือนสุดคิวยูกิ! พร้อมมอบประสบการณ์
              <span className="text-pink-300 font-semibold">ไลฟ์สตรีม</span>
              และ
              <span className="text-purple-300 font-semibold">
                คอนเทนต์สร้างสรรค์
              </span>
              ที่จะทำให้ทุกวันของคุณเป็นวันพิเศษ! 💞"
            </p>
          </Parallax>

          {/* ✅ CTA Button */}
          <Parallax
            speed={5}
            translateY={[20, -10]}
            scale={[0.9, 1.1]} // เพิ่มการขยายเล็กน้อย
            opacity={[0.8, 1]} // ทำให้การแสดงผลเนียนขึ้น
          >
            <a
              href="#"
              className="inline-flex items-center space-x-3 px-9 py-4 md:px-12 md:py-5 mt-6 font-bold bg-pink-500 text-white text-lg rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110"
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
