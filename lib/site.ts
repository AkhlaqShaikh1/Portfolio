export const siteConfig = {
  name: "Coms Advance Engineering",
  shortName: "COMS",
  url: "https://comengineering.services",
  description:
    "Coms Advance Engineering builds custom web applications, mobile apps, and AI-powered software. Creators of ORBS business management, Emailify, and BudgetGuard.",
  logo: "https://comengineering.services/logo.png",
  linkedin: "https://www.linkedin.com/company/coms-advance-engineering-llc",
};

export function absoluteUrl(path: string = "") {
  return `${siteConfig.url}${path}`;
}
