import React from "react";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  changePositive?: boolean;
  period?: string;
  icon: LucideIcon;
  color?: "blue" | "emerald" | "amber" | "purple";
}

const colorMap = {
  blue: "bg-[#EFF6FF] border-[#BFDBFE] text-[#1D4ED8]",
  emerald: "bg-[#DCFCE7] border-[#BBF7D0] text-[#16A34A]",
  amber: "bg-[#FEF3C7] border-[#FDE68A] text-[#D97706]",
  purple: "bg-[#F3E8FF] border-[#E9D5FF] text-[#9333EA]",
};

export function MetricCard({
  label,
  value,
  change,
  changePositive = true,
  period = "vs last week",
  icon: Icon,
  color = "blue",
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 relative overflow-hidden flex flex-col justify-between shadow-xs">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          title={label}
          className="text-xs font-heading font-bold uppercase tracking-wider text-[#64748B] truncate leading-snug min-w-0 pr-1"
        >
          {label}
        </span>
        <div className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl border flex items-center justify-center shrink-0 ${colorMap[color]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="min-w-0">
        <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#0F172A] tracking-tight truncate">
          {value}
        </div>

        {change && (
          <div className="flex items-center gap-1.5 mt-2 text-xs min-w-0 font-heading">
            <span
              className={`inline-flex items-center font-bold shrink-0 ${
                changePositive ? "text-[#16A34A]" : "text-[#DC2626]"
              }`}
            >
              {changePositive ? (
                <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />
              )}
              <span className="truncate">{change}</span>
            </span>
            <span className="text-[#64748B] text-[10px] sm:text-[11px] truncate font-body">{period}</span>
          </div>
        )}
      </div>
    </div>
  );
}
