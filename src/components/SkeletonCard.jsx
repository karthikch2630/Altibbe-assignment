/**
 * SkeletonCard
 * Placeholder for product disclosure card while loading.
 */
export default function SkeletonCard() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 animate-pulse">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="h-4 w-2/3 rounded bg-slate-200" />
          <div className="mt-2 h-3 w-1/2 rounded bg-slate-200" />
        </div>

        <div className="h-5 w-16 rounded-full bg-slate-200" />
      </div>

      <div className="mt-4 h-3 w-1/4 rounded bg-slate-200" />
    </div>
  );
}
