/* ------------------------------------------------------------------ */
/* CHARCOAL HUB — testing.guotan content collections.                  */
/*                                                                     */
/* `reports` is the machine-readable store for real, attributable      */
/* charcoal test reports. It ships EMPTY by design: entries are added  */
/* only when genuine third-party or factory reports exist, each with   */
/* its laboratory, report number, standard and document reference.     */
/* No fabricated results, no synthetic sample entries.                 */
/* ------------------------------------------------------------------ */

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* The seven public test-type identifiers used across Charcoal Hub. */
export const TEST_TYPES = [
  'ash-content',
  'moisture',
  'fixed-carbon',
  'volatile-matter',
  'burning-time',
  'size-tolerance',
  'emissions',
] as const;

export const VERIFICATION_STATUSES = [
  'verified',
  'third_party',
  'supplier',
  'unverified',
] as const;

/* §18 report fields — all required, no extras (strict). */
const reports = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reports' }),
  schema: z
    .object({
      report_id: z.string().min(1),
      product_id: z.string().min(1),
      manufacturer_id: z.string().min(1),
      test_type: z.enum(TEST_TYPES),
      laboratory: z.string().min(1),
      test_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'ISO date YYYY-MM-DD'),
      report_number: z.string().min(1),
      result: z.union([z.number(), z.string().min(1)]),
      unit: z.string().min(1),
      standard: z.string().min(1),
      document: z.string().min(1),
      verification_status: z.enum(VERIFICATION_STATUSES),
    })
    .strict(),
});

export const collections = { reports };
