import type { ComponentType } from "react";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-3 tracking-tight text-text">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="mono text-[0.92em] px-1.5 py-0.5 rounded bg-surface border border-border text-accent">
      {children}
    </code>
  );
}

function Pre({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mono text-[12.5px] leading-relaxed bg-surface border border-border rounded-lg p-4 my-6 overflow-x-auto text-text/90">
      {children}
    </pre>
  );
}

function AgentsRtpPost() {
  return (
    <>
      <P>
        Slot games live and die by their <Code>RTP</Code> — the expected
        return-to-player percentage. Get the math wrong by even a fraction of a
        percent and you've either burned the operator or pushed a noncompliant
        build to production. Traditionally we verified RTP by hand: design
        spreadsheets, simulation runs, careful eyeballing of paytables.
      </P>
      <P>
        It worked, but it didn't scale. Each new game module pulled an engineer
        away from feature work for a day or two of arithmetic. After the third
        time I caught the same class of bug — a payline ordering swap that
        shifted RTP by 0.4% — I started wiring up a small agent to do it for
        me.
      </P>

      <H2>The pipeline</H2>
      <P>
        The setup is unglamorous. A handful of focused agents, each doing one
        small thing:
      </P>
      <Pre>{`config (paytable, paylines, reels)
  └─ simulator agent  →  N million spins → RTP estimate
  └─ rule-check agent →  flags structural issues (dup symbols, bad weights)
  └─ diff agent       →  compares vs. last green build, highlights drift
  └─ report agent     →  writes a human-readable summary`}</Pre>
      <P>
        Each agent has a narrow contract — input schema in, output schema out.
        When something fails, I can swap one agent without re-thinking the
        whole flow.
      </P>

      <H2>What this changes</H2>
      <P>
        The headline result is that we catch math regressions before they hit
        QA. The quieter result is the time saved: a verification pass that
        used to be a half-day of careful work is now a CI step that completes
        in a couple of minutes. The team gets that time back for actual
        gameplay work.
      </P>
      <P>
        I'll write more about the individual agent prompts and how I handle
        non-determinism in a follow-up.
      </P>
    </>
  );
}

export const postBodies: Record<string, ComponentType> = {
  "agents-for-rtp-verification": AgentsRtpPost,
};
