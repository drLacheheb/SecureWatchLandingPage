import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2 } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative grid place-items-center min-h-[calc(100vh-4rem)] content-center overflow-hidden py-12 md:py-24">
            {/* Background Radial Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]"></div>

            <div className="container max-w-5xl mx-auto px-4 flex flex-col items-center text-center gap-8">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-4 py-1.5 text-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Accepting Design Partners
                    </Badge>
                </motion.div>

                {/* Animated Headline */}
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Secure your network <br className="hidden md:block" />
                    with <span className="text-emerald-400">Precision</span>.
                </motion.h1>

                {/* Animated Subheadline */}
                <motion.p
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    The next-generation Network Detection and Response platform built for modern enterprises. Stealth mode active.
                </motion.p>

                {/* Animated CTAs */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-12 text-base" asChild>
                        <a href="#book-demo">
                            Schedule Meeting
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 h-12 text-base" asChild>
                        <a href="#architecture">View Architecture</a>
                    </Button>
                </motion.div>

                {/* Animated Code Snippet */}
                <motion.div
                    className="mt-12 w-full max-w-lg bg-zinc-900/50 backdrop-blur border border-zinc-800 rounded-lg p-4 text-left shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                        <span className="ml-auto text-xs text-zinc-500 font-mono">config.yaml</span>
                    </div>
                    <pre className="font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto">
                        <code>
                            <span className="text-indigo-400">network_monitor</span>:
                            <span className="text-emerald-400">mode</span>: <span className="text-yellow-200">"active_defense"</span>
                            <span className="text-emerald-400">encryption</span>: <span className="text-purple-400">AES-256</span>
                            <span className="text-emerald-400">auto_patch</span>: <span className="text-emerald-500">true</span>
                            <span className="text-zinc-500"># Real-time threat analysis enabled</span>
                        </code>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
};
