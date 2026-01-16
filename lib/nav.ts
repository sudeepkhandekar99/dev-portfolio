export type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  { title: "Who", href: "/" },
  {
    title: "Creations",
    children: [
      { title: "Selected Work", href: "/creations/selected" },
      { title: "Side Quests", href: "/creations/side-quests" },
    ],
  },
  {
    title: "Writing",
    children: [
      { title: "Notes", href: "/writing/notes" },
      { title: "Essays", href: "/writing/essays" },
    ],
  },
  { title: "Life", href: "/life" },
  {
    title: "Links",
    children: [
      { title: "X", href: "https://x.com" },
      { title: "Instagram", href: "https://instagram.com" },
      { title: "Email", href: "mailto:hello@example.com" },
    ],
  },
];