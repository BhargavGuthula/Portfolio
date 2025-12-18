import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && sessionStorage.getItem('scrollToSkills')) {
      sessionStorage.removeItem('scrollToSkills');
      setTimeout(() => {
        const skillsElement = document.getElementById('skills');
        if (skillsElement) {
          const yOffset = -80;
          const y = skillsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
    else if (location.pathname === '/' && sessionStorage.getItem('scrollToContact')) {
      sessionStorage.removeItem('scrollToContact');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');  
        if (contactElement) {
          const yOffset = -40;
          const y = contactElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);


  return (
    <nav
      className={` md:backdrop-blur-sm pt-4 pr-2  md:p-6 fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "md:bg-black/30 bg-opacity-45   text-white"
          : "bg-transparent border-transparent text-white"
        }`}
    >
      <div className="max-w-[1440px] w-full mx-auto relative">
        <div className="flex justify-end items-center">
          <button
            className={`md:hidden focus:outline-none flex justify-end transition-transform duration-300 ${isOpen ? 'text-white' : 'text-black'}  hover:scale-110 z-50`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`fixed md:relative z-40 top-0 left-0 w-full flex flex-col items-center transition-all duration-300 ease-in-out transform ${isOpen
              ? "opacity-100 py-5 bg-black/30 backdrop-blur-sm  "
              : "opacity-0 -translate-y-full pointer-events-none select-none"
            } space-y-6 py-2 md:bg-transparent md:backdrop-blur-none md:flex-row md:translate-y-0 md:space-y-0 md:py-0 md:pointer-events-auto md:opacity-100 md:justify-end md:space-x-16`}
        >
          <li>
            <Link
              to="/"
              className={`block hover:bg-white hover:text-black transition duration-300 ease-in-out px-3 py-3 rounded-3xl`}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block hover:bg-white hover:text-black active:bg-white active:text-black transition duration-300 ease-in-out px-2 py-3 rounded-3xl"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                const currentPath = location.pathname;

                if (currentPath === '/') {
                  const skillsElement = document.getElementById('skills');
                  if (skillsElement) {
                    const yOffset = -20;
                    const y = skillsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                } else {
                  sessionStorage.setItem('scrollToSkills', 'true');
                  window.location.href = '/';
                }
                setIsOpen(false);
              }}
              className="block hover:bg-white hover:text-black active:bg-white active:text-black transition duration-300 ease-in-out px-2 py-3 rounded-3xl"

            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                const currentPath = location.pathname;
                if (currentPath === '/') {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    const yOffset = -40;
                    const y = contactElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                } else {
                  sessionStorage.setItem('scrollToContact', 'true');
                  window.location.href = '/';
                }
                setIsOpen(false);
              }}
              className="block hover:bg-white hover:text-black active:bg-white active:text-black transition duration-300 ease-in-out px-2 py-3 rounded-3xl"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
