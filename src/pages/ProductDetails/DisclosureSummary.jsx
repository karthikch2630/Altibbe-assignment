import { formatDate } from "../../utils/formatDate";

export default function DisclosureSummary({ product }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-sm font-medium text-slate-900">
        Disclosure Summary
      </h2>

      <dl className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-xs text-slate-500">Declared by</dt>
          <dd className="text-sm text-slate-900">{product.producer}</dd>
        </div>

        <div>
          <dt className="text-xs text-slate-500">Disclosure date</dt>
          <dd className="text-sm text-slate-900">
            {formatDate(product.declaredAt)}
          </dd>
        </div>

        <div>
          <dt className="text-xs text-slate-500">Evidence attached</dt>
          <dd className="text-sm text-slate-900">
            {product.evidenceCount > 0
              ? `${product.evidenceCount} files`
              : "None"}
          </dd>
        </div>
      </dl>
    </section>
  );
}
