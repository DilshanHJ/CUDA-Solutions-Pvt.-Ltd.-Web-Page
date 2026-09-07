import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  Clock,
  Cloud,
  CreditCard,
  Database,
  Download,
  FileText,
  Fingerprint,
  Layers3,
  MapPin,
  ServerCog,
  ShieldCheck,
  Smartphone,
  TimerReset,
  UserCog,
  UsersRound,
} from "lucide-react";
import ProductSeo from "../components/ProductSeo";

const workforceModules = [
  {
    icon: Database,
    title: "Employee & Master Data",
    text: "Centralize employee profiles, organization structures, categories and the core records HR teams depend on every day.",
  },
  {
    icon: Fingerprint,
    title: "Attendance & Device Data",
    text: "Bring time events from compatible biometric terminals, web workflows and mobile attendance into one processing layer.",
  },
  {
    icon: CalendarClock,
    title: "Shifts & Rosters",
    text: "Create practical shift patterns, assign rosters and give teams a clearer view of who is expected, where and when.",
  },
  {
    icon: TimerReset,
    title: "Leave, OT & Holidays",
    text: "Coordinate leave requests, overtime, holidays and attendance exceptions without chasing separate spreadsheets.",
  },
  {
    icon: CreditCard,
    title: "Payroll Processing",
    text: "Move approved attendance and workforce inputs into structured payroll workflows with configurable earnings and deductions.",
  },
  {
    icon: Smartphone,
    title: "Employee Self-Service",
    text: "Give employees a simple place to review attendance, schedules, leave, payslips and selected profile information.",
  },
  {
    icon: FileText,
    title: "HR Letters & Documents",
    text: "Organize recurring HR documents and employee communication workflows around the same workforce record.",
  },
  {
    icon: BarChart3,
    title: "Reports & Exports",
    text: "Turn attendance, leave, payroll and workforce activity into operational reports and export-ready datasets.",
  },
  {
    icon: UserCog,
    title: "Admin, Security & Setup",
    text: "Configure roles, departments, policies and organization settings so access follows responsibility.",
  },
  {
    icon: ServerCog,
    title: "Real-Time Device Sync",
    text: "Reduce manual imports by synchronizing supported attendance devices and middleware into the workforce data flow.",
  },
];

const workforceSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pulse Workforce",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "HRIS, time attendance and payroll software for Sri Lankan businesses, connecting employee data, biometric attendance, shifts, rosters, leave, overtime, payroll, self-service and reporting.",
  creator: {
    "@type": "Organization",
    name: "4stax Labs",
  },
};

