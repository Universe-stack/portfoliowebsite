export type Publication = {
  id: string;
  badge: string;
  title: string;
  summary: string;
  cta: string;
  bg: string;
  textColor?: string;
  buttonBg?: string;
  buttonText?: string;
  badgeBg?: string;
  badgeText?: string;
  image: string;
  chips?: string[];
  link?: string;
};

export const publicationCards: Publication[] = [
  {
    id: "design-event",
    badge: "Article | AI Product management",
    title: "What is software even?",
    summary: "A clear, beginner-friendly breakdown of how software works under the hood — from logic and data to systems and trade-offs.",
    cta: "Full article →",
    bg: "#b32020",
    textColor: "#ffffff",
    buttonBg: "#ffffff",
    buttonText: "#b32020",
    badgeBg: "#ffffff",
    badgeText: "#b32020",
    image:
      "/Rocket (1).png",
    link:""
  },
  {
    id: "design-critiques",
    badge: "Article | Web development",
    title: "Implementing Paystack in your app",
    summary: "A step-by-step guide to integrating Paystack across FE, BE, and full-stack workflows — without breaking things in production.",
    cta: "Full article →",
    bg: "#f7f7f7",
    textColor: "#0f0f0f",
    buttonBg: "#0f0f0f",
    buttonText: "#ffffff",
    badgeBg: "#141414",
    badgeText: "#ffffff",
    image:
      "/Money.png",
    chips: ["FE", "BE", "SWE"],
    link:"https://howtolovejs.hashnode.dev/quick-guide-on-how-to-integrate-paystack-payments-api-into-a-website-using-nextjs"
  },
  {
    id: "brand-asset",
    badge: "Article | Devops",
    title: "Linux File System for Beginners",
    summary: "From the ground up: how Linux powers real systems and how large teams use it to securely manage access at scale.",
    cta: "Restricted →",
    bg: "#f08f25",
    textColor: "#121212",
    buttonBg: "#121212",
    buttonText: "#f8f0e9",
    badgeBg: "#c46b1b",
    badgeText: "#fef3e8",
    image:
      "/Question.png",
    link:"https://devopswithkachi.hashnode.dev/linux-file-system-for-beginners-a-friendly-guide-to-getting-started"
  },
  {
    id: "listing-redesign",
    badge: "Course",
    title: "Intro to TPM for Product Managers",
    summary: "For product managers who want to truly understand the systems they ship.",
    cta: "Coming soon →",
    bg: "#f2b532",
    textColor: "#0f0f0f",
    buttonBg: "#111111",
    buttonText: "#ffffff",
    badgeBg: "#e28e13",
    badgeText: "#ffffff",
    image:
      "/Handshake.png",
    link: ""
  }
]