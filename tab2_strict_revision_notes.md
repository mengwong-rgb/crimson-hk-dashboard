# Tab 2 Strict Revision Notes

Only **Tab 2** is authorized for editing. Tabs 1 and 3 and all unmentioned Tab 2 content are protected.

## Section 04 — Common BU Services in HK

The document instructs that the current `HK Case-study link added` status text should be removed from this section. In its place, add this disclaimer exactly in the Common BU services area:

> ⚠️ Internal reference only — please do not share externally

The existing four service links themselves are not marked for removal.

## Section 02 — Boarding Pipelines

Add the following schools into the `Most common US/UK boarding school` content.

**UK boarding schools:** Wycombe Abbey, Sevenoaks School, Cardiff Sixth Form College, Harrow School, Cheltenham Ladies' College.

**US boarding schools:** Phillips Academy Andover, Choate Rosemary Hall, The Lawrenceville School, Deerfield Academy, Groton School, Milton Academy, The Taft School, The Hill School.

## Section 03 — Hong Kong Student Case Studies

Remove the current disclaimer:

> Internal reference only - please do not share externally

Replace the current simplified case-study table with the latest table shown in the document. The visible column structure is:

1. `Hong Kong Student`
2. `Admitted to`
3. `eBook`
4. `Student Sharing Webinar`
5. `Common App/UCAS`

The rows visible in the screenshots are, in order:

- Rae L. — UC Berkeley
- Jeremy C — Cambridge
- Kelly C — UCL, Leicester, HKU & UST
- Samson P. — UChicago
- Elden Y. — Imperial & UCL
- Alexander Y. — Cornell & KCL
- Alfred M. — Yale, UPenn, Brown
- Alexander L. — UC Berkeley, NYU & UCL
- Everie C. — Brown
- Joel W. — Oxford
- Cynthia H. — Brown
- Michael S. — Stanford
- Billy M. — UC Berkeley
- Lucas Y. — Oxford

Several rows contain asset links, Google Drive file links, or Google Drive folder links in the three rightmost columns, while some cells are `-`. The exact URLs should be extracted locally from the Word file and matched row-by-row without guessing.

## School Profile Section

The school profile area needs these exact label and content changes:

1. `Counsellors` → `School Counsellors`
2. `Guidance starts` → `Counseling guidance starts`
3. `Number of Crimson HK students` → `All time Number of Crimson HK students`
4. Replace `Number of Highflyers` with two categories: `ALL TIME US ADMISSION OFFERS` and `ALL TIME UK ADMISSION OFFERS`
5. Add this remark: `As of Sept 2026. Refer to the Hong Kong All Time Student Motherboard for live data.`
6. Change every visible `N/A` to `Unknown`
7. Add this special note for Chinese International School (CIS): `Year 10: Students complete a mandatory, project-based residential program at the Hangzhou campus centered on Chinese language immersion and cultural learning. Year 11: Students return to Hong Kong for a CIS-developed curriculum designed to bridge experiential learning with high-level academic preparation. Years 12–13: Students complete their final two years of high school by pursuing the rigorous IB Diploma Programme.`
8. Remove the IB results link
9. Update the curriculum and the US/UK admission offers of each listed school exactly as supplied in the extracted text.

The extracted school list covers sixteen international schools and four local schools with revised curriculum naming and all-time US/UK offer counts.

## Screenshot verification from pages 1–10

The first ten pages visually confirm that the requested changes are targeted at the existing Tab 2 layout rather than a redesign. The Common BU-services instruction is presented against the current linked-card area, confirming that the links should remain while the visible `HK Case-study link added` wording is removed and replaced by the exact internal-reference disclaimer.

The boarding-schools instruction is shown as an addition to the current `Most common US/UK boarding school` content block, confirming that the supplied school names should be appended into the existing boarding lists rather than moved elsewhere.

The Hong Kong Student Case Studies screenshots confirm that the intended replacement is a **five-column table** with link-bearing cells in `eBook`, `Student Sharing Webinar`, and `Common App/UCAS`, not the current simplified single-button format. The visible rows are Rae L., Jeremy C, Kelly C, Samson P., Elden Y., Alexander Y., Alfred M., Alexander L., Everie C., Joel W., Cynthia H., Michael S., Billy M., and Lucas Y. Some cells intentionally display `-` and must remain blank rather than be inferred.

Pages 6–10 visually confirm the international-school profile update table and its exact header structure: `School`, `Curriculum`, `ALL TIME US ADMISSION OFFERS`, and `ALL TIME UK ADMISSION OFFERS`. The rows visible on these pages confirm the extracted values for CDNIS, CIS, GSIS, Harrow, HKIS, ISF, Sha Tin College, VSA, West Island, CKY, King George V, Kellett, South Island, Island School, and YCIS. The screenshots also confirm that these are literal data replacements rather than approximate guidance.

Further extraction is still required for the remaining document pages so the final local-school rows and any screenshot-only placement notes can be captured before implementation.

## Screenshot verification from pages 11–14

Pages 11–14 complete the school-profile data capture. They visually confirm the last international-school row for **Singapore International School HK (SISHK)** with curriculum `IGCSE → IBDP`, **2** all-time US admission offers, and **0** all-time UK admission offers.

They also confirm the start of a separate **Local Schools** table using the same metric structure and the four exact local-school rows:

- **St. Paul's Co-educational College (SPCC)** — `DSE / IBDP` — US **1** — UK **6**
- **Diocesan Girls' School (DGS)** — `DSE / A Level` — US **2** — UK **5**
- **Diocesan Boys' School (DBS)** — `DSE / IBDP` — US **2** — UK **4**
- **St. Paul's Convent School (SPCS)** — `DSE / IGCSE → A Level` — US **0** — UK **9**

No extra structural instructions appear on these final pages beyond confirming the literal school-profile replacement data. Combined with the full-text extraction and local hyperlink extraction, the attachment now provides enough information to create the precise Tab 2 implementation checklist without guessing.

## Implementation validation

The code now contains exactly **20 school records**, with one curriculum-display value, one all-time US offer count, and one all-time UK offer count for every school. Obsolete `highflyers`, `N/A`, `ibResultsUrl`, and `View IB Results` references are absent. The case-study table contains exactly **14 student rows** and **25 supplied URLs**, matching the locally extracted Word-table structure. No linked destination was opened during this data validation.

Initial rendered verification confirms all sixteen international-school curriculum labels, the five revised profile metrics, the Sept 2026 live-data remark, the absence of the IB-results button, both expanded boarding-school lists, the complete fourteen-row five-column case-study table, and the relocated Common BU internal-reference disclaimer. All four Common BU external links remain present, and the former `HK case-study link added` statuses are absent.

Interactive school-profile verification confirms that Chinese International School displays `MYP → IBDP`, US offers **30**, UK offers **18**, and the full supplied Year 10–13 special note. Switching to Local Schools shows all four revised curriculum labels. SPCC displays US offers **1**, UK offers **6**, and `Unknown` for both School Counsellors and Counseling guidance starts, confirming the required N/A replacement renders correctly.

The rendered case-study DOM contains **25 of 25** URLs in the same row-and-column order as the locally extracted Word table. Every active case-study link includes `target="_blank"` and `rel="noopener noreferrer"`; no external destination was opened during verification. The full-page mobile capture confirms that the updated profile metrics, boarding lists, horizontally scrollable five-column table, and Common BU disclaimer remain usable. Desktop captures confirm Tabs 1 and 3 remain visually intact. Type checking and the production build passed, and the current runtime log contains no errors after the completed implementation.
