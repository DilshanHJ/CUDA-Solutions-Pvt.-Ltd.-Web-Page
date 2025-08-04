import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import contactData from "../data/contact.json";

function Contact() {
  const { title, description } = contactData.hero;
  
  // Initialize form data based on contact.json fields
  const initializeFormData = () => {
    const initialData = {};
    contactData.form.fields.forEach(field => {
      initialData[field.name] = "";
    });
    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or API
    setSubmitted(true);
    // Reset form after submission
    setFormData(initializeFormData());
  };

  // Use contact info from contact.json
  const contactInfo = contactData.contactInfo.methods.filter(method => 
    ['email', 'phone', 'location'].includes(method.icon)
  ).map(method => ({
    icon: method.icon,
    title: method.title,
    detail: method.value,
    link: method.link,
  }));

  // Function to render form fields dynamically
  const renderFormField = (field, index) => {
    const commonClasses = "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md";
    const labelClasses = "block text-gray-900 mb-2 font-medium";

    const fieldElement = () => {
      switch (field.type) {
        case 'text':
        case 'email':
        case 'tel':
          return (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              className={commonClasses}
              placeholder={field.placeholder}
            />
          );
        case 'select':
          return (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              className={`${commonClasses} appearance-none`}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        case 'textarea':
          return (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              rows="4"
              required={field.required}
              className={`${commonClasses} resize-none`}
              placeholder={field.placeholder}
            />
          );
        default:
          return null;
      }
    };

    return (
      <motion.div
        key={field.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={field.type === 'textarea' || field.name === 'message' || field.name === 'service' || field.name === 'budget' || field.name === 'timeline' ? 'col-span-full' : ''}
      >
        <label htmlFor={field.name} className={labelClasses}>
          {field.label}
        </label>
        {fieldElement()}
      </motion.div>
    );
  };

  const getIcon = (iconName) => {
    const iconProps = "w-6 h-6 text-accent-400";

    switch (iconName) {
      case "phone":
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
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        );
      case "email":
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
              strokeWidth={2}
              d="M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
            />
          </svg>
        );
      case "location":
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
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>

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
              Contact Us
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight">
              <span className="gradient-text">{title}</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                View Our Services
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

      {/* Contact Form Section */}
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
              Get In Touch
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              Let's Start the Conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our services or interested in starting a
              project? We're here to help you transform your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

                <h3 className="text-2xl font-bold font-display text-gray-900 mb-4">
                  {contactData.form.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {contactData.form.description}
                </p>

                {submitted ? (
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-5 text-center">
                    <svg
                      className="w-12 h-12 text-accent-600 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-700">
                      {contactData.form.successMessage}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 btn btn-accent px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {contactData.form.fields.map((field, index) => 
                        renderFormField(field, index)
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary text-lg px-6 py-3 shadow-glow hover:shadow-primary-500/25 rounded-lg transition-all duration-300 w-full md:w-auto"
                    >
                      {contactData.form.submitText}
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
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-navy text-white p-8 rounded-2xl shadow-luxury relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-display text-white mb-4">
                    {contactData.contactInfo.title}
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {contactData.contactInfo.description}
                  </p>

                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex items-start glass p-5 rounded-xl border border-white/20 shadow-glass hover:shadow-luxury transition-all duration-500"
                      >
                        <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-accent-glow">
                          {getIcon(info.icon)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-100 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <a
                            href={info.link}
                            target={
                              info.icon === "location" ? "_blank" : "_self"
                            }
                            rel={
                              info.icon === "location"
                                ? "noopener noreferrer"
                                : ""
                            }
                            className="text-gray-300 hover:text-accent-400 transition-colors duration-300 group-hover:translate-x-1 transform inline-block"
                          >
                            {info.detail}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="glass p-5 rounded-lg border border-white/20">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {contactData.contactInfo.methods.find(method => method.icon === 'clock')?.title || 'Business Hours'}
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>{contactData.contactInfo.methods.find(method => method.icon === 'clock')?.value || 'Mon-Fri 9AM-6PM PST'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              {contactData.cta?.title || "Ready to Start Your Project?"}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {contactData.cta?.description || "Our team is eager to discuss how we can help transform your business with custom software solutions and SaaS platforms."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                Explore Our Services
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
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;