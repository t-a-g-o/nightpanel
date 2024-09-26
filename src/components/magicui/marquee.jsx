import { cn } from "@/lib/utils";

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:360s] [--gap:1rem]", // Increased duration from 40s to 120s
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)] min-w-full", {
              "animate-marquee": !vertical,
              "animate-marquee-vertical": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}>
            {children}
          </div>
        ))}
    </div>
  );
}
