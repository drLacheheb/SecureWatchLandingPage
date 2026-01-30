import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
    { name: "Technology", href: "#technology" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Insights", href: "#insights" },
];

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-lg">
            <div className="grid grid-cols-[auto_1fr_auto] items-center h-24 max-w-7xl mx-auto px-4">
                {/* Logo */}
                <a href="/" aria-label="Home">
                    <Logo size="xl" />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800 text-xl h-12" asChild>
                        <a href="#contact">Contact Sales</a>
                    </Button>
                    <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xl h-12" asChild>
                        <a href="#book-demo">Book a Demo</a>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden col-start-3 justify-self-end">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="group w-12 h-12 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900 text-zinc-400 hover:text-emerald-400 transition-all duration-300 active:scale-95 flex flex-col items-center justify-center gap-1.5" aria-label="Open menu">
                                <span className="w-6 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-8 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                                <span className="w-8 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-4 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                                <span className="w-4 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-8 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-zinc-950 border-l border-zinc-900 w-full sm:w-[400px] p-0">
                            <div className="flex flex-col h-full bg-zinc-950/95 backdrop-blur-xl">
                                <div className="p-6 border-b border-zinc-900">
                                    <Logo size="xl" />
                                </div>
                                <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-8">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Navigation</h3>
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="group flex items-center justify-between text-2xl font-medium text-zinc-400 hover:text-white transition-colors py-2 border-b border-zinc-900/50 hover:border-zinc-800"
                                            >
                                                {link.name}
                                                <span className="w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-4 mt-auto">
                                        <Button variant="outline" className="w-full border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white h-12 text-lg" asChild>
                                            <a href="#contact">Contact Sales</a>
                                        </Button>
                                        <Button variant="default" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-14 text-xl shadow-[0_0_20px_rgba(16,185,129,0.2)]" asChild>
                                            <a href="#book-demo">Book a Demo</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};
