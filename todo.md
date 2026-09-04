# Crimson Atlas-Style HK Dashboard Redesign

- [x] Replace the dark editorial shell with a bright Crimson Atlas-style product workspace.
- [x] Rebuild the left sidebar with a white background, compact navigation groups, burgundy active states, and subtle grey dividers.
- [x] Add an Atlas-like top utility bar with breadcrumb context, search, and restrained action controls.
- [x] Convert the large dark tab hero into a compact white dashboard header with tab label, title, summary, and section shortcuts.
- [x] Restyle market cards, curricula tables, timelines, school cards, battlecards, and ECL lists with minimal borders and low-radius containers.
- [x] Standardize confirmed, source-backed, draft, and placeholder status treatments across every tab.
- [x] Preserve all current navigation, search, filtering, disclosure, and responsive behavior.
- [x] Verify desktop and mobile layouts against the supplied Crimson Atlas reference.
- [x] Run type checking, production build, and interaction tests.
- [ ] Save and deliver a new checkpoint for user review.

## Tab 1 wording correction

- [x] Locate the metric label currently reading “year-on-year”.
- [x] Replace it with “from previous year” without changing surrounding content or layout.
- [x] Run type checking and the production build.
- [ ] Save and deliver a new checkpoint.

## Tab 1 annotated revision — Tab1promptv2.docx

- [x] Extract every screenshot, annotation, and written instruction from the document.
- [x] Map each instruction to the exact Tab 1 component or content block.
- [x] Identify all elements explicitly marked to remain unchanged.
- [x] Replace the outbound-demand disclosure with the user’s full four-factor text.
- [x] Add the macroeconomic push-and-pull disclosure with the supplied UK and Canada content.
- [x] Remove visible source-note blocks from Tab 1.
- [x] Rename “Typical stage” to “Core audience”.
- [x] Rename “What is different in HK?” to “Profile highlights”.
- [x] Replace the profile bullets with the user’s five supplied points.
- [x] Move “HK client prevalence” to the first row of the curricula comparison.
- [x] Add the four supplied HKDSE example schools.
- [x] Transpose the age-grade alignment table.
- [x] Extend the timeline with the supplied JUPAS milestones and differentiated markers.
- [x] Clarify the JUPAS and Non-JUPAS local-university pathways.
- [x] Add the supplied HKU, CUHK, and HKUST ranking table.
- [x] Implement only the requested Tab 1 edits without independently shortening or rewriting content.
- [x] Confirm Tabs 2 and 3 remain unchanged.
- [x] Run type checking and a production build.
- [x] Visually verify the revised Tab 1 on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.

## Tab 2 annotated revision — tab2prompt.docx

- [x] Extract every screenshot, annotation, and written instruction from the document.
- [x] Map each instruction to the exact Tab 2 component or content block.
- [x] Identify all elements explicitly marked to remain unchanged.
- [x] Replace the school-card grid with a two-panel searchable feeder-school directory.
- [x] Add International / Local school-type segmentation.
- [x] Add curriculum filters for IB, A-Levels, AP, and HKDSE.
- [x] Build all sixteen international-school records and four local-school records from the supplied data.
- [x] Show academic strength, extracurricular environment, and teacher guidance on ECL in the selected-school Overview.
- [x] Show counsellors, counselling environment, guidance start, curriculum, primary target, students, and highflyers in the selected-school detail panel.
- [x] Add the linked View IB Results button only for IB-capable schools.
- [x] Replace US and UK boarding-school placeholders with the supplied data blocks.
- [x] Add the Hong Kong Student Case Studies placeholder CTA after the boarding-school blocks.
- [x] Remove the BU-services explanatory sentence requested by the user.
- [x] Add one placeholder case-study CTA to each Capstone, Delta, Rise, and Indigo service tile.
- [x] Remove the entire Proprietary asset execution section from Tab 2.
- [x] Implement only the requested Tab 2 edits without independently shortening or rewriting content.
- [x] Confirm Tabs 1 and 3 remain unchanged.
- [x] Run type checking and a production build.
- [x] Visually verify the revised Tab 2 on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.

