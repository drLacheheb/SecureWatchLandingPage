import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
    { name: "Platform", href: "#platform" },
    { name: "Solutions", href: "#solutions" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" },
];

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-lg">
            <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 max-w-7xl mx-auto px-4">
                {/* Logo */}
                <a href="/" aria-label="Home">
                    <Logo />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800" asChild>
                        <a href="#contact">Contact Sales</a>
                    </Button>
                    <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold" asChild>
                        <a href="#book-demo">Book a Demo</a>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-zinc-400" aria-label="Open menu">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-zinc-950 border-zinc-800">
                            <div className="flex flex-col gap-8 mt-8">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-medium text-zinc-400 hover:text-emerald-400"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Button variant="ghost" className="justify-start text-zinc-400 hover:text-white" asChild>
                                        <a href="#contact">Contact Sales</a>
                                    </Button>
                                    <Button variant="default" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold" asChild>
                                        <a href="#book-demo">Book a Demo</a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};
