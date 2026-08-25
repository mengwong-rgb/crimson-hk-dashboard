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
  tabs,
  type TabConfig,
  type TabId,
} from "../dashboardData";
import { feederSchools, ibResultsUrl, type SchoolType } from "../schoolDirectoryData";

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
        {description && <p>{description}</p>}
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

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="rating-stars" aria-label={`${rating} out of 5 stars`}>
      <b>{"★".repeat(rating)}</b><i>{"★".repeat(5 - rating)}</i>
    </span>
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
              <span><strong>−13%</strong> from previous year</span>
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
              <div className="disclosure-points">
                <p><strong>Demographic shift:</strong> A rise in students from mainland China, who prefer local institutions over traditional overseas destinations, has shifted demographics.</p>
                <p><strong>Elite Local Options:</strong> Hong Kong universities offer globally recognized, high-quality education in key fields.</p>
                <p><strong>Diversified Pathways:</strong> Students have access to a wider range of local and regional, including mainland Chinese, programs.</p>
                <p><strong>High Financial Burden:</strong> Rising overseas costs, including tuition and living expenses, make the subsidized local university system more attractive.</p>
              </div>
            </details>
            <details className="editorial-disclosure macro-disclosure">
              <summary>Macroeconomic Push and Pull Factors Driving Outbound Study <ChevronDown size={15} /></summary>
              <div className="macro-factor-grid">
                <section>
                  <h4>Local push factors</h4>
                  <ul>
                    <li>The change of local curriculum (replacing the subject “liberal studies” with “citizenship and social development, which includes new elements on patriotism, national development and lawfulness)</li>
                    <li>Introduction of the National Security Law: New visa schemes from the UK, Canada and Australia in response to the push of the National Security Law</li>
                  </ul>
                </section>
                <section>
                  <h4>International pull factors</h4>
                  <h5>The UK</h5>
                  <ul>
                    <li>The British National (Overseas) visa scheme, applicable to Hongkongers aged 18 to 25 who do not possess the special status, but whose parents do</li>
                    <li>Hongkongers can apply to live and work in Britain and, after six years, apply for citizenship</li>
                    <li>As of 2026, more than 240,000 Hongkongers have successfully applied</li>
                  </ul>
                  <h5>Canada</h5>
                  <ul><li>A 3-year work permit for recent Hong Kong graduates</li></ul>
                </section>
              </div>
            </details>
          </article>

          <article className="panel persona-panel">
            <div className="panel-kicker"><ShieldCheck size={15} /> Core HK client profile</div>
            <h3>High-net-worth local / expat parent portfolio</h3>
            <p className="lead-copy">Families are often highly informed, ranking-aware and demanding of visible strategic value.</p>
            <div className="persona-snapshot">
              <div><span>Core audience</span><strong>Grade 9–11 / Year 10–12</strong></div>
              <div><span>Primary intent</span><strong>Overseas university pathways</strong></div>
              <div><span>Service expectation</span><strong>High-touch, proactive guidance</strong></div>
            </div>
            <div className="takeaway-block">
              <p className="mini-label">Profile highlights</p>
              <ul className="check-list">
                <li><Check size={14} /> Students often move to overseas boarding schools around Form 3–5 or earlier.</li>
                <li><Check size={14} /> High performers in top international schools, expat families, and Mainland transfers seeking international education in HK.</li>
                <li><Check size={14} /> High focus on overall and major-specific university rankings.</li>
                <li><Check size={14} /> Parents often studied abroad and ask detailed technical questions during pre-sales.</li>
                <li><Check size={14} /> Families expect elite results and view Crimson as a bridge to top-tier universities.</li>
              </ul>
            </div>
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
        </article>

        <article className="panel age-panel">
          <div className="table-intro">
            <div><span className="mini-label">Age-grade alignment</span><h3>Translate the student stage across systems.</h3></div>
          </div>
          <div className="table-scroll">
            <table className="data-table age-table">
              <thead><tr><th>Age</th>{ageAlignment.map((row) => <th key={row.track}>{row.track}</th>)}</tr></thead>
              <tbody>
                {[12, 13, 14, 15, 16, 17].map((age, ageIndex) => (
                  <tr key={age}>
                    <th scope="row">Age {age}</th>
                    {ageAlignment.map((row) => <td key={`${row.track}-${age}`}>{row.values[ageIndex]}</td>)}
                  </tr>
                ))}
              </tbody>
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
          <div className="timeline-header-row">
            <div className="alert-heading"><AlertTriangle size={18} /><div><span>Combined admissions timeline</span><strong>October 2025 → August 2026</strong></div></div>
            <div className="timeline-legend"><span><i className="legend-dot international" />International / Non-JUPAS</span><span><i className="legend-dot jupas" />JUPAS</span></div>
          </div>
          <div className="timeline-scroll">
            <div className="timeline-grid timeline-grid-extended">
              <span className="timeline-label">UK</span>
              <div className="timeline-line">
                <i className="timeline-point international-marker marker-top" style={{ left: "9%" }}><b>15 Oct 2025</b><small>Oxbridge + Med</small></i>
                <i className="timeline-point international-marker" style={{ left: "63%" }}><b>13 Jan 2026</b><small>Main UCAS</small></i>
              </div>
              <span className="timeline-label">US</span>
              <div className="timeline-line"><i className="timeline-point international-marker" style={{ left: "18%" }}><b>1 Nov 2025</b><small>Early round</small></i></div>
              <span className="timeline-label">HK</span>
              <div className="timeline-line hk-timeline-line">
                <i className="timeline-point jupas-marker marker-top" style={{ left: "2%" }}><b>9 Oct 2025</b><small>JUPAS opens</small></i>
                <i className="timeline-point international-marker" style={{ left: "27%" }}><b>13 Nov 2025</b><small>CUHK early</small></i>
                <i className="timeline-point international-marker marker-top" style={{ left: "34%" }}><b>20 Nov 2025</b><small>HKUST first round</small></i>
                <i className="timeline-point international-marker" style={{ left: "41%" }}><b>26 Nov 2025</b><small>HKU early round</small></i>
                <i className="timeline-point jupas-marker marker-top" style={{ left: "48%" }}><b>3 Dec 2025</b><small>JUPAS deadline · 5 PM</small></i>
                <i className="timeline-point jupas-marker" style={{ left: "57%" }}><b>2 Jan 2026</b><small>DSE editing</small></i>
                <i className="timeline-point jupas-marker marker-top" style={{ left: "75%" }}><b>22 Apr 2026</b><small>Late / account reactivation</small></i>
                <i className="timeline-point jupas-marker" style={{ left: "82%" }}><b>27 May 2026</b><small>Choice reorder · 5 PM</small></i>
                <i className="timeline-point jupas-marker marker-top" style={{ left: "91%" }}><b>15 Jul 2026</b><small>Recheck results</small></i>
                <i className="timeline-point jupas-marker" style={{ left: "98%" }}><b>5 Aug 2026</b><small>Main-round offers</small></i>
              </div>
            </div>
          </div>
          <p>The same student may need to coordinate essays, documents, counsellor references and separate portals at the same time.</p>
        </article>

        <div className="local-pathway-intro">
          <Landmark size={17} />
          <div><span>Applying to Hong Kong local universities</span><p>Students apply through either JUPAS or separate Non-JUPAS university portals depending on the curriculum they study.</p></div>
        </div>
        <div className="gateway-grid">
          <article className="gateway-card">
            <span className="gateway-index">A</span>
            <p className="mini-label">Centralized local route</p>
            <h3>JUPAS</h3>
            <dl><dt>Who uses it</dt><dd>Students following the local HKDSE curriculum.</dd><dt>How to apply</dt><dd>Create one JUPAS account, select and rank programme choices, submit the application, and update choices during the permitted stages of the cycle.</dd><dt>Local route</dt><dd>The application can cover participating Hong Kong universities, including HKU, CUHK and HKUST.</dd><dt>Watch-out</dt><dd>Programme ordering, HKDSE results, interviews and programme-specific requirements can all affect the final outcome.</dd></dl>
          </article>
          <article className="gateway-card gateway-alt">
            <span className="gateway-index">B</span>
            <p className="mini-label">Individual university route</p>
            <h3>Non-JUPAS</h3>
            <dl><dt>Who uses it</dt><dd>Students following IB, A-Level, AP, US High School Diploma or other non-HKDSE curricula.</dd><dt>How to apply</dt><dd>Apply separately through each university’s own application portal; there is no single HK equivalent to Common App or UCAS for this route.</dd><dt>Local route</dt><dd>Submit separate applications to HKU, CUHK, HKUST and any other chosen local universities.</dd><dt>Watch-out</dt><dd>Deadlines and document requirements differ by university, while medicine, dentistry and law may add tests and interviews.</dd></dl>
          </article>
        </div>
        <article className="panel local-ranking-panel">
          <div className="table-intro"><div><span className="mini-label">Local university reference</span><h3>Hong Kong local university ranking</h3></div></div>
          <div className="table-scroll">
            <table className="data-table local-ranking-table">
              <thead><tr><th>University</th><th>Ranking</th></tr></thead>
              <tbody><tr><th scope="row">HKU</th><td>11</td></tr><tr><th scope="row">CUHK</th><td>18</td></tr><tr><th scope="row">HKUST</th><td>33</td></tr></tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
}

