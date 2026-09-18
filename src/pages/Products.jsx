import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  Layers3,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Reveal, Surface, SectionHeading } from "../components/PageDesign";
import productsData from "../data/products.json";
const icons = {
  "hospitality-management": Building2,
  "workforce-management": UsersRound,
};
export default function Products() {
  const { title, description, products } = productsData;
  return (
    <div className="editorial-page products-editorial">
      <section className="editorial-hero">
        <div className="home-v2-grid" aria-hidden="true" />
        <div className="site-shell">
          <Reveal>
            <div className="home-v2-eyebrow home-v2-eyebrow--dark">
              Purpose-built SaaS products
            </div>
            <div className="products-intro">
              <h1>{title}</h1>
              <p className="editorial-lead">{description}</p>
            </div>
          </Reveal>
          <nav className="products-index" aria-label="Featured platforms">
            {products.map((product, index) => (
              <a key={product.id} href={`#${product.id}`}>
                <span>0{index + 1}</span>
                {product.title}
                <ArrowRight size={18} />
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="editorial-section">
        <div className="site-shell">
          <Reveal>
            <SectionHeading
              number="01"
              label="Featured Platforms"
              title="Focused products. Connected operations."
              description="Each platform is designed around a specific operating environment, with modular workflows, practical integrations and room to scale."
            />
          </Reveal>
          <div className="products-showcase">
            {products.map((product, index) => {
              const Icon = icons[product.id] || Layers3;
              return (
                <Reveal key={product.id}>
                  <Surface className="product-editorial-card">
                    <div className="product-identity" id={product.id}>
                      <div className="editorial-card-top">
                        <Icon size={36} strokeWidth={1.3} />
                        <span>0{index + 1}</span>
                      </div>
                      <div>
                        <p className="editorial-overline">{product.eyebrow}</p>
                        <h3>{product.title}</h3>
                        <p className="product-subtitle">{product.subtitle}</p>
                      </div>
                      <div className="product-signals">
                        <span>
                          <Cloud size={18} />
                          {product.signal}
                        </span>
                        <span>
                          <ShieldCheck size={18} />
                          {product.metric}
                        </span>
                      </div>
                    </div>
                    <div className="product-content">
                      <p>{product.description}</p>
                      <ul>
                        {product.features.map((feature) => (
                          <li key={feature}>
                            <CheckCircle2 size={17} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={product.link}
                        className="home-v2-button home-v2-button--ink"
                      >
                        {product.cta}
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </Surface>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-dark editorial-cta">
        <div className="site-shell">
          <Reveal>
            <div className="home-v2-eyebrow home-v2-eyebrow--dark">
              Built around your operation
            </div>
            <h2>Need a closer fit to your workflow?</h2>
            <p>
              Both platforms can be shaped around property, workforce and
              reporting requirements without turning daily work into a maze of
              disconnected tools.
            </p>
            <Link
              to="/contact"
              className="home-v2-button home-v2-button--primary"
            >
              Talk to Our Team
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
