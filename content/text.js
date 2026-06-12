const SITE_CONTENT = {
  nav: {
    name: "Faber Automation",
    ctaLabel: "Book a Call",
    ctaHref: "https://calendly.com/jack-faberautomation/30min"
  },

  hero: {
    badge: "AI Automation",
    headlineLine1: "We build automation systems that",  // ← edit line 1 here (stays fixed)
    headlineLines: [                                  // ← add / remove / reorder rolling phrases here
      "scale you faster",
      "capture lost revenue",
      "eliminate manual work",
      "respond in seconds, not days",
      "turn enquiries into bookings",
      "never miss a lead",
    ],
    subheadline: "Custom automation systems that help businesses scale faster, capture lost revenue and eliminate manual work.",
    cta: "Book a Free Call",
    ctaHref: "https://calendly.com/jack-faberautomation/30min",
    ctaSecondary: "See How It Works"
  },

  marquee: {
    label: "Platforms we work with",
    logos: [
      { name: "Make",   src: "logo%20folder/Make_Logo.png" },
      { name: "n8n",    src: "logo%20folder/N8n-logo-new.png" },
      { name: "Zapier", src: "logo%20folder/zapier.png" },
      { name: "OpenAI", src: "logo%20folder/OpenAI_Logo.svg.png" },
      { name: "Claude", src: "logo%20folder/Claude_Logo_2023.png" }
    ]
  },

  services: {
    heading: "Editorial by design.",
    subheading: "Focused automation that removes the manual work slowing your team down. We build on the tools you already use.",
    items: [
      {
        title: "CRM & Lead Automation",
        body: "Automatically capture, score, and route leads from any source. Keep your CRM up to date without a single manual data entry.",
        icon: "crm"
      },
      {
        title: "AI Chatbots & Assistants",
        body: "Custom AI agents trained on your business — for customer support, internal knowledge retrieval, or lead qualification that runs around the clock.",
        icon: "bot"
      },
      {
        title: "Document & Reporting Automation",
        body: "Auto-generate proposals, invoices, reports, and briefs from your existing data. Accurate documents in seconds, not hours.",
        icon: "doc"
      }
    ]
  },

  process: {
    heading: "How it works.",
    subheading: "Three focused phases. No fluff, no retainers, no surprises.",
    phases: [
      {
        number: "01",
        title: "Growth Mapping Call",
        body: "A free 30-minute call to understand your business, identify your highest-leverage automation opportunities, and decide together whether we're the right fit."
      },
      {
        number: "02",
        title: "Scope",
        body: "We audit your current workflows, define exactly what gets built, and deliver a fixed-scope proposal. You know the deliverable, timeline, and price before anything starts."
      },
      {
        number: "03",
        title: "Delivery",
        body: "We build, test, and hand off your automation systems with full documentation. Most projects complete in two to four weeks. You own everything we build."
      }
    ]
  },

  contact: {
    heading: "Ready to reclaim your time?",
    subheading: "Book a free 30-minute growth mapping call. No pitch, no pressure — just a clear look at what automation can do for your business.",
    cta: "Book a Free Call",
    ctaHref: "https://calendly.com/jack-faberautomation/30min"
  },

  footer: {
    name: "Faber Automation",
    email: "jack@faberautomation.com", // ← replace with your email address
    year: new Date().getFullYear()
  }
};
