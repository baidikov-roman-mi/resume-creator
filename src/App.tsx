import {
  CursorArrowRaysIcon,
  CloudArrowUpIcon,
  ArrowDownTrayIcon,
  LanguageIcon
} from "@heroicons/react/24/outline"

import Header from "./components/Header.tsx"
import HeaderSection from "./components/HeaderSection.tsx"

const features = [
  {
    name: "Create and Publish",
    description:
      "Select a template, customize it with your details, and upload it directly to your LinkedIn profile. Make a lasting impression on potential employers.",
    icon: CloudArrowUpIcon
  },
  {
    name: "Multiple Download Formats",
    description:
      "Download your resume in various formats including PDF, doc, and docx. Choose the one that suits your needs!",
    icon: ArrowDownTrayIcon
  },
  {
    name: "User-Friendly Interface",
    description:
      "Navigate our interface with ease. We provide detailed instructions to help you get started quickly and efficiently.",
    icon: CursorArrowRaysIcon
  },
  {
    name: "Support for Multiple Languages",
    description:
      "Our templates are designed to accommodate a wide range of languages. We strive to make our templates universally accessible.",
    icon: LanguageIcon
  }
]

export default function App() {
  return (
    <>
      <Header />
      <HeaderSection />
      <div className="mx-auto bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
