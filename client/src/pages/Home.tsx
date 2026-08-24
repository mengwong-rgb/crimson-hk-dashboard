/**
 * Editorial Intelligence Console — clear, source-aware, HK-first internal dashboard.
 * The page uses a persistent navigation rail, concise briefing cards and explicit draft states.
 */
import {
  AlertTriangle,
  ArrowDown,
  Bookmark,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  FileClock,
  Filter,
  Landmark,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ageAlignment,
  communicationRows,
  competitors,
  curriculumRows,
  eclGroups,
  schools,
  tabs,
  type TabConfig,
  type TabId,
} from "../dashboardData";

function StatusPill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "current" | "draft" | "critical" }) {
  return <span className={`status-pill status-${tone}`}>{children}</span>;
}

function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="source-note">
      <BookOpen size={13} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

function SectionHeading({
  number,
  title,
  description,
  pattern,
}: {
  number: string;
  title: string;
  description: string;
  pattern: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-number">{number}</div>
      <div>
        <p className="section-pattern">{pattern}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
}

function PlaceholderCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="placeholder-card">
      <div className="placeholder-icon"><FileClock size={17} /></div>
      <div>
        <StatusPill tone="draft">Content placeholder</StatusPill>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function DashboardHero({ tab }: { tab: TabConfig }) {
  return (
    <section className="dashboard-hero">
      <div className="hero-copy">
        <div className="eyebrow-line"><span>{tab.eyebrow}</span><i /></div>
        <h1>{tab.title}</h1>
        <p>{tab.summary}</p>
        <div className="hero-status">
          <StatusPill tone="current"><Check size={12} /> Current structure</StatusPill>
          <StatusPill tone="draft"><FileClock size={12} /> Draft fields marked</StatusPill>
        </div>
      </div>
      <aside className="hero-briefing" aria-label="Sections in this tab">
        <div className="hero-briefing-head"><span>In this tab</span><strong>{tab.sections.length} sections</strong></div>
        {tab.sections.map((section, index) => (
          <button key={section.id} onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            <span>0{index + 1}</span><strong>{section.label}</strong><ArrowDown size={13} />
          </button>
        ))}
      </aside>
    </section>
  );
}

function MarketTab() {
  return (
    <div className="tab-content">
      <section className="content-section" id="market-overview">
        <SectionHeading
          number="01"
          pattern="Trend card + client persona"
          title="Regional market overview"
          description="The current outbound picture and the client behaviours the HK team should expect."
        />

        <div className="briefing-grid market-grid">
          <article className="panel metric-panel">
            <div className="panel-kicker"><Landmark size={15} /> Region-to-destination volume</div>
            <div className="metric-row">
              <strong>35,361</strong>
              <span>HK tertiary students studying abroad</span>
            </div>
            <p className="metric-date">Current figure provided for 2026</p>
            <div className="micro-metrics">
              <span><strong>2,671</strong> Form 6 graduates abroad</span>
              <span><strong>−13%</strong> year-on-year</span>
              <span><strong>−56%</strong> from the 2020 peak</span>
              <span><strong>14-year</strong> low</span>
            </div>
            <div className="rank-block">
              <div className="rank-title"><span>Priority destinations</span><span>Students</span></div>
              {[
                ["United Kingdom", "8,170", 100],
                ["United States", "5,627", 69],
                ["Australia", "~5,000", 61],
              ].map(([label, value, width]) => (
                <div className="rank-row" key={String(label)}>
                  <span>{label}</span>
                  <i><b style={{ width: `${width}%` }} /></i>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <details className="editorial-disclosure">
              <summary>Why outbound demand is declining <ChevronDown size={15} /></summary>
              <div>
                <p>Four factors recur in the source material: demographic change, strong local universities, more regional pathways, and the financial burden of overseas study.</p>
                <p>Local curriculum and political changes also sit alongside visa pathways offered by the UK, Canada and Australia.</p>
              </div>
            </details>
            <SourceNote>Hong Kong Knowledge Packet, pp. 2–3. Historical figures are not presented as current metrics.</SourceNote>
          </article>

          <article className="panel persona-panel">
            <div className="panel-kicker"><ShieldCheck size={15} /> Core HK client profile</div>
            <h3>High-net-worth local / expat parent portfolio</h3>
            <p className="lead-copy">Families are often highly informed, ranking-aware and demanding of visible strategic value.</p>
            <div className="persona-snapshot">
              <div><span>Typical stage</span><strong>Grade 9–11 / Year 10–12</strong></div>
              <div><span>Primary intent</span><strong>Overseas university pathways</strong></div>
              <div><span>Service expectation</span><strong>High-touch, proactive guidance</strong></div>
            </div>
            <div className="takeaway-block">
              <p className="mini-label">What is different in HK?</p>
              <ul className="check-list">
                <li><Check size={14} /> Strong awareness of UK admissions from early-stage conversations.</li>
                <li><Check size={14} /> Parents may have studied abroad and ask detailed admissions questions.</li>
                <li><Check size={14} /> Families focus on overall and major-specific university rankings.</li>
                <li><Check size={14} /> Some students move to overseas boarding schools from Form 3–5 or earlier.</li>
              </ul>
            </div>
            <SourceNote>Hong Kong Knowledge Packet p. 14; APAC UK Strategy Country Profile, HK pp. 2–3.</SourceNote>
          </article>
        </div>
      </section>

      <section className="content-section" id="curricula">
        <SectionHeading
          number="02"
          pattern="Curricula matrix + age-grade map"
          title="Regional curricula comparison"
          description="A compact reference for comparing the four systems most commonly seen by Crimson HK."
        />
        <article className="panel table-panel">
          <div className="table-intro">
            <div><span className="mini-label">Quick read</span><h3>Choose the column, then scan by decision factor.</h3></div>
            <StatusPill tone="neutral">Horizontally scrollable</StatusPill>
          </div>
          <div className="table-scroll">
            <table className="data-table curriculum-table">
              <thead>
                <tr><th>Decision factor</th><th><span className="track ib">IB</span></th><th><span className="track al">A-Levels</span></th><th><span className="track ap">AP</span></th><th><span className="track dse">HKDSE</span></th></tr>
              </thead>
              <tbody>
                {curriculumRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.ib}</td><td>{row.alevel}</td><td>{row.ap}</td>
                    <td className={row.dse.startsWith("Placeholder") ? "draft-cell" : ""}>{row.dse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <SourceNote>Hong Kong Knowledge Packet p. 5. Benchmarks are internal guidance, not guarantees.</SourceNote>
        </article>

        <article className="panel age-panel">
          <div className="table-intro">
            <div><span className="mini-label">Age-grade alignment</span><h3>Translate the student stage across systems.</h3></div>
          </div>
          <div className="table-scroll">
            <table className="data-table age-table">
              <thead><tr><th>Track</th>{[12, 13, 14, 15, 16, 17].map((age) => <th key={age}>Age {age}</th>)}</tr></thead>
              <tbody>{ageAlignment.map((row) => <tr key={row.track}><th scope="row">{row.track}</th>{row.values.map((value) => <td key={value}>{value}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="content-section" id="pathways">
        <SectionHeading
          number="03"
          pattern="Timeline conflict alert + gateway guide"
          title="Higher-education timelines & local pathways"
          description="The operational bottleneck is the overlap between UK, US and HK application systems."
        />
        <article className="timeline-alert">
          <div className="alert-heading"><AlertTriangle size={18} /><div><span>High-intensity window</span><strong>October → November</strong></div></div>
          <div className="timeline-grid">
            <span className="timeline-label">UK</span><div className="timeline-line"><i style={{ left: "22%" }}><b>15 Oct</b><small>Oxbridge + Med</small></i><i style={{ left: "94%" }}><b>13 Jan</b><small>Main UCAS</small></i></div>
            <span className="timeline-label">US</span><div className="timeline-line"><i style={{ left: "52%" }}><b>1 Nov</b><small>Early round</small></i></div>
            <span className="timeline-label">HK</span><div className="timeline-line"><i style={{ left: "58%" }}><b>13–26 Nov</b><small>CUHK / HKUST / HKU</small></i></div>
          </div>
          <p>The same student may need to coordinate essays, documents, counsellor references and separate portals at the same time.</p>
        </article>

        <div className="gateway-grid">
          <article className="gateway-card">
            <span className="gateway-index">A</span>
            <p className="mini-label">Centralized local route</p>
            <h3>JUPAS</h3>
            <dl><dt>Who uses it</dt><dd>Students following the local HK curriculum.</dd><dt>Mechanism</dt><dd>A centralized university-application system.</dd><dt>Watch-out</dt><dd>Competitive local entry and DSE pressure can shape overseas planning.</dd></dl>
          </article>
          <article className="gateway-card gateway-alt">
            <span className="gateway-index">B</span>
            <p className="mini-label">Individual university route</p>
            <h3>Non-JUPAS</h3>
            <dl><dt>Who uses it</dt><dd>International and non-local-curriculum applicants.</dd><dt>Mechanism</dt><dd>Separate university portals; no single HK equivalent to Common App or UCAS.</dd><dt>Watch-out</dt><dd>Medicine, dentistry and law may add tests and interviews.</dd></dl>
          </article>
        </div>
        <SourceNote>Hong Kong Knowledge Packet pp. 7–8. Dates shown in the source are cycle-specific and should be revalidated annually.</SourceNote>
      </section>
    </div>
  );
}

function SchoolTab() {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const filteredSchools = useMemo(() => schools.filter((school) => {
    const matchesTrack = track === "All" || school.tracks.includes(track) || (track === "Draft" && school.draft);
    const haystack = `${school.name} ${school.pathway} ${school.note}`.toLowerCase();
    return matchesTrack && haystack.includes(query.toLowerCase());
  }), [query, track]);
  const visibleSchools = expanded ? filteredSchools : filteredSchools.slice(0, 9);

  return (
    <div className="tab-content">
      <section className="content-section" id="school-profiles">
        <SectionHeading
          number="01"
          pattern="Searchable school profile matrix"
          title="Institutional profiles by track"
          description="Use this as a briefing layer before deeper internal research or school-specific strategy."
        />
        <div className="context-banner"><Sparkles size={16} /><p><strong>Coverage note:</strong> more priority schools still need sales-team verification. Draft cards are intentionally visible so the final information architecture is already in place.</p></div>
        <div className="directory-toolbar">
          <label className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search schools or notes" /></label>
          <div className="filter-row" aria-label="Filter by curriculum"><Filter size={14} />{["All", "IB", "A-Level", "AP", "DSE", "ESF", "Draft"].map((item) => <button className={track === item ? "active" : ""} onClick={() => setTrack(item)} key={item}>{item}</button>)}</div>
          <span className="result-count">{filteredSchools.length} schools</span>
        </div>
        <div className="school-grid">
          {visibleSchools.map((school) => (
            <article className={`school-card ${school.draft ? "school-draft" : ""}`} key={school.name}>
              <div className="school-card-top"><div>{school.tracks.map((item) => <span className={`track ${item.toLowerCase().replace("-", "")}`} key={item}>{item}</span>)}</div>{school.draft && <StatusPill tone="draft">Draft</StatusPill>}</div>
              <h3>{school.name}</h3>
              <p className="school-pathway">{school.pathway}</p>
              <p>{school.note}</p>
              <div className="school-stat"><span>Crimson HK all-time students</span><strong>{school.students}</strong></div>
            </article>
          ))}
        </div>
        {filteredSchools.length === 0 && <div className="empty-state"><Search size={20} /><strong>No school profiles found</strong><span>Try a broader term or reset the curriculum filter.</span></div>}
        {filteredSchools.length > 9 && <button className="text-button" onClick={() => setExpanded(!expanded)}>{expanded ? "Show fewer profiles" : `Show all ${filteredSchools.length} profiles`} <ArrowDown size={14} className={expanded ? "rotate" : ""} /></button>}
        <SourceNote>APAC UK Strategy Country Profile, Hong Kong pp. 5–8. Internal observations require periodic verification.</SourceNote>
      </section>

      <section className="content-section" id="boarding">
        <SectionHeading number="02" pattern="Pipeline trackers" title="US & UK boarding-school pipelines" description="The final content is not yet available; the modules below preserve the planned decision structure." />
        <div className="placeholder-grid">
          <PlaceholderCard title="US boarding-school pipeline" description="Add common schools, HK client volume, common strengths / weaknesses, application stages and an approved anonymized case study." />
          <PlaceholderCard title="UK boarding-school pipeline" description="Add common schools, HK client volume, entry-year patterns, family decision factors and the Motherboard-approved case study." />
        </div>
      </section>

      <section className="content-section" id="services">
        <SectionHeading number="03" pattern="Service reference cards" title="Common BU services in HK" description="The service structure is confirmed, while HK-specific positioning and case material remain pending." />
        <div className="service-grid">
          {[['C', 'Capstone', 'Case study planned'], ['D', 'Delta', 'Case study planned'], ['R', 'Rise', 'No case study planned'], ['I', 'Indigo', 'No case study planned']].map(([letter, name, note]) => <article className="service-card" key={name}><span>{letter}</span><div><StatusPill tone="draft">Pending HK content</StatusPill><h3>{name}</h3><p>{note}</p></div></article>)}
        </div>
      </section>

      <section className="content-section" id="asset-plan">
        <SectionHeading number="04" pattern="Execution plan + counselling environment" title="Proprietary asset execution" description="A future operating plan for HK-specific assets, informed by how strongly each school already supports university applications." />
        <div className="placeholder-grid">
          <PlaceholderCard title="Objective & key assets" description="Define the asset objective, owner, target audience, priority school set, deliverable format and execution status." />
          <article className="panel counselling-snapshot">
            <p className="mini-label">Available source-backed snapshot</p>
            <h3>Schools with structured guidance environments</h3>
            <div className="snapshot-list">
              {[["CIS", "Five counsellors; established university preparation"], ["ISF Academy", "Structured Grade 9–12 guidance"], ["CDNIS", "Four university counsellors; support begins around Grade 9"], ["CKY", "Eight counsellors working in stable pairs"]].map(([name, note]) => <div key={name}><Check size={14} /><span><strong>{name}</strong>{note}</span></div>)}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function StrategyTab() {
  const [competitorQuery, setCompetitorQuery] = useState("");
  const [eclQuery, setEclQuery] = useState("");
  const filteredCompetitors = competitors.filter((competitor) => `${competitor.name} ${competitor.position}`.toLowerCase().includes(competitorQuery.toLowerCase()));

  return (
    <div className="tab-content">
      <section className="content-section" id="applicant-blueprint">
        <SectionHeading number="01" pattern="Profile strategic lever" title="The top-applicant regional blueprint" description="Convert the HK applicant baseline into a differentiated, credible application profile." />
        <article className="panel lever-panel">
          <div className="lever-row lever-head"><span>Common baseline</span><span>Status</span><span>Strategic lever</span></div>
          {[
            ["Strong academics + reputable school", "Strength", "Protect academic performance while building differentiated depth."],
            ["High standardized-test focus", "Weakness", "Move from score accumulation to intentional profile construction."],
            ["Common / cliché extracurriculars", "Weakness", "Build a distinctive theme, sustained impact and follow-through."],
            ["Interview and storytelling", "Weakness", "Develop reflection, narrative control and communication confidence."],
          ].map(([baseline, status, lever]) => <div className="lever-row" key={baseline}><strong>{baseline}</strong><StatusPill tone={status === "Strength" ? "current" : "critical"}>{status}</StatusPill><p>{lever}</p></div>)}
        </article>
        <PlaceholderCard title="Strategist validation required" description="Add HK strategist commentary on the most common top-applicant strengths, weaknesses and high-impact intervention points." />
        <SourceNote>Hong Kong Knowledge Packet pp. 9–12. These are qualitative internal observations, not a statistical study.</SourceNote>
      </section>

      <section className="content-section" id="communication">
        <SectionHeading number="02" pattern="Communication + escalation protocol" title="Cultural navigation playbook" description="How the HK team can make strategy feel visible, responsive and locally credible." />
        <div className="communication-grid">
          {communicationRows.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}
        </div>
        <div className="legal-alert"><AlertTriangle size={19} /><div><span>Legal boundary directive</span><strong>Do not advise on UK fee status.</strong><p>Route complex cases to UKCISA with the relevant facts and documentation.</p></div></div>
        <div className="client-streams">
          {[['Local', 'Outcome-focused, informed and highly attentive to rationale and demonstrated expertise.'], ['Mainland', 'Data-led, benchmark-aware and responsive to written roadmaps and measurable progress.'], ['Expat', 'Student-centred, exploratory and attentive to fit, interests and long-term development.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="content-section" id="competitors">
        <SectionHeading number="03" pattern="Sales battlecards" title="Local competitor intelligence" description="A concise positioning reference. Historical notes should be revalidated before active sales use." />
        <label className="search-field competitor-search"><Search size={16} /><input value={competitorQuery} onChange={(event) => setCompetitorQuery(event.target.value)} placeholder="Search competitors" /></label>
        <div className="competitor-grid">
          {filteredCompetitors.map((competitor) => (
            <details className="competitor-card" key={competitor.name}>
              <summary><div><span>Battlecard</span><h3>{competitor.name}</h3><p>{competitor.position}</p></div><ChevronDown size={18} /></summary>
              <div className="competitor-detail"><div><StatusPill tone="current">Strength</StatusPill><p>{competitor.strength}</p></div><div><StatusPill tone="critical">Watch-out</StatusPill><p>{competitor.weakness}</p></div></div>
            </details>
          ))}
        </div>
        <SourceNote>Historical competitor notes from the Hong Kong Knowledge Packet. Revalidate claims and current activity before use.</SourceNote>
      </section>

      <section className="content-section" id="ecl">
        <SectionHeading number="04" pattern="Searchable localized resource library" title="Localized ECL opportunities" description="A structured list of HK opportunities. All destination links remain placeholders until verified." />
        <label className="search-field ecl-search"><Search size={16} /><input value={eclQuery} onChange={(event) => setEclQuery(event.target.value)} placeholder="Search opportunities" /></label>
        <div className="ecl-grid">
          {eclGroups.map((group) => {
            const items = group.items.filter((item) => item.toLowerCase().includes(eclQuery.toLowerCase()));
            if (!items.length) return null;
            return <details className="ecl-card" key={group.title} open={!eclQuery}><summary><div><span>{group.title}</span><small>{items.length} resources</small></div><ChevronDown size={17} /></summary><ul>{items.map((item) => <li key={item}><span>{item}</span><button onClick={() => toast.info("Link placeholder", { description: "Add the verified internal or public URL before use." })}><ExternalLink size={12} /> Link pending</button></li>)}</ul></details>;
          })}
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("market");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [globalQuery, setGlobalQuery] = useState("");
  const activeConfig = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  const searchResults = useMemo(() => {
    if (!globalQuery.trim()) return [];
    const term = globalQuery.toLowerCase();
    return tabs.flatMap((tab) => tab.sections.map((section) => ({ tab, section }))).filter(({ tab, section }) => `${tab.title} ${section.label}`.toLowerCase().includes(term));
  }, [globalQuery]);

  const switchTab = (tab: TabId) => {
    setActiveTab(tab);
    setMobileNavOpen(false);
    setGlobalQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpTo = (tab: TabId, sectionId: string) => {
    setActiveTab(tab);
    setMobileNavOpen(false);
    setGlobalQuery("");
    window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  };

  return (
    <div className="app-shell">
      <button className="mobile-nav-button" onClick={() => setMobileNavOpen(true)} aria-label="Open navigation"><Menu size={19} /></button>
      {mobileNavOpen && <button className="nav-scrim" aria-label="Close navigation" onClick={() => setMobileNavOpen(false)} />}
      <aside className={`sidebar ${mobileNavOpen ? "mobile-open" : ""}`}>
        <div className="brand-block">
          <span className="atlas-c-mark" aria-label="Crimson HK mark">C</span>
          <div><strong>CRIMSON HK</strong><span>Market Intelligence</span></div>
          <button onClick={() => setMobileNavOpen(false)} aria-label="Close navigation"><X size={17} /></button>
        </div>
        <label className="sidebar-search"><Search size={15} /><input placeholder="Search HK dashboard..." onChange={(event) => setGlobalQuery(event.target.value)} value={globalQuery} /><kbd>⌘K</kbd></label>
        {globalQuery && (
          <div className="sidebar-search-results">
            {searchResults.length ? searchResults.map(({ tab, section }) => (
              <button key={`${tab.id}-${section.id}`} onClick={() => jumpTo(tab.id, section.id)}>
                <span>{tab.shortTitle}</span><strong>{section.label}</strong>
              </button>
            )) : <p>No matching sections.</p>}
          </div>
        )}
        <div className="sidebar-home"><Landmark size={15} /><span>HK Dashboard</span></div>
        <p className="nav-caption">MARKET INTELLIGENCE</p>
        <nav className="primary-nav" aria-label="Dashboard tabs">
          {tabs.map((tab) => (
            <div className={`nav-group ${activeTab === tab.id ? "active" : ""}`} key={tab.id}>
              <button onClick={() => switchTab(tab.id)}><span className="nav-tab-index">{tab.eyebrow.replace("Tab ", "")}</span><span>{tab.shortTitle}</span><ChevronDown size={15} /></button>
              {activeTab === tab.id && <div className="subnav">{tab.sections.map((section) => <button key={section.id} onClick={() => jumpTo(tab.id, section.id)}>{section.label}</button>)}</div>}
            </div>
          ))}
        </nav>
        <p className="nav-caption nav-caption-secondary">REFERENCE</p>
        <div className="reference-nav">
          <button onClick={() => jumpTo("market", "curricula")}><BookOpen size={15} /><span>Curricula guide</span></button>
          <button onClick={() => jumpTo("schools", "school-profiles")}><ShieldCheck size={15} /><span>School directory</span></button>
          <button onClick={() => jumpTo("strategy", "competitors")}><Sparkles size={15} /><span>Competitor intel</span></button>
        </div>
        <div className="sidebar-brief">
          <div className="sidebar-brief-icon"><FileClock size={16} /></div>
          <span>Working draft</span>
          <p>HK-specific content for current and new team members. Amber fields still need internal confirmation.</p>
        </div>
        <div className="sidebar-footer"><span>Internal access</span><strong>HK Team</strong></div>
      </aside>

      <main className="workspace">
        <header className="workspace-header">
          <div className="atlas-breadcrumb"><button onClick={() => switchTab("market")}>HK Dashboard</button><span>/</span><strong>{activeConfig.shortTitle}</strong></div>
          <div className="atlas-utility">
            <button><Clock3 size={15} /><span>Recent</span></button>
            <button><Plus size={15} /><span>New</span></button>
            <button><Bookmark size={15} /><span>Bookmarks</span></button>
            <span className="team-avatar">HK</span>
            <strong>HK Team</strong>
          </div>
        </header>

        <div className="context-strip"><ShieldCheck size={14} /><span>Internal Crimson Education resource</span><i />Source-backed content is labelled; incomplete fields remain visible as placeholders.</div>

        <div className="workspace-body">
          <div className="mobile-global-search global-search">
            <Search size={16} />
            <input value={globalQuery} onChange={(event) => setGlobalQuery(event.target.value)} placeholder="Find a section" aria-label="Find a dashboard section" />
            {globalQuery && <button onClick={() => setGlobalQuery("")} aria-label="Clear search"><X size={14} /></button>}
            {globalQuery && <div className="search-results">{searchResults.length ? searchResults.map(({ tab, section }) => <button key={`${tab.id}-${section.id}`} onClick={() => jumpTo(tab.id, section.id)}><span>{tab.shortTitle}</span><strong>{section.label}</strong></button>) : <p>No matching sections.</p>}</div>}
          </div>
          <DashboardHero tab={activeConfig} />
          {activeTab === "market" && <MarketTab />}
          {activeTab === "schools" && <SchoolTab />}
          {activeTab === "strategy" && <StrategyTab />}
        </div>

        <footer className="site-footer"><span>Crimson Education Hong Kong</span><p>Internal use only. Source notes and placeholders are retained to prevent draft content from being mistaken for verified guidance.</p></footer>
      </main>
    </div>
  );
}
