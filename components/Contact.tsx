import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const items = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "github", value: "github.com/sikkaaryan", href: profile.github },
  { label: "linkedin", value: "linkedin.com/in/sikkaaryan6529", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-anchor max-w-5xl mx-auto px-6 py-20"
    >
      <SectionHeading prompt="./contact --reach-out" title="Get in touch" />
      <div className="rounded-lg border border-border bg-surface/60 p-6 md:p-8">
        <p className="text-muted max-w-2xl">
          Open to interesting engineering problems — game systems, .NET
          backends, internal tooling, or anything mobile. The fastest path is
          email.
        </p>
        <dl className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((i) => (
            <div key={i.label} className="flex items-baseline gap-3">
              <dt className="mono text-xs text-accent w-20">{i.label}</dt>
              <dd>
                <a
                  href={i.href}
                  target={i.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm md:text-base hover:text-accent transition-colors"
                >
                  {i.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <footer className="mt-12 mono text-xs text-muted text-center">
        <span className="text-border">// </span>built with next.js + tailwind ·
        deployed on vercel
      </footer>
    </section>
  );
}
