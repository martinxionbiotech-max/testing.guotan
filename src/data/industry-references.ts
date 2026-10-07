/* ------------------------------------------------------------------ */
/* CHARCOAL HUB — industry reference points compiled from public      */
/* Chinese-language trade and standards sources.                      */
/*                                                                     */
/* These are CLASS-LEVEL reference ranges documented across public    */
/* Chinese trade listings, process references and standard series     */
/* (GB/T 12496 family for activated carbon; general carbonization     */
/* process references). They are NOT supplier-specific test results   */
/* and NOT CHARCOAL HUB's own measurements. Each entry cites its      */
/* source type. Compiled 2026-10-07.                                  */
/* ------------------------------------------------------------------ */

export type IndustryReference = {
  metric: string;
  value: string;
  context: string;
  sourceType: 'Chinese trade listing' | 'Public process reference' | 'Public standard series';
  sourceDetail: string;
};

export const industryReferences: IndustryReference[] = [
  {
    metric: 'Fixed carbon (carbonized coconut shell)',
    value: '≥ 70%',
    context: 'Typical declared specification for traded carbonized coconut shell material',
    sourceType: 'Chinese trade listing',
    sourceDetail: 'Public carbonized-shell trade listings (2025-2026)',
  },
  {
    metric: 'Ash (carbonized coconut shell)',
    value: '≤ 3%',
    context: 'Typical declared ceiling for carbonized shell as traded',
    sourceType: 'Chinese trade listing',
    sourceDetail: 'Public carbonized-shell trade listings (2025-2026)',
  },
  {
    metric: 'Moisture (carbonized coconut shell)',
    value: '≤ 15%',
    context: 'As-traded moisture ceiling; final briquette moisture is lower (6-8%)',
    sourceType: 'Chinese trade listing',
    sourceDetail: 'Public carbonized-shell trade listings (2025-2026)',
  },
  {
    metric: 'Volatile matter (carbonized coconut shell)',
    value: '10-15%',
    context: 'Residual volatile fraction of carbonized shell',
    sourceType: 'Chinese trade listing',
    sourceDetail: 'Public carbonized-shell trade listings (2025-2026)',
  },
  {
    metric: 'Carbonization temperature',
    value: '600-900 °C',
    context: 'Effective temperature window for shell carbonization described in public process references',
    sourceType: 'Public process reference',
    sourceDetail: 'Public carbonization process references (Chinese-language)',
  },
  {
    metric: 'Shell-to-charcoal yield',
    value: '~2-2.5 t shells → 1 t charcoal',
    context: 'Yield ratio with feedstock moisture ≤ 20%',
    sourceType: 'Public process reference',
    sourceDetail: 'Public carbonization process references (Chinese-language)',
  },
  {
    metric: 'Iodine number (coconut shell activated carbon)',
    value: '1,000-1,200 mg/g',
    context: 'Class-level adsorbent quality indicator for the activated-carbon product family (not fuel charcoal)',
    sourceType: 'Public standard series',
    sourceDetail: 'GB/T 12496 series test methods (Chinese national standard family for wooden activated carbon)',
  },
  {
    metric: 'Ash (coconut shell activated carbon)',
    value: '2-3%',
    context: 'Purity indicator for activated carbon; not interchangeable with fuel-charcoal ash specs',
    sourceType: 'Public standard series',
    sourceDetail: 'GB/T 12496.3 ash test method context (Chinese national standard)',
  },
];

export const INDUSTRY_REFERENCE_DISCLAIMER =
  'Class-level reference points compiled from public Chinese-language sources. These are industry context, not supplier commitments and not CHARCOAL HUB test data. Batch-specific values must come from an attributable test report.';
