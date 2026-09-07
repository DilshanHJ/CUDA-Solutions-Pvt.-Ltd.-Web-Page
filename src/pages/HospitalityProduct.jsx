import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BedDouble,
  Building2,
  CalendarDays,
  CheckCircle2,
  Cloud,
  CreditCard,
  Gauge,
  KeyRound,
  Layers3,
  MapPin,
  MonitorSmartphone,
  Moon,
  PackageSearch,
  Receipt,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import ProductSeo from "../components/ProductSeo";

const modules = [
  {
    icon: CalendarDays,
    title: "Reservations & Room Planning",
    text: "Keep direct bookings, room availability, allocations and stay details visible in one operational calendar.",
  },
  {
    icon: KeyRound,
    title: "PMS & Front Office",
    text: "Run arrivals, departures, room moves, extensions and daily front-desk workflows from a clear workspace.",
  },
  {
    icon: BedDouble,
    title: "Room Management",
    text: "See vacant, reserved, occupied, dirty and out-of-service rooms without relying on manual status sheets.",
  },
  {
    icon: UsersRound,
    title: "Guest Profiles",
    text: "Maintain guest history, preferences, contact details and stay context so teams can serve with continuity.",
  },
  {
    icon: CreditCard,
    title: "Billing & Cashiering",
    text: "Bring folios, charges, payments, adjustments and settlement workflows into the same guest journey.",
  },
  {
    icon: Moon,
    title: "Night Audit",
    text: "Close the business day with structured checks, controlled rollovers and clear operational summaries.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    text: "Coordinate room status, cleaning queues, assignment and completion updates between floors and front office.",
  },
  {
    icon: UtensilsCrossed,
    title: "POS & KOT",
    text: "Connect restaurant, bar and outlet billing with guest rooms while keeping order flow practical for service teams.",
  },
  {
    icon: PackageSearch,
    title: "Inventory & Purchasing",
    text: "Track stock movement, suppliers, purchase activity and consumption across operational departments.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    text: "Log issues, assign work, track asset attention and keep maintenance activity visible to the right teams.",
  },
  {
    icon: RadioTower,
    title: "Channel Connectivity",
    text: "Prepare for connected booking channels and centralized availability workflows with fewer manual touchpoints.",
  },
  {
    icon: BarChart3,
    title: "Reports & Management Insights",
    text: "Turn occupancy, revenue and operational activity into useful dashboards and decision-ready reporting.",
  },
];

const journey = [
  ["01", "Book", "Capture a reservation and allocate inventory with a clear view of availability."],
  ["02", "Arrive", "Move from expected arrival to check-in without re-entering guest information."],
  ["03", "Stay", "Keep rooms, housekeeping, guest requests and service activity connected."],
  ["04", "Dine", "Post restaurant and outlet activity into the wider guest account when needed."],
  ["05", "Settle", "Bring folio review, payments and checkout into one controlled closeout flow."],
  ["06", "Return", "Retain useful guest history so the next stay starts with better context."],
];

const hospitalitySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Atlas Hospitality",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Desktop, Mobile",
  description:
    "Hospitality management software for hotels, resorts, villas and multi-property operations covering reservations, front office, rooms, guests, billing, housekeeping, POS, inventory, maintenance and reporting.",
  creator: {
    "@type": "Organization",
    name: "4stax Labs",
  },
};

