import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import logo from "../assets/logo/logo_1.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      title: "Explore",
      links: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise Software", href: "/services#software-development" },
        { name: "Hospitality Platform", href: "/products/hospitality-management" },
        { name: "Workforce Platform", href: "/products/workforce-management" },
        { name: "Cloud & SaaS", href: "/services#software-development" },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer-grid" aria-hidden="true" />
      <div className="site-footer-orb site-footer-orb-a" aria-hidden="true" />
      <div className="site-footer-orb site-footer-orb-b" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="site-footer-cta">
          <div>
            <div className="site-footer-kicker">
              <Sparkles size={15} />
              Built around real operations
            </div>
            <h2>Have a complex workflow? <span>Let&apos;s make it feel simple.</span></h2>
          </div>
          <Link to="/contact" className="site-footer-cta-button">
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link to="/" aria-label="4stax Labs home" className="site-footer-logo">
              <img src={logo} alt="4stax Labs" />
            </Link>
            <p>
              Enterprise software and SaaS products designed around workforce,
              hospitality and day-to-day business operations. Practical engineering,
              thoughtful UX and scalable delivery from Sri Lanka.
            </p>
            <div className="site-footer-location">
              <MapPin size={16} />
              <span>Colombo, Sri Lanka · Serving clients beyond borders</span>
            </div>
          </div>

          <div className="site-footer-links-wrap">
            {linkGroups.map((group) => (
              <div key={group.title} className="site-footer-link-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href}>
                        <span>{link.name}</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="site-footer-contact">
              <h3>Say hello</h3>
              <a href="mailto:4staxlabs@gmail.com" className="site-footer-email">
                <Mail size={16} />
                4staxlabs@gmail.com
              </a>
              <p>Tell us what you&apos;re trying to improve. We&apos;ll help you shape the next step.</p>
              <Link to="/contact" className="site-footer-mini-link">
                Contact 4stax Labs <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>© {currentYear} 4stax Labs. All rights reserved.</p>
          <div className="site-footer-status">
            <span className="site-footer-status-dot" />
            <span>Building from Sri Lanka</span>
          </div>
          <p className="site-footer-credit">Software that works the way your business does.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
