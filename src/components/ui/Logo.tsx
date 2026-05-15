import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={className} />;

  const saasFill = theme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <svg
      viewBox="0 0 700 300"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* "SaaS" text - white in dark mode, black in light mode */}
      <text
        x="80"
        y="180"
        fontFamily="'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif"
        fontSize="140"
        fontWeight="700"
        fontStyle="italic"
        fill={saasFill}
        letterSpacing="-3"
      >
        SaaS
      </text>

      {/* "Flow" text - always blue */}
      <text
        x="405"
        y="180"
        fontFamily="'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif"
        fontSize="140"
        fontWeight="700"
        fontStyle="italic"
        fill="#3B82F6"
        letterSpacing="-3"
      >
        Flow
      </text>

      {/* Blue curved underline - smooth wave */}
      <path
        d="M 70 210 Q 200 180 350 195 Q 500 210 650 240"
        stroke="#3B82F6"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        opacity="1"
      />
    </svg>
  );
}
