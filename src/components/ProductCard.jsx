import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/formatDate";

/**
 * ProductCard
 * Displays a single product disclosure summary.
 * Designed for calm scanning and neutral presentation.
 */
export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="
        group block rounded-lg border border-slate-200 bg-white p-5
        transition-colors duration-200
        hover:border-slate-300
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-medium text-slate-900">
            {product.name}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {product.category}
            <span className="mx-1 text-slate-300">·</span>
            Declared by {product.producer}
          </p>
        </div>

        <StatusBadge status={product.status} />
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs text-slate-500">
        Last updated{" "}
        <time dateTime={product.updatedAt}>
          {formatDate(product.updatedAt)}
        </time>
      </div>
    </Link>
  );
}
