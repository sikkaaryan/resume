"use client";

import { useMemo, useState } from "react";

type Category = "ALL" | "PROFESSIONAL" | "PERSONAL";
const projects = [
  { id:"01", category:"PROFESSIONAL", client:"ARISTOCRAT TECHNOLOGIES", title:"Mobile game development", description:"Production game modules for Android and iOS, spanning gameplay features, UI flows, configuration, and service integration.", tags:["C#","TypeScript","Unity","Android · iOS"], detail:"Contributed to production titles and cross-platform game experiences, with a focus on reliable feature delivery and maintainable implementation.", status:"PRODUCTION" },
  { id:"02", category:"PROFESSIONAL", client:"INTERNAL DEVELOPMENT TOOLS", title:"Reusable game framework", description:"A configurable shared foundation that reduced repeated setup work and accelerated new-title development.", tags:["TypeScript","Framework design","Reusable systems"], detail:"Designed reusable components and templates that reduced new-title setup and development time by around 30%.", status:"~30% LESS SETUP TIME" },
  { id:"03", category:"PERSONAL", client:"STAYMATCH", title:"Stay discovery & verification", description:"A property search workflow that checks stays against practical requirements instead of relying on broad listings.", tags:["Next.js","TypeScript","Search","Verification"], detail:"An experiment in structured discovery, deduplication, and verifying property features against a clear brief.", status:"INDEPENDENT BUILD" },
  { id:"04", category:"PERSONAL", client:"AI & DEVELOPER WORKFLOWS", title:"Agent-assisted engineering", description:"Experiments with multi-agent planning, code review, and automated verification for repetitive development tasks.", tags:["AI tooling","Automation","Developer experience"], detail:"Exploring how specialised agents can collaborate around a bounded engineering task while keeping tests and human review central.", status:"RESEARCH & PROTOTYPING" },
] as const;

export default function InteractiveProjectGallery() {
  const [filter,setFilter] = useState<Category>("ALL");
  const [active,setActive] = useState("01");
  const visible = useMemo(() => projects.filter((p) => filter === "ALL" || p.category === filter),[filter]);
  const selected = visible.find((p) => p.id === active) ?? visible[0];
  function changeFilter(next:Category) { setFilter(next); const first=projects.find((p)=>next==="ALL"||p.category===next); if(first) setActive(first.id); }
  return (
    <section className="interactive-gallery" aria-label="Interactive featured project gallery">
      <div className="gallery-toolbar"><div><p className="page-eyebrow">SELECTED WORK / 2022—2026</p><h2>Built to make<br /><em>an impact.</em></h2></div>
        <div className="gallery-filters" role="group" aria-label="Filter projects">
          {(["ALL","PROFESSIONAL","PERSONAL"] as Category[]).map((item)=><button type="button" key={item} className={filter===item?"is-active":""} aria-pressed={filter===item} onClick={()=>changeFilter(item)}>{item}</button>)}
        </div>
      </div>
      <div className="gallery-layout">
        <div className="gallery-list" role="tablist" aria-label="Projects">
          {visible.map((project)=><button type="button" role="tab" aria-selected={active===project.id} className={active===project.id?"gallery-item is-active":"gallery-item"} key={project.id} onClick={()=>setActive(project.id)}>
            <span>{project.id} / {project.category}</span><strong>{project.title}</strong><i>↗</i>
          </button>)}
        </div>
        {selected && <article className="gallery-detail" role="tabpanel">
          <div className="gallery-detail__top"><span>{selected.client}</span><b>{selected.status}</b></div>
          <div className="gallery-detail__art" aria-hidden="true"><div className="gallery-art-orbit gallery-art-orbit--one"/><div className="gallery-art-orbit gallery-art-orbit--two"/><div className="gallery-art-core">{selected.id}</div><span>PROJECT / {selected.id}</span></div>
          <p className="page-eyebrow">OVERVIEW</p><h3>{selected.title}</h3><p className="gallery-detail__description">{selected.description}</p><p className="gallery-detail__detail">{selected.detail}</p>
          <div className="tag-row">{selected.tags.map((tag)=><span key={tag}>{tag}</span>)}</div>
        </article>}
      </div>
    </section>
  );
}
