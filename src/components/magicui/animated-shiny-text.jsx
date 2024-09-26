import { cn } from "@/lib/utils";

const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <div className="relative">
      <p
        style={{
          "--shimmer-width": `${shimmerWidth}px`,
          "--shimmer-travel-distance": `calc(100% + var(--shimmer-width))`,
        }}
        className={cn(
          "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
          "bg-[length:var(--shimmer-width)_100%] bg-clip-text bg-repeat-x",
          "animate-[shimmer_8s_linear_infinite]",
          "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
          className
        )}
      >
        {children}
      </p>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: calc(var(--shimmer-travel-distance) * -1) 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedShinyText;