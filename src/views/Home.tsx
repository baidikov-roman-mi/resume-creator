import useScreen from "../hooks/useScreen.tsx";

// components
import Header from "../components/Header.tsx";
import HeaderSection from "../components/HeaderSection.tsx";
import Footer from "../components/Footer.tsx";
import NewsletterSection from "../components/NewsletterSection.tsx";

// lists
import { userGreeting } from "../assets/lists.ts";

export default function App() {
  // using custom hook to see device width
  const { width } = useScreen();
  const ifPHONE = width < 640;

  return (
    <>
      <Header />
      <HeaderSection />
      <div className="mx-auto bg-white">
        <h2 className="w-1/2 text-center my-4 mx-auto text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Get the <span className="text-orange-600">best resume</span> you want
          to have
        </h2>
        <hr className="border-orange-600 w-1/4 mx-auto border-2" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 max-w-2xl lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {userGreeting.map((greeting) => (
                <div
                  key={greeting.name}
                  className="p-4 border border-orange-600 md:border-gray-300 hover:border-orange-600 hover:shadow-sm">
                  <div className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-orange-600">
                        <greeting.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {greeting.name}
                    </dt>
                    <dd className="my-3 text-base leading-7 text-gray-600">
                      {ifPHONE
                        ? greeting.PHONEdescription
                        : greeting.PCdescription}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
}
