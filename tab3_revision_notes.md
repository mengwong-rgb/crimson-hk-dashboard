# Tab 3 Revision Notes from `tab3prompt.pdf`

This file records the user's screenshot-based instructions for **Tab 3 only**. These instructions are the source of truth for the next implementation pass. Unless explicitly stated below, surrounding layout and content should stay unchanged.

## Section 1 — Replace the current top-applicant blueprint block

### Requested removals

1. Delete the entire yellow **"Strategist validation required"** placeholder block.
2. Delete the visible **Hong Kong Knowledge Packet** source-note text in this section.

### Requested replacement content

The current concise lever table should be replaced by richer content grouped into **two subsections**.

#### 01 — HK Top Applicant Characteristics

Each item should remain in the same section and follow the screenshot layout: a left label block and a right explanatory block with a **STRATEGIC LEVER** line.

1. **Academic Excellence**
   - Description: Academically exceptional; additional grades or test gains may add limited value once the threshold is met.
   - Strategic lever: Lock academics early. Redirect effort toward specialized research or capstone execution.

2. **Formulaic Profile Building**
   - Description: Profile building can become formulaic and participation-heavy rather than original.
   - Strategic lever: Shift from joining existing programs toward creating original IP and independent output.

3. **Limited Personal Depth**
   - Description: Personal stories may lack depth or feel insufficiently personal - can be easily read as “privileged kids with no struggles”.
   - Strategic lever: Build greater reflection, specificity and personal insight into the narrative.

4. **Limited Intellectual Depth**
   - Direct web copy note appears in the screenshot and should be preserved as a label.
   - Description: Strong academic performance may not always translate into clear intellectual depth or an individual point of view.
   - Strategic lever: Develop subject-specific opinions, questions and personal intellectual insights.

5. **Interview Strength**
   - Description: Top HK applicants can generally perform well in interviews.
   - Strategic lever: Use interviews to reinforce self-awareness, intellectual personality and authentic communication.
   - Original source preserved note should be retained with: `Can generally do well in interviews`.

6. **Extracurricular Impact**
   - Description: Extracurricular breadth may be high, while leadership, independent thinking or distinctive mission remain limited.
   - Strategic lever: Prioritize depth, ownership, leadership and meaningful impact over activity volume.

7. **Coachability**
   - Description: Students may be highly receptive to guidance and suggestions.
   - Strategic lever: Use coachability as an execution advantage while ensuring the final profile remains student-led.

8. **Prestige Orientation**
   - Description: School choices may be heavily influenced by ranking and reputation in Hong Kong.
   - Strategic lever: Frame university choices around fit and opportunity as well as brand recognition.

#### 02 — HK Applicant General Characteristics

This should appear as a second subsection within the same overall section.

1. **Strong academics + reputable school**
   - Description: Strong academics and a reputable school provide a solid baseline.
   - Strategic lever: Preserve academic strength while building differentiated profile depth.

2. **High standardised-test focus**
   - Description: High attention to standardized testing can crowd out broader profile differentiation.
   - Strategic lever: Shift from score accumulation toward intentional, distinctive profile building.

3. **Common / cliché EC participation**
   - Description: Extracurricular participation may follow common or cliché patterns.
   - Strategic lever: Develop unique themes, meaningful impact and follow-through.

4. **Interview / storytelling**
   - Description: Interview and storytelling can be weaker areas.
   - Strategic lever: Strengthen narrative, interview and reflective communication skills.

## Section 1 — Add a new summary block

### 03 — What Distinguishes a Top Applicant Profile

The screenshot shows a six-tile summary grid. The six items should be:

1. Stellar academic grades at advanced levels from a top school
2. High standardized test scores
3. National and international academic or extracurricular achievements
4. Excellent self-awareness and community-mindedness
5. Mature and insightful personal voice and narrative in application essays
6. Unique interests and ability to follow through

## Section 2 — Communication / client streams

The screenshots note that this part should mention these are the **main client streams**.

The user also wants more detail using the supplied original content:

| Client Stream | Characteristics |
|---|---|
| Local | Outcome-focused & highly informed; Familiar with HK/UK/US/Canada admissions; Expect precise guidance, clear rationale and demonstrated admissions expertise are important |
| Mainland | Data-driven & structured; Pay close attention to track records across high schools and intended majors; Value measurable outcomes, clear benchmarks and detailed information; Value advisor experience and expertise; Prefer written roadmaps and clear visibility into progress |
| Expat | Student-centred & exploratory; Greater flexibility around next steps; Value student fit, individual interests, development and long-term goals alongside academic outcomes |

The screenshot suggests these client streams should remain in the same general area, but expanded with more detail than the current short cards.

## Section 3 — Competitor intelligence

The screenshot note says this part is **nice** and should be **100% kept**.

Therefore:

1. Keep the local competitor intelligence section content and layout unchanged.
2. Do not rewrite, remove, or restyle its substantive content beyond any technically necessary surrounding consistency.

## Section 4 — Localized ECL opportunities

The screenshot note says this part is also acceptable, with two changes only:

1. Remove the sentence: **"All destination links remain placeholders until verified."**
2. The user will attach the links later.

Therefore the ECL section structure should remain, but that description sentence should be removed or rewritten so it no longer mentions placeholder-link verification.

## Visual-layout findings from screenshots

The first subsection of Tab 3 is intended to become a more editorial two-column knowledge layout rather than a simple status table. Each profile trait should read like a structured insight card with a left title block and a right explanatory block. The **What Distinguishes a Top Applicant Profile** block should appear as a six-item grid. The client-stream content should become more explicit and detailed than the current very short Local / Mainland / Expat cards.

## Global instruction for this Tab 3 pass

1. Apply only the changes explicitly requested in this file.
2. Do not independently shorten, rewrite, or remove content beyond the above instructions.
3. Tabs 1 and 2 must remain unchanged.

## Verification findings

The live desktop Tab 3 now renders all eight supplied **HK Top Applicant Characteristics**, all four **HK Applicant General Characteristics**, and the six-item **What Distinguishes a Top Applicant Profile** grid. The `Direct web copy` label and the `Original source — preserved` note for Interview Strength are visible as requested.

The yellow **Strategist validation required** placeholder and the applicant-section **Hong Kong Knowledge Packet** source note are no longer present. The communication playbook remains, and the Local, Mainland, and Expat cards are explicitly introduced as the **Main client streams** with the complete supplied characteristic lists.

The competitor-intelligence section remains intact with its original battlecards and content. The localized ECL section remains intact, while its description is now simply `A structured list of HK opportunities.` and no longer contains the sentence about all destination links remaining placeholders until verified.

The full-page mobile capture confirms that the applicant insights stack into readable title-and-copy blocks, the six-item benchmark becomes a single-column sequence, the expanded main client streams remain legible, and the preserved competitor and ECL modules continue in the responsive flow. Desktop captures of all three tab URLs confirm Tabs 1 and 2 remain visually intact after the Tab 3-only revision.

The preserved competitor search was tested with `Quantum` and correctly narrowed the battlecard grid to **Quantum Prep** only. The preserved ECL search was tested with `HKUST` and correctly returned two STEM resources and one Summer Institutes resource. Both original interactions remain functional after the Tab 3 redesign.

Type checking and the production build completed successfully. The client-side runtime log contains no errors after the content, responsive, search, and cross-tab checks.
