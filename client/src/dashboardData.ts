/**
 * Editorial Intelligence Console — structured HK-specific content.
 * Data is distilled from the user's draft HTML and content documents; draft fields remain explicit.
 */

export type TabId = "market" | "schools" | "strategy";

export type SectionLink = {
  id: string;
  label: string;
};

export type TabConfig = {
  id: TabId;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  sections: SectionLink[];
};

export const tabs: TabConfig[] = [
  {
    id: "market",
    eyebrow: "Tab 01",
    title: "Market Landscape & Education Systems",
    shortTitle: "Market & systems",
    summary:
      "Outbound demand, HK client expectations, curricula comparison, and the local application gateway.",
    image: "/manus-storage/hk-curricula-editorial_a31abd88.png",
    sections: [
      { id: "market-overview", label: "Market overview" },
      { id: "curricula", label: "Curricula comparison" },
      { id: "pathways", label: "Timelines & pathways" },
    ],
  },
  {
    id: "schools",
    eyebrow: "Tab 02",
    title: "Feeder Schools & Candidate Outcomes",
    shortTitle: "Schools & outcomes",
    summary:
      "Institutional context, counselling environments, boarding-school pipelines, and HK service assets.",
    image: "/manus-storage/hk-school-pathways-editorial_bf4c772a.png",
    sections: [
      { id: "school-profiles", label: "School profiles" },
      { id: "boarding", label: "Boarding pipelines" },
      { id: "services", label: "BU services" },
      { id: "asset-plan", label: "Asset execution" },
    ],
  },
  {
    id: "strategy",
    eyebrow: "Tab 03",
    title: "Strategy, Culture & Competitor Intel",
    shortTitle: "Strategy & intel",
    summary:
      "Profile strategy, communication norms, competitor positioning, and localized ECL resources.",
    image: "/manus-storage/hk-strategy-editorial_a7ff22ad.png",
    sections: [
      { id: "applicant-blueprint", label: "Top applicant blueprint" },
      { id: "communication", label: "Communication playbook" },
      { id: "competitors", label: "Competitor intel" },
      { id: "ecl", label: "Localized ECLs" },
    ],
  },
];

export const curriculumRows = [
  {
    label: "Core structure",
    ib: "TOK, EE and CAS plus six subjects, normally 3 HL + 3 SL. Ambitious students may take 4 HL + 2 SL.",
    alevel:
      "4–5 subjects at AS, usually tapering to 3–4 at A2. IGCSE commonly precedes the programme.",
    ap: "US High School Diploma coursework plus AP subjects. 3–5 APs is typical; highly ambitious profiles may take more.",
    dse: "Three years JSE + three years SSE. Four core subjects plus 2–4 electives; M1/M2 may extend Mathematics.",
  },
  {
    label: "Assessment",
    ib: "Maximum 45 points, combining external examinations and internally assessed work.",
    alevel: "A*–E at A-Level, with external assessment and possible resits.",
    ap: "School GPA plus annual AP examinations graded 1–5.",
    dse: "Levels 1–5, with 5* and 5** distinctions; public examinations plus school-based assessment.",
  },
  {
    label: "HK client prevalence",
    ib: "45%",
    alevel: "35%",
    ap: "15%",
    dse: "5%",
  },
  {
    label: "Best fit",
    ib: "Well-rounded, creative, self-directed students targeting the US and/or UK.",
    alevel: "Academic specialists with deep subject focus, especially for top UK and Oxbridge routes.",
    ap: "Students targeting the US or preferring flexible subject selection and modular examinations.",
    dse: "Students focused on HK local universities through JUPAS or strong in examination-led learning.",
  },
  {
    label: "Indicative benchmarks",
    ib: "Oxbridge 43–45; Top 10 UK 39–41; Top US outcomes typically require very high 40s profiles.",
    alevel: "Oxbridge / Top UK commonly 3–4 A*/A; US top-tier applicants often present four strong A-Levels.",
    ap: "Top US applicants typically combine a 3.9–4.0 unweighted GPA with multiple AP scores of 5.",
    dse: "Accepted directly by UK universities; US top-tier pathways generally require multiple 5*/5** results.",
  },
  {
    label: "Example schools",
    ib: "ISF Academy; Victoria Shanghai Academy",
    alevel: "Harrow; St. Paul's Convent; Kellett",
    ap: "Hong Kong International School",
    dse: "Placeholder — examples to be confirmed",
  },
];

