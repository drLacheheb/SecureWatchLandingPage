import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Booking = () => {
    return (
        <section id="book-demo" className="py-24 bg-zinc-950 border-t border-zinc-900 grid place-items-center relative overflow-hidden">
            <div id="contact" className="absolute top-0" />
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Ready to secure your network?
                </h2>
                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                    We are currently working with select design partners to refine our detection engine.
                    Schedule a time to discuss your specific requirements.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                        <Calendar className="mr-2 w-5 h-5" />
                        Book Integration Call
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white" asChild>
                        <a href="mailto:partners@securewatch.io">Contact Sales</a>
                    </Button>
                </div>

                <p className="mt-8 text-sm text-zinc-500">
                    Limited spots available for Q1 2026.
                </p>
            </div>
        </section>
    );
};
