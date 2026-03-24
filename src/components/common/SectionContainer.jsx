export default function SectionContainer({ children, className = "", id }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}