export const ageAlignment = [
  { track: "US", values: ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"] },
  {
    track: "UK / IB",
    values: [
      "Year 8",
      "Year 9",
      "Year 10 / IGCSE",
      "Year 11 / IGCSE",
      "Year 12 / Lower Sixth / IBDP",
      "Year 13 / Upper Sixth / IBDP",
    ],
  },
  {
    track: "Hong Kong",
    values: [
      "Form 1 / Sec 1",
      "Form 2 / Sec 2",
      "Form 3 / Sec 3",
      "Form 4 / Sec 4",
      "Form 5 / Sec 5",
      "Form 6 / Sec 6",
    ],
  },
];

export type School = {
  name: string;
  tracks: string[];
  pathway: string;
  note: string;
  students: number;
  highflyer?: string;
  draft?: boolean;
};

export const schools: School[] = [
  {
    name: "Canadian International School of Hong Kong (CDNIS)",
    tracks: ["IB"],
    pathway: "MYP + Canadian OSSD → IBDP + Canadian OSSD",
    note: "Transparent early predicted grades; knowledgeable university guidance. Referenced average IB: 37.",
    students: 32,
  },
  {
    name: "German Swiss International School (GSIS)",
    tracks: ["IB"],
    pathway: "IGCSE → IBDP / German International Abitur",
    note: "Highly regarded and academically intense. Early UK1 deadlines may arrive with short notice.",
    students: 35,
  },
  {
    name: "Harrow International School Hong Kong",
    tracks: ["A-Level"],
    pathway: "GCSE → A-Level",
    note: "EPQ strongly encouraged; students normally take three A-Levels plus Further Maths where appropriate.",
    students: 40,
  },
  {
    name: "Hong Kong International School (HKIS)",
    tracks: ["AP"],
    pathway: "AP / American",
    note: "Leading American-style school in HK; some classes may exceed standard AP level.",
    students: 61,
  },
  {
    name: "Chinese International School (CIS)",
    tracks: ["IB"],
    pathway: "MYP → IBDP",
    note: "Year 10 includes the Hangzhou programme; interdisciplinary focus and strong referenced IB outcomes.",
    students: 59,
  },
  {
    name: "Sha Tin College",
    tracks: ["IB", "ESF"],
    pathway: "IGCSE → IBDP (ESF)",
    note: "Part of ESF. Referenced average IB: 37.",
    students: 21,
  },
  {
    name: "ISF Academy",
    tracks: ["IB"],
    pathway: "IBDP",
    note: "Known for strong internal guidance and sensitivity toward external consultants.",
    students: 37,
  },
  {
    name: "St. Paul's Co-educational College (SPCC)",
    tracks: ["DSE", "IB"],
    pathway: "DSE / IBDP",
    note: "Students select curriculum from Form 4 onwards during Form 3; no GCSE-equivalent transcript for IB.",
    students: 12,
  },
  {
    name: "Diocesan Girls' School (DGS)",
    tracks: ["DSE", "A-Level"],
    pathway: "DSE / A-Level",
    note: "Very strong academics. A-Level route also includes English and Chinese.",
    students: 14,
  },
  {
    name: "Diocesan Boys' School (DBS)",
    tracks: ["DSE", "IB"],
    pathway: "DSE / IBDP",
    note: "DSE and IB paths share structure through Grade 9; Grade 10 serves as an IB bridge year.",
    students: 8,
  },
  {
    name: "St. Paul's Convent School (SPCS)",
    tracks: ["DSE", "A-Level"],
    pathway: "DSE / IGCSE → A-Level",
    note: "Very strong academics; a small number of BTEC subjects are also offered.",
    students: 4,
  },
  {
    name: "King George V School (KGV)",
    tracks: ["IB", "ESF"],
    pathway: "IGCSE → IB (ESF)",
    note: "Chinese B HL / ab initio language SL constraints may affect programme planning.",
    students: 18,
  },
  {
    name: "Kellett School",
    tracks: ["A-Level"],
    pathway: "IGCSE → A-Level",
    note: "Predicted-grade flexibility may be greater; internal university guidance is described as less intensive.",
    students: 12,
  },
  {
    name: "South Island School (SIS)",
    tracks: ["Draft"],
    pathway: "Placeholder — curriculum profile to be confirmed",
    note: "HK-specific school and counselling notes to be added.",
    students: 21,
    highflyer: "Internal outcome example requires final approval before publication.",
    draft: true,
  },
  {
    name: "Island School",
    tracks: ["Draft"],
    pathway: "Placeholder — curriculum profile to be confirmed",
    note: "HK-specific school and counselling notes to be added.",
    students: 20,
    draft: true,
  },
  {
    name: "Singapore International School (Hong Kong)",
    tracks: ["Draft"],
    pathway: "Placeholder — curriculum profile to be confirmed",
    note: "HK-specific school and counselling notes to be added.",
    students: 15,
    draft: true,
  },
  {
    name: "Po Leung Kuk Choi Kai Yau School (CKY)",
    tracks: ["Draft"],
    pathway: "Placeholder — curriculum profile to be confirmed",
    note: "HK-specific school notes to be added; counselling information is available elsewhere in the source.",
    students: 4,
    draft: true,
  },
  {
    name: "Yew Chung International School (YCIS Hong Kong)",
    tracks: ["Draft"],
    pathway: "Placeholder — curriculum profile to be confirmed",
    note: "HK-specific school and counselling notes to be added.",
    students: 7,
    draft: true,
  },
  {
    name: "Victoria Shanghai Academy (VSA)",
    tracks: ["IB"],
    pathway: "IBDP",
    note: "Placeholder — full counselling and admissions notes to be confirmed.",
    students: 16,
    draft: true,
  },
  {
    name: "West Island School (WIS)",
    tracks: ["ESF"],
    pathway: "ESF international school",
    note: "Part of ESF. Placeholder — full school notes to be confirmed.",
    students: 6,
    draft: true,
  },
];

export const communicationRows = [
  ["Proactive support", "Parents expect visible timelines, roadmaps and evidence of value-add."],
  ["Written roadmaps", "Structured written plans and progress visibility are increasingly important."],
  ["Sophisticated UK audience", "Families may ask detailed UK admissions questions from ISM / pre-sales onward."],
  ["Privacy", "Some families prefer discretion around external-consultant relationships."],
  ["Parent involvement", "Involvement ranges from high-touch direction to regular progress reporting."],
  ["Channels", "WhatsApp, WeChat and Instagram DM are identified as common communication channels."],
];

export const competitors = [
  {
    name: "True North Education",
    position: "HK-headquartered holistic admissions consultancy for US/UK universities and boarding schools.",
    strength: "Strong local roots and premium, long-term positioning.",
    weakness: "Public operating scale and outcome validation are less transparent than global networks.",
  },
  {
    name: "InGenius Prep",
    position: "Global admissions platform using former admissions officers and localized acquisition.",
    strength: "Large counselor bench, broad services and strong digital conversion funnel.",
    weakness: "May feel less locally intimate; distributed scale can complicate personalization.",
  },
  {
    name: "Quantum Prep",
    position: "Selective HK boutique combining premium US/UK admissions consulting and tutoring.",
    strength: "Elite-university relevance and a selective, high-intent image.",
    weakness: "Smaller capacity and limited public evidence of local operating scale.",
  },
  {
    name: "Added Education",
    position: "Profile-building specialist spanning admissions, research and athletic recruitment.",
    strength: "Distinctive athlete and research niche with early student engagement.",
    weakness: "Narrower overall service proposition and limited HK-specific outcome evidence.",
  },
  {
    name: "ARCH Education",
    position: "HK education centre covering admissions, tutoring, enrichment and testing.",
    strength: "Strong physical presence and a broad family journey from enrichment to admissions.",
    weakness: "A broad portfolio may dilute premium admissions specialization.",
  },
  {
    name: "UNIKEY Academy",
    position: "Bilingual HK boutique focused on Oxbridge, Ivy League, medicine and boarding schools.",
    strength: "Direct US/UK overlap, specialist pathways and personalised attention.",
    weakness: "Boutique capacity and company-reported claims require validation.",
  },
  {
    name: "Academic Asia",
    position: "UK-led network for school placement, events, guardianship and university services.",
    strength: "Established UK network and boarding-school credibility.",
    weakness: "UK-heavy proposition with weaker direct US and holistic overlap.",
  },
  {
    name: "Bonday Education",
    position: "China-origin overseas-study brand offering US/UK planning and digital tools.",
    strength: "Chinese-language reach and a multi-city, technology-enabled ecosystem.",
    weakness: "Mainland-centric positioning and limited independent HK evidence.",
  },
  {
    name: "Stoooges Education",
    position: "Mainland-oriented education organization with multi-city reach.",
    strength: "Potential access to Mainland family networks and cross-border influence.",
    weakness: "Limited accessible HK-specific positioning, service detail and activity evidence.",
  },
];

export const eclGroups = [
  {
    title: "Medicine",
    items: [
      "Tseung Kwan O Hospital Volunteering",
      "Queen Mary Hospital Volunteering",
      "HKU Medify Clinical Exposure Programme",
      "HKU Medify Summer Immersion Programme",
      "HKU Budding Health Leader Programme",
      "CUHK Summer Clinical Attachment Programme",
      "AMSA Hong Kong MedStart",
      "HKU Medical Ethics & Humanities Ethos Essay Competition",
    ],
  },
  {
    title: "STEM",
    items: [
      "HKUST Bright Future Cup",
      "S.T. Yau High School Science Awards (Asia)",
      "Hong Kong Budding Scientists Award",
      "Hang Lung Mathematics Award",
      "Hong Kong Mathematics Olympiad",
      "Hong Kong Student Science Project Competition",
      "HKUST Academy for Bright Future Young Engineers",
      "Hong Kong Youth Science & Technology Innovation Competition",
    ],
  },
  {
    title: "Humanities / Art / Social Sciences",
    items: [
      "Hong Kong Budding Poets Award",
      "Hong Kong Young Writers Awards",
      "Team YP (South China Morning Post)",
      "Young Post Summer Internship",
      "HKSS Debating",
      "Hong Kong Economics Olympiad",
      "Hong Kong Linguistics Olympiad",
    ],
  },
  {
    title: "Summer Institutes",
    items: [
      "HKU Summer Institute",
      "HKU Academy for the Talented Summer Programmes",
      "CUHK Summer Institute",
      "HKUST Summer Institute",
      "HKU Medicine Institute for Youth (HKUMedify)",
    ],
  },
];
