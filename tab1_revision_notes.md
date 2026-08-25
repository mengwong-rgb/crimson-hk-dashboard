# Tab 1 Revision Notes from `Tab1promptv2.docx`

This file records the user's screenshot-based instructions for **Tab 1 only**. These instructions are the source of truth for the next implementation pass. Unless explicitly stated below, surrounding layout and content should stay unchanged.

## Section 1 — Regional market overview / volume card

### Requested changes

1. Keep the existing card and layout structure.
2. Expand the disclosure currently titled **"Why outbound demand is declining"** so that clicking it reveals the following full text:

   - Demographic shift: A rise in students from mainland China, who prefer local institutions over traditional overseas destinations, has shifted demographics.
   - Elite Local Options: Hong Kong universities offer globally recognized, high-quality education in key fields.
   - Diversified Pathways: Students have access to a wider range of local and regional, including mainland Chinese, programs.
   - High Financial Burden: Rising overseas costs, including tuition and living expenses, make the subsidized local university system more attractive.

3. Add one more disclosure block similar to the one above, titled **"Macroeconomic Push and Pull Factors Driving Outbound Study"**, with the following content:

   - Local push factors:
     - The change of local curriculum (replacing the subject “liberal studies” with “citizenship and social development, which includes new elements on patriotism, national development and lawfulness)
     - Introduction of the National Security Law: New visa schemes from the UK, Canada and Australia in response to the push of the National Security Law
   - International pull factors:
     - The UK:
       - The British National (Overseas) visa scheme, applicable to Hongkongers aged 18 to 25 who do not possess the special status, but whose parents do
       - Hongkongers can apply to live and work in Britain and, after six years, apply for citizenship
       - As of 2026, more than 240,000 Hongkongers have successfully applied
     - Canada:
       - A 3-year work permit for recent Hong Kong graduates

4. Remove visible source-note text such as **"Hong Kong Knowledge Packet, pp. 2–3. Historical figures are not presented as current metrics."**

## Section 1 — Core HK client profile card

### Requested changes

1. Change **"Typical stage"** to **"Core audience"**.
2. Change **"What is different in HK"** to **"Profile highlights"**.
3. Replace the bullet content under that heading with:

   - Students often move to overseas boarding schools around Form 3–5 or earlier.
   - High performers in top international schools, expat families, and Mainland transfers seeking international education in HK.
   - High focus on overall and major-specific university rankings.
   - Parents often studied abroad and ask detailed technical questions during pre-sales.
   - Families expect elite results and view Crimson as a bridge to top-tier universities.

4. Remove the visible source-note text below this card.

## Section 2 — Regional curricula comparison table

### Requested changes

1. Move **"HK client prevalence"** into the first row position of the comparison table.
2. In **HKDSE → Example schools**, add:
   - St. Paul's Co-educational College
   - Diocesan Girls' School
   - Diocesan Boys' School
   - St. Paul’s Convent School

## Section 2 — Age-grade alignment table

### Requested changes

1. Transpose the table orientation so that **Age 12, Age 13, Age 14, Age 15, Age 16, Age 17** run down the **left side**.
2. Move **US**, **UK/IB**, and **Hong Kong** to the **top** as column headers.

## Section 3 — Timeline block

### Requested changes

1. Keep the current time-layout concept.
2. Add a **JUPAS** timeline onto the same overall chart.
3. Use a different color-dot or visual marker system to distinguish JUPAS from the existing HK/UK/US items.
4. Place JUPAS milestones on the same Hong Kong line where appropriate.
5. The document screenshot suggests these milestone dates as the intended reference set:
   - 9 Oct 2025 — JUPAS application opens
   - 15 Oct 2025 — UK Oxbridge / Cambridge / Medicine / Dentistry / Veterinary deadline
   - 1 Nov 2025 — US Early application round
   - 13 Nov 2025 — HK Non-JUPAS CUHK early deadline
   - 20 Nov 2025 — HK Non-JUPAS HKUST first-round deadline
   - 3 Dec 2025 5:00 PM — JUPAS application deadline
   - 26 Nov 2025 — HK Non-JUPAS HKU early / first-round deadline
   - 2 Jan 2026 — JUPAS DSE editing
   - 13 Jan 2026 — Main UCAS deadline
   - 22 Apr 2026 — JUPAS late / account reactivation / programme modification deadline
   - 27 May 2026 5:00 PM — JUPAS course-choice / list-reordering deadline
   - 15 Jul 2026 — JUPAS recheck results release
   - 5 Aug 2026 — JUPAS main-round offers

## Section 3 — Local pathways cards

### Requested changes

1. Clarify that this block explains how students use **JUPAS** and **Non-JUPAS** to apply to Hong Kong local universities.
2. Add Hong Kong local university ranking information.
3. The user explicitly listed:

   | University | Ranking |
   |---|---:|
   | HKU | 11 |
   | CUHK | 18 |
   | HKUST | 33 |

4. The revised pathway content should better explain the local-application route rather than only naming the mechanisms.

## Global instruction for this Tab 1 pass

1. Apply only the changes explicitly requested in this file.
2. Do not independently shorten, rewrite, or remove content beyond the above instructions.
3. Tabs 2 and 3 must remain unchanged.

## Verification findings

The desktop implementation now shows both requested disclosure controls. The first disclosure expands to the complete four-factor outbound-demand text, and the second expands to the supplied local push, UK pull, and Canada pull content. The client-profile labels and five bullets match the document. Visible Tab 1 source-note blocks have been removed. The curricula table begins with HK client prevalence and includes the four supplied HKDSE schools. The age-grade table is transposed as requested. The timeline contains distinct burgundy International / Non-JUPAS markers and blue JUPAS markers, and the local-pathway section now includes fuller JUPAS and Non-JUPAS application guidance plus the supplied ranking values.

The mobile layout keeps the revised cards in a readable single-column flow. Both wide comparison tables and the extended timeline remain horizontally scrollable so the added data is retained rather than compressed or removed. The Schools & Outcomes tab still renders its original school directory, filters, placeholders, and source notes, confirming the Tab 1 edits did not replace Tab 2 content.
