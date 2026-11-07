"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  { period:"OCT 2024 — PRESENT", label:"CURRENT CHAPTER", company:"ARISTOCRAT TECHNOLOGIES", title:"Software Engineer II", place:"Noida, India", description:"Building and maintaining cross-platform mobile game modules, reusable systems, and production features.", points:["Develop mobile game modules for Android and iOS.","Work across C#, TypeScript, Unity-based architecture, and backend APIs.","Created a reusable game template framework that reduced development time by around 30%."], stack:["C#","TypeScript","Unity","Android","iOS","GitLab CI/CD"] },
  { period:"JUL 2022 — OCT 2024", label:"FOUNDATIONS", company:"CAVISSON SYSTEMS INC.", title:"Software Engineer", place:"Noida, India", description:"Built and maintained .NET applications, strengthened backend fundamentals, and worked on performance testing.", points:["Worked with ASP.NET MVC and ASP.NET Core applications.","Applied Entity Framework, dependency injection, and SOLID principles.","Maintained MSSQL and Oracle-backed applications; ran JMeter performance tests."], stack:["C#",".NET Core","ASP.NET MVC","Entity Framework","MSSQL","Oracle","JMeter"] },
];

export default function AnimatedCareerJourney() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(roles[0].period);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const nodes = Array.from(container.querySelectorAll<HTMLElement>("[data-career-id]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(roles.map((role) => role.period));
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = (entry.target as HTMLElement).dataset.careerId;
        if (id) setVisible((current) => current.includes(id) ? current : [...current, id]);
      });
    }, { threshold: 0.22, rootMargin: "0px 0px -12% 0px" });
    nodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = container.getBoundingClientRect();
        const viewport = window.innerHeight;
        const distance = bounds.height + viewport * 0.55;
        const travelled = viewport * 0.82 - bounds.top;
        const next = Math.max(0, Math.min(1, travelled / distance));
        setProgress(next);
        const midpoint = viewport * 0.55;
        const currentNode = nodes.find((node) => {
          const rect = node.getBoundingClientRect();
          return rect.top <= midpoint && rect.bottom >= midpoint;
        }) || (bounds.top > midpoint ? nodes[0] : nodes[nodes.length - 1]);
        if (currentNode?.dataset.careerId) setActive(currentNode.dataset.careerId);
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="animated-career" ref={root} style={{ "--journey-progress": progress } as React.CSSProperties}>
      <div className="career-journey-rail">
        <span>THE JOURNEY</span>
        <div className="career-rail-track"><i /></div>
        <span className="career-rail-end">NOW</span>
      </div>
      <div className="career-journey-entries">
        {roles.map((role, index) => {
          const isVisible = visible.includes(role.period);
          const isActive = active === role.period;
          return (
            <article key={role.period} data-career-id={role.period} className={["career-journey-card", isVisible ? "is-visible" : "", isActive ? "is-active" : ""].join(" ")}>
              <div className="career-journey-marker"><span>0{index + 1}</span><i /></div>
              <div className="career-journey-content">
                <div className="career-card-topline"><span>CHAPTER 0{index + 1} <i /> {role.period}</span><b>{role.label}</b></div>
                <p className="career-company">{role.company}</p>
                <h2>{role.title}</h2>
                <p className="career-location">{role.place}</p>
                <p className="career-journey-description">{role.description}</p>
                <ul>{role.points.map((point, pointIndex) => <li key={point} style={{ "--point-index": pointIndex } as React.CSSProperties}>{point}</li>)}</ul>
                <div className="tag-row">{role.stack.map((tag, tagIndex) => <span key={tag} style={{ "--tag-index": tagIndex } as React.CSSProperties}>{tag}</span>)}</div>
                <div className="career-card-foot"><span>CAREER MILESTONE / 0{index + 1}</span><span>{index === 0 ? "IN PROGRESS ↗" : "COMPLETED ↗"}</span></div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
