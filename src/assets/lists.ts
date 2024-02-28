// heroicons
import {
  FaceSmileIcon,
  PaintBrushIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

// lists
export const popoverList = [
  {
    name: "Simple",
    description:
      "Straightforward and clean, focusing on clarity and easy readability.",
    href: "/simple",
    icon: FaceSmileIcon,
  },
  {
    name: "Creative",
    description:
      "Best for artists, showcasing unique style and imaginative abilities",
    href: "/creative",
    icon: PaintBrushIcon,
  },
  {
    name: "Professional",
    description:
      "Tailored for experienced professionals, highlighting skills and achievements.",
    href: "/professional",
    icon: UserIcon,
  },
  {
    name: "Internship",
    description:
      "Designed for students, emphasizing education and relevant coursework.",
    href: "/internship",
    icon: BriefcaseIcon,
  },
];

// for future TODO: create YT video for demo
export const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
];

// mobile menu for header
export const mobileMenu = [
  { name: "FAQ", href: "/faq" },
  { name: "Share", href: "/share" },
  { name: "Log in", href: "/login" },
  { name: "Sign in", href: "/sign" },
];
