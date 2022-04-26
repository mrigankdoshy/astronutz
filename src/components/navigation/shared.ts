export const navItems: Array<NavItem> = [
  {
    label: 'About Us',
    children: [
      {
        label: 'Creators',
        subLabel: 'Learn about our wonderful creators',
        href: '#',
      },
      {
        label: 'Roadmap',
        subLabel: "An insight into what's next",
        href: '#',
      },
    ],
  },
  {
    label: 'Drops',
    children: [
      {
        label: 'Explore Space',
        subLabel: 'Find some unique space junk',
        href: '#',
      },
      {
        label: 'Launching Soon',
        subLabel: 'Up-and-coming collectibles',
        href: '#',
      },
    ],
  },
  {
    label: 'Community',
    href: '#',
  },
  {
    label: 'Marketplace',
    href: '#',
  },
];

export type NavItem = Readonly<{
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}>;
