import React from "react";

function Homepage() {
  return (
    <div className="container-fluid">
      <section
        className="relative py-10 md:py-16 bg-[url('/1.webp')] bg-cover h-screen w-full overflow-hidden"
        style={{ backgroundPosition: "10% center" }}
      >
        {/* Gradient Overlay */}
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
              ✨ "เมดเสมือนสุดคิวยูกิ! พร้อมมอบประสบการณ์{" "}
              <span className="text-pink-300 font-semibold">ไลฟ์สตรีม</span> และ{" "}
              <span className="text-purple-300 font-semibold">
                คอนเทนต์สร้างสรรค์
              </span>{" "}
              ที่จะทำให้ทุกวันของคุณเป็นวันพิเศษ! 💞"
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

      <section className="mt-30 py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                🎀 เคนะのプロフィール 🎀
              </h1>

              <p className="font-normal text-gray-500 text-xs md:text-base">
                "เมดน้อยผู้เปี่ยมไปด้วยพลังแห่งความน่ารัก 💖
                <br />
                พร้อมส่งมอบความสุขในทุกมิติให้คุณ!"
              </p>
            </div>

            <div className="space-y-24">
              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  🌸
                </h1>

                <span className="w-28 h-0.5 bg-pink-200 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    เกี่ยวกับฉัน
                  </h1>
                  <p className="font-normal text-gray-500 text-sm md:text-base">
                    สวัสดีค่า~!
                    <br />
                    เคนะเป็นเมดเสมือนสุดคิวท์ที่ชื่นชอบการสร้างคอนเทนต์สนุกๆ 🎮
                    <br />
                    พร้อมให้บริการทั้งการเล่นเกมแบบอินเตอร์แอคทีฟ
                    <br />
                    และสร้างความบันเทิงในรูปแบบที่หลากหลายให้ทุกคนค่ะ!
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  📮
                </h1>

                <span className="w-28 h-0.5 bg-blue-200 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    ติดต่อ合作
                  </h1>
                  <div className="font-normal text-gray-500 text-sm md:text-base space-y-3">
                    <p>
                      🏮 Facebook:
                      <a
                        href="https://facebook.com/KaynaVTB"
                        className="text-pink-500 hover:underline ml-2"
                      >
                        KaynaVTB Page
                      </a>
                    </p>
                    <p>
                      🎴 Discord:
                      <span className="bg-gray-100 p-1 rounded ml-2">
                        477423203019653130
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6">
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                  ✨
                </h1>

                <span className="w-28 h-0.5 bg-purple-200 mt-5"></span>

                <div>
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    คนวาด && คนริก
                  </h1>
                  <div className="font-normal text-gray-500 text-sm md:text-base space-y-2">
                    <p>
                      🎨 ママ Artist:
                      <span className="text-blue-500">@Lunyatic</span>
                    </p>
                    <p>
                      🛠️ ป๊าป้า Engineer:
                      <span className="text-green-500">@masaomiayu863</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center animate-bounce">
            <p className="text-xl md:text-2xl font-semibold text-pink-500">
              ✨ 一緒に楽しい冒険を始めましょう! 🎉
            </p>
          </div>
        </div>
      </section>
      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
              Testimonial
            </h1>

            <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
              I’m not currently taking on new client work but feel free to
              contact me for any <br /> other inquiries.
            </p>

            <div className="flex items-center justify-center space-x-8">
              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="twitter"
                  className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="dribbble"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="facebook"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="codepen"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="at-sign"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>

              <a
                href="#"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <i
                  data-feather="instagram"
                  className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
