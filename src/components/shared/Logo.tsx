import { Shield } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Shield className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />
                <div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full top-[10px] left-[13px]" />
            </div>
            <span className="text-xl tracking-tight text-white font-sans">
                <span className="font-normal text-zinc-100">Secure</span>
                <span className="font-bold text-emerald-400">Watch</span>
            </span>
        </div>
    );
};
