# Tab 2 Follow-up Revision Notes

Source: `hkstudentcasestudiesss(1).docx`

## Requested structural changes

1. Remove the existing burgundy **Hong Kong Student Case Studies** banner and its `View HK student full case studies` button from the end of the US / UK Boarding School section.
2. Keep US / UK Boarding School as **Section 02**.
3. Add a new standalone **Section 03 — Hong Kong Student Case Studies** immediately after the boarding-school section.
4. Move **Common BU services in HK** to **Section 04**.
5. Add the new case-study section to the Tab 2 sidebar and `In this tab` section list.

## New Section 03 content

Display a three-column table with headings:

| HK Student | Admitted to | Case Study Link |
|---|---|---|
| Rae Liu | UC Berkeley | Placeholder button: `View case study` |
| Jeremy C. | Cambridge | Placeholder button: `View case study` |
| Kelly C. | UCL, Leicester, HKU & UST | Placeholder button: `View case study` |
| Samson P. | UChicago | Placeholder button: `View case study` |
| Elden Y. | Imperial & UCL | Placeholder button: `View case study` |
| Alexander Y. | Cornell & KCL | Placeholder button: `View case study` |
| Alfred M. | Yale, UPenn, Brown | Placeholder button: `View case study` |
| Alexander L. | UC Berkeley, NYU & UCL | Placeholder button: `View case study` |
| Everie | Brown | Placeholder button: `View case study` |
| Joel | Oxford | Placeholder button: `View case study` |
| Cynthia | Brown | Placeholder button: `View case study` |
| Michael | Stanford | Placeholder button: `View case study` |
| Billy | UC Berkeley | Placeholder button: `View case study` |

The third-column buttons remain placeholders until the user supplies the individual case-study URLs. Clicking a placeholder should clearly explain that the corresponding case-study link is pending.

## Confidentiality notice

Display this notice prominently with the section:

> Internal reference only — please do not share externally

## Preservation rule

Only the requested Tab 2 structure and case-study content should change. Tabs 1 and 3, the school directory, the US / UK boarding-school content, and the active Common BU service links must remain unchanged.

## Verification findings

The live Tab 2 now reports four sections in the hero, sidebar, and `In this tab` list: School profiles, Boarding pipelines, HK student case studies, and BU services. The previous burgundy case-study banner has been removed from Section 02.

The new Section 03 renders the confidentiality notice and all thirteen supplied student records exactly in a three-column table. Each row includes a `View case study` placeholder button. Common BU services is correctly renumbered to Section 04, and all four previously connected Capstone, Delta, Rise, and Indigo external links remain present.

The first placeholder button was tested and correctly displays `Add the Rae Liu case study URL when it is available.` The full-page mobile capture confirms the confidentiality notice and table remain usable through horizontal scrolling, while Common BU service links remain visible below. Desktop captures confirm Tabs 1 and 3 remain visually unchanged. Type checking, the production build, and runtime-log checks passed without errors.