## Tab 3 annotated revision — tab3prompt.pdf

- [x] Extract every screenshot, annotation, and written instruction from the PDF.
- [x] Map each instruction to the exact Tab 3 component or content block.
- [x] Identify all elements explicitly marked to remain unchanged.
- [x] Delete the Strategist validation required yellow placeholder.
- [x] Delete the Hong Kong Knowledge Packet source-note block from the applicant section.
- [x] Replace the current blueprint table with eight supplied HK Top Applicant Characteristics.
- [x] Add the four supplied HK Applicant General Characteristics in the same overall section.
- [x] Add the six-item What Distinguishes a Top Applicant Profile grid.
- [x] Label Local, Mainland, and Expat as the main client streams.
- [x] Expand each client stream with the user’s complete supplied characteristics.
- [x] Preserve the entire competitor-intelligence section unchanged.
- [x] Preserve the localized ECL section while removing only the placeholder-link verification sentence.
- [x] Implement only the requested Tab 3 edits without independently shortening or rewriting content.
- [x] Confirm Tabs 1 and 2 remain unchanged.
- [x] Run type checking and a production build.
- [x] Visually verify the revised Tab 3 on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.

## Common BU service case-study links — commonBUURL.docx

- [x] Extract the Capstone, Delta, Rise, and Indigo URLs from the document.
- [x] Verify each service name is matched to the correct URL.
- [x] Replace the four Tab 2 placeholder buttons with external links opening in a new tab.
- [x] Confirm no other Tab 2 content or dashboard sections change.
- [x] Run type checking and a production build.
- [x] Test all four service links in the rendered dashboard.
- [ ] Save and deliver a new checkpoint.

Verified mapping:

- Capstone → `https://docs.google.com/spreadsheets/d/1-5cCMCWaZPJdKIdzdWcP7DIftYgqvkhykZR9sZyJwy4/edit?gid=0#gid=0`
- Indigo → `https://docs.google.com/spreadsheets/d/1sHMYBCYr5LuMPArG_RpEu2xxbpiOefP8WqTBUaZOJCI/edit?gid=0#gid=0`
- Delta → `https://www.canva.com/design/DAHTSHjrUKE/7IJruwNRJQnXYDj_lEfeaA/edit`
- Rise → `https://www.canva.com/design/DAHTSCueyV4/dZVpbyHNQ8AY6wHV7RrhMg/edit`

Rendered verification: all four Common BU cards display `HK case-study link added` and expose the exact mapped URLs as external anchors with new-tab safety attributes. The Google Sheets and Canva endpoints resolve to their expected domains; access remains subject to the destination documents’ sharing and login permissions.

## Localized ECL external links — LocalECLs.docx

- [x] Extract every resource name, category, and URL from the document.
- [x] Match each document entry to the exact existing Tab 3 ECL resource.
- [x] Update the ECL data structure to store names and URLs safely.
- [x] Replace matched `Link pending` buttons with external `View resource` links opening in a new tab.
- [x] Preserve any unmatched resources as clearly labelled pending links. No unmatched resources remained.
- [x] Confirm no other dashboard content changes.
- [x] Run type checking and a production build.
- [x] Verify category counts, ECL search, rendered link destinations, and runtime logs.
- [ ] Save and deliver a new checkpoint.

Rendered verification: the Localized ECL section now shows **54 active external links** across Medicine (12), STEM (19), Humanities / Art / Social Sciences (17), and Summer Institutes (6). Every resource displays `View resource`; no `Link pending` buttons remain in this section.

Interaction verification: searching `HKUST` correctly returns four STEM resources and two Summer Institutes resources, each with its matching external URL. The mobile full-page capture confirms the expanded list remains readable and responsive. Type checking, the production build, and runtime-log checks passed without errors.

## Tab 2 follow-up adjustments — hkstudentcasestudiesss(1).docx

