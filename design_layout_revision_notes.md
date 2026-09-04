# Dashboard Design-layout Revision Notes

The design document authorizes three dashboard-wide presentation changes while protecting all finalized data, body copy, links, tables, and interactions.

First, replace the visible shell label **HK Dashboard** with **Hong Kong Regional Market Overview** wherever that interface label appears, including the sidebar-home control and breadcrumb root.

Second, use British English by replacing visible **counseling** with **counselling**. Existing British-English instances remain unchanged.

Third, standardize every section subtopic heading rendered through the shared SectionHeading component. Each title must use consistent Title Case, a strong bold weight matching the Localized ECL Opportunities reference, and the same alignment, spacing, and hierarchy throughout all four tabs. Examples explicitly supplied are **Localized ECL Opportunities** and **Institutional Profiles by School Type and Curriculum**.

The tab titles, section descriptions, labels, source lines, numerical data, resource URLs, and all other finalized content are protected unless capitalization is required for a SectionHeading title.

## Verification

The visible shell now uses **Hong Kong Regional Market Overview** in both the sidebar-home label and breadcrumb root. The code audit confirms no visible `HK Dashboard` or American-English `Counseling` strings remain. All shared SectionHeading titles across the four tabs use consistent Title Case and the same 800-weight Source Sans hierarchy, with aligned numbering, overlines, spacing, and descriptions.

Full-page desktop and mobile captures confirm the longer shell label, bold subtopic hierarchy, and finalized content remain responsive across Market, Schools, Strategy, and Useful Links. Type checking and the production build passed, and current runtime logs contain no errors.
