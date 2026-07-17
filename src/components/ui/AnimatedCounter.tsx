interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const decimals = target.toString().split(".")[1]?.length ?? 0;
  const value = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(target);

  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
