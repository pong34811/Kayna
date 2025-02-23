import React from "react";
import Image from "next/image";

function ProfileSection() {
  return (
    <>
      <section className="mt-30 py-10 md:py-16" id="ProfileSection">
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
              <Image
                src="/Mascot.webp"
                width={320}
                height={320}
                alt="Kayna Mascot"
              />
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
    </>
  );
}

export default ProfileSection;
