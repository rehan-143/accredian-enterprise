export const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
];

export const ledgerStats = [
  { value: "42", unit: "cohorts", label: "delivered since 2021" },
  { value: "11,400+", unit: "learners", label: "upskilled across teams" },
  { value: "9", unit: "institutes", label: "academic partners" },
  { value: "87%", unit: "avg.", label: "cohort completion rate" },
];

export const partnerLogos = [
  "Northbridge Capital",
  "Verdant Retail Group",
  "OrionTech Systems",
  "Halcyon Logistics",
  "Meridian Health",
  "Corestone Manufacturing",
];

export type Program = {
  code: string;
  title: string;
  format: string;
  duration: string;
  outcome: string;
};

export const programs: Program[] = [
  {
    code: "DS-01",
    title: "Data Science & AI for Teams",
    format: "Cohort-based, live + async",
    duration: "12 weeks",
    outcome: "Applied ML workflows on your own datasets, capstone reviewed by mentors.",
  },
  {
    code: "PM-02",
    title: "Product Management Accelerator",
    format: "Cohort-based, live",
    duration: "8 weeks",
    outcome: "Roadmapping, discovery, and metrics fluency for cross-functional PMs.",
  },
  {
    code: "FS-03",
    title: "Full Stack Engineering Track",
    format: "Cohort-based, live + labs",
    duration: "16 weeks",
    outcome: "Production-grade builds in your team's actual tech stack.",
  },
  {
    code: "DM-04",
    title: "Digital Marketing & Growth",
    format: "Cohort-based, live",
    duration: "10 weeks",
    outcome: "Channel strategy and attribution modeling tied to real campaigns.",
  },
  {
    code: "LD-05",
    title: "Leadership for First-Time Managers",
    format: "Blended, live workshops",
    duration: "6 weeks",
    outcome: "Delegation, feedback, and 1:1 frameworks practiced in role-plays.",
  },
  {
    code: "CX-06",
    title: "Cloud & DevOps Fundamentals",
    format: "Cohort-based, live + labs",
    duration: "10 weeks",
    outcome: "Hands-on infrastructure work on your team's own cloud environment.",
  },
];

export const whyUsRows = [
  {
    title: "Cohort-based, not self-paced",
    detail:
      "Teams learn together on a shared calendar, with peer accountability that keeps completion rates high.",
  },
  {
    title: "Curriculum mapped to your stack",
    detail:
      "We adapt case studies, datasets, and tooling to match what your teams actually use day to day.",
  },
  {
    title: "Dedicated success manager",
    detail:
      "One point of contact owns scheduling, attendance, and escalations for the length of the engagement.",
  },
  {
    title: "Certification with academic partners",
    detail:
      "Learners graduate with credentials co-issued by our partner institutes, recognized in performance reviews.",
  },
  {
    title: "Reporting your L&D team can use",
    detail:
      "Attendance, assessment scores, and engagement data delivered on a cadence that fits your review cycles.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    detail:
      "We audit current skill gaps against your roadmap and shortlist relevant program tracks.",
  },
  {
    step: "02",
    title: "Design",
    detail:
      "Curriculum, cohort size, and schedule are customized and signed off with your L&D team.",
  },
  {
    step: "03",
    title: "Deliver",
    detail:
      "Live sessions, labs, and mentor office hours run on your calendar, tracked in a shared dashboard.",
  },
  {
    step: "04",
    title: "Measure",
    detail:
      "Post-program assessments and manager feedback are compiled into a single impact report.",
  },
];

export const testimonials = [
  {
    quote:
      "Our engineering team's onboarding time dropped noticeably after the Full Stack track. The mentors adapted every module to our own codebase conventions.",
    name: "Ritika Sengupta",
    role: "Head of L&D, Verdant Retail Group",
  },
  {
    quote:
      "What stood out was the reporting. We could show completion and assessment data to leadership without chasing anyone for a spreadsheet.",
    name: "Arjun Malhotra",
    role: "VP People, OrionTech Systems",
  },
  {
    quote:
      "The cohort format kept people accountable in a way our old self-paced subscription never did. Attendance stayed above 80% the whole way through.",
    name: "Priya Nair",
    role: "Learning Manager, Halcyon Logistics",
  },
];
