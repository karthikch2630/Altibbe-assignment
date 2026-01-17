import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/formatDate";
import { slugify } from "../utils/slugify";

export default function ProductGridCard({ product }) {
  const slug = slugify(product.name);

  return (
    <Link
      to={`/products/${slug}`}
      className="
        group rounded-xl border border-slate-200 bg-white p-5
        transition-all duration-200
        hover:-translate-y-[2px]
        hover:border-slate-300 hover:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-slate-900">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            {product.category} · Declared by {product.producer}
          </p>
        </div>

        <StatusBadge status={product.status} />
      </div>

      <div className="mt-4 text-xs text-slate-500">
        Last updated {formatDate(product.updatedAt)}
      </div>
    </Link>
  );
}
