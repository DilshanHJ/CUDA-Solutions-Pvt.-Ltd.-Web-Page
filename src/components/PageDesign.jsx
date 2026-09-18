import { motion, useReducedMotion } from "framer-motion";

// Shared, accessible motion language for the editorial pages.
export function Reveal({ children, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              y: 20,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: reduced ? 0 : 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
export function Surface({ children, className = "" }) {
  const reduced = useReducedMotion();
  function move(event) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${event.clientY - bounds.top}px`,
    );
  }
  return (
    <article className={`editorial-surface ${className}`} onPointerMove={move}>
      {children}
    </article>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  description,
  light = false,
}) {
  return (
    <div className={`editorial-heading ${light ? "is-light" : ""}`}>
      <div>
        <div
          className={`home-v2-eyebrow ${light ? "home-v2-eyebrow--dark" : ""}`}
        >
          <span>{number}</span>
          {label}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
