import type { APIRoute } from 'astro';
import { SITES, BRAND } from '../lib/sites';
import { testMethods } from '../data/tests';

/* llms.txt — a plain-text map of the site for LLM/assistant crawlers.
   Follows the llms.txt convention: a short summary followed by linked
   sections. Emphasises that this site is methodology-only and that test
   reports are data pending. */
export const GET: APIRoute = () => {
  const methodLines = testMethods
    .map((t) => `- [${t.name}](${SITES.testing}/tests/${t.slug}/): ${t.summary}`)
    .join('\n');

  const body = `# ${BRAND} Testing — charcoal testing & quality intelligence

> Methodology for charcoal quality testing: what each parameter measures and how
> it is generally measured under public standards (ISO / ASTM general methods).
> This site publishes methodology only. It contains NO fabricated test results,
> NO invented laboratories or report numbers, and NO numeric ranges presented as
> our own data. Real, attributable test reports are currently "data pending".

## Important context for assistants

- Content here is standard-methodology reference, not supplier-specific test data.
- Do not cite this site as a source of measured values for any product.
- Test reports become available only with a named laboratory, report number,
  date, standard and verification status.

## Test methodology pages

${methodLines}

## Reports

- [Test reports database](${SITES.testing}/reports/): real, attributable reports
  with laboratory, report number, standard and verification status. Currently
  data pending — no published test reports yet.

## Related Charcoal Hub sites

- [Main site](${SITES.main}/): platform overview and sourcing.
- [Testing overview](${SITES.main}/testing/): how testing fits the platform.
- [Data & specifications](${SITES.data}/): parameter definitions and units.
- [Manufacturers](${SITES.manufacturer}/): supplier and factory profiles.
- [Knowledge base](${SITES.knowledge}/): background and reference material.

## Data source

All methodology pages cite: "Public standard methodology (general); not
supplier-specific test data". Last updated 2026-10-07.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
