import React from "react";

function HeroSection() {
  return (
    <>
      <section
        className="relative py-10 md:py-16 bg-[url('/1.webp')] bg-cover h-screen w-full overflow-hidden"
        style={{ backgroundPosition: "10% center" }}
        id="HeroSection"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 to-purple-900/60"></div>
        <div className="container max-w-screen-xl mx-auto">
          <div className="text-center transform transition-all duration-500 ">
            <nav className="flex items-center justify-end mb-20 md:mb-40">
              <button className="flex items-center space-x-2 px-7 py-3 md:px-9 md:py-4 bg-pink-500 font-medium md:font-semibold text-white text-md rounded-lg hover:bg-pink-600  shadow-lg">
                <span>📩</span>
                <span>ติดต่อ</span>
              </button>
            </nav>
            <h6 className="font-medium text-white text-xl md:text-3xl uppercase mb-8  [text-shadow:_0_2px_8px_rgba(255,182,193,0.8)]">
              🎀 Konnichiwa! 🎀
            </h6>

            <h1 className="font-bold text-white text-5xl md:text-8xl  mb-8 [text-shadow:_0_4px_12px_rgba(0,0,0,0.6)]">
              <span>My Name is Kayna</span>
              <br />
              <span className="text-3xl md:text-5xl font-normal">
                จากประเทศไทย 🇹🇭
              </span>
            </h1>

            <p className="font-normal text-pink-100 text-lg md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
              ✨ "เมดเสมือนสุดคิวยูกิ! พร้อมมอบประสบการณ์
              <span className="text-pink-300 font-semibold">ไลฟ์สตรีม</span> และ
              <span className="text-purple-300 font-semibold">
                คอนเทนต์สร้างสรรค์
              </span>
              ที่จะทำให้ทุกวันของคุณเป็นวันพิเศษ! 💞&quot;
            </p>

            <a
              href="#"
              className="inline-flex items-center space-x-3 px-9 py-4 md:px-12 md:py-5 font-bold bg-pink-500 text-white text-lg rounded-xl hover:bg-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:space-x-4"
            >
              <span>👉 เริ่มงานด้วยกันเลย!</span>
              <span className="animate-bounce">🚀</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
