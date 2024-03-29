import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

export default function LogIn() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <img
              className="mx-auto h-10 w-auto"
              src="/logo.svg"
              alt="Resume Creator"
            />
          </a>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            <span className="text-orange-600">Log in</span> to your account
          </h2>
          <hr className="my-5 border-orange-600 w-1/3 mx-auto border-2" />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-orange-600 hover:text-orange-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-1/2 mx-auto justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                Log in
              </button>
            </div>
          </form>

          <div className="separator text-black my-2"> or </div>
          <h4 className="text-center text-l font-bold leading-9 tracking-tight text-gray-900">
            <span className="text-orange-600">Log in</span> with
          </h4>
          <div className="flex justify-center items-center mx-auto my-4 text-orange-600 border-2 border-orange-600">
            <FaGoogle className="text-3xl bg-white w-32 h-8 p-2 transition duration-150 hover:bg-orange-600 hover:text-gray-100" />{" "}
            <FaFacebookF className="text-3xl bg-white w-32 h-8 p-2 transition duration-150 hover:bg-orange-600 hover:text-gray-100" />{" "}
            <FaGithub className="text-3xl bg-white w-32 h-8 p-2 transition duration-150 hover:bg-orange-600 hover:text-gray-100" />
          </div>

          <div className="mt-10 flex justify-between items-center text-sm text-gray-500">
            <p>
              Dont have an account?{" "}
              <a
                href="/sign"
                className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                Sign In
              </a>
            </p>
            <p>
              <a href="/" className="hover:text-orange-500">
                Back →
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
