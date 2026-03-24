export function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={`cursor-pointer rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, dark = false, className = "" }) {
  return (
    <button
      className={[
        "cursor-pointer rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100",
        dark
          ? "border border-slate-500 text-white hover:bg-slate-800"
          : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}