import React from "react";
import { LayoutDashboard, ShieldCheck, TrendingUp, AlertTriangle, Users, FileText } from "lucide-react";

export const ExecutiveInsights = () => {
    return (
        <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
            <div className="container max-w-7xl mx-auto px-4 grid place-items-center gap-12">
                <div className="text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for Leadership</h2>
                    <p className="text-zinc-400 text-2xl">
                        Gain instant visibility into your organization's security posture.
                        Real-time compliance tracking, risk analysis, and executive reporting at your fingertips.
                    </p>
                </div>

                {/* Dashboard Window */}
                <div className="w-full max-w-5xl bg-zinc-950 rounded-xl shadow-2xl overflow-hidden border border-zinc-800">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <LayoutDashboard className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-lg font-semibold text-zinc-100">Security Overview</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-sm text-zinc-300">Live System Status</span>
                            </div>
                            <button className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                                <FileText className="w-5 h-5 text-zinc-400" />
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 md:p-8 grid gap-8">
                        {/* Metrics Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Metric 1 */}
                            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-zinc-400">Threats Blocked</span>
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                </div>
                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-bold text-white">12,405</span>
                                    <span className="text-sm text-emerald-400 mb-1 flex items-center">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        +12%
                                    </span>
                                </div>
                                <span className="text-xs text-zinc-500 mt-2 block">Last 30 days</span>
                            </div>

                            {/* Metric 2 */}
                            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-zinc-400">Compliance Score</span>
                                    <FileText className="w-5 h-5 text-blue-500" />
                                </div>
                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-bold text-white">98.5%</span>
                                    <span className="text-sm text-emerald-400 mb-1">SOC2 Ready</span>
                                </div>
                                <div className="w-full bg-zinc-800 h-1 mt-4 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full w-[98.5%]"></div>
                                </div>
                            </div>

                            {/* Metric 3 */}
                            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-zinc-400">Active Agents</span>
                                    <Users className="w-5 h-5 text-purple-500" />
                                </div>
                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-bold text-white">450</span>
                                    <span className="text-sm text-zinc-500 mb-1">/ 450 total</span>
                                </div>
                                <span className="text-xs text-zinc-500 mt-2 block">100% Coverage</span>
                            </div>
                        </div>

                        {/* Chart Area Row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Main Chart Placeholder */}
                            <div className="lg:col-span-2 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h4 className="text-lg font-semibold text-zinc-200">Risk Reduction Trend</h4>
                                        <p className="text-sm text-zinc-500">Vulnerabilities mitigate over time</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="flex items-center text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            -42% Risk
                                        </span>
                                    </div>
                                </div>

                                <div className="relative h-48 w-full mt-auto">
                                    {/* SVG Area Chart */}
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Grid Lines */}
                                        {[0, 12.5, 25, 37.5, 50].map((y, i) => (
                                            <line
                                                key={i}
                                                x1="0"
                                                y1={y}
                                                x2="100"
                                                y2={y}
                                                stroke="#27272a"
                                                strokeWidth="0.5"
                                                strokeDasharray="2 2"
                                            />
                                        ))}

                                        {/* The Chart Line/Area (Downward trend of risk = good, or Upward trend of security? 
                                            Let's show Risk Reduction: High start, Low end.
                                            Points: 0,40 -> 20,35 -> 40,20 -> 60,25 -> 80,10 -> 100,5
                                         */}
                                        <path
                                            d="M0,50 L0,15 Q20,25 40,20 T80,15 L100,5 L100,50 Z"
                                            fill="url(#chartGradient)"
                                        />
                                        <path
                                            d="M0,15 Q20,25 40,20 T80,15 L100,5"
                                            fill="none"
                                            stroke="#10b981"
                                            strokeWidth="1.5"
                                            vectorEffect="non-scaling-stroke"
                                        />

                                        {/* Data Points */}
                                        <circle cx="0" cy="15" r="1.5" className="fill-emerald-500" />
                                        <circle cx="40" cy="20" r="1.5" className="fill-emerald-500" />
                                        <circle cx="80" cy="15" r="1.5" className="fill-emerald-500" />
                                        <circle cx="100" cy="5" r="1.5" className="fill-emerald-500" />
                                    </svg>

                                    {/* Tooltip-like overlay */}
                                    <div className="absolute top-0 right-0 bg-zinc-800 text-xs text-white px-2 py-1 rounded shadow-lg border border-zinc-700 -translate-y-1/2 translate-x-1/4">
                                        Current Risk: Low
                                    </div>
                                </div>

                                <div className="flex justify-between mt-4 text-xs text-zinc-500 font-mono">
                                    <span>Q1</span>
                                    <span>Q2</span>
                                    <span>Q3</span>
                                    <span>Q4</span>
                                </div>
                            </div>

                            {/* Recent Alerts */}
                            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                                <h4 className="text-lg font-semibold text-zinc-200 mb-6">Recent Alerts</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-3 items-start">
                                        <div className="mt-1 p-1 bg-red-500/10 rounded-md">
                                            <AlertTriangle className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-200 font-medium">Suspicious Login Attempt</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">Finance Dept • 2 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="mt-1 p-1 bg-blue-500/10 rounded-md">
                                            <ShieldCheck className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-200 font-medium">Policy Update Enforced</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">Global • 15 mins ago</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <div className="mt-1 p-1 bg-zinc-800 rounded-md">
                                            <Users className="w-4 h-4 text-zinc-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-zinc-200 font-medium">New Agent Deployed</p>
                                            <p className="text-xs text-zinc-500 mt-0.5">Server-09 • 1 hr ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
