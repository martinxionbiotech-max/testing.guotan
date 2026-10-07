/* ------------------------------------------------------------------ */
/* CHARCOAL HUB — testing.guotan test methodology registry.            */
/*                                                                     */
/* HARD RULE: methodology only. No fabricated test results, no fake    */
/* laboratories, no invented report numbers, and no numeric "typical   */
/* ranges" presented as our own data. Each entry describes what a      */
/* property means and how it is generally measured per public          */
/* standards, so buyers can read real certificates with context.       */
/* ------------------------------------------------------------------ */

export type TestMethod = {
  slug: string;
  name: string;
  /** Meta description / card summary. */
  summary: string;
  /** Public methods commonly referenced for this parameter. */
  standards: string[];
  whatItMeasures: string[];
  whyItMatters: string[];
  measurementMethod: string[];
  buyerRelevance: string[];
  limitations: string[];
  /** Path on the data sub-site, if a cross-site definition exists. */
  dataSpecPath: string;
  dataSource: string;
  lastUpdated: string;
};

/* Shared provenance line required on every methodology page. */
export const METHODOLOGY_DATA_SOURCE =
  'Public standard methodology (general); not supplier-specific test data';

export const METHODOLOGY_LAST_UPDATED = '2026-10-07';

export const testMethods: TestMethod[] = [
  /* ------------------------------- 1 ------------------------------ */
  {
    slug: 'ash-content',
    name: 'Ash Content',
    summary:
      'What ash content means in charcoal, why inert mineral residue matters to buyers, and how it is generally measured under public standards such as ASTM D1762 and ISO 18122.',
    standards: [
      'ASTM D1762 — Chemical analysis of wood charcoal (proximate analysis)',
      'ASTM D3174 — Ash in the analysis sample of coal and coke',
      'ISO 18122 — Solid biofuels: determination of ash content',
    ],
    whatItMeasures: [
      'Ash content is the mass of inorganic, non-combustible residue that remains after the carbon and volatile matter in a charcoal sample are burned off under controlled laboratory conditions. It is expressed as a percentage of the sample mass, on a basis (dry or as-received) that the method requires the laboratory to state.',
      'The residue represents mineral matter — for example soil, sand, clay and salts — carried over from the feedstock or introduced during carbonisation, handling, storage or packaging. It is not fuel: ash does not contribute heat when the charcoal burns.',
    ],
    whyItMatters: [
      'Because ash is inert, it dilutes the fraction of the consignment that can actually burn. A higher ash fraction means more of the delivered weight is residue and less is usable fuel, and it increases the volume of ash left behind after use.',
      'Ash also affects handling and equipment: residue can accumulate in appliances, and in some industrial furnaces ash chemistry influences slagging and fouling. Ash content is one of the standard proximate-analysis parameters reported for charcoal and solid biofuels.',
    ],
    measurementMethod: [
      'The determination is gravimetric. A weighed portion of a prepared (typically ground and homogenised) sample is combusted in a muffle furnace at a controlled temperature — the specific temperature, ramp and hold time are fixed by the chosen method — until only the inorganic residue remains. The crucible is cooled in a desiccator (to avoid re-absorbing moisture) and reweighed, and ash content is calculated from the residue mass relative to the original sample mass.',
      'Commonly referenced public methods include the proximate-analysis procedures of ASTM D1762 for wood charcoal, ASTM D3174 for coal and coke, and ISO 18122 for solid biofuels. The ashing temperature, sample mass, sample preparation and reporting basis (dry versus as-received) are defined by the method; because these differ between methods, a result is only comparable with another result obtained by the same method and on the same basis.',
    ],
    buyerRelevance: [
      'Ash is inert ballast, so buyers compare it when usable energy per unit weight, residue management or appliance cleanliness matter. For processes sensitive to residue — boilers, furnaces and cooking appliances — the ash figure is part of the acceptance discussion.',
      'Because different methods ash at different temperatures and report on different bases, buyers should compare ash figures only when the method and basis match. When a supplier quotes ash content, ask which standard and which basis were used, and request the underlying report rather than a headline number.',
    ],
    limitations: [
      'Ash content alone says nothing about ash composition or melting behaviour: two charcoals with the same ash content can behave very differently in a furnace. Ash chemistry requires separate determinations.',
      'Results depend on ashing temperature and time, sample preparation and grinding, and the moisture basis reported. A figure without its method and basis is not interpretable, and a single measurement is not a full characterisation of the fuel. This page describes methodology only and publishes no results.',
    ],
    dataSpecPath: '/specifications/ash-content/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },

  /* ------------------------------- 2 ------------------------------ */
  {
    slug: 'moisture',
    name: 'Moisture',
    summary:
      'What moisture content means in charcoal, why water weight matters to buyers, and how it is generally measured under public standards such as ASTM D1762, ASTM D3173 and the ISO 18134 series.',
    standards: [
      'ASTM D1762 — Chemical analysis of wood charcoal (moisture)',
      'ASTM D3173 — Moisture in the analysis sample of coal and coke',
      'ISO 18134 series — Solid biofuels: determination of moisture content',
    ],
    whatItMeasures: [
      'Moisture is the water content of the charcoal as received or as prepared, expressed as a percentage of the sample mass. It captures free and surface water as well as water held in the porous structure, although different methods drive off different amounts of loosely bound water depending on the drying conditions they specify.',
      'Understanding moisture matters for interpreting every other result, because ash, volatile matter and fixed carbon are frequently reported on a dry basis while moisture itself is reported on an as-received basis.',
    ],
    whyItMatters: [
      'Water is weight that does not burn. Moisture lowers the net energy delivered per tonne and therefore per shipment, adds freight and handling cost for material that will not be used as fuel, and changes combustion behaviour — wetter fuel ignites and burns differently.',
      'Moisture also affects storage: damp charcoal is more prone to mould, self-heating and quality drift, and moisture changes with handling and climate between sampling and delivery. For these reasons moisture is one of the first parameters buyers normalise before comparing tonnages or price.',
    ],
    measurementMethod: [
      'Most accepted methods are gravimetric. A weighed sample is dried to constant mass in a controlled-temperature oven — or, in some methods, under a specified atmosphere — then cooled in a desiccator and reweighed. Moisture content is calculated from the mass lost, with the drying temperature, time and any prior air-drying step fixed by the method.',
      'Commonly referenced public methods include ASTM D1762 for wood charcoal, ASTM D3173 for coal and coke, and the ISO 18134 series for solid biofuels. Rapid field instruments such as moisture meters are widely used for convenience but are normally calibrated against an oven reference, and they are not a substitute for the standard determination when a reported figure is required.',
    ],
    buyerRelevance: [
      'Moisture is a commercial parameter as much as a technical one: it determines how much of the tonne you paid for is water. Buyers should ask whether a certificate reports moisture as-received or on a dry basis, and when and how the sample was taken.',
      'Because charcoal is hygroscopic, a value measured at the point of manufacture may not describe the load as delivered. Where moisture is commercially significant, buyers should agree sampling and testing timing — for example on an as-delivered sample — rather than relying on a value from an earlier stage.',
    ],
    limitations: [
      'The measured value depends on how the sample was stored and handled before testing and on the drying conditions used, so moisture figures are comparable only when the method and basis match. A single moisture value describes a sample, not necessarily an entire consignment.',
      'Moisture is also only one determinant of delivered quality; it interacts with size and storage history. This page describes methodology only and publishes no results.',
    ],
    dataSpecPath: '/specifications/moisture/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },

  /* ------------------------------- 3 ------------------------------ */
  {
    slug: 'fixed-carbon',
    name: 'Fixed Carbon',
    summary:
      'What fixed carbon means in charcoal, why it is a calculated rather than measured parameter, and how it is derived from moisture, volatile matter and ash under public proximate-analysis methods.',
    standards: [
      'ASTM D1762 — Chemical analysis of wood charcoal (fixed carbon by difference)',
      'ASTM D3172 — Proximate analysis of coal and coke',
      'ISO 18134 / ISO 18123 / ISO 18122 — Moisture, volatile matter and ash (underlying inputs)',
    ],
    whatItMeasures: [
      'Fixed carbon is the solid, non-volatile carbonaceous residue that remains after the volatile matter has been driven off. In the standard proximate method it is not measured directly; it is calculated by difference from the other three determinations, conventionally as fixed carbon = 100% − moisture − volatile matter − ash, with all terms expressed on the same basis.',
      'Because it is derived, fixed carbon is an inference from three separate measurements rather than an independent result in its own right.',
    ],
    whyItMatters: [
      'Fixed carbon is widely used as an indicator of the carbon-rich, slow-burning fraction of the fuel — the part associated with glowing, flameless combustion rather than the early flaming phase driven by volatiles.',
      'It is also a convenient single summary of the proximate analysis, which is why it appears on many certificates. Its usefulness, however, is bounded by the accuracy of the three measurements it is calculated from.',
    ],
    measurementMethod: [
      'Fixed carbon is obtained by calculation. The underlying determinations follow the methods for moisture, volatile matter and ash — for example ASTM D1762 for wood charcoal, ASTM D3172 in combination with ASTM D3173, D3174 and D3175 for coal and coke, and the ISO 18134, ISO 18123 and ISO 18122 series for solid biofuels.',
      'The applicable standard defines the reporting basis (dry or as-received) and the convention for the subtraction. Critically, the three inputs must be measured on the same basis and by compatible methods for the difference to be valid; mixing bases or method families can produce a meaningless figure.',
    ],
    buyerRelevance: [
      'Because fixed carbon is derived, buyers should treat it as a secondary indicator and inspect the underlying moisture, volatile matter and ash figures — and their basis — rather than relying on the fixed-carbon number alone.',
      'Two charcoals can report the same fixed carbon for different reasons: one because volatile matter is low (well carbonised), another because ash is low. For procurement decisions, the individual proximate parameters carry more information than the calculated summary.',
    ],
    limitations: [
      'A calculated value inherits the combined uncertainty of every input: if moisture, volatile matter and ash each carry error, those errors propagate into fixed carbon, and if the three are measured on different bases the subtraction can be invalid.',
      'Fixed carbon says nothing about reactivity, burn rate or calorific value — usable heat is a separate determination (typically a calorific-value method). This page describes methodology only and publishes no results.',
    ],
    dataSpecPath: '/specifications/fixed-carbon/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },

  /* ------------------------------- 4 ------------------------------ */
  {
    slug: 'volatile-matter',
    name: 'Volatile Matter',
    summary:
      'What volatile matter means in charcoal, why it drives ignition and smoke behaviour, and how it is generally measured under public standards such as ASTM D1762, ASTM D3175 and ISO 18123.',
    standards: [
      'ASTM D1762 — Chemical analysis of wood charcoal (volatile matter)',
      'ASTM D3175 — Volatile matter in the analysis sample of coal and coke',
      'ISO 18123 — Solid biofuels: determination of the content of volatile matter',
    ],
    whatItMeasures: [
      'Volatile matter is the portion of the sample released as gases and vapours when the fuel is heated out of contact with air — that is, in the absence of oxygen — excluding the moisture determined separately. It captures tars, hydrocarbons and other volatile species driven off during pyrolysis and the early stages of combustion.',
      'For charcoal, residual volatile matter is also an indicator of how completely the original feedstock was carbonised: a more thoroughly carbonised fuel generally retains less volatile material.',
    ],
    whyItMatters: [
      'Volatiles govern how readily a fuel ignites and how it behaves in the early phase of burning. They influence flame behaviour, the amount of smoke produced, and the balance between flaming and glowing combustion — all of which matter in cooking, heating and hospitality applications.',
      'Volatile matter is also one of the three measured inputs used to calculate fixed carbon, so it directly affects how the proximate analysis is summarised on a certificate.',
    ],
    measurementMethod: [
      'The determination is gravimetric. A weighed sample — typically moisture-free or brought to a specified condition — is heated in a covered crucible or under a controlled inert atmosphere at a temperature and for a time fixed by the method. After volatilisation the crucible is cooled in a desiccator and reweighed, and volatile matter is calculated from the mass lost, excluding the separately determined moisture.',
      'Commonly referenced public methods include ASTM D1762 for wood charcoal, ASTM D3175 for coal and coke, and ISO 18123 for solid biofuels. The furnace temperature, heating rate, residence time and crucible configuration differ between methods and directly affect the result, so the method must accompany any reported value.',
    ],
    buyerRelevance: [
      'Volatile matter helps buyers judge ignition ease and burn behaviour, and how cleanly a charcoal was carbonised. A charcoal with higher residual volatiles tends to flame and smoke more before settling into glowing combustion, which can matter for indoor cooking and for emissions-sensitive uses.',
      'Because volatile matter is an input to fixed carbon and is sensitive to method details, buyers should read it together with the moisture and ash figures and the stated basis, rather than as a stand-alone headline.',
    ],
    limitations: [
      'The result is highly sensitive to heating rate, final temperature, hold time and atmosphere, so values obtained by different methods are not directly comparable. Volatile matter does not identify which species are released.',
      'It is not a measure of smoke or emissions at the point of use — those require combustion testing under a defined protocol (see the emissions methodology). This page describes methodology only and publishes no results.',
    ],
    dataSpecPath: '/specifications/volatile-matter/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },

  /* ------------------------------- 5 ------------------------------ */
  {
    slug: 'burning-time',
    name: 'Burning Time',
    summary:
      'What burning time means for charcoal performance, why it has no single universal standard, and how it is generally assessed under defined, configuration-specific test protocols.',
    standards: [
      'No single universal standard exists for charcoal burning time',
      'ISO 19867-1 — Clean cookstoves: harmonised laboratory test protocols (performance and emissions)',
      'Water-boiling-test style protocols (widely used, not specific to charcoal)',
    ],
    whatItMeasures: [
      'Burning time describes how long a defined quantity of charcoal continues to burn — or continues to deliver usable heat — under a defined test configuration. It is a performance characteristic of the fuel in the tested setup, not a fixed property of the material.',
      'There is no single universal standard for charcoal burning time. What is measured depends entirely on the apparatus, the fuel charge and geometry, the ignition method, the airflow and the endpoint definition used.',
    ],
    whyItMatters: [
      'Burn duration is one of the practical attributes buyers care about most, alongside heat output and ease of lighting. For cooking, heating and hospitality use, how long a charge lasts determines how often the appliance must be refuelled.',
      'Because the result is configuration-dependent, it is only meaningful when the entire test setup is specified. A bare "burn time" claim without a protocol cannot be compared with another.',
    ],
    measurementMethod: [
      'A defined mass and size fraction of fuel is ignited and burned in a specified stove, brazier or test rig. Time-to-endpoint is recorded, often together with temperature profiles or water-boiling performance. The endpoint itself must be defined — for example flame-out, the point at which glowing embers fall below a threshold, or a specified heat-output level.',
      'Harmonised public protocols exist for cookstoves and are sometimes adapted for charcoal performance assessment; the ISO 19867-1 harmonised laboratory test sequence for emissions and performance is the best-known example, and water-boiling-test style protocols are also widely used. Charcoal-specific burn-time testing frequently follows in-house or buyer-agreed procedures, so any result should be published together with its protocol.',
    ],
    buyerRelevance: [
      'When a supplier claims a burn time, buyers should ask for the test protocol: fuel mass and size fraction, the stove or brazier used, the ignition method, the airflow conditions and the endpoint definition. Values obtained under different protocols are not comparable.',
      'For procurement, burn time is best treated as an application-specific acceptance criterion agreed between buyer and supplier — tested the way the buyer will actually use the fuel — rather than a universal specification.',
    ],
    limitations: [
      'There is no universal standard, so results are strongly configuration-dependent and sensitive to size grading, moisture, airflow and the endpoint definition; operator effects are large.',
      'A longer burn time is not automatically better: it can trade off against heat output or ignition speed. This page describes methodology only and states no burn-time figures.',
    ],
    dataSpecPath: '/specifications/burning-time/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },

  /* ------------------------------- 6 ------------------------------ */
  {
    slug: 'size-tolerance',
    name: 'Size Tolerance',
    summary:
      'What size tolerance and size grading mean for charcoal, why declared size classes require a checking method, and how size is generally characterised by sieve analysis and defined size classes.',
    standards: [
      'ISO 17225 series — Solid biofuels: fuel specifications and classes (particle size)',
      'ASTM D4749 — Sieve analysis of coal and designating coal size',
      'Supplier-declared nominal size classes with agreed tolerances',
    ],
    whatItMeasures: [
      'Size tolerance — also described as size grading, particle-size distribution or size consistency — describes the range and uniformity of the physical dimensions or particle sizes of the charcoal as supplied, and how much of a consignment falls within the declared size class.',
      'For lump charcoal this is usually expressed as a nominal size class with allowed oversize and undersize proportions; for graded or fragmented material it is expressed as a distribution across a sieve series.',
    ],
    whyItMatters: [
      'Size affects packing density, airflow through the fuel bed, ignition and burn behaviour, and ease of handling. Mixed or out-of-spec sizes change how an appliance performs, how much fuel fits a given volume, and how consistently a charge burns.',
      'Because "large" and "medium" are not universal terms, a declared size class is only meaningful when it is defined numerically and paired with a method for checking conformance.',
    ],
    measurementMethod: [
      'Size is characterised in two broad ways. For smaller or fragmented material, sieve analysis (grading) is used: the sample is passed through a stated series of sieves and the retained fractions are reported as a distribution against a declared size class and tolerance. For large irregular lump charcoal, nominal lump dimensions are measured and the oversize/undersize fractions are reported against the declared class.',
      'Public references include the particle-size specifications and classes of the ISO 17225 series for solid biofuels and coal sieve-analysis methods such as ASTM D4749, combined with the supplier-declared nominal size and tolerance. The sample size, sieve series (or measurement rule) and acceptance criteria must be stated for a result to be verifiable.',
    ],
    buyerRelevance: [
      'Buyers who specify a size class should define it with numeric upper and lower bounds and an allowed oversize/undersize percentage, and agree in advance how conformance is checked — the sieve set, the sampling method and the tolerances.',
      'Size also interacts with other properties: surface exposure affects how quickly moisture changes, and void fraction affects airflow during burning. A size specification is therefore part of a coherent quality specification, not a stand-alone attribute.',
    ],
    limitations: [
      'Lump charcoal is irregular, so any single dimension is a simplification of a real distribution; different sieve sets or sampling approaches yield different distributions.',
      'Breakage during handling and transport can change size between loading and delivery, so an as-loaded result may not describe the load as received. Sieve-based distributions are most meaningful for graded or fragmented material and less so for large irregular lumps. This page describes methodology only and publishes no size data.',
    ],
    dataSpecPath: '/specifications/size-tolerance/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },

  /* ------------------------------- 7 ------------------------------ */
  {
    slug: 'emissions',
    name: 'Emissions',
    summary:
      'What charcoal combustion emissions testing covers, which species are typically measured, and how they are assessed under controlled protocols such as ISO 19867-1 and standard sampling methods.',
    standards: [
      'ISO 19867-1 — Clean cookstoves: harmonised laboratory test protocols (emissions and performance)',
      'Flue-gas analysis with calibrated gas analysers (e.g. CO, CO₂, NOx)',
      'Gravimetric particulate sampling; standardised stationary-source sampling methods (e.g. US EPA Method series)',
    ],
    whatItMeasures: [
      'Emissions testing characterises the gases and particles released during charcoal combustion. The species most often measured are carbon monoxide (CO), carbon dioxide (CO₂) and particulate matter (PM), and some protocols add others such as nitrogen oxides (NOx) and volatile organic compounds.',
      'It describes what leaves the fire under the tested conditions — fuel plus appliance plus operating cycle — rather than a fixed property of the fuel alone.',
    ],
    whyItMatters: [
      'Emissions affect indoor and outdoor air quality and user safety: carbon monoxide is a particular concern when charcoal is burned in enclosed or poorly ventilated spaces.',
      'Air-quality and product requirements in some markets, and voluntary standards for cookstoves and appliances, are expressed in terms of emission performance. Two charcoals with similar proximate analysis can still differ in emissions, because emissions depend heavily on combustion conditions as well as fuel composition.',
    ],
    measurementMethod: [
      'Emissions are measured during a controlled burn. Common approaches include flue-gas analysis with calibrated gas analysers — for example electrochemical or non-dispersive infrared (NDIR) sensors for CO and CO₂ — gravimetric particulate sampling on filters, and standardised sampling trains adapted from stationary-source methods, such as gravimetric particulate and CO methods in the US EPA Method series.',
      'Harmonised protocols for cookstoves define a standard test sequence for emissions and performance; the ISO 19867-1 harmonised laboratory test protocol is the best-known example. Because charcoal emissions depend strongly on the stove, ventilation, fuel charge and operating cycle, the protocol must be reported alongside any result for it to be interpretable.',
    ],
    buyerRelevance: [
      'For markets or applications with air-quality requirements, buyers should ask which species were measured, by which protocol, and under what combustion configuration. A single-species figure reported in isolation does not characterise overall emission performance.',
      'Emission performance is best treated as an application-level property — fuel plus appliance plus operating conditions — assessed alongside, and not instead of, the proximate-analysis parameters reported for the fuel itself.',
    ],
    limitations: [
      'Results are strongly dependent on test configuration, so comparability requires matched protocols; measuring only one species (for example CO) does not characterise overall emissions.',
      'Real-world exposure also depends on ventilation and how the fuel is used, which laboratory testing cannot fully reproduce. This page describes methodology only and states no emissions figures.',
    ],
    dataSpecPath: '/specifications/emissions/',
    dataSource: METHODOLOGY_DATA_SOURCE,
    lastUpdated: METHODOLOGY_LAST_UPDATED,
  },
];

export const getTestMethod = (slug: string): TestMethod | undefined =>
  testMethods.find((t) => t.slug === slug);
