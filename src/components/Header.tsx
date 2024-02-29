import { useState } from "react";

// ui lib
import { Dialog, Popover } from "@headlessui/react";

// heroicons
import { Bars3Icon as BurgerIco, XMarkIcon } from "@heroicons/react/24/outline";

// components
import PopoverHeader from "./PopoverHeader";

// lists
import { popoverList, callsToAction, mobileMenu } from "../assets/lists";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 flex justify-center items-center gap-3">
            <img className="h-8 w-auto" src="/logo.svg" alt="" />
            <span className="text-orange-600 font-semibold">
              Resume Creator
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <BurgerIco className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <PopoverHeader
            title="Resume"
            popoverList={popoverList}
            callsToAction={callsToAction}
            type="mobile"
          />
          <PopoverHeader
            title="Cover Letter"
            popoverList={popoverList}
            callsToAction={callsToAction}
            type="mobile"
          />
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            FAQ
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Share
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <a
            href="/sign"
            className="text-sm font-semibold leading-6 bg-gradient-to-tl from-orange-500 to-orange-700 p-2 text-white">
            Sign In
          </a>
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 p-2">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={menuOpen}
        onClose={setMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="-m-1.5 p-1.5 flex justify-center items-center gap-3">
              <img className="h-8 w-auto" src="/logo.svg" alt="" />
              <span className="text-orange-600 font-semibold">
                Resume Creator
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              <PopoverHeader
                title="Resume"
                popoverList={popoverList}
                callsToAction={callsToAction}
                type="PC"
              />
              <PopoverHeader
                title="Resume"
                popoverList={popoverList}
                callsToAction={callsToAction}
                type="PC"
              />
              {mobileMenu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-orange-600">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
