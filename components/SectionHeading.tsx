export default function SectionHeading({
  prompt,
  title,
}: {
  prompt: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mono text-sm text-accent">
        <span className="text-muted">$</span> {prompt}
      </p>
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
    </div>
  );
}
