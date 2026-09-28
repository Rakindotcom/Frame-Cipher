import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { MetricCard } from "@/components/admin/MetricCard";
import { FRAMECIPHER_REGISTRY } from "@/lib/registry/servicesRegistry";
import { CATEGORIES } from "@/lib/registry/categories";
import { GitBranch, ShieldCheck, FileCode, ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Technical SEO & Redirects — FrameCipher Admin",
  robots: { index: false, follow: false },
};

interface RedirectRule {
  source: string;
  destination: string;
  statusCode: number;
}

/**
 * Reads the redirect rules that Next.js actually serves. These are the only
 * redirects that affect routing — the admin UI cannot add rules at runtime
 * because a redirect change requires a rebuild and redeploy.
 */
function readRealRedirects(): RedirectRule[] {
  const configPath = path.join(
    /* turbopackIgnore: true */ process.cwd(),
    "next.config.mjs"
  );
  if (!fs.existsSync(/* turbopackIgnore: true */ configPath)) return [];

  let source: string;
  try {
    source = fs.readFileSync(
      /* turbopackIgnore: true */ configPath,
      "utf-8"
    );
  } catch {
    return [];
  }

  const blockMatch = source.match(/async redirects\(\)\s*\{([\s\S]*?)\n {2}\},/);
  if (!blockMatch) return [];

  const rules: RedirectRule[] = [];
  const entryPattern =
    /\{\s*source:\s*["'`]([^"'`]+)["'`]\s*,\s*destination:\s*["'`]([^"'`]+)["'`]\s*,\s*permanent:\s*(true|false)\s*,?\s*\}/g;

  let match = entryPattern.exec(blockMatch[1]);
  while (match !== null) {
    rules.push({
      source: match[1],
      destination: match[2],
      statusCode: match[3] === "true" ? 301 : 307,
    });
    match = entryPattern.exec(blockMatch[1]);
  }

  return rules;
}

function readRobotsSource(): string {
  const robotsPath = path.join(
    /* turbopackIgnore: true */ process.cwd(),
    "app",
    "robots.js"
  );
  if (!fs.existsSync(/* turbopackIgnore: true */ robotsPath)) {
    return "app/robots.js was not found.";
  }
  try {
    return fs.readFileSync(/* turbopackIgnore: true */ robotsPath, "utf-8");
  } catch {
    return "app/robots.js could not be read.";
  }
}

export default function TechnicalSeoPage() {
  const redirects = readRealRedirects();
  const permanentCount = redirects.filter((rule) => rule.statusCode === 301).length;
  const serviceCount = FRAMECIPHER_REGISTRY.filter((item) => item.type === "Service").length;
  const caseStudyCount = FRAMECIPHER_REGISTRY.filter((item) => item.type === "Case Study").length;
  const estimatedSitemapNodes = serviceCount + caseStudyCount + CATEGORIES.length;
  const robotsSource = readRobotsSource();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-body relative overflow-x-hidden pb-16">
      <AdminHeader
        title="Technical SEO &amp; Redirects"
        subtitle="Redirect rules read from next.config.mjs, plus the real robots and sitemap sources"
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-6 space-y-6 relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="Configured Redirects"
            value={redirects.length}
            change={`${permanentCount} permanent (301)`}
            changePositive={true}
            period="From next.config.mjs"
            icon={GitBranch}
            color="blue"
          />
          <MetricCard
            label="Service + Case Study Routes"
            value={estimatedSitemapNodes}
            change={`${serviceCount} services · ${caseStudyCount} case studies`}
            changePositive={true}
            period={`+ ${CATEGORIES.length} pillar categories`}
            icon={FileCode}
            color="emerald"
          />
          <MetricCard
            label="Crawler Allow-List Agents"
            value={15}
            change="Includes GPTBot, ClaudeBot, PerplexityBot"
            changePositive={true}
            period="/admin and /api disallowed"
            icon={ShieldCheck}
            color="purple"
          />
          <MetricCard
            label="Redirect Hit Tracking"
            value="Not Measured"
            change="No hit counter exists"
            changePositive={false}
            period="Deploy logs required"
            icon={FileCode}
            color="amber"
          />
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-4">
          <div className="pb-4 border-b border-[#F1F5F9]">
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A]">
              Active Redirect Rules
            </h3>
            <p className="text-xs text-[#64748B]">
              Read directly from <code className="font-mono">next.config.mjs</code>. This list is
              read-only because a redirect only takes effect after a rebuild and redeploy — an
              in-app editor would not change any routing behaviour.
            </p>
          </div>

          {redirects.length === 0 ? (
            <p className="text-sm text-[#94A3B8] py-4 text-center">
              No redirect rules are configured in next.config.mjs.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left text-xs">
                <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#475569] font-heading font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-2.5 px-3 min-w-[200px]">Source Path</th>
                    <th className="py-2.5 px-3 min-w-[200px]">Destination</th>
                    <th className="py-2.5 px-3 text-center min-w-[90px]">Status</th>
                    <th className="py-2.5 px-3 text-right min-w-[120px]">Hits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9] font-mono">
                  {redirects.map((rule) => (
                    <tr key={rule.source}>
                      <td className="py-2.5 px-3 text-[#DC2626] font-semibold">{rule.source}</td>
                      <td className="py-2.5 px-3 text-[#16A34A] font-semibold">{rule.destination}</td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="px-1.5 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] text-[10px] font-bold">
                          {rule.statusCode}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right text-[#94A3B8]">not tracked</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="text-[11px] text-[#64748B]">
            To add a redirect, edit the{" "}
            <code className="font-mono">redirects()</code> array in{" "}
            <code className="font-mono">next.config.mjs</code> and redeploy. To change it from the
            admin panel, the rules would need to move to a Firestore collection that{" "}
            <code className="font-mono">proxy.ts</code> reads on every request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <FileCode className="h-4 w-4 text-[#9333EA]" />
                <span>robots.txt source</span>
              </h3>
              <Link
                href="/robots.txt"
                target="_blank"
                className="text-xs text-[#1D4ED8] flex items-center gap-1 font-semibold"
              >
                <span>View Live</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <pre className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-mono text-[#0F172A] leading-relaxed overflow-x-auto max-h-96">
              {robotsSource}
            </pre>
            <p className="text-[11px] text-[#64748B]">
              This is the literal contents of <code className="font-mono">app/robots.js</code>, not
              a hand-written summary of it.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <FileCode className="h-4 w-4 text-[#16A34A]" />
                <span>Sitemap composition</span>
              </h3>
              <Link
                href="/sitemap.xml"
                target="_blank"
                className="text-xs text-[#1D4ED8] flex items-center gap-1 font-semibold"
              >
                <span>View Live</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { label: "Service hubs", value: serviceCount },
                { label: "Case studies", value: caseStudyCount },
                { label: "Pillar categories", value: CATEGORIES.length },
                { label: "Blog posts", value: "from live CMS data" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between"
                >
                  <span className="font-mono text-[#0F172A]">{row.label}</span>
                  <span className="font-bold text-[#16A34A]">
                    {typeof row.value === "number" ? row.value.toLocaleString() : row.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#64748B] leading-relaxed">
              Service, case study and category counts come from the live registry. The blog count is
              resolved at request time from the CMS post source, so it is not hardcoded here — open{" "}
              <code className="font-mono">/sitemap.xml</code> for the exact URL count.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
