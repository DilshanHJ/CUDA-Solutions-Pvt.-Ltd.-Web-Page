import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Cloud,
  Monitor,
  Smartphone,
  Layers3,
} from "lucide-react";
import { Reveal, Surface, SectionHeading } from "../components/PageDesign";
import servicesData from "../data/services.json";
export default function Services() {
  const { hero, softwareDevelopment, cta } = servicesData;
  const icons = {
    desktop: Monitor,
    cloud: Cloud,
    mobile: Smartphone,
  };
  return (
    <div className="editorial-page services-editorial">
      <section className="editorial-hero">
        <div className="home-v2-grid" aria-hidden="true" />
        <div className="site-shell">
          <Reveal className="services-intro">
            <div>
              <div className="home-v2-eyebrow home-v2-eyebrow--dark">
                Our Services
              </div>
              <h1>{hero.title}</h1>
            </div>
            <div className="services-intro-copy">
              <p className="editorial-overline">{hero.subtitle}</p>
              <p className="editorial-lead">{hero.description}</p>
              <div className="editorial-actions">
                <Link
                  to="/contact"
                  className="home-v2-button home-v2-button--primary"
                >
                  Discuss Your Project <ArrowRight size={18} />
                </Link>
                <a
                  href="#software-development"
                  className="home-v2-button home-v2-button--ghost"
                >
                  See What We Build <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </Reveal>
          <div className="services-capabilities">
            {hero.capabilities.map((capability, index) => (
              <a href="#software-development" key={capability}>
                <span>0{index + 1}</span>
                <strong>{capability}</strong>
                <ArrowRight size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="software-development" className="editorial-section">
        <div className="site-shell">
          <Reveal>
            <SectionHeading
              number="01"
              label="What We Build"
              title={softwareDevelopment.title}
              description={softwareDevelopment.description}
            />
          </Reveal>
          <div className="services-detail-copy">
            {softwareDevelopment.details.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="services-offerings">
            {softwareDevelopment.offerings.map((service, index) => {
              const Icon = icons[service.icon] || Layers3;
              return (
                <Reveal key={service.title}>
                  <Surface>
                    <div className="editorial-card-top">
                      <span>0{index + 1}</span>
                      <Icon size={30} strokeWidth={1.3} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <Check size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="editorial-text-link">
                      Built around your workflow <ArrowRight size={18} />
                    </Link>
                  </Surface>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-dark services-technology">
        <div className="site-shell services-tech-layout">
          <div>
            <p className="editorial-overline">
              Technology, chosen with purpose
            </p>
            <p>
              We select the stack around product requirements, security,
              integrations, maintainability, and the environment your team needs
              to operate in.
            </p>
          </div>
          <div className="services-tech-grid">
            {softwareDevelopment.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-cta">
        <div className="site-shell">
          <Reveal>
            <div className="home-v2-eyebrow">
              A better system starts with the right problem
            </div>
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
            <div className="editorial-actions">
              <Link
                to={cta.link}
                className="home-v2-button home-v2-button--primary"
              >
                {cta.cta}
                <ArrowRight size={18} />
              </Link>
              <Link
                to={cta.secondaryLink}
                className="home-v2-button home-v2-button--ink"
              >
                {cta.secondaryCta}
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
