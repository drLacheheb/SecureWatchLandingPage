import React from "react";
import { Terminal } from "lucide-react";

export const DeveloperExperience = () => {
    return (
        <section className="py-24 bg-zinc-900/30 border-y border-zinc-900">
            <div className="container max-w-7xl mx-auto px-4 grid place-items-center gap-12">
                <div className="text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Developers</h2>
                    <p className="text-zinc-400 text-lg">
                        Full API access, comprehensive CLI, and transparent logs.
                        We provide the tools you need to integrate security into your CI/CD pipeline.
                    </p>
                </div>

                {/* Terminal Window */}
                <div className="w-full max-w-4xl bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-zinc-800 font-mono text-sm md:text-base">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-black/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="flex-1 text-center text-zinc-400 text-xs flex items-center justify-center gap-2 opacity-50">
                            <Terminal className="w-3 h-3" />
                            <span>admin@securewatch: ~</span>
                        </div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 text-zinc-300 space-y-2 h-[400px] overflow-y-auto">
                        <div className="flex gap-2">
                            <span className="text-emerald-400">➜</span>
                            <span className="text-blue-400">~</span>
                            <span>sw-cli scan --target=192.168.1.0/24 --deep</span>
                        </div>

                        <div className="text-zinc-500 mt-2">Initializing scan engine... [OK]</div>
                        <div className="text-zinc-500">Loading threat signatures... [24,312 loaded]</div>
                        <div className="text-zinc-500">Connecting to telemetry mesh... [Connected]</div>

                        <div className="mt-4 border-l-2 border-zinc-700 pl-4 space-y-1">
                            <div className="flex gap-4">
                                <span className="w-24 text-zinc-500">192.168.1.10</span>
                                <span className="text-emerald-500">SECURE</span>
                                <span className="text-zinc-600">Gateway</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 text-zinc-500">192.168.1.12</span>
                                <span className="text-emerald-500">SECURE</span>
                                <span className="text-zinc-600">App Server</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 text-zinc-500">192.168.1.45</span>
                                <span className="text-yellow-500">WARNING</span>
                                <span className="text-zinc-400">Uncommon port 6667 open</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-24 text-zinc-500">192.168.1.88</span>
                                <span className="text-red-500">CRITICAL</span>
                                <span className="text-purple-400">Anomalous outbound traffic detected (24GB)</span>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4 animate-pulse">
                            <span className="text-emerald-400">➜</span>
                            <span className="text-blue-400">~</span>
                            <span className="w-2 h-5 bg-zinc-500 block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