function HospitalityProduct() {
  return (
    <div className="product-detail hospitality-product bg-white">
      <ProductSeo
        title="Atlas Hospitality | Hospitality Management Software | 4stax Labs"
        description="A modern hospitality management platform for hotels, resorts and villas in Sri Lanka, connecting reservations, front office, rooms, billing, housekeeping, POS, inventory, maintenance and reporting."
        path="/products/hospitality-management"
        schema={hospitalitySchema}
      />

      <section className="product-detail-hero">
        <div className="product-detail-grid" />
        <div className="product-detail-glow product-detail-glow-one" />
        <div className="product-detail-glow product-detail-glow-two" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-14 items-center min-h-[780px] py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="product-brand-lockup mb-7">
                <div className="product-brand-mark">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="product-brand-name">ATLAS</span>
                  <span className="product-brand-sub">Hospitality OS</span>
                </div>
              </div>

              <p className="product-kicker">Hospitality management, reconnected</p>
              <h1 className="product-hero-title">
                Run the property.<br />
                <span>See the whole stay.</span>
              </h1>
              <p className="product-hero-copy">
                A modern hospitality operating platform that brings reservations, front office, rooms, guests, billing, housekeeping, F&amp;B, stock, maintenance and management insight into one connected experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary px-7 py-4 text-base">
                  Request a Product Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="#modules" className="product-ghost-button">
                  Explore the Platform
                </a>
              </div>

              <div className="product-trust-row mt-10">
                <span><Cloud className="w-4 h-4" /> Cloud ready</span>
                <span><MonitorSmartphone className="w-4 h-4" /> Web, desktop &amp; mobile</span>
                <span><ShieldCheck className="w-4 h-4" /> Role-aware operations</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="hospitality-console-wrap"
              aria-label="Illustrative hospitality operations dashboard"
            >
              <div className="hospitality-console">
                <div className="console-topbar">
                  <div className="console-dots"><span /><span /><span /></div>
                  <div className="console-property"><MapPin className="w-4 h-4" /> Colombo City Property</div>
                  <div className="console-live"><span /> LIVE</div>
                </div>
                <div className="console-body">
                  <aside className="console-sidebar">
                    {[Building2, CalendarDays, BedDouble, UsersRound, CreditCard, BarChart3].map((Icon, index) => (
                      <div className={`console-side-icon ${index === 0 ? "active" : ""}`} key={index}>
                        <Icon className="w-4 h-4" />
                      </div>
                    ))}
                  </aside>
                  <div className="console-main">
                    <div className="console-heading-row">
                      <div>
                        <span className="console-label">Operations overview</span>
                        <strong>Good morning, Front Office</strong>
                      </div>
                      <div className="console-date">Today · 07 Sep</div>
                    </div>

                    <div className="console-metrics">
                      <div><span>Occupancy</span><strong>78%</strong><small>+6% vs yesterday</small></div>
                      <div><span>Arrivals</span><strong>12</strong><small>4 checked in</small></div>
                      <div><span>Departures</span><strong>08</strong><small>3 pending</small></div>
                      <div><span>In-house</span><strong>45</strong><small>guest profiles</small></div>
                    </div>

                    <div className="console-panels">
                      <div className="console-panel occupancy-panel">
                        <div className="console-panel-head"><span>7-day occupancy</span><strong>78%</strong></div>
                        <div className="occupancy-chart">
                          {[42, 55, 49, 68, 61, 82, 76, 92, 78].map((height, index) => (
                            <span key={index} style={{ height: `${height}%` }} />
                          ))}
                        </div>
                        <div className="chart-axis"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
                      </div>
                      <div className="console-panel rooms-panel">
                        <div className="console-panel-head"><span>Room status</span><small>64 rooms</small></div>
                        <div className="room-status-ring"><div><strong>50</strong><span>ready</span></div></div>
                        <div className="room-status-legend">
                          <span><i className="ready" /> Ready 32</span>
                          <span><i className="occupied" /> Occupied 18</span>
                          <span><i className="service" /> Service 9</span>
                          <span><i className="hold" /> Hold 5</span>
                        </div>
                      </div>
                    </div>

                    <div className="console-activity">
                      <div className="console-panel-head"><span>Today’s movement</span><small>Live workflow</small></div>
                      {[
                        ["09:10", "Check-in", "Ocean Suite · 2 guests", "ready"],
                        ["10:25", "Housekeeping", "Room 308 · inspection", "service"],
                        ["11:40", "Restaurant", "Room 214 · charge posted", "occupied"],
                      ].map(([time, label, detail, tone]) => (
                        <div className="activity-row" key={time}>
                          <span className={`activity-dot ${tone}`} />
                          <strong>{time}</strong>
                          <span>{label}</span>
                          <small>{detail}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hospitality-mobile-card">
                <div className="mobile-notch" />
                <span className="mobile-mini-label">Property pulse</span>
                <strong>78%</strong>
                <small>Occupancy today</small>
                <div className="mobile-mini-grid"><span>12<br /><small>Arrivals</small></span><span>08<br /><small>Departures</small></span></div>
                <div className="mobile-action"><Sparkles className="w-4 h-4" /> Housekeeping: 6 ready</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="product-signal-strip">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Layers3, "One platform", "Connected daily operations"],
              [Cloud, "Cloud ready", "Access across locations"],
              [MonitorSmartphone, "Flexible access", "Web, desktop and mobile"],
              [Building2, "Built to scale", "Single to multi-property"],
            ].map(([Icon, title, text]) => (
              <div className="product-signal" key={title}>
                <Icon className="w-5 h-5" />
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="product-section-heading">
            <p>One operating layer</p>
            <h2>Everything the property needs.<br />Without the system sprawl.</h2>
            <span>
              Atlas is structured around the work hotel teams already do, connecting guest-facing moments with the operational detail happening behind the scenes.
            </span>
          </div>

          <div className="product-module-grid mt-14">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
                  className="product-module-card"
                >
                  <div className="product-module-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="product-module-icon"><Icon className="w-5 h-5" /></div>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-dark-section py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-14 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="product-kicker">Designed around the guest journey</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">One stay.<br />One continuous flow.</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                Hospitality becomes easier to control when each department works from the same operational story instead of passing information between separate tools.
              </p>
              <div className="inline-flex items-center gap-3 text-accent-200 text-sm font-semibold">
                <Gauge className="w-5 h-5" /> Less handoff friction. Better visibility.
              </div>
            </div>
            <div className="journey-stack">
              {journey.map(([number, title, text]) => (
                <div className="journey-step" key={number}>
                  <span className="journey-number">{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <CheckCircle2 className="w-5 h-5 journey-check" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="product-kicker product-kicker-light">Flexible by design</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Built for the realities of hospitality operations.</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-9">
                Properties do not all operate the same way. Atlas is designed to support different service models, team structures and deployment needs while keeping the interface familiar and the operational core consistent.
              </p>
              <div className="space-y-4">
                {[
                  "Single-property hotels, boutique stays, resorts and villas",
                  "Growing groups that need consolidated operational visibility",
                  "Cloud-first access with desktop deployment options where resilience matters",
                  "Configurable workflows, roles, reporting and integrations around the business",
                ].map((item) => (
                  <div className="product-check-line" key={item}><CheckCircle2 className="w-5 h-5" />{item}</div>
                ))}
              </div>
            </div>
            <div className="deployment-grid">
              {[
                [Cloud, "Cloud access", "Keep authorized teams connected across desks, departments and properties."],
                [MonitorSmartphone, "Desktop option", "Support front-desk environments that prefer a dedicated operational workspace."],
                [Smartphone, "Mobile ready", "Surface the right workflows to managers and teams away from the main desk."],
                [Building2, "Multi-property", "Grow from one property toward centralized oversight without rebuilding the operating model."],
              ].map(([Icon, title, text]) => (
                <div className="deployment-card" key={title}>
                  <Icon className="w-6 h-6" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="local-product-panel">
            <div className="local-product-badge"><MapPin className="w-5 h-5" /> Built with Sri Lankan hospitality in mind</div>
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-end mt-8">
              <div>
                <h2>Practical enough for the front desk.<br />Powerful enough for management.</h2>
                <p>
                  The platform is shaped around the operational realities of local hospitality businesses—from focused teams running a single property to organizations building a broader portfolio. The goal is simple: clearer work, fewer disconnected processes and better control of the guest journey.
                </p>
              </div>
              <div className="local-product-points">
                <span><Receipt className="w-5 h-5" /> Operationally focused workflows</span>
                <span><ShieldCheck className="w-5 h-5" /> Permission-aware access</span>
                <span><BarChart3 className="w-5 h-5" /> Decision-ready reporting</span>
                <span><Layers3 className="w-5 h-5" /> Customizable modules &amp; integrations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-final-cta">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="product-brand-mark mx-auto mb-6"><Building2 className="w-6 h-6" /></div>
          <p className="product-kicker">Atlas Hospitality</p>
          <h2>One platform. Every operation.<br />A better stay starts behind the scenes.</h2>
          <p>Tell us how your property works and we’ll walk you through a product experience shaped around your operation.</p>
          <Link to="/contact" className="btn btn-primary px-8 py-4 text-base mt-8">
            Book a Hospitality Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HospitalityProduct;
