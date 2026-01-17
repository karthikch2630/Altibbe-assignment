/**
 * SearchInput
 * Filters product disclosures by text.
 * Width is controlled by the parent container.
 */
export default function SearchInput({
  value,
  onChange,
  placeholder = "Search disclosures",
}) {
  return (
    <input
      id="search"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full rounded-md
        border border-slate-200 bg-white
        px-4 py-2.5 text-sm text-slate-900
        placeholder-slate-400
        focus:border-indigo-500 focus:outline-none
        focus:ring-2 focus:ring-indigo-500
      "
    />
  );
}
