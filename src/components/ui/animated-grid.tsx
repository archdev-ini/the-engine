export default function AnimatedGrid() {
    return (
        <div className="pointer-events-none absolute inset-0 h-full w-full">
            <div
                className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(transparent,white)]"
            ></div>
            <div
                className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.1),transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1),transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            ></div>
        </div>
    );
}
