import { useState, useEffect } from "react";
import ProductGridCard from "../../components/ProductGridCard";
import ProductListCard from "../../components/ProductListCard";
import SkeletonCard from "../../components/SkeletonCard";
import ProductFilters from "./ProductFilters";
import ProductSort from "./ProductSort";
import { productsMock } from "../../data/products.mock";

export default function ProductListPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState("grid");

  /** Soft loading for transitions */
  const triggerSoftLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  /** Initial load */
 useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, []);


  const filteredProducts = productsMock
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      statusFilter ? p.status === statusFilter : true
    )
    .sort((a, b) =>
      sortBy === "name"
        ? a.name.localeCompare(b.name)
        : new Date(b.updatedAt) - new Date(a.updatedAt)
    );

  return (
    <main className="mx-auto max-w-7xl px-6 pb-10">
      {/* Header */}
      <header className="mb-4 pt-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Product Disclosures
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          This page presents producer-declared information about products.
          Hedamo does not verify, certify, or approve the information shown.
        </p>
      </header>

      {/* Sticky controls */}
      <div className="sticky top-2 z-30 -mx-6 mb-6 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              {/* Search */}
              <ProductFilters
                search={search}
                onSearchChange={(e) => {
                  setSearch(e.target.value);
                  triggerSoftLoading();
                }}
              />

              {/* Status + Sort + View */}
              <div className="flex w-full flex-wrap items-end gap-3 md:w-auto md:shrink-0">
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    triggerSoftLoading();
                  }}
                  className="rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm"
                >
                  <option value="">All statuses</option>
                  <option value="Draft">Draft</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Published">Published</option>
                </select>

                <ProductSort
                  sortBy={sortBy}
                  onSortChange={(e) => {
                    setSortBy(e.target.value);
                    triggerSoftLoading();
                  }}
                  viewMode={viewMode}
                  onViewToggle={() => {
                    setViewMode(
                      viewMode === "grid" ? "list" : "grid"
                    );
                    triggerSoftLoading();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <section
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "grid grid-cols-1 gap-4"
        }
      >
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full">
            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-14 text-center">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                  />
                </svg>
              </div>

              <h3 className="text-sm font-medium text-slate-900">
                No disclosures found
              </h3>

              <p className="mt-2 max-w-sm text-sm text-slate-600 leading-relaxed">
                No product disclosures match the current search or
                filter selection.
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Try adjusting your search terms or clearing filters.
              </p>
            </div>
          </div>
        ) : viewMode === "grid" ? (
          filteredProducts.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))
        ) : (
          filteredProducts.map((product) => (
            <ProductListCard key={product.id} product={product} />
          ))
        )}
      </section>
    </main>
  );
}
