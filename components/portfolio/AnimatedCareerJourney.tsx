"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  { period:"OCT 2024 — PRESENT", label:"CURRENT CHAPTER", company:"ARISTOCRAT TECHNOLOGIES", title:"Software Engineer II", place:"Noida, India", description:"Building and maintaining cross-platform mobile game modules, reusable systems, and production features.", points:["Develop mobile game modules for Android and iOS.","Work across C#, TypeScript, Unity-based architecture, and backend APIs.","Created a reusable game template framework that reduced development time by around 30%."], stack:["C#","TypeScript","Unity","Android","iOS","GitLab CI/CD"] },
  { period:"JUL 2022 — OCT 2024", label:"FOUNDATIONS", company:"CAVISSON SYSTEMS INC.", title:"Software Engineer", place:"Noida, India", description:"Built and maintained .NET applications, strengthened backend fundamentals, and worked on performance testing.", points:["Worked with ASP.NET MVC and ASP.NET Core applications.","Applied Entity Framework, dependency injection, and SOLID principles.","Maintained MSSQL and Oracle-backed applications; ran JMeter performance tests."], stack:["C#",".NET Core","ASP.NET MVC","Entity Framework","MSSQL","Oracle","JMeter"] },
];

export default function AnimatedCareerJourney() {
  const root = useRef<HTMLDivElement>(null);
  const [visible,setVisible] = useState<string[]>([]);
  useEffect(() => {
    const nodes = root.current?.querySelectorAll<HTMLElement>("[data-career-id]");
    if (!nodes?.length) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(roles.map((r)=>r.period)); return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if(entry.isIntersecting) { const id=(entry.target as HTMLElement).dataset.careerId; if(id) setVisible((current)=>current.includes(id)?current:[...current,id]); observer.unobserve(entry.target); } });
    },{threshold:.18,rootMargin:"0px 0px -8% 0px"});
    nodes.forEach((node)=>observer.observe(node));
    return ()=>observer.disconnect();
  },[]);
  return (
    <div className="animated-career" ref={root}>
      <div className="career-journey-rail"><span>THE JOURNEY</span><i /></div>
      <div className="career-journey-entries">
        {roles.map((role,index)=><article key={role.period} data-career-id={role.period} className={visible.includes(role.period)?"career-journey-card is-visible":"career-journey-card"}>
          <div className="career-journey-marker"><span>0{index+1}</span></div>
          <div className="career-journey-content">
            <div className="career-journey-meta"><span>{role.period}</span><b>{role.label}</b></div>
            <p className="career-company">{role.company}</p><h2>{role.title}</h2><p className="career-location">{role.place}</p>
            <p className="career-journey-description">{role.description}</p>
            <ul>{role.points.map((point)=><li key={point}>{point}</li>)}</ul>
            <div className="tag-row">{role.stack.map((tag)=><span key={tag}>{tag}</span>)}</div>
          </div>
        </article>)}
      </div>
    </div>
  );
}
