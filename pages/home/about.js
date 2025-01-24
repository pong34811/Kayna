import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Projects", "About", "Contact"];

  return (
    <>
      <header className="fixed w-full p-4 z-50 transition-all bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">KaynaPortfolio</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <div
              className={`w-6 h-1 bg-gray-700 mb-1 transform ${
                isMenuOpen ? "rotate-45" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-gray-700 mb-1 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-gray-700 mb-1 transform ${
                isMenuOpen ? "-rotate-45" : ""
              }`}
            ></div>
          </button>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-0 left-0 w-full bg-white/90 shadow-lg py-4 px-6 flex flex-col items-center space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-semibold text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main className="bg-[url('/kayna_maid_bg.webp')] bg-cover bg-center h-screen 
  sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover">

</main>

    </>
  );
}

export default Header;
