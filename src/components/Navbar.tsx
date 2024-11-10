"use client"
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Headroom from 'react-headroom';

const Navbar = () => {
    const [getIsOpen, setIsOpen] = useState(false)
    return (
        <Headroom>
            <header className="bg-white shadow-sm">
                <div className="container">
                    <div className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
                        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                            <div className="logo-wrapper">
                                <Image
                                    src="/new-logo.svg"
                                    width={300}
                                    alt="logo"
                                    height={0}
                                />
                            </div>
                            <div className="sm:hidden">
                                <button onClick={() => setIsOpen(!getIsOpen)} type="button" className="block text-gray-500  focus:outline-none">
                                    {
                                        !getIsOpen && <Bars3BottomLeftIcon className="size-6" />
                                    }
                                    {
                                        getIsOpen && <XMarkIcon className="size-6" />
                                    }
                                </button>
                            </div>
                        </div>
                        <nav className={`${getIsOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 md:flex sm:p-0 max-sm:absolute max-sm:bg-white max-sm:w-full`} >
                            <ul className="md:flex">
                                <li className="px-4 py-1">
                                    <Link href="#" className="block text-[--primary-text-color] text-">About</Link>
                                </li>
                                <li className="px-4 py-1">
                                    <Link href="#" className="block text-[--primary-text-color] text-">People</Link>
                                </li>
                                <li className="px-4 py-1">
                                    <Link href="#" className="block text-[--primary-text-color] text-">Portfolio</Link>
                                </li>
                                <li className="px-4 py-1">
                                    <Link href="#" className="block text-[--primary-text-color] text-">Contact</Link>
                                </li>
                            </ul>

                        </nav >
                    </div >
                </div >
            </header>
        </Headroom>
    )
}

export default Navbar
