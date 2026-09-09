import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 140;

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#050505]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <img
                src={logo}
                alt="Reponse Dev"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-base font-bold tracking-tight text-white">
                Reponse <span className="text-blue-400">Dev</span>
              </p>
              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-gray-600">
                Code • Build • Innovate
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition-all hover:border-blue-400/50 hover:bg-blue-600 hover:text-white md:inline-flex"
          >
            Hire Me
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-gray-300 transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-2 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  )}
                </a>
              );
            })}

            <div className="my-2 h-px bg-white/10" />

            <a
              href="#contact"
              onClick={handleNavClick}
              className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-500"
            >
              Hire Me
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;