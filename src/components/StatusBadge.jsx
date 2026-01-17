const STATUS_STYLES = {
  Draft:
    "bg-slate-200 text-slate-800 border border-slate-400",

  Submitted:
    "bg-amber-200 text-amber-900 border border-amber-400",

  Published:
    "bg-indigo-300 text-indigo-900 border border-indigo-500",
};

export default function StatusBadge({ status }) {
  const normalizedStatus = status?.trim();

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${
        STATUS_STYLES[normalizedStatus] ||
        "bg-slate-200 text-slate-800 border-slate-400"
      }`}
    >
      {normalizedStatus}
    </span>
  );
}
