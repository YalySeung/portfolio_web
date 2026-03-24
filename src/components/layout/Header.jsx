const navItems = [
  { label: "소개", targetId: "hero" },
  { label: "경험", targetId: "experience" },
  { label: "프로젝트", targetId: "portfolio-timeline" },
  { label: "기술", targetId: "skills" },
  { label: "연락", targetId: "contact" },
];

function scrollToSection(targetId) {
  const element = document.getElementById(targetId);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          Portfolio
        </button>

        <nav className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}