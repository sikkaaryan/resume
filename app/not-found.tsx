import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="hero-mesh" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-2xl mx-auto px-6 min-h-screen flex flex-col justify-center text-center">
        <p className="mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
          Error · 404
        </p>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight leading-none">
          <span className="bg-gradient-to-br from-text via-text to-muted bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted">
          This page either spun off the reel or never existed.
        </p>
        <p className="mt-2 text-sm text-muted">
          Check the URL, or head back to the home page.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="group/btn text-sm px-5 py-2.5 rounded-md bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
          >
            <span className="btn-arrow inline-block">←</span> Back home
          </Link>
          <Link
            href="/#projects"
            className="text-sm px-5 py-2.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
