"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Download,
  Search,
  Filter,
  Calendar,
  Globe2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus,
  RefreshCw,
  Info,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Row = { key: string; clicks: number; impressions: number; ctr: number; position: number };
type ChartPoint = { date: string; clicks: number; impressions: number; ctr: number; position: number };
type Data = {
  isLive?: boolean;
  cached?: boolean;
  connected: boolean;
  siteUrl?: string;
  startDate?: string;
  endDate?: string;
  dateRange?: string;
  message?: string;
  error?: string;
  totals: { clicks: number; impressions: number; ctr: number; position: number };
  queries: Row[];
  pages: Row[];
  countries: Row[];
  devices: Row[];
  chartData: ChartPoint[];
};

const METRIC_CONFIG = {
  clicks: {
    key: "clicks" as const,
    label: "Total clicks",
    color: "#4285F4",
    bgActive: "#E8F0FE",
    fmt: (v: number) => v.toLocaleString(),
  },
  impressions: {
    key: "impressions" as const,
    label: "Total impressions",
    color: "#5E35B1",
    bgActive: "#F3E8FD",
    fmt: (v: number) => v.toLocaleString(),
  },
  ctr: {
    key: "ctr" as const,
    label: "Average CTR",
    color: "#00897B",
    bgActive: "#E0F2F1",
    fmt: (v: number) => `${v.toFixed(1)}%`,
  },
  position: {
    key: "position" as const,
    label: "Average position",
    color: "#E8710A",
    bgActive: "#FBE9E7",
    fmt: (v: number) => v.toFixed(1),
  },
};

