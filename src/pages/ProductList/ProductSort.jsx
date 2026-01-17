/**
 * ProductSort
 * Sorting and view-mode controls for product disclosures.
 * Designed for clarity, restraint, and institutional tone.
 */
export default function ProductSort({
  sortBy,
  onSortChange,
  viewMode,
  onViewToggle,
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Sort control */}
      <div className="flex items-center gap-3">
        {/* <span className="text-xs font-medium text-slate-500">
          Sort
        </span> */}

        <select
          value={sortBy}
          onChange={onSortChange}
          className="
            rounded-md border border-slate-300 bg-white
            px-3 py-2.5 text-sm text-slate-700
            focus:border-indigo-500 focus:outline-none
            focus:ring-2 focus:ring-indigo-500
          "
        >
          <option value="date">Last updated</option>
          <option value="name">Product name</option>
        </select>
      </div>

      {/* View toggle */}
      <div className="flex rounded-md border border-slate-300 bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => viewMode !== "grid" && onViewToggle()}
          className={`rounded px-3 py-1.5 text-sm font-medium transition ${
            viewMode === "grid"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Grid
        </button>

        <button
          type="button"
          onClick={() => viewMode !== "list" && onViewToggle()}
          className={`rounded px-3 py-1.5 text-sm font-medium transition ${
            viewMode === "list"
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          List
        </button>
      </div>
    </div>
  );
}
