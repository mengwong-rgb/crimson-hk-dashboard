# Tab 2 Revision Notes from `tab2prompt.docx`

This file records the user's screenshot-based instructions for **Tab 2 only**. These instructions are the source of truth for the next implementation pass. Unless explicitly stated below, surrounding layout and content should stay unchanged.

## Section 1 — School directory redesign

### Visual layout intent from screenshots

The current grid of school cards should be reworked into a **two-panel feeder-school directory**. The left panel should function as a searchable/selectable school list. The right panel should show a focused detail view for the currently selected school.

The user wants the directory to separate schools by both:

1. **School type**: `International` and `Local`
2. **Curriculum**: `IB`, `A-Levels`, `AP`, and `HKDSE`

The screenshots indicate the desired interaction pattern is:

- Top-level section title remains under Tab 2.
- A compact segmented control for `International` / `Local`
- Search field remains present.
- Curriculum filters remain available and should work with the type split.
- Left column: school list items
- Right column: selected-school detail card

### School-detail panel requirements

The selected-school detail panel should include:

- School name as the main heading
- Curriculum tags near the top
- A **View IB Results** button when relevant to IB schools
- An **Overview** area that surfaces:
  - Academic strength
  - Extracurricular environment
  - Teacher guidance on ECL
- Internal data summary cards using the supplied fields such as:
  - Students
  - Highflyers
  - Counsellors
  - Counselling environment
  - University guidance starts
  - Curriculum
  - Primary target

### IB result button

The user explicitly wants to keep a `View IB Results` button and provided the destination link:

`https://www.hk-schools.com/post/hong-kong-ib-results-2026`

The notes say the user is unsure where to place it because not every school offers IB. The screenshots suggest the button should sit near the selected-school title in the right-hand detail panel. It should therefore appear contextually for IB-capable schools rather than as a global Tab 2 button.

## Section 1 — Full feeder-school data to build into HTML

The document includes a much larger school dataset than the current Tab 2 implementation. The HTML should be rebuilt around that dataset rather than the shorter current cards.

The fully extracted records currently captured are:

### International schools captured so far

- Canadian International School of Hong Kong (CDNIS)
- Chinese International School (CIS)
- German Swiss International School (GSIS)
- Harrow International School Hong Kong
- Hong Kong International School (HKIS)
- The ISF Academy
- Sha Tin College (ESF)
- Victoria Shanghai Academy (VSA)
- West Island School (ESF)
- Po Leung Kuk Choi Kai Yau School (CKY)
- King George V School (KGV — ESF)
- Kellett School
- South Island School (SIS — ESF)
- Island School (ESF)
- Yew Chung International School (YCIS)
- Singapore International School HK (SISHK)

Pages 6–10 visually confirm that the international-school table continues with Harrow, HKIS, ISF, Sha Tin College, VSA, West Island School, CKY, KGV, Kellett, and South Island School using the same field structure. The screenshots also reinforce that the user expects these long text fields to be surfaced inside a cleaner school-detail panel rather than shown as a raw table in the final HTML.

### Local schools captured so far

- St. Paul's Co-educational College (SPCC)
- Diocesan Girls' School (DGS)
- Diocesan Boys' School (DBS)
- St. Paul's Convent School (SPCS)

Additional extraction is still required to confirm whether the document contains more schools beyond those already captured.

Pages 11–15 visually confirm the final international-school rows for Island School, YCIS, and SISHK, then begin the local-school section with SPCC, DGS, DBS, and SPCS. No additional local-school names are visible in these pages beyond those four. The local-school records follow the same eleven-field structure as the international schools, which means both school groups can share a single data model in the implementation while still being separated by school type and curriculum in the UI.

## Additional screenshot findings from pages 6–10

The middle pages continue the dense feeder-school table and do not introduce a different structural pattern. Their main implementation value is confirmation that the same eleven fields repeat for each school record and should therefore be modeled as one consistent data structure.

The screenshots also make clear that the user prefers a **selected-school detail experience** over a masonry grid for this section. The final directory should therefore emphasize one chosen school at a time, with the richer text blocks for academic strength, extracurricular environment, and teacher guidance on ECL presented in the right-hand detail pane.

Pages 14–15 additionally confirm the next Tab 2 transition: after the local-school records, the document returns to the current `US & UK boarding-school pipelines` section, which the user wants to replace with concrete US and UK boarding-school content rather than placeholders.

## Section 2 — Boarding-school pipelines

The user wants the placeholder boarding section replaced with concrete content.

### US boarding school block

- Title: `US Boarding School`
- Most common US boarding schools:
  - The Hotchkiss School
  - Phillips Exeter Academy
- Crimson HK Students Number: `24`
- Highflyers: `11`
- Strength of students:
  - Strong academic preparation and intellectual confidence
  - Strong discussion, communication and critical-thinking skills
  - Broad extracurricular exposure across leadership, sport, arts and service
  - High independence and maturity from the boarding-school environment
  - Familiar with the US college admissions process and holistic applications
