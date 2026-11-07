import type { ComponentType } from "react";

function H2({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function Pre({ children }: { children: React.ReactNode }) {
  return <pre>{children}</pre>;
}

function GameMathNotes() {
  return (
    <>
      <P>
        In a game, a small configuration change can affect more than the part
        you were editing. Reels, symbols, paylines, and the paytable all need
        to agree with one another. Checking those pieces by hand every time
        gets repetitive, and it is easy to miss a change when you are moving
        between features.
      </P>
      <P>
        I started looking at ways to make the checks more repeatable. The idea
        is simple: use the same inputs, run the same set of checks, and produce
        a report that makes it clear what needs a closer look.
      </P>
      <H2>Keep each check focused</H2>
      <P>
        I find it easier to reason about a few small checks than one large
        process. Configuration validation can catch missing or inconsistent
        values. A simulation can estimate the result over many spins. A
        comparison can highlight where a change differs from the previous
        version.
      </P>
      <Pre>{"game configuration\\n  ├─ validate the inputs\\n  ├─ run the simulation\\n  ├─ compare with the previous result\\n  └─ review the report"}</Pre>
      <P>
        Each step should have a clear input and output. That makes failures
        easier to trace and makes it possible to change one part without
        rewriting the whole workflow.
      </P>
      <H2>Keep a person in the loop</H2>
      <P>
        Automated checks are useful for catching things that are easy to
        overlook, but they do not replace reviewing the result. A report can
        point to an unexpected change; an engineer still needs to understand
        whether that change is intended.
      </P>
      <P>
        That is the part I care about most: less time repeating the same
        checks, and more time understanding the behaviour of the game.
      </P>
    </>
  );
}

export const postBodies: Record<string, ComponentType> = {
  "agents-for-rtp-verification": GameMathNotes,
};
