export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden sm:py-12 lg:py-20">
      <div className="max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-lg text-center">
          <h2 className="text-center mx-auto text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
            Subscribe to our newsletter
          </h2>
          <hr className="my-5 border-orange-600 w-1/4 mx-auto border-2" />

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Do you want to get in touch with new updates and user features?
            Subcribe now
          </p>
          <div className="mt-6 mx-auto flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border border-orange-600 bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
