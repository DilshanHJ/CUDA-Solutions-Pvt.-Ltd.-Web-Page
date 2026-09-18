import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowDownRight,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  Code2,
} from "lucide-react";
import { Reveal, Surface, SectionHeading } from "../components/PageDesign";
import aboutData from "../data/about.json";
export default function About() {
  const { hero, story, mission, culture, cta } = aboutData;
  const icons = [Lightbulb, ShieldCheck, Users, Code2];
  return (
    <div className="editorial-page about-editorial">
      <section className="editorial-hero">
        <div className="home-v2-grid" aria-hidden="true" />
        <div className="site-shell editorial-about-hero">
          <Reveal>
            <div className="home-v2-eyebrow home-v2-eyebrow--dark">
              {hero.subtitle}
            </div>
            <h1>{hero.title}</h1>
            <p className="editorial-lead">{hero.description}</p>
            <div className="editorial-actions">
              <Link
                to="/contact"
                className="home-v2-button home-v2-button--primary"
              >
                Start a Conversation <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="home-v2-button home-v2-button--ghost"
              >
                Explore Our Services <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="about-origin">
            <span className="editorial-overline">Building since</span>
            <strong>
              2020<span aria-hidden="true">.</span>
            </strong>
            <div className="about-origin-lines">
              {[
                ["Sri Lankan", "software company"],
                ["Workforce-first", "business systems"],
                ["Enterprise-ready", "web, cloud & apps"],
              ].map(([title, label]) => (
                <div key={title}>
                  <b>{title}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <a href="#story" className="editorial-text-link">
              Our Story <ArrowDownRight size={20} />
            </a>
          </Reveal>
        </div>
        <div className="site-shell about-proof">
          {story.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="editorial-section">
        <div className="site-shell">
          <Reveal>
            <SectionHeading
              number="01"
              label="Our Story"
              title={story.title}
              description={story.subtitle}
            />
          </Reveal>
          <div className="about-story-layout">
            <Reveal className="about-story-photo">
              <img
                src={story.image}
                alt="Team collaborating on software in an office"
                loading="lazy"
              />
              <div>
                <span>Founded</span>
                <strong>2020</strong>
                <p>
                  Practical software, built one real business problem at a time.
                </p>
              </div>
            </Reveal>
            <div className="about-story-chapters">
              {story.content.map((paragraph, index) => (
                <Reveal key={paragraph}>
                  <article>
                    <span>0{index + 1}</span>
                    <p>{paragraph}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-dark">
        <div className="home-v2-grid home-v2-grid--fade" aria-hidden="true" />
        <div className="site-shell">
          <Reveal>
            <SectionHeading
              light
              number="02"
              label={mission.eyebrow}
              title={mission.title}
            />
          </Reveal>
          <div className="about-purpose">
            {[mission.mission, mission.vision].map((item, index) => {
              const Icon = index ? Eye : Target;
              return (
                <Reveal key={item.title}>
                  <Surface>
                    <div className="editorial-card-top">
                      <Icon size={28} strokeWidth={1.3} />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </Surface>
                </Reveal>
              );
            })}
          </div>
          <div className="about-values">
            {mission.values.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={value.title}>
                  <Icon size={22} strokeWidth={1.5} />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="culture" className="editorial-section">
        <div className="site-shell">
          <Reveal>
            <SectionHeading
              number="03"
              label="Culture & Work Environment"
              title={culture.title}
              description={culture.description}
            />
          </Reveal>
          <div className="about-culture-layout">
            <Reveal className="about-culture-photo">
              <img
                src={culture.image}
                alt="Colleagues sharing ideas around a table"
                loading="lazy"
              />
            </Reveal>
            <div className="about-culture-list">
              {culture.highlights.map((item, index) => (
                <details key={item.title} open={index === 0}>
                  <summary>
                    <span>0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <span className="culture-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{item.description}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-dark editorial-cta">
        <div className="site-shell">
          <Reveal>
            <div className="home-v2-eyebrow home-v2-eyebrow--dark">
              Work With 4stax Labs
            </div>
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
            <div className="editorial-actions">
              <Link
                to={cta.primaryLink}
                className="home-v2-button home-v2-button--primary"
              >
                {cta.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <Link
                to={cta.secondaryLink}
                className="home-v2-button home-v2-button--ghost"
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