function SchoolTab() {
  const [query, setQuery] = useState("");
  const [schoolType, setSchoolType] = useState<SchoolType>("International");
  const [curriculum, setCurriculum] = useState("All");
  const [selectedSchoolName, setSelectedSchoolName] = useState(feederSchools[0].name);
  const curriculumFilters = [
    { label: "All", value: "All" },
    { label: "IB", value: "IB" },
    { label: "A-Levels", value: "A-Level" },
    { label: "AP", value: "AP" },
    { label: "HKDSE", value: "HKDSE" },
  ];
  const filteredSchools = useMemo(() => feederSchools.filter((school) => {
    const matchesType = school.type === schoolType;
    const matchesCurriculum = curriculum === "All" || school.curricula.some((item) => item === curriculum || item.includes(curriculum));
    const haystack = `${school.name} ${school.curricula.join(" ")} ${school.primaryTarget} ${school.academicStrength} ${school.extracurricularEnvironment} ${school.teacherGuidance}`.toLowerCase();
    return matchesType && matchesCurriculum && haystack.includes(query.toLowerCase());
  }), [query, schoolType, curriculum]);
  const selectedSchool = filteredSchools.find((school) => school.name === selectedSchoolName) ?? filteredSchools[0] ?? null;
  const placeholderLink = (label: string) => toast.info("Link placeholder", { description: `Add the ${label} URL when it is available.` });

  return (
    <div className="tab-content">
      <section className="content-section" id="school-profiles">
        <SectionHeading
          number="01"
          pattern="Searchable feeder-school intelligence"
          title="Institutional profiles by school type and curriculum"
          description="Select a school to review its academic, extracurricular and counselling environment."
        />
        <div className="school-type-switch" aria-label="Filter by school type">
          {(["International", "Local"] as SchoolType[]).map((item) => (
            <button className={schoolType === item ? "active" : ""} onClick={() => { setSchoolType(item); setCurriculum("All"); setQuery(""); }} key={item}>
              {item} Schools <span>{feederSchools.filter((school) => school.type === item).length}</span>
            </button>
          ))}
        </div>
        <div className="directory-toolbar directory-toolbar-v2">
          <label className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search schools or notes" /></label>
          <div className="filter-row" aria-label="Filter by curriculum"><Filter size={14} />{curriculumFilters.map((item) => <button className={curriculum === item.value ? "active" : ""} onClick={() => setCurriculum(item.value)} key={item.value}>{item.label}</button>)}</div>
          <span className="result-count">{filteredSchools.length} schools</span>
        </div>
        {selectedSchool ? (
          <div className="school-directory-layout">
            <aside className="school-list-panel" aria-label="Feeder school list">
              <div className="school-list-head"><span>{schoolType} schools</span><strong>{filteredSchools.length}</strong></div>
              <div className="school-list-scroll">
                {filteredSchools.map((school) => (
                  <button className={selectedSchool.name === school.name ? "active" : ""} onClick={() => setSelectedSchoolName(school.name)} key={school.name}>
                    <span>{school.name}</span>
                    <small>{school.curricula.join(" / ")} · {school.primaryTarget}</small>
                  </button>
                ))}
              </div>
            </aside>
            <article className="school-detail-panel">
              <header className="school-detail-header">
                <div>
                  <div className="school-detail-tags">{selectedSchool.curricula.map((item) => <span className={`track ${item.toLowerCase().replaceAll("-", "").replaceAll(" ", "")}`} key={item}>{item}</span>)}</div>
                  <h3>{selectedSchool.name}</h3>
                  <p>{selectedSchool.type} School · Primary target: {selectedSchool.primaryTarget}</p>
                </div>
                {selectedSchool.curricula.includes("IB") && <a className="external-cta" href={ibResultsUrl} target="_blank" rel="noreferrer">View IB Results <ExternalLink size={13} /></a>}
              </header>
              <div className="school-metric-grid">
                <div><span>Crimson HK students</span><strong>{selectedSchool.students}</strong></div>
                <div><span>Highflyers</span><strong>{selectedSchool.highflyers}</strong></div>
                <div><span>Counsellors</span><strong>{selectedSchool.counsellors}</strong></div>
                <div><span>Guidance starts</span><strong>{selectedSchool.guidanceStarts}</strong></div>
              </div>
              <div className="school-meta-grid">
                <div><span>Counselling environment</span><p>{selectedSchool.counsellingEnvironment}</p></div>
                <div><span>Curriculum</span><p>{selectedSchool.curricula.join(" / ")}</p></div>
                <div><span>Primary target</span><p>{selectedSchool.primaryTarget}</p></div>
              </div>
              <div className="school-overview-head"><span>Overview</span><p>Academic and extracurricular environment</p></div>
              <div className="school-overview-grid">
                <section><div><span>Academic strength</span><RatingStars rating={selectedSchool.academicRating} /></div><p>{selectedSchool.academicStrength}</p></section>
                <section><div><span>Extracurricular environment</span><RatingStars rating={selectedSchool.extracurricularRating} /></div><p>{selectedSchool.extracurricularEnvironment}</p></section>
                <section><div><span>Teacher guidance on ECL</span><RatingStars rating={selectedSchool.teacherGuidanceRating} /></div><p>{selectedSchool.teacherGuidance}</p></section>
              </div>
            </article>
          </div>
        ) : <div className="empty-state"><Search size={20} /><strong>No school profiles found</strong><span>Try a broader term or reset the curriculum filter.</span></div>}
        <SourceNote>APAC UK Strategy Country Profile, Hong Kong pp. 5–8. Internal observations require periodic verification.</SourceNote>
      </section>

      <section className="content-section" id="boarding">
        <SectionHeading number="02" pattern="Boarding-school comparison" title="US & UK boarding-school pipelines" description="Compare common schools, HK student volume, strengths and application watch-outs." />
        <div className="boarding-grid">
          <article className="boarding-card">
            <div className="boarding-card-head"><span>US</span><div><p className="mini-label">Boarding pathway</p><h3>US Boarding School</h3></div></div>
            <dl className="boarding-facts"><dt>Most common US Boarding School</dt><dd>The Hotchkiss School, Phillips Exeter Academy</dd><dt>Crimson HK Students Number</dt><dd><strong>24</strong></dd><dt>Highflyers</dt><dd><strong>11</strong></dd></dl>
            <div className="boarding-analysis"><section><h4><Check size={14} /> Strength of students</h4><ul><li>Strong academic preparation and intellectual confidence</li><li>Strong discussion, communication and critical-thinking skills</li><li>Broad extracurricular exposure across leadership, sport, arts and service</li><li>High independence and maturity from the boarding-school environment</li><li>Familiar with the US college admissions process and holistic applications</li></ul></section><section className="boarding-weakness"><h4><AlertTriangle size={14} /> Weakness of students</h4><ul><li>Harder to stand out within a highly competitive applicant pool</li><li>Strong school support can make applications look similar to peers</li><li>Activities may be broad but lack a distinctive personal spike</li><li>Need a clear individual narrative beyond the boarding-school brand</li><li>High-achieving peer environment can increase pressure around grades and admissions</li></ul></section></div>
          </article>
          <article className="boarding-card">
            <div className="boarding-card-head"><span>UK</span><div><p className="mini-label">Boarding pathway</p><h3>UK Boarding School</h3></div></div>
            <dl className="boarding-facts"><dt>Most common UK Boarding School</dt><dd>Brighton College, Tonbridge School, Eton College, Dulwich College, Caterham School</dd><dt>Crimson HK Students Number</dt><dd><strong>143</strong></dd><dt>Highflyers</dt><dd><strong>60</strong></dd></dl>
            <div className="boarding-analysis"><section><h4><Check size={14} /> Strength of students</h4><ul><li>Strong academic depth and subject mastery</li><li>Strong preparation for rigorous university-level study</li><li>High independence, discipline and time-management skills</li><li>Strong co-curricular exposure across leadership, sport, arts and service</li><li>Well prepared for UK university applications and academically focused pathways</li></ul></section><section className="boarding-weakness"><h4><AlertTriangle size={14} /> Weakness of students</h4><ul><li>Academic profile may be stronger than the extracurricular profile needed for US admissions</li><li>Early subject specialisation can reduce academic breadth for US applications</li><li>Less familiarity with US-style personal branding and holistic admissions</li><li>Activities may need stronger evidence of individual impact, initiative and leadership</li><li>Need to translate UK achievements and qualifications clearly for US admissions readers</li></ul></section></div>
          </article>
        </div>
        <article className="case-study-cta"><div><span>Hong Kong Student Case Studies</span><h3>View the full HK student case-study library</h3><p>The destination link will be added when the case-study page is ready.</p></div><button onClick={() => placeholderLink("HK student full case studies")}>View HK student full case studies <ExternalLink size={14} /></button></article>
      </section>

      <section className="content-section" id="services">
        <SectionHeading number="03" pattern="Service reference cards" title="Common BU services in HK" description="" />
        <div className="service-grid">
          {[["C", "Capstone"], ["D", "Delta"], ["R", "Rise"], ["I", "Indigo"]].map(([letter, name]) => <article className="service-card" key={name}><span>{letter}</span><div><StatusPill tone="draft">HK case-study link pending</StatusPill><h3>{name}</h3><button className="service-case-button" onClick={() => placeholderLink(`${name} HK student case studies`)}>View HK case studies <ExternalLink size={12} /></button></div></article>)}
        </div>
      </section>
    </div>
  );
}

