import React from "react";
import { motion } from "framer-motion";

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
    return (
        <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
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
                                <h3 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                                <p className="text-zinc-400 leading-relaxed max-w-md">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Visuals */}
                <div className="hidden lg:block relative h-full min-h-[500px]">
                    <div className="sticky top-32 w-full aspect-square bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden grid place-items-center p-8 backdrop-blur-sm">
                        {/* Abstract Visual Representation */}
                        <div className="relative w-full h-full bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent)]"></div>
                            <div className="text-zinc-600 font-mono text-sm">[ Visual Representation of Network ]</div>

                            {/* Animated element to simulate activity */}
                            <motion.div
                                className="absolute w-32 h-32 border border-emerald-500/30 rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute w-48 h-48 border border-indigo-500/20 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
