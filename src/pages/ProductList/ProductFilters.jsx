import SearchInput from "./SearchInput";

/**
 * ProductFilters
 * Search-only control. Other filters are grouped separately.
 */
export default function ProductFilters({
  search,
  onSearchChange,
}) {
  return (
    <div className="flex w-full flex-col gap-2 md:flex-1">
      {/* <label className="text-xs font-medium text-slate-500">
        Search
      </label> */}
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search product disclosures"
      />
    </div>
  );
}
