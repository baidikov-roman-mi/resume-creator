// heroicons
import {
  FaceSmileIcon,
  PaintBrushIcon,
  UserIcon,
  BriefcaseIcon,
  CursorArrowRaysIcon,
  CloudArrowUpIcon,
  ArrowDownTrayIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

// - lists - //
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

// templates
export const templates = [
  {
    tag: "Modern",
    description: "Mike's Resume",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    tag: "Creative",
    description: "Art world",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    tag: "Professional",
    description: "To my boss",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

// userGreeting list

export const userGreeting = [
  {
    name: "Create and Publish",
    PCdescription:
      "Select a template, customize it with your details, and upload it directly to your LinkedIn profile. Make a lasting impression on potential employers.",
    PHONEdescription:
      "Customize template and upload it to your LinkedIn profile.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Multiple Download Formats",
    PCdescription:
      "Download your resume in various formats including PDF, doc, and docx. Choose the one that suits your needs!",
    PHONEdescription: "Download your resume in PDF, doc, docx formats.",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "User-Friendly Interface",
    PCdescription:
      "Navigate our interface with ease. We provide detailed instructions to help you get started quickly and efficiently.",
    PHONEdescription:
      "Navigate our interface with ease. We provide detailed instructions",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Support for Multiple Languages",
    PCdescription:
      "Our templates are designed to accommodate a wide range of languages. We strive to make our templates universally accessible.",
    PHONEdescription: "We strive to make our templates universally accessible.",
    icon: LanguageIcon,
  },
];

// links for headerSection

export const links = [
  { name: "Watch Demo", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact Us", href: "#" },
];

// stats for headerSection
export const stats = [
  { name: "Templates", value: "10" },
  { name: "Downloads", value: "300" },
  { name: "Users", value: "100" },
];

export const tagColors: { [key: string]: string } = {
  Modern: "bg-orange-50",
  Creative: "bg-lime-50",
  Professional: "bg-blue-50",
  Internship: "bg-red-50",
};