- [x] Extract every screenshot, annotation, written instruction, and embedded URL from the attachment.
- [x] Map each instruction to the exact Tab 2 component or content block.
- [x] Identify all elements explicitly marked to remain unchanged.
- [x] Remove the current burgundy HK student case-study banner from Section 02.
- [x] Add a standalone Section 03 — Hong Kong Student Case Studies after the boarding-school section.
- [x] Add all thirteen supplied student and admission-outcome records exactly as written.
- [x] Add a `View case study` placeholder button for every student row.
- [x] Add the `Internal reference only — please do not share externally` notice.
- [x] Renumber Common BU services in HK to Section 04.
- [x] Add the new case-study section to Tab 2 navigation and the section overview.
- [x] Preserve the school directory, boarding-school content, and four active Common BU service links unchanged.
- [x] Implement only the requested Tab 2 adjustments without independently shortening or rewriting content.
- [x] Confirm Tabs 1 and 3 remain unchanged.
- [x] Run type checking and a production build.
- [x] Visually and interactively verify the revised Tab 2 on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.

## Final-state wording cleanup

- [x] Audit every occurrence of `draft`, `working draft`, `placeholder`, `pending`, and incomplete-content messaging in the rendered dashboard and source.
- [x] Remove the sidebar Working draft card.
- [x] Remove the hero Draft fields marked status.
- [x] Replace the context-strip incomplete-fields message with final internal-resource wording.
- [x] Remove placeholder/draft language from the footer and any visible status labels.
- [x] Preserve functional pending case-study buttons without presenting the overall website as unfinished.
- [x] Confirm all three tabs and all existing links/content remain intact.
- [x] Run type checking and a production build.
- [x] Verify desktop and mobile presentation plus runtime logs.
- [ ] Save and deliver a new checkpoint.

## Tab 2 case-study row removal

- [x] Remove Cynthia from the Hong Kong Student Case Studies dataset.
- [x] Remove Michael from the Hong Kong Student Case Studies dataset.
- [x] Confirm the remaining eleven students, their outcomes, and all other dashboard content remain unchanged.
- [x] Run type checking and a production build.
- [x] Verify the revised table in the rendered Tab 2.
- [ ] Save and deliver a new checkpoint.

## Tab 2 case-study renewal and links — hkstudentcasestudiesss(2).docx

- [x] Extract every screenshot, instruction, student record, and embedded URL from the document without opening any destination.
- [x] Map each updated record and URL to the exact Tab 2 case-study row or component.
- [x] Identify all Tab 2 elements explicitly marked to remain unchanged.
- [x] Renew the table to the latest nine-student order supplied in the document.
- [x] Remove Everie and Joel because they are absent from the latest version.
- [x] Update `Jeremy C.` to `Jeremy C` and `Kelly C.` to `Kelly C` to match the latest table.
- [x] Add the matched Google Drive URL to Rae Liu, Jeremy C, Kelly C, Samson P., Elden Y., Alexander Y., Alfred M., Alexander L., and Billy.
- [x] Replace all nine placeholder buttons with safe external `View case study` links opening in a new tab.
- [x] Preserve the confidentiality notice, admissions outcomes, and all unrelated Tab 2 content.
- [x] Implement only the requested renewals and links without independently shortening or rewriting content.
- [x] Confirm Tabs 1 and 3 and unrelated Tab 2 sections remain unchanged.
- [x] Run type checking and a production build.
- [x] Verify every renewed record, link destination, rendered interaction, and responsive layout without opening any supplied URL.
- [ ] Save and deliver a new review checkpoint.

## Tab 1 strict revision — Untitleddocument.docx