// ─── Interactive SVG Line Chart (exact GSC style with tooltip) ────────────────
function GscChart({
  data,
  activeMetrics,
}: {
  data: ChartPoint[];
  activeMetrics: Set<string>;
}) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const W = 900;
  const H = 240;
  const PAD = { top: 25, right: 30, bottom: 45, left: 60 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  if (!data || data.length === 0) {
    return (
      <div className="h-56 flex items-center justify-center text-sm text-[#5f6368]">
        No performance chart data available for this range
      </div>
    );
  }

  // Calculate scales for active metrics
  const getScale = (key: keyof ChartPoint) => {
    const vals = data.map((d) => d[key] as number);
    const min = key === "position" ? Math.min(...vals, 1) : 0;
    const max = Math.max(...vals) || 1;
    return { min, max };
  };

  const getX = (i: number) => PAD.left + (data.length > 1 ? (i / (data.length - 1)) * chartW : chartW / 2);
  const getY = (val: number, min: number, max: number, invert = false) => {
    if (max === min) return PAD.top + chartH / 2;
    const normalized = (val - min) / (max - min);
    return invert
      ? PAD.top + normalized * chartH
      : PAD.top + chartH - normalized * chartH;
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || data.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const scaleX = W / rect.width;
    const svgX = mouseX * scaleX;

    const clampedX = Math.max(PAD.left, Math.min(W - PAD.right, svgX));
    const ratio = (clampedX - PAD.left) / chartW;
    const idx = Math.round(ratio * (data.length - 1));
    setHoverIndex(Math.max(0, Math.min(data.length - 1, idx)));
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const hoveredPoint = hoverIndex !== null ? data[hoverIndex] : null;

  return (
    <div className="relative select-none">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto cursor-crosshair overflow-visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Horizontal background grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((p) => {
          const y = PAD.top + p * chartH;
          return (
            <line
              key={p}
              x1={PAD.left}
              y1={y}
              x2={W - PAD.right}
              y2={y}
              stroke="#E8EAED"
              strokeWidth="1"
            />
          );
        })}

        {/* Primary metric lines */}
        {Object.entries(METRIC_CONFIG).map(([key, cfg]) => {
          if (!activeMetrics.has(key)) return null;
          const { min, max } = getScale(key as keyof ChartPoint);
          const invert = key === "position"; // lower position number is higher up
          const pathD = data
            .map((d, i) => {
              const x = getX(i);
              const y = getY(d[key as keyof ChartPoint] as number, min, max, invert);
              return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
            })
            .join(" ");

          return (
            <path
              key={key}
              d={pathD}
              fill="none"
              stroke={cfg.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}

        {/* Hover Crosshair & Dots */}
        {hoverIndex !== null && (
          <g>
            <line
              x1={getX(hoverIndex)}
              y1={PAD.top}
              x2={getX(hoverIndex)}
              y2={PAD.top + chartH}
              stroke="#5F6368"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {Object.entries(METRIC_CONFIG).map(([key, cfg]) => {
              if (!activeMetrics.has(key)) return null;
              const { min, max } = getScale(key as keyof ChartPoint);
              const invert = key === "position";
              const x = getX(hoverIndex);
              const y = getY(data[hoverIndex][key as keyof ChartPoint] as number, min, max, invert);
              return (
                <circle
                  key={key}
                  cx={x}
                  cy={y}
                  r="4.5"
                  fill="#FFFFFF"
                  stroke={cfg.color}
                  strokeWidth="2.5"
                />
              );
            })}
          </g>
        )}

        {/* X-axis date labels */}
        {data.map((d, i) => {
          const step = Math.max(1, Math.floor(data.length / 7));
          if (i % step !== 0 && i !== data.length - 1) return null;
          const x = getX(i);
          return (
            <text
              key={i}
              x={x}
              y={H - 12}
              textAnchor="middle"
              fontSize="11"
              fill="#5F6368"
              fontFamily="Roboto, Arial, sans-serif"
            >
              {d.date}
            </text>
          );
        })}
      </svg>

      {/* Floating Tooltip */}
      {hoveredPoint && hoverIndex !== null && (
        <div
          className="absolute z-20 pointer-events-none rounded-lg bg-white p-3 shadow-xl border border-[#DADCE0] text-xs transition-all duration-75"
          style={{
            left: `${Math.min(80, Math.max(10, ((getX(hoverIndex) - PAD.left) / chartW) * 100))}%`,
            top: "10px",
            minWidth: "175px",
          }}
        >
          <div className="font-semibold text-[#202124] border-b border-[#E8EAED] pb-1.5 mb-2">
            {hoveredPoint.date}
          </div>
          <div className="space-y-1.5">
            {Object.entries(METRIC_CONFIG).map(([key, cfg]) => {
              if (!activeMetrics.has(key)) return null;
              const val = hoveredPoint[key as keyof ChartPoint] as number;
              return (
                <div key={key} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: cfg.color }}
                    />
                    <span className="text-[#5F6368]">{cfg.label}:</span>
                  </div>
                  <span className="font-semibold text-[#202124]">{cfg.fmt(val)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── GSC Table Component ──────────────────────────────────────────────────────
function GscTable({
  rows,
  labelHeader,
  tab,
}: {
  rows: Row[];
  labelHeader: string;
  tab: string;
}) {
  const [sortCol, setSortCol] = useState<keyof Row>("clicks");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);

  const filtered = rows.filter((r) =>
    r.key.toLowerCase().includes(filterText.toLowerCase().trim())
  );

  const sorted = [...filtered].sort((a, b) => {
    const va = a[sortCol];
    const vb = b[sortCol];
    if (typeof va === "string") {
      return sortDir === "desc"
        ? (vb as string).localeCompare(va as string)
        : (va as string).localeCompare(vb as string);
    }
    return sortDir === "desc"
      ? (vb as number) - (va as number)
      : (va as number) - (vb as number);
  });

  const totalPages = Math.ceil(sorted.length / pageSize) || 1;
  const pagedRows = sorted.slice(page * pageSize, (page + 1) * pageSize);

  function toggleSort(col: keyof Row) {
    if (sortCol === col) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortCol(col);
      setSortDir("desc");
    }
  }

  const maxClicks = Math.max(...rows.map((r) => r.clicks), 1);
  const maxImp = Math.max(...rows.map((r) => r.impressions), 1);

  // CSV Export handler
  const exportCSV = () => {
    const header = [labelHeader, "Clicks", "Impressions", "CTR (%)", "Position"];
    const lines = sorted.map((r) => [
      `"${r.key.replace(/"/g, '""')}"`,
      r.clicks,
      r.impressions,
      r.ctr.toFixed(2),
      r.position.toFixed(1),
    ]);
    const csvContent = [header.join(","), ...lines.map((l) => l.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `gsc-${tab}-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const SortIndicator = ({ col }: { col: keyof Row }) => {
    if (sortCol !== col) {
      return <span className="opacity-0 group-hover:opacity-40 ml-1 text-[11px]">▼</span>;
    }
    return (
      <span className="ml-1 text-[11px] text-[#202124]">
        {sortDir === "desc" ? "▼" : "▲"}
      </span>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Table Filter & Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-[#E8EAED] bg-white">
        <div className="flex items-center gap-2 flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5F6368]" />
            <input
              type="text"
              placeholder={`Filter ${labelHeader.toLowerCase()}...`}
              value={filterText}
              onChange={(e) => {
                setFilterText(e.target.value);
                setPage(0);
              }}
              className="w-full pl-9 pr-3 py-1.5 text-xs text-[#202124] rounded border border-[#DADCE0] focus:border-[#4285F4] focus:outline-none focus:ring-1 focus:ring-[#4285F4]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#5F6368]">
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#DADCE0] hover:bg-[#F8F9FA] text-[#1A73E8] font-medium transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export table</span>
          </button>
          <span>
            {sorted.length === 0
              ? "0–0 of 0"
              : `${page * pageSize + 1}–${Math.min(
                  (page + 1) * pageSize,
                  sorted.length
                )} of ${sorted.length}`}
          </span>
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-1 rounded hover:bg-[#F1F3F4] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="p-1 rounded hover:bg-[#F1F3F4] disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[#E8EAED] text-xs font-medium text-[#5F6368] select-none">
              <th
                onClick={() => toggleSort("key")}
                className="group px-4 py-3 cursor-pointer hover:bg-[#F8F9FA] transition-colors"
              >
                <div className="flex items-center">
                  <span>{labelHeader}</span>
                  <SortIndicator col="key" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("clicks")}
                className="group px-4 py-3 text-right cursor-pointer hover:bg-[#F8F9FA] transition-colors w-36"
              >
                <div className="flex items-center justify-end">
                  <span>Clicks</span>
                  <SortIndicator col="clicks" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("impressions")}
                className="group px-4 py-3 text-right cursor-pointer hover:bg-[#F8F9FA] transition-colors w-40"
              >
                <div className="flex items-center justify-end">
                  <span>Impressions</span>
                  <SortIndicator col="impressions" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("ctr")}
                className="group px-4 py-3 text-right cursor-pointer hover:bg-[#F8F9FA] transition-colors w-24"
              >
                <div className="flex items-center justify-end">
                  <span>CTR</span>
                  <SortIndicator col="ctr" />
                </div>
              </th>
              <th
                onClick={() => toggleSort("position")}
                className="group px-4 py-3 text-right cursor-pointer hover:bg-[#F8F9FA] transition-colors w-24"
              >
                <div className="flex items-center justify-end">
                  <span>Position</span>
                  <SortIndicator col="position" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F3F4] text-xs text-[#202124]">
            {pagedRows.map((row) => (
              <tr
                key={row.key}
                className="hover:bg-[#F8F9FA] transition-colors group"
              >
                <td className="px-4 py-3 font-normal text-[#1A73E8] max-w-[420px] truncate">
                  <span
                    className="hover:underline cursor-pointer"
                    title={row.key}
                  >
                    {row.key}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="w-16 h-1.5 rounded-full bg-[#E8EAED] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#4285F4]"
                        style={{
                          width: `${Math.max(4, (row.clicks / maxClicks) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="font-medium text-[#202124] min-w-[28px]">
                      {row.clicks.toLocaleString()}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2.5">
                    <div className="w-16 h-1.5 rounded-full bg-[#E8EAED] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#5E35B1]"
                        style={{
                          width: `${Math.max(
                            4,
                            (row.impressions / maxImp) * 100
                          )}%`,
                        }}
                      />
                    </div>
                    <span className="text-[#202124] min-w-[28px]">
                      {row.impressions.toLocaleString()}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-normal text-[#3C4043]">
                  {row.ctr.toFixed(1)}%
                </td>
                <td className="px-4 py-3 text-right font-normal text-[#3C4043]">
                  {row.position.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagedRows.length === 0 && (
        <div className="py-12 text-center text-xs text-[#5F6368]">
          No matching records found.
        </div>
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function SearchConsoleAnalytics() {
  const [data, setData] = useState<Data | null>(null);
  const [range, setRange] = useState("3months");
  const [tab, setTab] = useState<"queries" | "pages" | "countries" | "devices">("queries");
  const [activeMetrics, setActiveMetrics] = useState<Set<string>>(
    new Set(["clicks", "impressions"])
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rangeDropdownOpen, setRangeDropdownOpen] = useState(false);

  const fetchGSCData = (selectedRange: string) => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`/api/search-console?range=${selectedRange}`, {
      cache: "no-store",
      credentials: "include",
    })
      .then(async (r) => {
        const body = await r.json().catch(() => null);
        if (!r.ok || !body || body.error) {
          throw new Error(body?.error || `Request failed (${r.status})`);
        }
        return body;
      })
      .then((d) => {
        if (!cancelled) {
          setData(d);
          setLoading(false);
        }
      })
      .catch((e: Error) => {
        if (cancelled) return;
        setError(e.message);
        setData(null);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  };

  useEffect(() => {
    return fetchGSCData(range);
  }, [range]);

  const toggleMetric = (key: string) => {
    setActiveMetrics((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        if (next.size > 1) next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const ranges = [
    { label: "Last 24 hours", value: "24hours" },
    { label: "Last 7 days", value: "7days" },
    { label: "Last 28 days", value: "28days" },
    { label: "Last 3 months", value: "3months" },
  ];

  const activeRangeObj = ranges.find((r) => r.value === range) || ranges[3];

  const tabs: { label: string; value: typeof tab }[] = [
    { label: "QUERIES", value: "queries" },
    { label: "PAGES", value: "pages" },
    { label: "COUNTRIES", value: "countries" },
    { label: "DEVICES", value: "devices" },
  ];

  const currentRows = data
    ? tab === "queries"
      ? data.queries
      : tab === "pages"
      ? data.pages
      : tab === "countries"
      ? data.countries
      : data.devices
    : [];

  const labelHeaders: Record<typeof tab, string> = {
    queries: "Top queries",
    pages: "Top pages",
    countries: "Countries",
    devices: "Devices",
  };

  return (
    <div
      className="min-w-0 font-sans"
      style={{
        fontFamily: "'Google Sans', Roboto, -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#202124",
      }}
    >
      {/* ── Google Search Console Top Brand / Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 192 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M178.6 86.8H96v34.4h47.2c-2 10.8-8.2 20-17.4 26.1l28.1 21.8c16.5-15.2 26-37.5 26-64.2 0-6.2-.6-12.2-1.3-18.1z"
                fill="#4285F4"
              />
              <path
                d="M96 179c23.6 0 43.4-7.8 57.9-21.2l-28.1-21.8c-7.8 5.3-17.8 8.4-29.8 8.4-22.9 0-42.3-15.5-49.2-36.3L17.7 129C32.3 158 61.9 179 96 179z"
                fill="#34A853"
              />
              <path
                d="M46.8 108.1c-1.8-5.3-2.8-10.9-2.8-16.7s1-11.4 2.8-16.7l-29.1-21C11.5 64.9 8 77.8 8 91.4s3.5 26.5 9.7 37.7l29.1-21z"
                fill="#FBBC05"
              />
              <path
                d="M96 39.8c12.8 0 24.3 4.4 33.4 13.1l25-25C139.3 13.7 119.6 5 96 5 61.9 5 32.3 26 17.7 55l29.1 21C53.7 55.3 73.1 39.8 96 39.8z"
                fill="#EA4335"
              />
            </svg>
            <h1 className="text-[20px] font-medium text-[#202124]">
              Performance on Search results
            </h1>
          </div>

          {data && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                data.isLive
                  ? "bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]"
                  : "bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3]"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  data.isLive ? "bg-[#137333] animate-pulse" : "bg-[#B06000]"
                }`}
              />
              {data.isLive ? "Live API Connected" : "Cached Data"}
            </span>
          )}

          {error && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCE8E6] px-2.5 py-0.5 text-xs font-medium text-[#C5221F] border border-[#FAD2CF]">
              <span className="h-2 w-2 rounded-full bg-[#C5221F]" />
              Disconnected
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => fetchGSCData(range)}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#DADCE0] bg-white text-xs font-medium text-[#3C4043] hover:bg-[#F8F9FA] transition-colors shadow-sm disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* ── Error Banner ── */}
      {error && (
        <div className="mb-4 rounded-lg border border-[#F5C6C2] bg-[#FCE8E6] p-4 text-xs text-[#C5221F] flex items-start gap-3">
          <Info className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm">Failed to connect to Google Search Console</div>
            <div className="mt-1 text-[#A50E0E]">{error}</div>
          </div>
        </div>
      )}

      {/* ── Performance Filter Bar (Search Type, Date Range Chips) ── */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {/* Search Type Chip */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs font-medium text-[#3C4043] shadow-sm select-none">
          <span>Search type:</span>
          <span className="text-[#1A73E8] font-semibold">Web</span>
        </div>

        {/* Date Range Chip with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setRangeDropdownOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs font-medium text-[#3C4043] hover:bg-[#F8F9FA] shadow-sm transition-colors select-none"
          >
            <Calendar className="h-3.5 w-3.5 text-[#5F6368]" />
            <span>Date:</span>
            <span className="text-[#1A73E8] font-semibold">{activeRangeObj.label}</span>
            <ChevronDown className="h-3 w-3 text-[#5F6368]" />
          </button>

          {rangeDropdownOpen && (
            <div className="absolute left-0 mt-1 w-44 rounded-lg border border-[#DADCE0] bg-white py-1 shadow-lg z-30 text-xs">
              {ranges.map((r) => (
                <button
                  key={r.value}
                  onClick={() => {
                    setRange(r.value);
                    setRangeDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#F1F3F4] text-[#202124]"
                >
                  <span className={range === r.value ? "font-semibold text-[#1A73E8]" : ""}>
                    {r.label}
                  </span>
                  {range === r.value && <Check className="h-3.5 w-3.5 text-[#1A73E8]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Property Indicator Chip */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DADCE0] bg-white text-xs font-normal text-[#5F6368] shadow-sm ml-auto">
          <Globe2 className="h-3.5 w-3.5 text-[#1A73E8]" />
          <span>Property:</span>
          <span className="font-medium text-[#202124]">{data?.siteUrl || "sc-domain:framecipher.info"}</span>
        </div>
      </div>

      {/* ── Performance Container (Cards + Chart) ── */}
      <div className="rounded-lg border border-[#DADCE0] bg-white shadow-sm overflow-hidden mb-5">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#E8EAED]">
          {Object.entries(METRIC_CONFIG).map(([key, cfg]) => {
            const isSelected = activeMetrics.has(key);
            const val = data?.totals[key as keyof typeof data.totals] ?? 0;

            return (
              <button
                key={key}
                onClick={() => toggleMetric(key)}
                className={`relative flex flex-col items-start gap-1 p-5 text-left transition-all hover:bg-[#F8F9FA] select-none ${
                  isSelected ? "bg-white" : "bg-[#F8F9FA]/60 opacity-80"
                }`}
              >
                {/* Active Top Accent Line */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: cfg.color }}
                  />
                )}

                {/* Checkbox + Label */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-sm flex items-center justify-center transition-colors border"
                    style={{
                      borderColor: isSelected ? cfg.color : "#DADCE0",
                      backgroundColor: isSelected ? cfg.color : "transparent",
                    }}
                  >
                    {isSelected && <Check className="h-3 w-3 text-white stroke-[3]" />}
                  </div>
                  <span className="text-xs font-normal text-[#5F6368]">{cfg.label}</span>
                </div>

                {/* Metric Value */}
                {loading ? (
                  <div className="h-9 w-20 bg-[#F1F3F4] rounded animate-pulse mt-1" />
                ) : (
                  <div
                    className="text-[28px] font-normal tracking-tight mt-0.5"
                    style={{
                      color: isSelected ? cfg.color : "#202124",
                      lineHeight: "1.1",
                    }}
                  >
                    {cfg.fmt(val)}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Chart Viewport */}
        <div className="px-6 py-5 border-t border-[#E8EAED]">
          {loading ? (
            <div className="h-56 bg-[#F8F9FA] rounded flex items-center justify-center text-xs text-[#5F6368] animate-pulse">
              Loading Google Search Console chart data...
            </div>
          ) : (
            <GscChart data={data?.chartData ?? []} activeMetrics={activeMetrics} />
          )}
        </div>

        {/* Active Legends Bar */}
        <div className="flex flex-wrap items-center gap-4 px-6 pb-4 pt-1 border-t border-[#F1F3F4] bg-[#FAFAFA]/50 text-xs text-[#5F6368]">
          {Object.entries(METRIC_CONFIG)
            .filter(([k]) => activeMetrics.has(k))
            .map(([k, cfg]) => (
              <div key={k} className="flex items-center gap-1.5">
                <span
                  className="w-3.5 h-1 rounded-full"
                  style={{ backgroundColor: cfg.color }}
                />
                <span>{cfg.label}</span>
              </div>
            ))}
          <span className="ml-auto text-[11px] text-[#80868B]">
            Data updated directly from Google API
          </span>
        </div>
      </div>

      {/* ── Table Container ── */}
      <div className="rounded-lg border border-[#DADCE0] bg-white shadow-sm overflow-hidden">
        {/* GSC Sub-tabs */}
        <div className="flex border-b border-[#E8EAED] bg-[#FAFAFA] overflow-x-auto select-none">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              className={`px-6 py-3 text-xs font-semibold tracking-wider transition-colors whitespace-nowrap border-b-2 ${
                tab === t.value
                  ? "border-[#1A73E8] text-[#1A73E8] bg-white"
                  : "border-transparent text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Table Content */}
        {loading ? (
          <div className="p-12 text-center text-xs text-[#5F6368]">
            <RefreshCw className="h-5 w-5 animate-spin mx-auto mb-2 text-[#4285F4]" />
            Loading Search Console rows...
          </div>
        ) : (
          <GscTable
            rows={currentRows}
            labelHeader={labelHeaders[tab]}
            tab={tab}
          />
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5F6368] gap-2 px-1">
        <div>
          Site Property: <span className="font-mono text-[#202124]">{data?.siteUrl || "sc-domain:framecipher.info"}</span>
        </div>
        <div>
          Official Google Search Console API · Verified Service Account: <span className="font-mono">framecipher-gsc@framecipherweb.iam.gserviceaccount.com</span>
        </div>
      </div>
    </div>
  );
}
