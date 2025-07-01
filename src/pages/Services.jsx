import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "../data/services.json";

function Services() {
  const { hero, softwareDevelopment, digitalMarketing, cta } = servicesData;

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
      case "cloud":
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
              d="M2.25 15.75l5.159-2.582a2.25 2.25 0 001.923 0l5.159 2.582c1.04.52 2.258-.461 1.995-1.557l-.988-4.947a2.25 2.25 0 01.659-2.321l4.352-3.376c.91-.707.406-2.15-.68-2.321l-4.82-.722a2.25 2.25 0 01-1.707-1.238l-2.164-4.327a1.125 1.125 0 00-2.014 0L6.477 5.445a2.25 2.25 0 01-1.707 1.238l-4.821.722c-1.086.171-1.59 1.614-.68 2.321l4.353 3.376a2.25 2.25 0 01.658 2.321l-.988 4.947c-.263 1.096.955 2.077 1.995 1.557z"
            />
          </svg>
        );
      case "mobile":
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
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        );
      case "seo":
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
              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-10.11a23.91 23.91 0 00-1.014-5.395m0 0a23.784 23.784 0 00-7.806 2.91m0 0A23.745 23.745 0 003 4.17M.38 15.855a23.91 23.91 0 001.014-5.395m0 0a23.784 23.784 0 017.806-2.91m0 0A23.745 23.745 0 0021 4.17M.38 8.825a23.91 23.91 0 00-1.014 5.395"
            />
          </svg>
        );
      case "social":
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
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20.25v-1.5a3 3 0 013-3h12a3 3 0 013 3v1.5M3 20.25a8.962 8.962 0 011.544-.722 9.033 9.033 0 015.113-1.003c1.784.023 3.543.305 5.113 1.003A8.962 8.962 0 0121 20.25"
            />
          </svg>
        );
      case "content":
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5a2.25 2.25 0 012.25 2.25v5.25m-9.75-6.75v-5.25a2.25 2.25 0 012.25-2.25h2a2.25 2.25 0 012.25 2.25v5.25M4.5 21h15a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 004.5 21z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const serviceCategories = [
    {
      title: softwareDevelopment.title,
      description: softwareDevelopment.description,
      icon: "desktop",
      services: softwareDevelopment.offerings,
    },
    {
      title: digitalMarketing.title,
      description: digitalMarketing.description,
      icon: "seo",
      services: digitalMarketing.offerings,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-elegant">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20"
            >
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Our Services
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight">
              <span className="gradient-text">{hero.title}</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                Request a Consultation
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
              <Link to="/about" className="btn btn-secondary text-lg px-8 py-4">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-subtle rounded-full text-brand-600 text-sm font-medium mb-6 border border-neutral-200">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Our Expertise
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-primary-900 mb-6">
              Comprehensive Technology Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              From custom software development to digital marketing, we provide
              end-to-end solutions to drive your business forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 card-hover border border-neutral-100 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

                  <div className="bg-gradient-brand w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elevated relative z-10">
                    {getIcon(category.icon)}
                  </div>

                  <h3 className="text-2xl font-bold text-primary-900 mb-4 font-display">
                    {category.title}
                  </h3>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors group-hover:translate-x-2 transform duration-300 link-elegant"
                  >
                    Learn More
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

      {/* Detailed Services */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.title}
          className={`py-32 ${
            catIndex % 2 === 0
              ? "bg-gradient-elegant text-white"
              : "bg-gradient-subtle"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div
                className={`inline-flex items-center px-4 py-2 ${
                  catIndex % 2 === 0 ? "glass" : "bg-gradient-subtle"
                } rounded-full ${
                  catIndex % 2 === 0
                    ? "text-accent-200 border border-white/20"
                    : "text-brand-600 border border-neutral-200"
                } text-sm font-medium mb-6`}
              >
                <div
                  className={`w-2 h-2 ${
                    catIndex % 2 === 0 ? "bg-accent-400" : "bg-brand-500"
                  } rounded-full mr-2 animate-pulse`}
                ></div>
                Detailed Services
              </div>
              <h2
                className={`text-5xl lg:text-6xl font-bold font-display mb-6 ${
                  catIndex % 2 === 0 ? "text-white" : "text-primary-900"
                }`}
              >
                {category.title}
              </h2>
              <p
                className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                  catIndex % 2 === 0 ? "text-neutral-300" : "text-neutral-600"
                }`}
              >
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className={`${
                      catIndex % 2 === 0 ? "glass" : "bg-white"
                    } p-8 rounded-2xl ${
                      catIndex % 2 === 0
                        ? "border border-white/20 hover:bg-white/10"
                        : "shadow-card hover:shadow-luxury border border-neutral-100"
                    } transition-all duration-500 card-hover h-full relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 ${
                        catIndex % 2 === 0
                          ? "bg-accent-500/5"
                          : "bg-gradient-brand opacity-5"
                      } rounded-full transform translate-x-16 -translate-y-16`}
                    ></div>

                    <h3
                      className={`text-2xl font-bold font-display mb-4 ${
                        catIndex % 2 === 0
                          ? "text-white group-hover:text-accent-100"
                          : "text-primary-900"
                      } transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mb-6 leading-relaxed ${
                        catIndex % 2 === 0
                          ? "text-neutral-300 group-hover:text-neutral-200"
                          : "text-neutral-600"
                      } transition-colors duration-300`}
                    >
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8 relative z-10">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className={`flex items-center text-sm ${
                            catIndex % 2 === 0
                              ? "text-neutral-400 group-hover:text-neutral-300"
                              : "text-neutral-700"
                          } transition-colors duration-300`}
                        >
                          <div
                            className={`w-2 h-2 ${
                              catIndex % 2 === 0
                                ? "bg-accent-500"
                                : "bg-gradient-brand"
                            } rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                          ></div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-32 bg-gradient-elegant text-white relative overflow-hidden">
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

export default Services;
