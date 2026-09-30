import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MetricCard } from "@/components/admin/MetricCard";
import { CATEGORIES } from "@/lib/registry/categories";
import { auditSiteLinks } from "@/lib/seo/linkAudit";
import { Network, ShieldCheck, AlertTriangle, FileWarning } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "SEO Link Health & Schema Intelligence | FrameCipher Admin",
  robots: { index: false, follow: false },
};

function slugToTitle(value: string): string {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SeoHealthPage() {
  const audit = auditSiteLinks();
  const schemaCoverage =
    audit.totalRoutes > 0 ? Math.round((audit.routesWithSchema / audit.totalRoutes) * 100) : 0;

  const ordered = [...audit.routes].sort(
    (a, b) => a.inboundLinks - b.inboundLinks || a.title.localeCompare(b.title)
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="SEO Link Health & Schema Intelligence"
        subtitle={`Measured from ${audit.scannedFiles.toLocaleString()} source files: real internal link counts and real JSON-LD template coverage across ${audit.totalRoutes} services &amp; case studies`}
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Routes Audited"
            value={audit.totalRoutes}
            change={`${audit.totalInboundLinks} inbound links found`}
            changePositive={audit.totalInboundLinks > 0}
            period={`${audit.brokenCount} without backing data`}
            icon={Network}
            color="blue"
          />
          <MetricCard
            label="JSON-LD Template Coverage"
            value={`${schemaCoverage}%`}
            change={`${audit.routesWithSchema} of ${audit.totalRoutes} routes`}
            changePositive={schemaCoverage === 100}
            period="Measured per rendering template"
            icon={ShieldCheck}
            color="emerald"
          />
          <MetricCard
            label="Orphan Pages (0 Inbound)"
            value={audit.orphanCount}
            change={audit.orphanCount === 0 ? "No orphans" : `${audit.orphanCount} need links`}
            changePositive={audit.orphanCount === 0}
            period="Counted from real href occurrences"
            icon={AlertTriangle}
            color={audit.orphanCount === 0 ? "emerald" : "amber"}
          />
          <MetricCard
            label="Missing Backing Data"
            value={audit.brokenCount}
            change={audit.brokenCount === 0 ? "Registry matches data" : `${audit.brokenCount} mismatched`}
            changePositive={audit.brokenCount === 0}
            period="Registry vs servicePagesData.json"
            icon={FileWarning}
            color={audit.brokenCount === 0 ? "emerald" : "amber"}
          />
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xs text-xs text-[#475569]">
          These numbers are computed by{" "}
          <code className="font-mono text-[#1D4ED8]">src/lib/seo/linkAudit.ts</code>, which walks
          the repository on every request. Inbound link counts come from actual{" "}
          <code className="font-mono">href</code>,{" "}
          <code className="font-mono">router.push</code> and{" "}
          <code className="font-mono">canonical</code> occurrences; schema coverage is read from the
          JSON-LD in the template that renders each route. Nothing on this page is simulated. Last
          scan: {new Date(audit.generatedAt).toLocaleString()}.
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-xs">
          <div className="px-5 py-4 border-b border-[#F1F5F9] flex items-center justify-between gap-3">
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0F172A]">
              Link Equity &amp; Schema Verification
            </h3>
            <span className="text-[11px] text-[#64748B] font-semibold">
              Weakest links first · {ordered.length} routes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-heading font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4 min-w-[260px]">Service / Case Study</th>
                  <th className="py-3 px-4 min-w-[140px]">Strategic Pillar</th>
                  <th className="py-3 px-4 text-center min-w-[110px]">Inbound Links</th>
                  <th className="py-3 px-4 text-center min-w-[130px]">JSON-LD Template</th>
                  <th className="py-3 px-4 text-center min-w-[120px]">Backing Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {ordered.map((route) => (
                  <tr key={route.href} className={route.isOrphan ? "bg-[#FFFBEB]" : undefined}>
                    <td className="py-3 px-4">
                      <div className="font-bold text-[#0F172A]">
                        <Link href={route.href} target="_blank" className="flex items-center gap-1">
                          <span>{route.title}</span>
                        </Link>
                      </div>
                      <span className="text-[11px] text-[#64748B] font-mono">{route.href}</span>
                    </td>

                    <td className="py-3 px-4">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                        {slugToTitle(route.pillar)}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold font-mono border ${
                          route.inboundLinks === 0
                            ? "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]"
                            : "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]"
                        }`}
                        title={route.linkingFiles.slice(0, 6).join("\n")}
                      >
                        {route.inboundLinks}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-center">
                      {route.hasSchema ? (
                        <span className="text-[11px] font-semibold text-[#16A34A]">
                          ld+json present
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-[#B45309]">none found</span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-center">
                      {route.isBroken ? (
                        <span
                          className="text-[11px] font-semibold text-[#B91C1C]"
                          title={route.brokenReason || undefined}
                        >
                          missing
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-[#16A34A]">found</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
            <span>
              Pillars represented: {CATEGORIES.length} ·{" "}
              {audit.routes.filter((route) => route.type === "Service").length} services ·{" "}
              {audit.routes.filter((route) => route.type === "Case Study").length} case studies
            </span>
            <span className="font-mono font-bold text-[#0F172A]">
              Total Inbound: {audit.totalInboundLinks}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
