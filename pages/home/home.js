import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa';

function Home() {
  const [channelData, setChannelData] = useState({
    subscriberCount: 0,
    videoCount: 0,
    viewCount: 0,
  });
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/vtuber_19-1-2025.webp", "/kayna_maid_bg.webp"];
  const [currentPage, setCurrentPage] = useState(0); // จัดการหน้า
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const games = [
    { name: 'ROV', icon: '/games/rov.webp' },
    { name: 'LOL', icon: '/games/lol.webp' },
    { name: 'Roblox', icon: '/games/Roblox.webp' },
    { name: 'LOL TFT', icon: '/games/LOL TFT.webp' },
    { name: 'Line Ranger', icon: '/games/Line Ranger.webp' },
    { name: 'Seven Knights Idle Adventure', icon: '/games/Seven Knights Idle Adventure.webp' }
  ];


  const achievements = [
    { number: channelData.subscriberCount, label: 'Subscribers' },
    { number: channelData.videoCount, label: 'Videos' },
    { number: channelData.viewCount, label: 'Total Views' },
  ];

  const personalInfo = [
    { label: 'Role', value: 'VTuber / Content Creator' },
    { label: 'Languages', value: 'Thai' },
    { label: 'Active Since', value: '2023' },
    { label: 'Content Type', value: 'Gaming, Free Talk,' },
    { label: 'Streaming Schedule', value: 'Streaming every Monday to Friday from 7:30 PM to 8:30 PM (GMT+7)' },
    { label: 'Content Types', value: 'Gaming, Live Streams, Free Talks, Vtuber Collaborations' }
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@KaynaVtuberTH',
      icon: <FaYoutube className="text-2xl hover:text-red-600 transition" />
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@kayna_channel?lang=en',
      icon: <FaTiktok className="text-2xl hover:text-blue-400 transition" />
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61570898956194',
      icon: <FaFacebook className="text-2xl hover:text-blue-600 transition" />
    }
  ];

  const mamaPapaData = [
    { label: 'Mama(คนวาด)', content: <Link to="https://x.com/lunyatic_art" target="_blank">@lunyatic_art</Link> },
    { label: 'Papa(คนริก)', content: <Link to="https://x.com/MasaomiAyu" target="_blank">@MasaomiAyu</Link> }
  ];

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCC_P34t35REbiPzbHO_bifA&key=AIzaSyDcsfn7EkqklHYJwMS83-mfm7_O0uDHJAc"
    )
      .then((response) => response.json())
      .then((data) => {
        const { subscriberCount, videoCount, viewCount } = data.items[0].statistics;
        setChannelData({ subscriberCount, videoCount, viewCount });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // เปลี่ยนภาพอัตโนมัติทุกๆ 3 วินาที
    }, 3000); // ทุกๆ 3,000ms (3 วินาที)

    // ลบ interval เมื่อคอมโพเนนต์ถูกทำลาย (clean-up)
    return () => clearInterval(interval);
  }, []); // คอมโพเนนต์นี้จะทำงานแค่ครั้งเดียวเมื่อโหลด

  const gamesPerPage = 2;
  const currentGames = games.slice(currentPage * gamesPerPage, (currentPage + 1) * gamesPerPage);
  const nextPage = () => {
    if ((currentPage + 1) * gamesPerPage < games.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Kayna<span className="text-gray-700">Portfolio</span>
          </div>

          {/* Navigation for Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center space-x-2"
          >
            <div className={`w-6 h-1 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45' : ''}`}></div>
            <div className={`w-6 h-1 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-1 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45' : ''}`}></div>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-0 left-0 w-full bg-white/90 shadow-lg py-4 px-6 flex flex-col space-y-4">
              {/* Close Button */}
              <button
                className="self-end text-gray-700 text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                &times; {/* สัญลักษณ์ปิด */}
              </button>

              <ul className='flex flex-col space-y-6 items-center'>
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-blue-600 transition text-lg font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

        </div>
      </header>

      {/* Hero Section */}
      <section className="lg:col-span-5" id="home">
        {/* Profile Image Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <div className="relative bg-white rounded-lg p-2">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[currentImage]}
                alt="Kayna VTuber"
                className="w-full h-auto object-cover transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className=" bg-opacity-50 absolute inset-0"></div>
                  <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Hello, I'm Kayna</h1>
                    <p className="text-xl md:text-2xl text-gray-200">I am a Vtuber From Thailand</p>
                    <a
                      href="#projects"
                      className="group relative inline-flex items-center px-8 py-4 m-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105"
                    >
                      View My Work
                    </a>
                    <div className="grid grid-cols-3 gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xl font-bold text-white">{achievement.number}</div>
                          <div className="text-sm text-gray-300">{achievement.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              About Kayna
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Image & Quick Stats */}
            <div className="lg:col-span-5">
              {/* Profile Image Card */}
              <div className="relative group mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative bg-white rounded-lg p-2">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/1.webp"
                      alt="Kayna VTuber"
                      className="w-full h-auto transform group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="grid grid-cols-3 gap-4">
                          {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                              <div className="text-xl font-bold text-white">{achievement.number}</div>
                              <div className="text-sm text-gray-300">{achievement.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-sm text-gray-500 mb-1">{info.label}</h4>
                    <p className="font-semibold text-gray-800">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Content Creator & VTuber Entertainer</h3>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p className="mb-4">✨ สวัสดีค่ะ! เคนะเองค่ะ เมดน้อยสุดน่ารักที่พร้อมมอบความสนุกและบริการสุดพิเศษเพื่อคุณ 💖</p>
                  <p>ไม่ว่าจะเป็นการเล่นเกมหรือคอนเทนต์ที่หลากหลาย เคนะพร้อมจะทำให้ทุกคนได้ประสบการณ์ที่ดีที่สุด!</p>
                </div>

                {/* Favorite Games Section */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Favorite Games</h4>

                  {/* แสดงเกมตามหน้า */}
                  {currentGames.map((game, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      {/* Game Icon */}
                      <img
                        src={game.icon}
                        alt={game.name}
                        className="w-12 h-12 object-contain rounded-md transition-transform duration-300"
                      />
                      <span className="text-gray-700 text-lg font-medium">{game.name}</span>
                    </div>
                  ))}

                  {/* ปุ่ม Next Page และ Previous Page */}
                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevPage}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                      disabled={currentPage === 0}
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextPage}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300"
                      disabled={(currentPage + 1) * gamesPerPage >= games.length}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* MAMA & PAPA Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {mamaPapaData.map((item, index) => (
                  <div className="group" key={index}>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-700"></div>
                      <div className="relative bg-white p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`/api/placeholder/400/300`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">Brief description of project {project}.</p>
                  <Link
                    to={`/projects/${project}`}
                    className="inline-flex items-center text-blue-600 group-hover:text-blue-800 transition-all duration-300"
                  >
                    Learn More
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6" id="contact">
        <div className="container mx-auto text-center">
          <p className="text-lg">Follow me:</p>
          <div className="flex justify-center space-x-6 mt-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-600 transition"
              >
                {link.icon} {/* ใช้ไอคอนจาก React Icons */}
              </Link>
            ))}
          </div>
          <p className="mt-6">&copy; 2025 Kayna. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
