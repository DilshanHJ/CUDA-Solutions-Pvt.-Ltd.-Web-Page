import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo/logo_1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`} aria-label="Primary navigation">
      <div className="site-nav-frame">
        <Link to="/" className="site-nav-brand" aria-label="4stax Labs home">
          <img src={logo} alt="4stax Labs" />
        </Link>

        <div className="site-nav-links" aria-label="Main menu">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`site-nav-link ${isActive(item.path) ? "is-active" : ""}`}
            >
              <span>{item.name}</span>
              {isActive(item.path) && (
                <motion.span
                  layoutId="site-nav-active"
                  className="site-nav-active"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="site-nav-actions">
          <Link to="/contact" className="site-nav-cta">
            <span>Start a project</span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
          <button
            type="button"
            className="site-nav-menu-button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="site-nav-mobile"
          >
            <div className="site-nav-mobile-eyebrow">Navigate</div>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                <Link
                  to={item.path}
                  className={`site-nav-mobile-link ${isActive(item.path) ? "is-active" : ""}`}
                >
                  <span>{item.name}</span>
                  <span className="site-nav-mobile-index">0{index + 1}</span>
                </Link>
              </motion.div>
            ))}
            <Link to="/contact" className="site-nav-mobile-cta">
              Discuss a project <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
