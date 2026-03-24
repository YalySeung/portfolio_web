export function Pill({ children, dark = false }) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-3 py-1 text-xs font-medium",
        dark ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export function OutlinePill({ children }) {
  return (
    <span className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600">
      {children}
    </span>
  );
}