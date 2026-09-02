import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Workflow,
} from "lucide-react";
import homeData from "../data/home.json";

function Home() {
  const { hero, expertise, technologies, about, testimonials, cta } = homeData;

  const testimonialSliderRef = React.useRef(null);

  const handleTestimonialMouseMove = (event) => {
    if (window.matchMedia("(pointer: coarse)").matches || !testimonialSliderRef.current) return;
    const slider = testimonialSliderRef.current;
    const bounds = slider.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft = maxScroll * progress;
  };

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
        <svg viewBox="0 0 64 40" className="tech-brand-icon" role="img" aria-label="AWS logo">
          <text x="4" y="24" fontSize="22" fontWeight="700" fill="currentColor" fontFamily="Arial, sans-serif">aws</text>
          <path d="M11 30c11 5 26 6 40 0" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 28l6 2-3 5" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }

    if (name === "Azure") {
      return (
        <svg viewBox="0 0 48 48" className="tech-brand-icon" role="img" aria-label="Microsoft Azure logo">
          <path d="M18 6h11L17 39H6L18 6Z" fill="#0078D4" />
          <path d="M29 6 18 27h12l-7 12h19L29 6Z" fill="#1490DF" />
        </svg>
      );
    }

    if (name === "Power BI") {
      return (
        <svg viewBox="0 0 48 48" className="tech-brand-icon" role="img" aria-label="Power BI logo">
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
        className="tech-brand-icon"
        aria-hidden="true"
      />
    );
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Enhanced icon components
  const getIcon = (iconName) => {
    const iconProps = "w-8 h-8 text-white";

    switch (iconName) {
      case "desktop":
        return (
          <svg
            className={iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        );
      case "saas":
        return (
          <svg
            className={iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20"
              >
                <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
                {hero.subtitle}
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight">
                <span className="gradient-text">Enterprise Software</span>
                <br />
                <span className="text-white">Development &</span>
                <br />
                <span className="text-accent-400">SaaS Solutions</span>
                <br />
                <span className="text-white">Built Around Your Workforce</span>
              </h1>

              <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
                >
                  {hero.primaryCta}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="btn btn-secondary text-lg px-8 py-4"
                >
                  {hero.secondaryCta}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {hero.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-3xl font-bold text-accent-400 mb-2 font-display group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                    </div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y: y1 }} className="relative mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <img
                    src={hero.image}
                    alt="Enterprise Technology Solutions"
                    className="w-full rounded-2xl shadow-luxury transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-dramatic animate-float">
                    <svg
                      className="w-8 h-8 sm:w-12 sm:h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl backdrop-blur-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="status-dot status-dot-success animate-pulse"></div>
                      <span className="text-white text-sm font-medium">
                        All Systems Operational
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="badge badge-brand mb-6">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Our Expertise
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              {expertise.title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {expertise.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {expertise.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 card-hover border border-neutral-100 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

                  <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elevated relative z-10">
                    {getIcon(service.icon)}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-neutral-700"
                      >
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors group-hover:translate-x-2 transform duration-300 link-elegant"
                  >
                    {service.cta}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-32 bg-gradient-elegant text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-6 border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Technology Stack
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display mb-6">
              {technologies.title}
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              {technologies.description}
            </p>
          </motion.div>

          <div className="tech-honeycomb max-w-6xl mx-auto" aria-label="Technology stack">
            {technologies.categories.flatMap((category) => category.technologies).map((tech, index) => {
              const [slug, color] = technologyIcons[tech] || ["code", "A8DADC"];
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.88, y: 18 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.42, delay: index * 0.03 }}
                  className="tech-honeycomb-item group"
                >
                  {renderTechnologyIcon(tech, slug, color)}
                  <span>{tech}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-brand opacity-10 rounded-3xl"></div>
              <img
                src={about.image}
                alt="Sri Lankan technology professional working in a modern office"
                className="w-full rounded-2xl shadow-luxury relative z-10"
              />

              {/* Floating stats */}
              <div className="absolute -bottom-8 -right-8 glass-light p-6 rounded-xl backdrop-blur-xl border border-white/20 z-20">
                <div className="text-2xl font-bold text-accent-600 mb-1">
                  ISO 27001
                </div>
                <div className="text-sm text-neutral-600">
                  Certified Security
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="badge badge-brand mb-6">
                <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
                About Us
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-8">
                {about.title}
              </h2>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                {about.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                    <span className="text-neutral-700 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <Link to={about.link} className="btn btn-primary">
                {about.cta}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-elevated">
              <Workflow className="w-10 h-10 text-white" strokeWidth={1.7} aria-hidden="true" />
            </div>
            <div className="badge badge-brand mb-6">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Client Experiences
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-5">
              Built Around the Way You Work
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              A few examples of the outcomes our software-focused approach is designed to create.
            </p>
          </motion.div>

          <div
            ref={testimonialSliderRef}
            className="relative max-w-7xl mx-auto overflow-x-auto hide-scrollbar cursor-ew-resize select-none touch-pan-x"
            onMouseMove={handleTestimonialMouseMove}
          >
            <div className="flex gap-6 sm:gap-8 w-max pb-2">
              {testimonials.map((item, index) => (
                <motion.article
                  key={item.author}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="w-[min(86vw,420px)] sm:w-[420px] shrink-0 bg-gradient-subtle border border-neutral-100 rounded-3xl p-7 sm:p-8 shadow-card hover:shadow-luxury transition-shadow duration-300"
                >
                  <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="text-primary-500 text-lg" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="text-lg sm:text-xl font-light text-gray-800 leading-relaxed italic mb-8">
                    “{item.quote}”
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="w-14 h-14 rounded-full mr-4 shadow-card object-cover"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900 font-display">{item.author}</div>
                      <div className="text-neutral-600 text-sm">{item.position}</div>
                      <div className="text-sm text-neutral-500">{item.company}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2"><span className="w-8 h-px bg-neutral-300"></span>Move left or right to browse</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Ready to Start?
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold font-display mb-8">
              {cta.title}
            </h2>
            <p className="text-xl text-neutral-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={cta.link}
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                {cta.cta}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/portfolio"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                {cta.secondaryCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;