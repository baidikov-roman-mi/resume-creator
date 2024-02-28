// ui lib
import { Disclosure } from "@headlessui/react";

// heroicons
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  title: string;
  popoverList: {
    name: string;
    description: string;
    href: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    >;
  }[];
  callsToAction: {
    name: string;
    href: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & React.RefAttributes<SVGSVGElement>
    >;
  }[];
}

export default function PopoverHeaderPC({
  title,
  popoverList,
  callsToAction,
}: Props) {
  return (
    <>
      <Disclosure as="div" className="-mx-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-orange-600">
              {title}
              <ChevronDownIcon
                className={classNames(
                  open ? "rotate-180" : "",
                  "h-5 w-5 flex-none"
                )}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {[...popoverList, ...callsToAction].map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={`coverletter${item.href}`}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-orange-600">
                  {item.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
