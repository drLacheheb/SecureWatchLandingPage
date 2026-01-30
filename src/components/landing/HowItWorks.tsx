import React from "react";
import { motion } from "framer-motion";
import { Laptop, Database, Box, AppWindow, ScanSearch, Server } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Deploy Agents",
        description: "Install our lightweight, rust-based agents across your infrastructure. No reboot required.",
        image: "/images/step1-terminal.png" // Placeholder or we can use code block
    },
    {
        id: 2,
        title: "Auto-Discovery",
        description: "SecureWatch automatically maps your network topology and identifies assets.",
        image: "/images/step2-map.png"
    },
    {
        id: 3,
        title: "Continuous Monitoring",
        description: "AI-driven models analyze traffic in real-time to detect anomalous behavior.",
        image: "/images/step3-dashboard.png"
    }
];

export const HowItWorks = () => {
    const [particles, setParticles] = React.useState<Array<{ left: string, top: string, delay: string, duration: string, size: number }>>([]);

    React.useEffect(() => {
        setParticles(
            [...Array(50)].map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `-${Math.random() * 8}s`,
                duration: `${Math.random() * 5 + 3}s`,
                size: Math.random() * 4 + 2 // 2px to 6px size
            }))
        );
    }, []);

    return (
        <section id="how-it-works" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
            {/* Architecture anchor for Hero link */}
            <div id="architecture" className="absolute top-0" />
            <style>{`
                @keyframes float-particle {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    20% { opacity: 0.8; }
                    80% { opacity: 0.8; }
                    100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
                }
            `}</style>

            {/* Floating Particles Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-emerald-500 blur-[1px] shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animation: `float-particle ${p.duration} ease-in-out infinite`,
                            animationDelay: p.delay,
                        }}
                    />
                ))}
            </div>
            <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

                {/* Left Column: Text Steps */}
                <div className="flex flex-col gap-24 py-12">
                    <div className="sticky top-24 self-start mb-8 lg:hidden">
                        <h2 className="text-3xl font-bold text-white">How It Works</h2>
                    </div>

                    <div className="hidden lg:block mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Seamless Integration</h2>
                        <p className="text-zinc-400">Up and running in minutes, not months.</p>
                    </div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="group flex gap-6">
                            <div className="flex-shrink-0 flex flex-col items-center">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 font-mono font-bold group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors">
                                    {step.id}
                                </div>
                                {index !== steps.length - 1 && (
                                    <div className="w-px h-full bg-zinc-800 my-4 group-hover:bg-emerald-500/30 transition-colors"></div>
                                )}
                            </div>
                            <div className="pt-2">
                                <h3 className="text-3xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                                <p className="text-xl text-zinc-400 leading-relaxed max-w-md">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Visuals */}
                <div className="hidden lg:block relative h-full min-h-[500px]">
                    <div className="sticky top-32 w-full aspect-square bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden p-8 backdrop-blur-sm">

                        <div className="relative w-full h-full">
                            {/* Diagram Container */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {/* Flow 1: Laptop -> Cube (Horizontal) */}
                                <motion.path
                                    d="M 20 20 L 80 20"
                                    fill="transparent"
                                    strokeWidth="0.5"
                                    className="stroke-zinc-700 dashed"
                                    strokeDasharray="2 2"
                                />
                                <motion.circle
                                    r="1.5"
                                    fill="#34d399"
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    style={{ offsetPath: "path('M 20 20 L 80 20')" }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Flow 2: Database -> Cube (Curved Upwards) */}
                                <motion.path
                                    d="M 50 45 Q 50 20 80 20"
                                    fill="transparent"
                                    strokeWidth="0.5"
                                    className="stroke-zinc-700"
                                    strokeDasharray="2 2"
                                />
                                <motion.circle
                                    r="1.5"
                                    fill="#34d399"
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    style={{ offsetPath: "path('M 50 45 Q 50 20 80 20')" }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                />

                                {/* Flow 3: Database -> Scan (Vertical Down) */}
                                <motion.path
                                    d="M 50 45 L 50 75"
                                    fill="transparent"
                                    strokeWidth="0.5"
                                    className="stroke-zinc-700"
                                    strokeDasharray="2 2"
                                />
                                <motion.circle
                                    r="1.5"
                                    fill="#34d399"
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    style={{ offsetPath: "path('M 50 45 L 50 75')" }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 1
                                    }}
                                />

                                {/* Flow 4: Browser -> Scan (Horizontal) */}
                                <motion.path
                                    d="M 20 75 L 50 75"
                                    fill="transparent"
                                    strokeWidth="0.5"
                                    className="stroke-zinc-700"
                                    strokeDasharray="2 2"
                                />
                                <motion.circle
                                    r="1.5"
                                    fill="#34d399"
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    style={{ offsetPath: "path('M 20 75 L 50 75')" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 1.5
                                    }}
                                />

                                {/* Flow 5: Scan -> Server (Horizontal) */}
                                <motion.path
                                    d="M 50 75 L 80 75"
                                    fill="transparent"
                                    strokeWidth="0.5"
                                    className="stroke-zinc-700"
                                    strokeDasharray="2 2"
                                />
                                <motion.circle
                                    r="1.5"
                                    fill="#34d399"
                                    animate={{
                                        offsetDistance: ["0%", "100%"]
                                    }}
                                    style={{ offsetPath: "path('M 50 75 L 80 75')" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 2
                                    }}
                                />

                                {/* Vertical Dashed Line (Boundary) */}
                                <line x1="40" y1="10" x2="40" y2="30" stroke="currentColor" strokeWidth="0.2" className="text-zinc-600" strokeDasharray="1 1" />
                            </svg>

                            {/* Nodes Layout */}
                            {/* Top Section */}
                            <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10 z-10">
                                    <Laptop className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Source</span>
                            </div>

                            <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-indigo-400 z-10">
                                    <Box className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Processing</span>
                            </div>

                            {/* Middle */}
                            <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 z-10">
                                    <Database className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Storage</span>
                            </div>

                            {/* Bottom Section */}
                            <div className="absolute top-[75%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-blue-400 z-10">
                                    <AppWindow className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Interface</span>
                            </div>

                            <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-500 z-10">
                                    <ScanSearch className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Analysis</span>
                            </div>

                            <div className="absolute top-[75%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-purple-400 z-10">
                                    <Server className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Server</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
