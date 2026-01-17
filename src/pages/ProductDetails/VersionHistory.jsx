import { formatDate } from "../../utils/formatDate";
import StatusBadge from "../../components/StatusBadge";

export default function VersionHistory({ versions }) {
  return (
    <section>
      <h2 className="text-sm font-medium text-slate-900">
        Version History
      </h2>

      <ul className="mt-3 space-y-2">
        {versions.map((v) => (
          <li
            key={v.version}
            className="flex items-center justify-between rounded-md border border-slate-200 bg-white p-3"
          >
            <div className="text-sm text-slate-700">
              {v.version} · {formatDate(v.date)}
            </div>
            <StatusBadge status={v.status} />
          </li>
        ))}
      </ul>
    </section>
  );
}
