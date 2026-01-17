/**
 * ProductDetailSkeleton
 * Loading state for the product disclosure detail page.
 */
export default function ProductDetailSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 animate-pulse">
      {/* Header */}
      <header className="mb-10">
        <div className="h-7 w-1/3 rounded bg-slate-200" />
        <div className="mt-3 h-4 w-48 rounded bg-slate-200" />
      </header>

      {/* Main layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left column */}
        <aside className="space-y-6 lg:col-span-1">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="h-4 w-1/2 rounded bg-slate-200" />
            <div className="mt-4 space-y-3">
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-5/6 rounded bg-slate-100" />
              <div className="h-3 w-2/3 rounded bg-slate-100" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="h-3 w-full rounded bg-slate-100" />
            <div className="mt-2 h-3 w-4/5 rounded bg-slate-100" />
          </div>
        </aside>

        {/* Right column */}
        <section className="space-y-10 lg:col-span-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="h-4 w-40 rounded bg-slate-200" />
            <div className="mt-4 space-y-3">
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-5/6 rounded bg-slate-100" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="h-4 w-40 rounded bg-slate-200" />
            <div className="mt-4 space-y-3">
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-5/6 rounded bg-slate-100" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
