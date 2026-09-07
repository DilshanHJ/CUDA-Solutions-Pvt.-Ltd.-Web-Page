import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Globe,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import contactData from "../data/contact.json";

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  clock: Clock,
  response: Zap,
  consultation: Layers,
  security: ShieldCheck,
  global: Globe,
};

function Contact() {
  const initializeFormData = () =>
    contactData.form.fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {});

  const [formData, setFormData] = useState(initializeFormData);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const directMethods = useMemo(
    () => contactData.contactInfo.methods.filter((method) => ["email", "phone", "location"].includes(method.icon)),
    []
  );

  const businessHours = contactData.contactInfo.methods.find((method) => method.icon === "clock");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Contact 4stax Labs | Software, SaaS & Product Development";

    let description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Contact 4stax Labs in Colombo, Sri Lanka to discuss enterprise software, SaaS platforms, workforce systems, hospitality software and custom applications."
    );

    return () => {
      document.title = previousTitle;
      if (previousDescription) description.setAttribute("content", previousDescription);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initializeFormData());
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("4staxlabs@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:4staxlabs@gmail.com";
    }
  };

  const renderFormField = (field) => {
    const sharedProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name] || "",
      onChange: handleChange,
      required: field.required,
      className: "contact-field-control",
    };

    let control = null;
    if (["text", "email", "tel"].includes(field.type)) {
      control = <input {...sharedProps} type={field.type} placeholder={field.placeholder} />;
    } else if (field.type === "select") {
      control = (
        <select {...sharedProps}>
          <option value="">Select an option</option>
          {field.options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    } else if (field.type === "textarea") {
      control = <textarea {...sharedProps} rows={5} placeholder={field.placeholder} />;
    }

    const isWide = ["service", "message"].includes(field.name);

    return (
      <div key={field.name} className={`contact-field ${isWide ? "contact-field--wide" : ""}`}>
        <div className="contact-field-label-row">
          <label htmlFor={field.name}>{field.label}</label>
          {!field.required && <span>Optional</span>}
        </div>
        {control}
      </div>
    );
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-grid" aria-hidden="true" />
        <div className="contact-hero-glow contact-hero-glow-a" aria-hidden="true" />
        <div className="contact-hero-glow contact-hero-glow-b" aria-hidden="true" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="contact-hero-layout">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="contact-hero-copy"
            >
              <div className="contact-eyebrow">
                <span className="contact-live-dot" />
                {contactData.hero.subtitle}
              </div>
              <h1>{contactData.hero.title}</h1>
              <p>{contactData.hero.description}</p>

              <div className="contact-hero-actions">
                <a href="#project-brief" className="contact-primary-action">
                  Share your project
                  <ArrowRight size={17} />
                </a>
                <button type="button" onClick={copyEmail} className="contact-copy-action">
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>

              <div className="contact-hero-proof">
                <span><CheckCircle2 size={15} /> Sri Lanka based</span>
                <span><CheckCircle2 size={15} /> NDA friendly</span>
                <span><CheckCircle2 size={15} /> Product-minded delivery</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="contact-signal-panel"
            >
              <div className="contact-signal-head">
                <div>
                  <span>Conversation desk</span>
                  <strong>Colombo · UTC+5:30</strong>
                </div>
                <div className="contact-signal-status"><span /> Available for inquiries</div>
              </div>

              <div className="contact-signal-stack">
                {directMethods.map((method, index) => {
                  const Icon = iconMap[method.icon];
                  const external = method.icon === "location";
                  return (
                    <motion.a
                      key={method.title}
                      href={method.link}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="contact-signal-card"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    >
                      <div className="contact-signal-icon"><Icon size={19} /></div>
                      <div>
                        <span>{method.title}</span>
                        <strong>{method.value}</strong>
                        <small>{method.description}</small>
                      </div>
                      <ArrowUpRight size={16} className="contact-signal-arrow" />
                      <span className="contact-signal-index">0{index + 1}</span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="contact-signal-foot">
                <Clock size={16} />
                <div>
                  <span>Usual collaboration window</span>
                  <strong>{businessHours?.value}</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-intro-strip">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-intro-grid">
            {contactData.features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              return (
                <motion.article
                  key={feature.title}
                  className="contact-principle"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="contact-principle-top">
                    <Icon size={20} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="project-brief" className="contact-form-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-form-layout">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="contact-form-aside"
            >
              <div className="contact-section-label">Project brief</div>
              <h2>A useful first conversation starts with context.</h2>
              <p>
                You do not need a finished specification. Tell us where the friction is,
                who uses the process and what a better outcome should look like.
              </p>

              <div className="contact-process-list">
                {[
                  ["01", "Understand", "We map the problem, users and operational constraints."],
                  ["02", "Shape", "We identify the smallest sensible scope and product direction."],
                  ["03", "Build", "We turn the agreed workflow into reliable software in clear stages."],
                ].map(([number, title, description]) => (
                  <div key={title} className="contact-process-item">
                    <span>{number}</span>
                    <div><strong>{title}</strong><p>{description}</p></div>
                  </div>
                ))}
              </div>

              <div className="contact-aside-note">
                <MessageSquare size={19} />
                <p>Prefer email? Send your brief directly to <a href="mailto:4staxlabs@gmail.com">4staxlabs@gmail.com</a>.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="contact-form-card"
            >
              <div className="contact-form-card-head">
                <div>
                  <span>Start here</span>
                  <h3>{contactData.form.title}</h3>
                  <p>{contactData.form.description}</p>
                </div>
                <div className="contact-form-card-mark"><Sparkles size={20} /></div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success"
                >
                  <div className="contact-success-icon"><CheckCircle2 size={28} /></div>
                  <h3>Brief captured.</h3>
                  <p>{contactData.form.successMessage}</p>
                  <button type="button" onClick={() => setSubmitted(false)}>Send another brief</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-grid">
                  {contactData.form.fields.map(renderFormField)}
                  <div className="contact-form-submit-row">
                    <p>By sending this form, you&apos;re simply starting a project conversation — no commitment required.</p>
                    <button type="submit" className="contact-submit-button">
                      {contactData.form.submitText}
                      <Send size={17} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-final-cta">
        <div className="contact-final-grid" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="contact-final-panel"
          >
            <div>
              <span className="contact-section-label contact-section-label--light">One problem is enough</span>
              <h2>{contactData.cta.title}</h2>
              <p>{contactData.cta.description}</p>
            </div>
            <div className="contact-final-actions">
              <a href={contactData.cta.link} className="contact-final-primary">
                {contactData.cta.buttonText} <ArrowUpRight size={18} />
              </a>
              <Link to="/services" className="contact-final-secondary">
                Explore services <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