- Weakness of students:
  - Harder to stand out within a highly competitive applicant pool
  - Strong school support can make applications look similar to peers
  - Activities may be broad but lack a distinctive personal spike
  - Need a clear individual narrative beyond the boarding-school brand
  - High-achieving peer environment can increase pressure around grades and admissions

### UK boarding school block

- Title: `UK Boarding School`
- Most common UK boarding schools:
  - Brighton College
  - Tonbridge School
  - Eton College
  - Dulwich College
  - Caterham School
- Crimson HK Students Number: `143`
- Highflyers: `60`
- Strength of students:
  - Strong academic depth and subject mastery
  - Strong preparation for rigorous university-level study
  - High independence, discipline and time-management skills
  - Strong co-curricular exposure across leadership, sport, arts and service
  - Well prepared for UK university applications and academically focused pathways
- Weakness of students:
  - Academic profile may be stronger than the extracurricular profile needed for US admissions
  - Early subject specialisation can reduce academic breadth for US applications
  - Less familiarity with US-style personal branding and holistic admissions
  - Activities may need stronger evidence of individual impact, initiative and leadership
  - Need to translate UK achievements and qualifications clearly for US admissions readers

### Additional boarding-section addition

After the US/UK boarding-school section, add a new section for **Hong Kong Student Case Studies**.

The user only wants a button here, something like:

- `View HK student full case studies`

This should be a **placeholder redirect button** for now, with the link to be inserted later.

## Section 3 — BU services

### Requested changes

1. Remove the sentence:
   - `The service structure is confirmed, while HK-specific positioning and case material remain pending.`
2. For each service section — `Delta`, `Indigo`, `Capstone`, and `Rise` — create a button that redirects to another webpage for HK student case studies.
3. The user will provide or insert those links later, so these should be clearly implemented as placeholder external-link buttons.

## Section 4 — Asset execution

The user explicitly said to **delete the entire “Proprietary asset execution” section** from Tab 2.

## Additional screenshot findings from pages 16–19

The last pages visually confirm the exact presentation the user expects for the boarding-school replacement: a clean two-block comparison, one for **US Boarding School** and one for **UK Boarding School**, each effectively functioning like a compact two-column fact table with rows for common schools, Crimson HK Students Number, Highflyers, Strength of students, and Weakness of students.

The screenshots also confirm the desired **Hong Kong Student Case Studies** treatment: this is not a text-heavy section but a simple CTA area anchored by one prominent burgundy button, something like **“View Full Case”** or **“View HK student full case studies.”** The button should exist as a placeholder redirect target until the user inserts the final link.

For the BU services section, the screenshots make clear that the existing four service tiles should remain, but each service tile should gain its own case-study button. The explanatory sentence about the service structure being confirmed should be removed.

The final screenshot explicitly confirms that the whole **Proprietary asset execution** block should be removed from Tab 2 rather than rewritten or replaced.

## Global instruction for this Tab 2 pass

1. Apply only the changes explicitly requested in this file.
2. Do not independently shorten, rewrite, or remove content beyond the above instructions.
3. Tabs 1 and 3 must remain unchanged.

## Verification findings

The live desktop Tab 2 now renders exactly three sections: School profiles, Boarding pipelines, and BU services. The removed Proprietary asset execution section no longer appears in the hero section list, sidebar subsection list, or page body.

The school directory opens with 16 International schools and provides separate International / Local controls plus All, IB, A-Levels, AP, and HKDSE curriculum filters. The selected-school detail view shows the full academic strength, extracurricular environment, teacher guidance on ECL, counsellor, counselling environment, guidance start, curriculum, primary target, Crimson HK student, and Highflyer fields. The View IB Results link appears contextually for the selected IB-capable school and points to the URL supplied by the user.

The boarding placeholders have been replaced by the supplied US and UK data blocks, followed by the Hong Kong Student Case Studies placeholder CTA. The BU-services explanatory sentence has been removed, and Capstone, Delta, Rise, and Indigo each now include a placeholder HK case-study button.

The school-type controls were tested in the live interface. `Local Schools` correctly shows exactly four supplied records — SPCC, DGS, DBS, and SPCS — with HKDSE tags and no IB-results button. Returning to `International Schools` restores all sixteen supplied records and the contextual IB-results link for the selected IB-capable school.

The `A-Levels` curriculum filter correctly narrows the International list to Harrow, Kellett, and SISHK, and the selected Harrow detail panel does not show a View IB Results button. The search field was also tested together with the active A-Levels filter; searching for `Harrow` returns exactly the Harrow record and preserves its full detail content.

The mobile screenshot confirms that the school-type controls, curriculum filters, horizontally scrollable school selector, selected-school detail blocks, both boarding profiles, case-study CTA, and all four BU-service buttons remain readable in a single-column responsive flow. Desktop screenshots of all three tab URLs confirm that Tabs 1 and 3 remain visually intact. Type checking, the production build, and client-side runtime-log checks completed without errors.
