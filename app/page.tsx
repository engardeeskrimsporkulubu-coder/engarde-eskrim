"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  return (
    <main className="relative h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-contain"
        style={{
          backgroundImage: "url('/EngardeEskrim.png')",
          backgroundSize: isMobile ? "cover" : "52%",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          minWidth: "100vw",
          transform: isMobile 
            ? `translateY(0)` 
            : `translateY(calc(-100px + ${-scrollY * 0.3}px))`,
          willChange: "transform",
        }}
        role="img"
        aria-label="Eskrim sporcusu, kılıç tutan, maske takmış profesyonel eskrim görseli"
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-lg border border-white/30 transition-all duration-300"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-md z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } border-l border-white/20`}
      >
        <div className="flex flex-col h-full p-6 pt-20 space-y-4 overflow-y-auto">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="block w-full py-4 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center bg-blue-500/80 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
          >
            Giriş
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="block w-full py-4 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center bg-purple-500/80 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
          >
            Hakkımızda
          </a>
          <a
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("benefits");
            }}
            className="block w-full py-4 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center bg-green-500/80 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
          >
            Faydalar
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("faq");
            }}
            className="block w-full py-4 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center bg-yellow-500/80 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
          >
            SSS
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="block w-full py-4 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-center bg-red-500/80 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
          >
            İletişim
          </a>
          
          <div className="border-t border-white/20 my-4"></div>
          
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.instagram.com/engarde.eskrim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 backdrop-blur-sm"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/engarde.eskrim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 bg-blue-600/80 backdrop-blur-sm"
              title="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/engarde_eskrim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 bg-sky-500/80 backdrop-blur-sm"
              title="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@engardeeskrim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 bg-red-600/80 backdrop-blur-sm"
              title="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Fixed Side Menu - Desktop Only */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 space-y-2 w-[80px]">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-16 h-16 flex items-center justify-center text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-blue-500/50 rounded transition-all duration-300 text-[9px] leading-tight text-center bg-blue-500/80 backdrop-blur-sm px-1"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
            title="Giriş"
          >
            <span className="block">Giriş</span>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-16 h-16 flex items-center justify-center text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-purple-500/50 rounded transition-all duration-300 text-[8px] leading-tight text-center bg-purple-500/80 backdrop-blur-sm px-1"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
            title="Hakkımızda"
          >
            <span className="block">Hakkımızda</span>
          </a>
          <a
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-16 h-16 flex items-center justify-center text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-green-500/50 rounded transition-all duration-300 text-[9px] leading-tight text-center bg-green-500/80 backdrop-blur-sm px-1"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
            title="Faydalar"
          >
            <span className="block">Faydalar</span>
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-16 h-16 flex items-center justify-center text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-yellow-500/50 rounded transition-all duration-300 text-[8px] leading-tight text-center bg-yellow-500/80 backdrop-blur-sm px-1"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
            title="SSS"
          >
            <span className="block">SSS</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-16 h-16 flex items-center justify-center text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-red-500/50 rounded transition-all duration-300 text-[8px] leading-tight text-center bg-red-500/80 backdrop-blur-sm px-1"
            style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
            title="İletişim"
          >
            <span className="block">İletişim</span>
          </a>
          
          {/* Divider */}
          <div className="border-t border-white/20 my-2"></div>
          
          {/* Social Media */}
          <a
            href="https://www.instagram.com/engarde.eskrim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-pink-500/50 rounded transition-all duration-300 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 backdrop-blur-sm"
            title="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/engarde.eskrim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-blue-500/50 rounded transition-all duration-300 bg-blue-600/80 backdrop-blur-sm"
            title="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/engarde_eskrim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-sky-500/50 rounded transition-all duration-300 bg-sky-500/80 backdrop-blur-sm"
            title="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@engardeeskrim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 text-white hover:scale-110 hover:brightness-125 hover:shadow-lg hover:shadow-red-500/50 rounded transition-all duration-300 bg-red-600/80 backdrop-blur-sm"
            title="YouTube"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 text-center snap-start snap-always">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl mb-4 md:mb-6" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
              <span className="block tracking-wider">EN GARDE</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 md:mt-4 text-gray-200 tracking-wider">
                ESKRİM
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-100 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg italic tracking-wide px-2">
              Modern teknikler, geleneksel değerler
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed drop-shadow-md font-medium tracking-normal px-2">
              Profesyonel eskrim eğitimi ile zihinsel ve fiziksel gelişiminizi keşfedin
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gray-900/40 backdrop-blur-sm snap-start snap-always">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-wider text-center md:text-left" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                Eskrim Sanatı
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-light italic tracking-wide">
                Eskrim, zihinsel strateji ile fiziksel becerinin mükemmel
                uyumunu gerektiren asil bir spordur. Binlerce yıllık tarihi
                olan bu sanat, modern dünyada da değerini koruyarak, hem
                rekabet hem de kişisel gelişim için ideal bir disiplindir.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-light italic tracking-wide">
                Flöre, epe ve kılıç dallarında uzman eğitmenlerimiz eşliğinde,
                her yaş ve seviyeden sporcuya özel programlar sunuyoruz.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-blue-500/30 backdrop-blur-md rounded-lg p-4 md:p-6 border border-blue-400/40">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wider" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Flöre
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic">
                  Klasik eskrim disiplini. Teknik ve strateji odaklı eğitim.
                </p>
              </div>
              <div className="bg-purple-500/30 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-400/40">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wider" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Epe
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic">
                  Tüm vücudun hedef olduğu, gerçekçi düello deneyimi.
                </p>
              </div>
              <div className="bg-amber-500/30 backdrop-blur-md rounded-lg p-4 md:p-6 border border-amber-400/40">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wider" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Kılıç
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic">
                  Hızlı ve dinamik, hem kesme hem de batma teknikleri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gray-900/40 backdrop-blur-sm snap-start snap-always">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 md:mb-16 tracking-wider px-2" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
              Eskrimin Faydaları
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/20 text-center">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🧠</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wide" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Zihinsel Gelişim
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide">
                  Stratejik düşünme, hızlı karar verme ve odaklanma
                  becerilerinizi geliştirin.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/20 text-center">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">💪</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wide" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Fiziksel Güç
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide">
                  Koordinasyon, esneklik, dayanıklılık ve genel kondisyonunuzu
                  artırın.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/20 text-center sm:col-span-2 md:col-span-1">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">⚔️</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-wide" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Disiplin ve Saygı
                </h3>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide">
                  Eskrim geleneğinin asil değerlerini öğrenin ve hayatınıza
                  uygulayın.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gray-900/40 backdrop-blur-sm snap-start snap-always">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 md:mb-12 tracking-wider px-2" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-3 md:space-y-4">
              <details className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <summary className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 cursor-pointer" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Eskrime başlamak için yaş sınırı var mı?
                </summary>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide mt-2 md:mt-3">
                  Hayır, eskrime her yaşta başlanabilir. Çocuklar için özel programlarımız olduğu gibi, yetişkinler için de başlangıç seviyesi eğitimlerimiz mevcuttur.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <summary className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 cursor-pointer" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Hangi eskrim dalını seçmeliyim?
                </summary>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide mt-2 md:mt-3">
                  Flöre, epe ve kılıç dallarının hepsini deneyebilirsiniz. Eğitmenlerimiz sizin ilgi alanınıza ve yeteneklerinize göre size en uygun dalı önerecektir.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <summary className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 cursor-pointer" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Ekipmanları nereden temin edebilirim?
                </summary>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide mt-2 md:mt-3">
                  İlk başlangıç için gerekli temel ekipmanları kulübümüzden kiralayabilirsiniz. İlerleyen dönemde kendi ekipmanlarınızı satın almanızı öneririz.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20">
                <summary className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 cursor-pointer" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
                  Haftada kaç gün antrenman yapılıyor?
                </summary>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed italic tracking-wide mt-2 md:mt-3">
                  Başlangıç seviyesi için haftada 2-3 gün yeterlidir. İlerleyen seviyelerde haftada 4-5 gün antrenman yapılabilir. Programınız size özel olarak düzenlenir.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gray-900/40 backdrop-blur-sm snap-start snap-always">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-wider px-2" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
              Bize Katılın
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-7xl mx-auto font-light italic tracking-wide px-4" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
              Eskrim yolculuğunuza başlamak için bizimle iletişime geçin. Her seviyeden sporcuya açığız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4">
              <a
                href="mailto:info@engarde-eskrim.com"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 rounded-lg text-white font-semibold text-sm md:text-base transition-all duration-300 border border-white/30 hover:border-white/50 w-full sm:w-48 text-center tracking-wide"
                style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
              >
                İletişime Geç
              </a>
              <a
                href="tel:+905551234567"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 rounded-lg text-white font-semibold text-sm md:text-base transition-all duration-300 border border-white/30 hover:border-white/50 w-full sm:w-48 text-center tracking-wide"
                style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}
              >
                Telefon
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/50 backdrop-blur-sm py-2 px-2 md:px-4 z-40">
          <div className="max-w-6xl mx-auto text-center space-y-1">
            <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-light tracking-wide px-2" style={{ fontFamily: 'var(--font-cinzel-decorative), serif' }}>
              © {new Date().getFullYear()} Engarde Eskrim. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs italic tracking-wide px-2">
              Profesyonel eskrim eğitimi ve spor merkezi
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </main>
  );
}

