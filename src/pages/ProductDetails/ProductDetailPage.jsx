import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DisclosureSummary from "./DisclosureSummary";
import Disclaimer from "./Disclaimer";
import VersionHistory from "./VersionHistory";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import { productsMock } from "../../data/products.mock";
import { slugify } from "../../utils/slugify";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  // Find product by slug
  const product = productsMock.find(
    (p) => slugify(p.name) === slug
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-sm text-slate-600">
          The requested product disclosure could not be found.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-sm text-indigo-600 hover:text-indigo-800"
        >
          ← Back to disclosures
        </button>
      </main>
    );
  }

  const { disclosure } = product;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <header className="mb-10 space-y-3">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
        >
          ← Back to disclosures
        </button>

        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Declared by {product.producer}
          </p>
        </div>
      </header>

      {/* Main layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <aside className="space-y-6 lg:col-span-1">
          <DisclosureSummary
            product={{
              producer: product.producer,
              declaredAt: disclosure.declaredAt,
              evidenceCount: disclosure.evidenceCount,
            }}
          />
          <Disclaimer />
        </aside>

        <section className="space-y-10 lg:col-span-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-sm font-medium text-slate-900">
              Disclosure Details
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-700 leading-relaxed">
              {disclosure.description}
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <VersionHistory versions={disclosure.versions} />
          </div>
        </section>
      </div>
    </main>
  );
}
