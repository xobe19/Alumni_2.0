/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md lg:text-xs uppercase leading-snug  shadow-sm px-2 py-2 bg-gray-900 text-sm font-bold text-white  hover:opacity-75">
          <span >
          Engagement
          </span>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 z-20 rounded-md shadow-lg bg-gray-900  ring-1 ring-black ring-opacity-5 focus:outline-none lg:text-xs uppercase font-bold leading-snug">
          <div className="py-1">

            <Menu.Item>
              {({ active }) => (
                <Link href="/engagement/bos_iqac">
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',
                    'block px-4 py-2 text-sm hover:bg-white hover:text-black transition-all'
                  )}
                >
                  Bos &amp; IQAC
                </a>
                </Link>
              )}
            </Menu.Item>
   <Menu.Item>
              {({ active }) => (
                <Link href="/engagement/campus_drives">
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',

                    'block px-4 py-2 text-sm hover:bg-white hover:text-black transition-all'
                  )}
                >
                  Campus Drives
                </a>
                </Link>
              )}
            </Menu.Item>
   <Menu.Item>
              {({ active }) => (
                <Link href="/engagement/exhibits">
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',

                    'block px-4 py-2 text-sm hover:bg-white hover:text-black transition-all'
                  )}
                >
                  Exhibits
                </a>
                </Link>
              )}
            </Menu.Item>
   <Menu.Item>
              {({ active }) => (
                <Link href="/engagement/fdp">
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',
                    'block px-4 py-2 text-sm hover:bg-white hover:text-black transition-all'
                  )}
                >
                  FDP&apos;s
                </a>
                </Link>
              )}
            </Menu.Item>
   <Menu.Item>
              {({ active }) => (
                <Link href="/engagement/mou">
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',

                    'block px-4 py-2 text-sm hover:bg-white hover:text-black transition-all'
                  )}
                >
                  MoU
                </a>
                </Link>
              )}
            </Menu.Item>
   <Menu.Item>
              {({ active }) => (
                <Link href="/engagement/tech_talks">
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-white text-black' : 'text-white',
                    'block px-4 py-2 text-sm hover:bg-white hover:text-black transition-all'
                  )}
                >
                  Tech Talks
                </a>
                </Link>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
