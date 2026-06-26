export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="h-px flex-none w-8 bg-accent" aria-hidden />
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>
  );
}
