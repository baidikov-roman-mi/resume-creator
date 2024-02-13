import {
  CursorArrowRaysIcon,
  CloudArrowUpIcon,
  ArrowDownTrayIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

import Header from "./components/Header.tsx";

const features = [
  {
    name: "Create and Publish",
    description:
      "Select a template, customize it with your details, and upload it directly to your LinkedIn profile. Make a lasting impression on potential employers.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Multiple Download Formats",
    description:
      "Download your resume in various formats including PDF, doc, and docx. Choose the one that suits your needs!",
    icon: ArrowDownTrayIcon,
  },
  {
    name: "User-Friendly Interface",
    description:
      "Navigate our interface with ease. We provide detailed instructions to help you get started quickly and efficiently.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Support for Multiple Languages",
    description:
      "Our templates are designed to accommodate a wide range of languages. We strive to make our templates universally accessible.",
    icon: LanguageIcon,
  },
];

export default function App() {
  return (
    <>
      <Header />
      <div className="mx-auto bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-center font-semibold leading-7 text-orange-600">
              {/* todo: dynamically place templates amount */}
              Create your own resume from over X templates.
            </h2>
            <p className="text-center mt-2 text-3xl font-bold tracking-tight text-orange-900 sm:text-4xl">
              Your perfect resume in just 15 minutes.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Want to create your own resume without spending too much time?
              Then, this web page is for you!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