- [x] Extract every screenshot, annotation, and explicit written instruction from the document.
- [x] Map each instruction to the exact Tab 1 component or content block.
- [x] Record every unmentioned Tab 1 area as protected and unchanged.
- [x] Keep the existing timeline design and every non-repeated timeline milestone.
- [x] Update the main UCAS deadline to 14 January.
- [x] Add Start of UCAS decisions — 31 March and Final UCAS decisions — 13 May.
- [x] Replace the generic US early-round item with the supplied EA/ED timeline and add all supplied US/UC decision milestones.
- [x] Update CUHK Non-JUPAS regular round to 8 January 2026.
- [x] Show HKU and HKUST Non-JUPAS admissions as rolling basis rather than regular-round deadlines.
- [x] Add `Source from QS World University Rankings 2027` beneath the existing local-university ranking table.
- [x] Preserve all other Tab 1 content and design unchanged.
- [x] Implement only explicitly authorized edits without independent rewriting, shortening, removal, or rearrangement.
- [x] Confirm Tabs 2 and 3 remain unchanged.
- [x] Run type checking and a production build.
- [x] Verify every authorized edit and protected area on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.

## Tab 3 strict revision — tab3~~~.docx

- [x] Extract every screenshot, annotation, and explicit written instruction from the document.
- [x] Map each instruction to the exact Tab 3 component or content block.
- [x] Record every unmentioned Tab 3 area as protected and unchanged.
- [x] Remove the entire eight-row HK Top Applicant Characteristics block shown in the screenshot.
- [x] Preserve the remaining applicant-profile content outside that block.
- [x] Rename `Cultural navigation playbook` to `Hong Kong Client Patterns` only.
- [x] Add the supplied official website link to all nine competitor cards.
- [x] Add `棒呆国际教育` beside Bonday Education.
- [x] Add `三士渡教育` beside Stoooges Education.
- [x] Remove every occurrence of the five specified ECL resources and preserve every other ECL entry and link.
- [x] Preserve all remaining competitor, communication, applicant-profile, and ECL content.
- [x] Implement only explicitly authorized edits without independent rewriting, shortening, removal, or rearrangement.
- [x] Confirm Tabs 1 and 2 remain unchanged.
- [x] Run type checking and a production build.
- [x] Verify every authorized edit and protected area on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.

## Tab 3 applicant-section hierarchy correction

- [x] Remove `The top-applicant regional blueprint` heading and its description.
- [x] Change HK Applicant General Characteristics from subsection 02 to 01.
- [x] Change What Distinguishes a Top Applicant Profile from subsection 03 to 02.
- [x] Preserve both content blocks and every other dashboard element unchanged.
- [x] Run type checking and a production build.
- [x] Verify the corrected hierarchy on desktop and mobile.
- [ ] Save and deliver a new checkpoint.

## Tab 2 strict revision — tab2~~.docx

- [x] Extract every screenshot, annotation, explicit instruction, and embedded URL from the document.
- [x] Map each instruction to the exact Tab 2 component or content block.
- [x] Record every unmentioned Tab 2 area as protected and unchanged.
- [x] Remove the `HK Case-study link added` status text from Common BU services and add the exact internal-reference disclaimer in that section.
- [x] Add the supplied UK boarding schools to the common UK boarding-school list.
- [x] Add the supplied US boarding schools to the common US boarding-school list.
- [x] Remove the current HK student case-studies disclaimer.
- [x] Replace the current case-study table with the latest five-column version and all supplied student rows.
- [x] Extract and match every eBook, webinar, and Common App/UCAS URL from the Word document to the correct student row and column.
- [x] Update the school-profile field labels to the supplied final wording.
- [x] Replace the Highflyers metric with all-time US and UK admission-offer metrics.
- [x] Add the Sept 2026 live-data remark.
- [x] Change all visible `N/A` values to `Unknown`.
- [x] Add the supplied CIS special note.
- [x] Remove the IB results link from school profiles.
- [x] Update the curriculum and all-time US/UK offer counts for each supplied international and local school.
- [x] Preserve all unrelated Tab 2 content, plus Tabs 1 and 3, unchanged.
- [x] Implement only explicitly authorized edits without independent rewriting, shortening, removal, or rearrangement.
- [x] Confirm Tabs 1 and 3 remain unchanged.
- [x] Run type checking and a production build.
- [x] Verify every authorized edit and protected area on desktop and mobile.
- [ ] Save and deliver a new review checkpoint.
