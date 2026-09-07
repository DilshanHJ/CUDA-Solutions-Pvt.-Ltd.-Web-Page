import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Quote, Workflow } from "lucide-react";
import homeData from "../data/home.json";

const sectionLinks = [
  ["01", "home-solutions", "Solutions"],
  ["02", "home-technology", "Technology"],
  ["03", "home-about", "About"],
  ["04", "home-stories", "Stories"],
  ["05", "home-contact", "Contact"],
];

function Home() {
  const { hero, expertise, technologies, about, testimonials, cta } = homeData;
  const pageRef = React.useRef(null);

  const technologyIcons = {
    React: ["react", "61DAFB"],
    "Vue.js": ["vuedotjs", "4FC08D"],
    Angular: ["angular", "DD0031"],
    TypeScript: ["typescript", "3178C6"],
    "Next.js": ["nextdotjs", "FFFFFF"],
    "Node.js": ["nodedotjs", "5FA04E"],
    Python: ["python", "3776AB"],
    Java: ["openjdk", "FFFFFF"],
    ".NET": ["dotnet", "512BD4"],
    Go: ["go", "00ADD8"],
    AWS: ["amazonwebservices", "FF9900"],
    Azure: ["microsoftazure", "0078D4"],
    "Google Cloud": ["googlecloud", "4285F4"],
    Docker: ["docker", "2496ED"],
    Kubernetes: ["kubernetes", "326CE5"],
    PostgreSQL: ["postgresql", "4169E1"],
    MongoDB: ["mongodb", "47A248"],
    Redis: ["redis", "FF4438"],
    Elasticsearch: ["elasticsearch", "00BFB3"],
    "Power BI": ["powerbi", "F2C811"],
  };

  const renderTechnologyIcon = (name, slug, color) => {
    if (name === "AWS") {
      return (
        <svg viewBox="0 0 64 40" className="home-v2-tech-icon" role="img" aria-label="AWS logo">
          <text x="4" y="24" fontSize="22" fontWeight="700" fill="currentColor" fontFamily="Arial, sans-serif">aws</text>
          <path d="M11 30c11 5 26 6 40 0" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 28l6 2-3 5" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    if (name === "Azure") {
      return (
        <svg viewBox="0 0 48 48" className="home-v2-tech-icon" role="img" aria-label="Microsoft Azure logo">
          <path d="M18 6h11L17 39H6L18 6Z" fill="#0078D4" />
          <path d="M29 6 18 27h12l-7 12h19L29 6Z" fill="#1490DF" />
        </svg>
      );
    }

    if (name === "Power BI") {
      return (
        <svg viewBox="0 0 48 48" className="home-v2-tech-icon" role="img" aria-label="Power BI logo">
          <rect x="7" y="19" width="7" height="20" rx="3.5" fill="#F2C811" />
          <rect x="17" y="13" width="7" height="26" rx="3.5" fill="#E6B800" />
          <rect x="27" y="8" width="7" height="31" rx="3.5" fill="#D9AA00" />
          <rect x="37" y="4" width="7" height="35" rx="3.5" fill="#C79C00" />
        </svg>
      );
    }

    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}/${color}`}
        alt=""
        loading="lazy"
        className="home-v2-tech-icon"
        aria-hidden="true"
      />
    );
  };

  const getServiceIcon = (iconName) => {
    if (iconName === "desktop") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 5.8A1.8 1.8 0 0 1 5.8 4h12.4A1.8 1.8 0 0 1 20 5.8v8.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 14.2V5.8Z" />
          <path d="M8 20h8M10 16v4M14 16v4" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 16.8a4.3 4.3 0 0 1 .7-8.54A6 6 0 0 1 17.6 9.8a3.55 3.55 0 0 1 .9 7H5.5Z" />
        <path d="M9 13.2h6M12 10.2v6" />
      </svg>
    );
  };

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const heroMediaY = useTransform(scrollYProgress, [0, 0.16], [0, 58]);
  const aboutMediaY = useTransform(scrollYProgress, [0.45, 0.8], [-22, 22]);

  return (
    <div ref={pageRef} className="home-v2">
      <nav className="home-v2-journey" aria-label="Home page sections">
        <span className="home-v2-journey-track" aria-hidden="true">
          <motion.span className="home-v2-journey-fill" style={{ scaleY: scrollYProgress }} />
        </span>
        {sectionLinks.map(([number, id, label]) => (
          <a key={id} href={`#${id}`} className="home-v2-journey-link" aria-label={`Go to ${label}`}>
            <span>{number}</span>
            <i aria-hidden="true" />
          </a>
        ))}
      </nav>

      <section id="home-hero" className="home-v2-hero">
        <div className="home-v2-grid" aria-hidden="true" />
        <div className="home-v2-orb home-v2-orb-a" aria-hidden="true" />
        <div className="home-v2-orb home-v2-orb-b" aria-hidden="true" />

        <div className="home-v2-shell home-v2-hero-layout">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="home-v2-hero-copy"
          >
            <div className="home-v2-eyebrow home-v2-eyebrow--dark">
              <span className="home-v2-live-dot" />
              {hero.subtitle}
            </div>

            <h1>
              <span>Enterprise Software</span>
              <span>Development &amp;</span>
              <span className="home-v2-title-accent">SaaS Solutions</span>
              <span>Built Around Your Workforce</span>
            </h1>

            <p>{hero.description}</p>

            <div className="home-v2-hero-actions">
              <Link to="/contact" className="home-v2-button home-v2-button--primary">
                {hero.primaryCta}
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="home-v2-button home-v2-button--ghost">
                {hero.secondaryCta}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="home-v2-stats" aria-label="Company highlights">
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 + index * 0.08 }}
                  className="home-v2-stat"
                >
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: heroMediaY }} className="home-v2-hero-media-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 22 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
              className="home-v2-hero-media home-v2-pointer-card"
              onPointerMove={handlePointerMove}
            >
              <span className="home-v2-pointer-glow" aria-hidden="true" />
              <img
                src={hero.image}
                alt="Workforce management team reviewing HR and business operations"
              />
              <span className="home-v2-photo-shade" aria-hidden="true" />

              <div className="home-v2-workforce-console">
                <div className="home-v2-console-head">
                  <div>
                    <span>Workforce management</span>
                    <strong>Connected operations</strong>
                  </div>
                  <span className="home-v2-console-status"><i /> Live</span>
                </div>
                <div className="home-v2-console-grid">
                  {["HR", "Payroll", "Attendance", "Shift management"].map((item, index) => (
                    <div key={item} className="home-v2-console-item">
                      <span>0{index + 1}</span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="home-v2-system-pill">
                <span className="home-v2-live-dot" />
                All Systems Operational
              </div>
            </motion.div>
          </motion.div>
        </div>

        <a href="#home-solutions" className="home-v2-scroll-cue">
          <span>Scroll to explore</span>
          <span className="home-v2-scroll-line" aria-hidden="true"><i /></span>
          <ArrowDown size={15} />
        </a>
      </section>

      <section id="home-solutions" className="home-v2-section home-v2-solutions">
        <div className="home-v2-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="home-v2-section-head home-v2-section-head--split"
          >
            <div>
              <div className="home-v2-eyebrow"><span>01</span> Our Expertise</div>
              <h2>{expertise.title}</h2>
            </div>
            <p>{expertise.description}</p>
          </motion.div>

          <div className="home-v2-service-grid">
            {expertise.services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="home-v2-service-card home-v2-pointer-card"
                onPointerMove={handlePointerMove}
              >
                <span className="home-v2-pointer-glow" aria-hidden="true" />
                <div className="home-v2-service-topline">
                  <span className="home-v2-service-index">0{index + 1}</span>
                  <span className="home-v2-service-icon">{getServiceIcon(service.icon)}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="home-v2-feature-list">
                  {service.features.map((feature) => (
                    <span key={feature}><Check size={13} />{feature}</span>
                  ))}
                </div>
                <Link to={service.link} className="home-v2-card-link">
                  {service.cta}<ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="home-technology" className="home-v2-section home-v2-technology">
        <div className="home-v2-grid home-v2-grid--fade" aria-hidden="true" />
        <div className="home-v2-shell">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="home-v2-section-head home-v2-section-head--center home-v2-section-head--light"
          >
            <div className="home-v2-eyebrow home-v2-eyebrow--dark"><span>02</span> Technology Stack</div>
            <h2>{technologies.title}</h2>
            <p>{technologies.description}</p>
          </motion.div>

          <div className="home-v2-tech-groups">
            {technologies.categories.map((category, categoryIndex) => (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: categoryIndex * 0.07 }}
                className="home-v2-tech-group home-v2-pointer-card"
                onPointerMove={handlePointerMove}
              >
                <span className="home-v2-pointer-glow" aria-hidden="true" />
                <div className="home-v2-tech-group-head">
                  <span>0{categoryIndex + 1}</span>
                  <h3>{category.name}</h3>
                </div>
                <div className="home-v2-tech-list">
                  {category.technologies.map((tech) => {
                    const [slug, color] = technologyIcons[tech] || ["code", "A8DADC"];
                    return (
                      <div key={tech} className="home-v2-tech-item">
                        {renderTechnologyIcon(tech, slug, color)}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="home-about" className="home-v2-section home-v2-about">
        <div className="home-v2-shell home-v2-about-layout">
          <motion.div
            style={{ y: aboutMediaY }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="home-v2-about-media"
          >
            <div className="home-v2-about-frame">
              <img src={about.image} alt="South Asian software team collaborating in a modern office" loading="lazy" />
              <span className="home-v2-photo-shade" aria-hidden="true" />
            </div>
            <div className="home-v2-about-stat">
              <strong>ISO 27001</strong>
              <span>Certified Security</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="home-v2-about-copy"
          >
            <div className="home-v2-eyebrow"><span>03</span> About Us</div>
            <h2>{about.title}</h2>
            <p>{about.description}</p>
            <div className="home-v2-about-highlights">
              {about.highlights.map((highlight, index) => (
                <div key={highlight} className="home-v2-about-highlight">
                  <span>0{index + 1}</span>
                  <strong>{highlight}</strong>
                </div>
              ))}
            </div>
            <Link to={about.link} className="home-v2-button home-v2-button--ink">
              {about.cta}<ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="home-stories" className="home-v2-section home-v2-stories">
        <div className="home-v2-shell home-v2-stories-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="home-v2-stories-intro"
          >
            <div className="home-v2-stories-sticky">
              <div className="home-v2-eyebrow"><span>04</span> Client Experiences</div>
              <div className="home-v2-story-icon"><Workflow size={27} strokeWidth={1.6} /></div>
              <h2>Built Around the Way You Work</h2>
              <p>A few examples of the outcomes our software-focused approach is designed to create.</p>
            </div>
          </motion.div>

          <div className="home-v2-story-list">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.author}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.58, delay: index * 0.04 }}
                className="home-v2-story-card home-v2-pointer-card"
                onPointerMove={handlePointerMove}
              >
                <span className="home-v2-pointer-glow" aria-hidden="true" />
                <div className="home-v2-story-top">
                  <Quote size={24} strokeWidth={1.5} />
                  <span>0{index + 1}</span>
                </div>
                <blockquote>“{item.quote}”</blockquote>
                <div className="home-v2-story-author">
                  <img src={item.image} alt={item.author} loading="lazy" />
                  <div>
                    <strong>{item.author}</strong>
                    <span>{item.position}</span>
                    <span>{item.company}</span>
                  </div>
                  <div className="home-v2-story-stars" aria-label="5 out of 5 stars">★★★★★</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="home-contact" className="home-v2-final">
        <div className="home-v2-grid home-v2-grid--fade" aria-hidden="true" />
        <div className="home-v2-final-orb" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="home-v2-shell home-v2-final-inner"
        >
          <div className="home-v2-eyebrow home-v2-eyebrow--dark"><span>05</span> Ready to Start?</div>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
          <div className="home-v2-final-actions">
            <Link to={cta.link} className="home-v2-button home-v2-button--primary">
              {cta.cta}<ArrowRight size={17} />
            </Link>
            <Link to="/products" className="home-v2-button home-v2-button--ghost">
              {cta.secondaryCta}<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
