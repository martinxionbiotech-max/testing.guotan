/* ------------------------------------------------------------------ */
/* CHARCOAL HUB — per-site config: name, nav, footer, description.     */
/* Each repo has its own copy with its own nav/footer.                 */
/* ------------------------------------------------------------------ */

import { SITES } from '../lib/sites';

export type NavItem = { label: string; href: string; external?: boolean };

export type SiteConfig = {
  siteKey: 'main' | 'data' | 'manufacturer' | 'testing' | 'knowledge';
  name: string;
  shortName: string;
  description: string;
  nav: NavItem[];
  footerCols: { title: string; links: NavItem[] }[];
};

/* ------------------------------------------------------------------ */
/* testing.guotan.com — charcoal testing & quality          */
/* intelligence. Methodology-only: this site published only general   */
/* public-standard methods until real, attributable test reports exist.*/
/* ------------------------------------------------------------------ */

export const site: SiteConfig = {
  siteKey: 'testing',
  name: 'Charcoal Hub Testing',
  shortName: 'Testing',
  description:
    'Charcoal testing and quality intelligence for B2B buyers: methodology for ash content, moisture, fixed carbon, volatile matter, burning time, size tolerance and emissions, plus a reports database that stays data-pending until real, attributable test reports exist.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Tests', href: '/tests/' },
    { label: 'Reports', href: '/reports/' },
    { label: '← Main Site', href: `${SITES.main}/`, external: true },
  ],
  footerCols: [
    {
      title: 'Charcoal Hub',
      links: [
        { label: 'Main site', href: `${SITES.main}/`, external: true },
        { label: 'Testing overview', href: `${SITES.main}/testing/`, external: true },
        { label: 'Request a quote', href: `${SITES.main}/contact/`, external: true },
      ],
    },
    {
      title: 'Testing',
      links: [
        { label: 'All test methods', href: '/tests/' },
        { label: 'Test reports', href: '/reports/' },
        { label: 'Home', href: '/' },
      ],
    },
    {
      title: 'Sibling sites',
      links: [
        { label: 'Data & specifications', href: `${SITES.data}/`, external: true },
        { label: 'Manufacturers', href: `${SITES.manufacturer}/`, external: true },
        { label: 'Knowledge base', href: `${SITES.knowledge}/`, external: true },
      ],
    },
  ],
};

/* Convenience: canonical absolute URL for a site-relative path. */
export const url = (path = '/'): string =>
  `${SITES.testing}${path.startsWith('/') ? path : `/${path}`}`;

export default site;
