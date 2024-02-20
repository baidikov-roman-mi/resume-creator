import useScreen from "./hooks/useScreen.tsx";

import {
  CursorArrowRaysIcon,
  CloudArrowUpIcon,
  ArrowDownTrayIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

import Header from "./components/Header.tsx"
import HeaderSection from "./components/HeaderSection.tsx"
import Footer from "./components/Footer.tsx";
const features = [
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

export default function App() {
  const { width } = useScreen();
  let ifPHONE = width < 640;

  return (
    <>
      <Header />
      <HeaderSection />
      <div className="line-container">
        <svg
          width="5"
          height="995"
          viewBox="0 0 5 995"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            ref={pathRef}
            d="M2.5 0V994.5"
            stroke="black"
            stroke-width="5"
          />
        </svg>
      </div>
      <div className="mx-auto bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto my-10 max-w-2xl sm:mt-20 md:my-20 lg:my-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div className="p-4 border border-orange-600 md:border-gray-300 hover:border-orange-600 hover:shadow-sm">
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-orange-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="my-3 text-base leading-7 text-gray-600">
                      {ifPHONE
                        ? feature.PHONEdescription
                        : feature.PCdescription}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