function StrategyTab() {
  const [competitorQuery, setCompetitorQuery] = useState("");
  const [eclQuery, setEclQuery] = useState("");
  const filteredCompetitors = competitors.filter((competitor) => `${competitor.name} ${competitor.position}`.toLowerCase().includes(competitorQuery.toLowerCase()));
  const topApplicantCharacteristics = [
    {
      title: "Academic Excellence",
      description: "Academically exceptional; additional grades or test gains may add limited value once the threshold is met.",
      lever: "Lock academics early. Redirect effort toward specialized research or capstone execution.",
    },
    {
      title: "Formulaic Profile Building",
      description: "Profile building can become formulaic and participation-heavy rather than original.",
      lever: "Shift from joining existing programs toward creating original IP and independent output.",
    },
    {
      title: "Limited Personal Depth",
      description: "Personal stories may lack depth or feel insufficiently personal - can be easily read as “privileged kids with no struggles”.",
      lever: "Build greater reflection, specificity and personal insight into the narrative.",
    },
    {
      title: "Limited Intellectual Depth",
      label: "Direct web copy",
      description: "Strong academic performance may not always translate into clear intellectual depth or an individual point of view.",
      lever: "Develop subject-specific opinions, questions and personal intellectual insights.",
    },
    {
      title: "Interview Strength",
      description: "Top HK applicants can generally perform well in interviews.",
      lever: "Use interviews to reinforce self-awareness, intellectual personality and authentic communication.",
      source: "Can generally do well in interviews",
    },
    {
      title: "Extracurricular Impact",
      description: "Extracurricular breadth may be high, while leadership, independent thinking or distinctive mission remain limited.",
      lever: "Prioritize depth, ownership, leadership and meaningful impact over activity volume.",
    },
    {
      title: "Coachability",
      description: "Students may be highly receptive to guidance and suggestions.",
      lever: "Use coachability as an execution advantage while ensuring the final profile remains student-led.",
    },
    {
      title: "Prestige Orientation",
      description: "School choices may be heavily influenced by ranking and reputation in Hong Kong.",
      lever: "Frame university choices around fit and opportunity as well as brand recognition.",
    },
  ];
  const generalApplicantCharacteristics = [
    {
      title: "Strong academics + reputable school",
      description: "Strong academics and a reputable school provide a solid baseline.",
      lever: "Preserve academic strength while building differentiated profile depth.",
    },
    {
      title: "High standardised-test focus",
      description: "High attention to standardized testing can crowd out broader profile differentiation.",
      lever: "Shift from score accumulation toward intentional, distinctive profile building.",
    },
    {
      title: "Common / cliché EC participation",
      description: "Extracurricular participation may follow common or cliché patterns.",
      lever: "Develop unique themes, meaningful impact and follow-through.",
    },
    {
      title: "Interview / storytelling",
      description: "Interview and storytelling can be weaker areas.",
      lever: "Strengthen narrative, interview and reflective communication skills.",
    },
  ];
  const distinguishingTraits = [
    "Stellar academic grades at advanced levels from a top school",
    "High standardized test scores",
    "National and international academic or extracurricular achievements",
    "Excellent self-awareness and community-mindedness",
    "Mature and insightful personal voice and narrative in application essays",
    "Unique interests and ability to follow through",
  ];
  const clientStreams = [
    {
      title: "Local",
      traits: [
        "Outcome-focused & highly informed",
        "Familiar with HK/UK/US/Canada admissions",
        "Expect precise guidance, clear rationale and demonstrated admissions expertise are important",
      ],
    },
    {
      title: "Mainland",
      traits: [
        "Data-driven & structured",
        "Pay close attention to track records across high schools and intended majors",
        "Value measurable outcomes, clear benchmarks and detailed information",
        "Value advisor experience and expertise",
        "Prefer written roadmaps and clear visibility into progress",
      ],
    },
    {
      title: "Expat",
      traits: [
        "Student-centred & exploratory",
        "Greater flexibility around next steps",
        "Value student fit, individual interests, development and long-term goals alongside academic outcomes",
      ],
    },
  ];

  return (
    <div className="tab-content">
      <section className="content-section" id="applicant-blueprint">
        <SectionHeading number="01" pattern="Profile strategic lever" title="The top-applicant regional blueprint" description="Convert the HK applicant baseline into a differentiated, credible application profile." />
        <div className="applicant-subsection">
          <header className="applicant-subhead"><span>01</span><div><p>Regional pattern set</p><h3>HK Top Applicant Characteristics</h3></div></header>
          <div className="applicant-insight-list">
            {topApplicantCharacteristics.map((item, index) => (
              <article className="applicant-insight" key={item.title}>
                <div className="applicant-insight-title"><span>{String(index + 1).padStart(2, "0")}</span><h4>{item.title}</h4></div>
                <div className="applicant-insight-copy">
                  {item.label && <small>{item.label}</small>}
                  <p>{item.description}</p>
                  <div className="applicant-lever"><span>Strategic lever</span><p>{item.lever}</p></div>
                  {item.source && <div className="applicant-source"><span>Original source — preserved</span><p>{item.source}</p></div>}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="applicant-subsection">
          <header className="applicant-subhead"><span>02</span><div><p>General baseline</p><h3>HK Applicant General Characteristics</h3></div></header>
          <div className="applicant-insight-list applicant-insight-list-compact">
            {generalApplicantCharacteristics.map((item, index) => (
              <article className="applicant-insight" key={item.title}>
                <div className="applicant-insight-title"><span>{String(index + 1).padStart(2, "0")}</span><h4>{item.title}</h4></div>
                <div className="applicant-insight-copy"><p>{item.description}</p><div className="applicant-lever"><span>Strategic lever</span><p>{item.lever}</p></div></div>
              </article>
            ))}
          </div>
        </div>

        <article className="distinguishing-panel">
          <header className="applicant-subhead"><span>03</span><div><p>Profile benchmark</p><h3>What Distinguishes a Top Applicant Profile</h3></div></header>
          <div className="distinguishing-grid">
            {distinguishingTraits.map((trait, index) => <div key={trait}><span>{String(index + 1).padStart(2, "0")}</span><p>{trait}</p></div>)}
          </div>
        </article>
      </section>

      <section className="content-section" id="communication">
        <SectionHeading number="02" pattern="Communication + escalation protocol" title="Cultural navigation playbook" description="How the HK team can make strategy feel visible, responsive and locally credible." />
        <div className="communication-grid">
          {communicationRows.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}
        </div>
        <div className="legal-alert"><AlertTriangle size={19} /><div><span>Legal boundary directive</span><strong>Do not advise on UK fee status.</strong><p>Route complex cases to UKCISA with the relevant facts and documentation.</p></div></div>
        <div className="client-stream-heading"><p>Main client streams</p><h3>Local, Mainland and Expat families</h3><span>Use the distinctions below to calibrate communication, reporting and strategic framing.</span></div>
        <div className="client-streams">
          {clientStreams.map((stream, index) => <article key={stream.title}><span>0{index + 1}</span><h3>{stream.title}</h3><ul>{stream.traits.map((trait) => <li key={trait}>{trait}</li>)}</ul></article>)}
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
        <SectionHeading number="04" pattern="Searchable localized resource library" title="Localized ECL opportunities" description="A structured list of HK opportunities." />
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
  const requestedTab = new URLSearchParams(window.location.search).get("tab");
  const initialTab: TabId = requestedTab === "schools" || requestedTab === "strategy" ? requestedTab : "market";
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
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
