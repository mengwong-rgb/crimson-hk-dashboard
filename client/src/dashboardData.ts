/**
 * Editorial Intelligence Console — structured HK-specific content.
 * Data is distilled from the user's draft HTML and content documents; draft fields remain explicit.
 */

export type TabId = "market" | "schools" | "strategy" | "useful";

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
      { id: "market-overview", label: "Market Overview" },
      { id: "curricula", label: "Curricula Comparison" },
      { id: "pathways", label: "Timelines & Pathways" },
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
      { id: "school-profiles", label: "School Profiles" },
      { id: "boarding", label: "Boarding Pipelines" },
      { id: "student-case-studies", label: "HK Student Case Studies" },
      { id: "services", label: "BU Services" },
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
      { id: "applicant-blueprint", label: "HK Applicant Characteristics" },
      { id: "communication", label: "Communication Playbook" },
      { id: "competitors", label: "Competitor Intel" },
      { id: "ecl", label: "Localized ECLs" },
    ],
  },
  {
    id: "useful",
    eyebrow: "Tab 04",
    title: "Useful Links",
    shortTitle: "Useful links",
    summary: "Quick access to frequently used Hong Kong student data and education references.",
    image: "",
    sections: [
      { id: "useful-links", label: "Useful Links" },
    ],
  },
];

export const curriculumRows = [
  {
    label: "HK client prevalence",
    ib: "45%",
    alevel: "35%",
    ap: "15%",
    dse: "5%",
  },
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
    dse: "St. Paul's Co-educational College; Diocesan Girls' School; Diocesan Boys' School; St. Paul’s Convent School",
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
    website: "https://truenorth-edu.com/",
    position: "HK-headquartered holistic admissions consultancy for US/UK universities and boarding schools.",
    strength: "Strong local roots and premium, long-term positioning.",
    weakness: "Public operating scale and outcome validation are less transparent than global networks.",
  },
  {
    name: "InGenius Prep",
    website: "https://ingeniusprep.com/",
    position: "Global admissions platform using former admissions officers and localized acquisition.",
    strength: "Large counselor bench, broad services and strong digital conversion funnel.",
    weakness: "May feel less locally intimate; distributed scale can complicate personalization.",
  },
  {
    name: "Quantum Prep",
    website: "https://quantumprep.com.hk/",
    position: "Selective HK boutique combining premium US/UK admissions consulting and tutoring.",
    strength: "Elite-university relevance and a selective, high-intent image.",
    weakness: "Smaller capacity and limited public evidence of local operating scale.",
  },
  {
    name: "Added Education",
    website: "https://addededucation.com/",
    position: "Profile-building specialist spanning admissions, research and athletic recruitment.",
    strength: "Distinctive athlete and research niche with early student engagement.",
    weakness: "Narrower overall service proposition and limited HK-specific outcome evidence.",
  },
  {
    name: "ARCH Education",
    website: "https://www.arch-education.com/",
    position: "HK education centre covering admissions, tutoring, enrichment and testing.",
    strength: "Strong physical presence and a broad family journey from enrichment to admissions.",
    weakness: "A broad portfolio may dilute premium admissions specialization.",
  },
  {
    name: "UNIKEY Academy",
    website: "https://unikeyacademy.com/",
    position: "Bilingual HK boutique focused on Oxbridge, Ivy League, medicine and boarding schools.",
    strength: "Direct US/UK overlap, specialist pathways and personalised attention.",
    weakness: "Boutique capacity and company-reported claims require validation.",
  },
  {
    name: "Academic Asia",
    website: "https://www.academic-asia.com/en",
    position: "UK-led network for school placement, events, guardianship and university services.",
    strength: "Established UK network and boarding-school credibility.",
    weakness: "UK-heavy proposition with weaker direct US and holistic overlap.",
  },
  {
    name: "Bonday Education（棒呆国际教育）",
    website: "https://www.bonday.com/",
    position: "China-origin overseas-study brand offering US/UK planning and digital tools.",
    strength: "Chinese-language reach and a multi-city, technology-enabled ecosystem.",
    weakness: "Mainland-centric positioning and limited independent HK evidence.",
  },
  {
    name: "Stoooges Education（三士渡教育）",
    website: "https://stoooges.com/web/",
    position: "Mainland-oriented education organization with multi-city reach.",
    strength: "Potential access to Mainland family networks and cross-border influence.",
    weakness: "Limited accessible HK-specific positioning, service detail and activity evidence.",
  },
];

