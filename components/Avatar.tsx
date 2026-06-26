import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative mx-auto md:mx-0 w-44 h-44 md:w-56 md:h-56 shrink-0">
      {/* Outer glow */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent/30 via-fuchsia-500/15 to-emerald-400/20 blur-2xl avatar-glow" />

      {/* Rotating gradient ring */}
      <div className="avatar-ring absolute -inset-1 rounded-full p-[2px] bg-[conic-gradient(from_var(--ar-angle),#22d3ee,#8b5cf6,#10b981,#22d3ee)]">
        <div className="h-full w-full rounded-full bg-bg" />
      </div>

      {/* Photo */}
      <div className="absolute inset-0 rounded-full border border-border overflow-hidden bg-surface">
        <Image
          src="/me.png"
          alt="Aryan Sikka"
          fill
          sizes="(min-width: 768px) 224px, 176px"
          className="object-cover"
          priority
        />
      </div>

      {/* Online indicator dot */}
      <span className="absolute bottom-3 right-3 flex h-4 w-4 z-10">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent2 opacity-75 pulse-ring" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-accent2 ring-2 ring-bg" />
      </span>
    </div>
  );
}
