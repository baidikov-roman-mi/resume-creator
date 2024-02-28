export default function NewsletterSection() {
  return (
    // just edited paddings for tablets and less wide devices
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14">
      <div className="max-w-7xl p-2">
        <div className="mx-auto max-w-xl p-5 border-y-2 border-orange-600 lg:max-w-lg text-center">
          <h2 className="text-center mx-auto text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
            <span className="text-orange-600">Subscribe</span> to our newsletter
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
              className="min-w-0 flex-auto rounded-md border border-orange-600 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
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
    </section>
  );
}
