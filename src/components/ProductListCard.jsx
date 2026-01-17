import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import { formatDate } from "../utils/formatDate";
import { slugify } from "../utils/slugify";

export default function ProductListCard({ product }) {
  const slug = slugify(product.name);

  return (
    <Link
      to={`/products/${slug}`}
      className="
        group flex items-center justify-between gap-6
        rounded-lg border border-slate-200 bg-white px-5 py-4
        transition-all duration-200
        hover:-translate-y-[1px]
        hover:border-slate-300 hover:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-indigo-500
      "
    >
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-slate-900">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          {product.category}
          <span className="mx-1 text-slate-300">·</span>
          Declared by {product.producer}
        </p>
      </div>

      <div className="flex items-center gap-6 text-xs text-slate-500">
        <time>{formatDate(product.updatedAt)}</time>
        <StatusBadge status={product.status} />
      </div>
    </Link>
  );
}
