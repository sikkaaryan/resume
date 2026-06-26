import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { profile } from "@/lib/data";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { label: "GitHub", value: "github.com/sikkaaryan", href: profile.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sikkaaryan6529",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-anchor max-w-5xl mx-auto px-6 py-24"
    >
      <Reveal>
        <SectionHeading title="Get in touch" />
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5">
        <Reveal>
          <div className="lift rounded-xl border border-border bg-surface/50 p-6 h-full hover:border-accent/40">
            <p className="text-muted">
              Open to interesting engineering problems — game systems, .NET
              backends, internal tooling, or anything mobile + AI.
            </p>
            <dl className="mt-6 space-y-3.5">
              {items.map((i) => (
                <div key={i.label} className="flex items-baseline gap-3">
                  <dt className="text-[11px] text-accent w-20 uppercase tracking-wider">
                    {i.label}
                  </dt>
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
        </Reveal>

        <Reveal delay={120}>
          <div className="lift rounded-xl border border-border bg-surface/50 p-6 hover:border-accent/40">
            <ContactForm />
          </div>
        </Reveal>
      </div>

      <footer className="mt-14 text-xs text-muted text-center">
        © {new Date().getFullYear()} Aryan Sikka
      </footer>
    </section>
  );
}
