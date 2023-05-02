
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-primary-200">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl">
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <Link className="inline-flex items-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700 p-2 hover:bg-orange-200 rounded-xl" href="https://www.wikimedia.org/">
                                        Wikipedia
                                    </Link>
                                    <Link className="inline-flex items-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700 p-2 hover:bg-orange-200 rounded-xl" href="/about">
                                        About
                                    </Link>
                                    <Link className="inline-flex items-center text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-700 p-2 hover:bg-orange-200 rounded-xl" href="https://donate.wikimedia.org/wiki/Ways_to_Give">
                                        Donate
                                    </Link>
                                </div>
                            </div>

                            <div classsName="-mr-2 flex items-center sm:hidden">
                                {}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}