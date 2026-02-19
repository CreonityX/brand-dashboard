"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WidgetShellProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    icon?: any;
    className?: string;
    indicatorState?: "active" | "idle" | "error";
    allowResize?: boolean;
}

const shellVariants = {
    hidden: {
        opacity: 0,
        y: 12,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
        },
    },
};

export function WidgetShell({
    children,
    title,
    subtitle,
    icon: Icon,
    className,
    indicatorState = "active",
    allowResize = true
}: WidgetShellProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            variants={shellVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={cn(
                "group relative border border-zinc-800 bg-zinc-900/40 backdrop-blur-md overflow-hidden flex flex-col",
                "transition-[border-color,background-color,box-shadow] duration-300 ease-out",
                "hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-black/50 hover:z-10",
                "focus-within:border-zinc-600",
                allowResize && "resize-y min-h-[180px]",
                className
            )}>

            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/[0.03] relative z-10">
                <div className="flex items-center gap-3">
                    {Icon && (
                        <div className="w-6 h-6 flex items-center justify-center text-zinc-400 bg-zinc-950/50 rounded-sm border border-zinc-800 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors">
                            <Icon className="w-4 h-4" />
                        </div>
                    )}
                    <div>
                        <h3 className="text-xs font-bold text-white uppercase tracking-widest font-display">{title}</h3>
                        {subtitle && <p className="text-[10px] text-zinc-500 font-mono hidden sm:block">{subtitle}</p>}
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                        <div className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            indicatorState === "active"
                                ? "bg-[#a3e635] shadow-[0_0_6px_#a3e635]"
                                : indicatorState === "error"
                                    ? "bg-red-500 shadow-[0_0_6px_#ef4444]"
                                    : "bg-zinc-500"
                        )} />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative z-10 overflow-hidden">
                {children}
            </div>

            {/* Resize Handle */}
            {allowResize && (
                <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 border-b border-r border-zinc-500" />
                </div>
            )}

            {/* Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        </motion.div>
    );
}