function WorkforceProduct() {
  return (
    <div className="product-detail workforce-product bg-white">
      <ProductSeo
        title="Pulse Workforce | HRIS, Attendance & Payroll Software Sri Lanka | 4stax Labs"
        description="A modern HRIS, attendance and payroll platform for Sri Lankan businesses with employee data, biometric attendance, shifts, rosters, leave, overtime, payroll, self-service and reporting."
        path="/products/workforce-management"
        schema={workforceSchema}
      />

      <section className="product-detail-hero workforce-hero">
        <div className="product-detail-grid" />
        <div className="product-detail-glow product-detail-glow-one" />
        <div className="product-detail-glow product-detail-glow-two" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center min-h-[780px] py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="product-brand-lockup mb-7">
                <div className="product-brand-mark"><UsersRound className="w-5 h-5" /></div>
                <div>
                  <span className="product-brand-name">PULSE</span>
                  <span className="product-brand-sub">Workforce Cloud</span>
                </div>
              </div>
              <p className="product-kicker">HRIS · Attendance · Payroll</p>
              <h1 className="product-hero-title">
                Make every workday<br />
                <span>flow into payroll.</span>
              </h1>
              <p className="product-hero-copy">
                A web-based workforce platform that connects employee records, time attendance, biometric device data, shifts, rosters, leave, overtime, payroll, self-service and management reporting—without the usual handoff between disconnected systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact" className="btn btn-primary px-7 py-4 text-base">
                  Request a Workforce Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="#workforce-modules" className="product-ghost-button">Explore Modules</a>
              </div>
              <div className="product-trust-row mt-10">
                <span><Cloud className="w-4 h-4" /> Web-based</span>
                <span><Fingerprint className="w-4 h-4" /> Biometric-ready</span>
                <span><Smartphone className="w-4 h-4" /> Mobile self-service</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="workforce-console-wrap"
              aria-label="Illustrative workforce management dashboard"
            >
              <div className="workforce-console">
                <div className="workforce-console-head">
                  <div>
                    <span className="console-label">Workforce overview</span>
                    <strong>Today at a glance</strong>
                  </div>
                  <div className="console-live"><span /> SYNCED</div>
                </div>
                <div className="workforce-metrics">
                  <div><UsersRound className="w-5 h-5" /><span>Active employees</span><strong>248</strong><small>Across 4 locations</small></div>
                  <div><Fingerprint className="w-5 h-5" /><span>Present today</span><strong>219</strong><small>88.3% attendance</small></div>
                  <div><TimerReset className="w-5 h-5" /><span>Overtime</span><strong>36h</strong><small>Pending review</small></div>
                  <div><CreditCard className="w-5 h-5" /><span>Payroll</span><strong>Ready</strong><small>Inputs validated</small></div>
                </div>
                <div className="workforce-console-grid">
                  <div className="workforce-panel attendance-panel">
                    <div className="console-panel-head"><span>Attendance pulse</span><small>Live today</small></div>
                    <div className="attendance-visual">
                      <div className="attendance-ring"><div><strong>88%</strong><span>present</span></div></div>
                      <div className="attendance-bars">
                        {[
                          ["Present", 88, "present"],
                          ["Late", 8, "late"],
                          ["Leave", 4, "leave"],
                        ].map(([label, width, tone]) => (
                          <div className="attendance-bar-row" key={label}>
                            <span>{label}</span>
                            <div><i className={tone} style={{ width: `${width}%` }} /></div>
                            <strong>{width}%</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="workforce-panel shift-panel">
                    <div className="console-panel-head"><span>Shift coverage</span><small>Today</small></div>
                    <div className="shift-list">
                      <div><span>Morning</span><strong>96 / 102</strong><i style={{ width: "94%" }} /></div>
                      <div><span>Day</span><strong>74 / 78</strong><i style={{ width: "95%" }} /></div>
                      <div><span>Evening</span><strong>38 / 44</strong><i style={{ width: "86%" }} /></div>
                    </div>
                  </div>
                </div>
                <div className="workforce-activity">
                  <div className="console-panel-head"><span>Live workforce activity</span><small>Device + mobile</small></div>
                  {[
                    ["08:02", "Attendance captured", "Head Office · biometric terminal"],
                    ["08:18", "Leave approved", "Operations · 1 day annual leave"],
                    ["08:34", "Roster updated", "Branch 03 · evening shift"],
                  ].map(([time, label, text]) => (
                    <div className="workforce-activity-row" key={time}>
                      <span>{time}</span><strong>{label}</strong><small>{text}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="workforce-phone">
                <div className="mobile-notch" />
                <div className="workforce-phone-profile"><span>AM</span><div><strong>Good morning</strong><small>Employee self-service</small></div></div>
                <div className="clock-card">
                  <Fingerprint className="w-7 h-7" />
                  <span>Duty starts</span>
                  <strong>08:00</strong>
                  <span className="clock-button">Check in</span>
                </div>
                <div className="phone-quick-actions">
                  <span><CalendarDays className="w-4 h-4" /> Leave</span>
                  <span><FileText className="w-4 h-4" /> Payslip</span>
                  <span><Clock className="w-4 h-4" /> Roster</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="product-signal-strip">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Database, "One employee record", "From master data to payroll"],
              [Fingerprint, "Device connected", "Real-time attendance inputs"],
              [Smartphone, "Employee self-service", "Useful workflows on mobile"],
              [ShieldCheck, "Controlled access", "Role-based administration"],
            ].map(([Icon, title, text]) => (
              <div className="product-signal" key={title}>
                <Icon className="w-5 h-5" />
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workforce-modules" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="product-section-heading">
            <p>A complete workforce core</p>
            <h2>From employee master data<br />to the final payroll input.</h2>
            <span>
              Pulse is designed to reduce duplicate data entry and connect the HR processes that are usually split between attendance software, spreadsheets, payroll tools and paper approvals.
            </span>
          </div>

          <div className="product-module-grid workforce-module-grid mt-14">
            {workforceModules.map((module, index) => {
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

      <section className="product-dark-section workforce-flow-section py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="product-kicker">One continuous data flow</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">Clock in once. Use the data everywhere.</h2>
            <p className="text-neutral-300 text-lg">The strongest workforce systems do not make HR teams repeatedly rebuild the same information. Pulse is designed around a single operational chain.</p>
          </div>
          <div className="workforce-flow">
            {[
              [Fingerprint, "Capture", "Attendance from compatible devices, web or mobile"],
              [Clock, "Validate", "Late, absence, overtime and attendance exceptions"],
              [CalendarClock, "Apply", "Shift, roster, leave and holiday rules"],
              [CreditCard, "Process", "Approved workforce inputs move into payroll"],
              [BarChart3, "Understand", "Reports and exports for HR and management"],
            ].map(([Icon, title, text], index) => (
              <div className="workforce-flow-step" key={title}>
                <span className="flow-index">0{index + 1}</span>
                <div className="flow-icon"><Icon className="w-5 h-5" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < 4 && <ArrowRight className="flow-arrow w-5 h-5" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="ess-showcase">
              <div className="ess-phone ess-phone-back">
                <div className="mobile-notch" />
                <span className="ess-title">My attendance</span>
                <div className="ess-chart">
                  {[74, 88, 63, 92, 82, 95, 68].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
                </div>
                <div className="ess-list"><span>Mon <strong>08:02 — 17:12</strong></span><span>Tue <strong>07:58 — 17:06</strong></span><span>Wed <strong>08:05 — 17:21</strong></span></div>
              </div>
              <div className="ess-phone ess-phone-front">
                <div className="mobile-notch" />
                <div className="ess-avatar">AM</div>
                <strong className="ess-greeting">Your workday, in your pocket.</strong>
                <span className="ess-sub">Self-service without the HR queue.</span>
                <div className="ess-balance"><span>Annual leave</span><strong>12.5 days</strong><i><b style={{ width: "62%" }} /></i></div>
                <div className="ess-actions"><span><CalendarDays className="w-4 h-4" /> Apply leave</span><span><Download className="w-4 h-4" /> Payslip</span></div>
              </div>
            </div>
            <div>
              <p className="product-kicker product-kicker-light">Employee self-service</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Fewer routine questions.<br />More useful access.</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-9">
                Give employees and managers access to the everyday information and actions they need—without turning every attendance check, leave request or payslip question into a manual HR task.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  [CalendarDays, "Leave & balances"],
                  [Clock, "Attendance history"],
                  [CalendarClock, "Roster & schedules"],
                  [FileText, "Payslips & documents"],
                ].map(([Icon, text]) => (
                  <div className="ess-feature" key={text}><Icon className="w-5 h-5" /><span>{text}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="local-product-panel workforce-local-panel">
            <div className="local-product-badge"><MapPin className="w-5 h-5" /> Designed for Sri Lankan workforce operations</div>
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 items-end mt-8">
              <div>
                <h2>Local workflows.<br />Modern workforce visibility.</h2>
                <p>
                  Pulse is intended for organizations that need practical HRIS, attendance and payroll operations without giving up flexibility. Configure the workforce structure, policies, payroll inputs and reports around how your organization actually operates, then keep the experience clear for HR, managers and employees.
                </p>
              </div>
              <div className="local-product-points">
                <span><Layers3 className="w-5 h-5" /> Configurable workforce structure</span>
                <span><Fingerprint className="w-5 h-5" /> Compatible device integrations</span>
                <span><ShieldCheck className="w-5 h-5" /> Secure roles &amp; administration</span>
                <span><BarChart3 className="w-5 h-5" /> Reporting &amp; export workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-final-cta workforce-final-cta">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="product-brand-mark mx-auto mb-6"><UsersRound className="w-6 h-6" /></div>
          <p className="product-kicker">Pulse Workforce</p>
          <h2>Smarter attendance.<br />Simpler HR. Cleaner payroll.</h2>
          <p>Show us how your workforce operates and we’ll shape the demo around your attendance, roster, leave and payroll workflow.</p>
          <Link to="/contact" className="btn btn-primary px-8 py-4 text-base mt-8">
            Book a Workforce Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WorkforceProduct;