export const eclGroups = [
  {
    title: "Medicine",
    items: [
      { name: "Tseung Kwan O Hospital Volunteering", url: "https://www.ha.org.hk/tkoh/hrc/hrc_e/volunteergroup_eng.html" },
      { name: "Queen Mary Hospital Volunteering", url: "https://www8.ha.org.hk/qmh/patient_and_visitor/forms/docs/prc/prc_volunteer_application_form_eng.pdf" },
      { name: "Queen Mary Hospital Student Exposure Programme", url: "https://www8.ha.org.hk/qmh/patient_and_visitor/forms/forms.aspx" },
      { name: "Hong Kong Adventist Hospital Volunteering", url: "https://www.hkah.org.hk/en/careers/volunteer" },
      { name: "HKU Medify Summer Immersion Programme", url: "https://hkumed-ugadmissions.hku.hk/hkumedify/summer-immersion-programme-2026/" },
      { name: "HKU Medify Teenage Orthopod Scheme", url: "https://hkumed-ugadmissions.hku.hk/hkumedify/teenage-orthopod-scheme/" },
      { name: "HKU Medify Budding Resuscitation Team", url: "https://qa-hkumed-ugadmissions.med.hku.hk/hkumedify/budding-resuscitation-team-2024/" },
      { name: "HKU Budding Health Leader Programme", url: "https://talented.hku.hk/hku_programmes/budding-health-leadership-academy/" },
      { name: "CUHK Summer Clinical Attachment Programme", url: "https://www.med.cuhk.edu.hk/upcoming-events/summer-clinical-attachment-programme-2024" },
      { name: "Asian Medical Students’ Association Hong Kong MedStart", url: "https://www.amsahk.org/medstart-2026" },
      { name: "CUHK Medical Society Health Exhibition Presentation Competition", url: "https://cuhkhealthexhibition.co/?page_id=37" },
      { name: "HKU Medical Ethics and Humanities Unit Ethos Essay Competition", url: "https://www.ethos.hku.hk/competitions/hk-secondaryschools-2024" },
    ],
  },
  {
    title: "STEM",
    items: [
      { name: "HKUST Bright Future Cup", url: "https://abfye.hkust.edu.hk/news/bright-future-cup-2025" },
      { name: "S.T. Yau High School Science Awards (Asia)", url: "https://yauaward-asia.hk" },
      { name: "Hong Kong Budding Scientists Award", url: "https://www.edb.gov.hk/en/curriculum-development/curriculum-area/gifted/resources_and_support/competitions/local/bsa-info.html" },
      { name: "Hang Lung Mathematics Award", url: "https://hlma.hanglung.com/en/awards#:~:text=The%20Hang%20Lung%20Mathematics%20Awards,methodology%2C%20research%2C%20and%20scholarship." },
      { name: "HKUST Electronic Circuit Construction Challenge", url: "https://abfye.hkust.edu.hk/news/electronic-circuit-construction-challenge-2025" },
      { name: "Hong Kong Mathematics Olympiad", url: "https://www.edb.gov.hk/en/curriculum-development/kla/ma/res/sa/hkmo-index.html" },
      { name: "HKUST Enrichment Program for Gifted Learners", url: "https://cdgt.hkust.edu.hk/epgl-overview" },
      { name: "Hong Kong Student Science Project Competition", url: "https://hksspc.hkfyg.org.hk/en/competition_details/" },
      { name: "HKUST Academy for Bright Future Young Engineers", url: "https://abfye.hkust.edu.hk/about-us" },
      { name: "CityU Science Patent Challenge", url: "https://www.cityu.edu.hk/csci/local-school-outreach/cityuhk-science-patent-challenge-2024-25" },
      { name: "GT College International Science Project Competition (formerly known as Greater Bay Area Science Project Competition)", url: "https://www.gtcispc-gec-hk.com" },
      { name: "CityU Science Video Competition", url: "https://www.cityu.edu.hk/csci/local-school-outreach/cityu-science-video-competition-2023" },
      { name: "Innovate for Future", url: "https://www.innovateforfuture.com" },
      { name: "PolyU Engineering Project Competition", url: "https://www.polyu.edu.hk/aae/news-and-events/event/2023/7/polyu-engineering-project-competition-2023/" },
      { name: "Hong Kong Youth Science & Technology Innovation Competition", url: "https://stic.newgen.org.hk/en/%E5%8F%83%E8%B3%BD%E9%A0%85%E7%9B%AE/%E4%B8%AD%E5%AD%B8%E7%B5%84%E7%A0%94%E7%A9%B6%E5%8F%8A%E7%99%BC%E6%98%8E%E9%A1%9E%E5%88%A5%E8%A8%BB%E9%87%8B/" },
      { name: "Mathematical Modelling Competition for Secondary Students", url: "https://www.edb.gov.hk/en/curriculum-development/kla/ma/res/MMCSS.html" },
    ],
  },
  {
    title: "Humanities / Art / Social Sciences",
    items: [
      { name: "Hong Kong Budding Poets Award", url: "https://hkage.org.hk/hkbpa/index.php" },
      { name: "Hong Kong Young Writers Awards", url: "https://www.hkywa.com/for_teachers/all-submission-instructions/" },
      { name: "Hong Kong Educational Publishing Company Annual Book Report Competition", url: "https://bookreport.hkep.com/intro_e.html#002" },
      { name: "Team YP (South China Morning Post)", url: "https://www.scmp.com/yp/report/team-yp/article/3057140/what-team-yp-and-how-can-i-be-part-it" },
      { name: "Young Post Summer Internship (South China Morning Post)", url: "https://www.scmp.com/yp/report/team-yp/article/3057140/what-team-yp-and-how-can-i-be-part-it" },
      { name: "The Wharf Hong Kong Secondary School Art Competition", url: "https://wharfhkart.com/en" },
      { name: "HKU Medical Ethics and Humanities Unit Ethos Essay Competition", url: "https://www.ethos.hku.hk/competitions/hk-secondaryschools-2024" },
      { name: "HKSS Debating", url: "https://www.hkssdebating.com/" },
      { name: "Sing Tao Inter-School Debating Competition", url: "https://www2.stheadline.com/mkt/debate/index_e03_01.html" },
      { name: "HK Museum of History Inter-School Competition of Project Learning on Hong Kong’s History and Culture", url: "https://hk.history.museum/en/web/mh/activities/school-competition-2011-2025-14.html" },
      { name: "PolyU Technology in Business Case Competition", url: "https://www.polyu.edu.hk/fb/news-events/event/2025/04/technology-in-business-case-competition/?sc_lang=en" },
      { name: "Hong Kong Linguistics Olympiad", url: "https://www.polyu.edu.hk/cbs/rp2u2/en/research/education-training/hklo/" },
      { name: "S.T. Yau High School Science Awards (Asia)", url: "https://yauaward-asia.hk" },
    ],
  },
  {
    title: "Summer Institutes",
    items: [
      { name: "HKU Summer Institute", url: "https://www.summerinstitute.hku.hk/programmes/secondary-school-programmes" },
      { name: "CUHK Summer Institute", url: "https://www.summer.cuhk.edu.hk/courses/" },
      { name: "HKUST Summer Institute", url: "https://summer.hkust.edu.hk/courses" },
      { name: "HKUST Enrichment Program for Gifted Learners", url: "https://cdgt.hkust.edu.hk/epgl-overview" },
      { name: "HKU Medicine Institute for Youth (HKUMedify)", url: "https://hkumed-ugadmissions.hku.hk/hkumedify/#_Programmes" },
    ],
  },
];
