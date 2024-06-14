'use client'
import PaymentaLogo from '@/assets/images/paymenta_logo_white.png'
import styles from '@/assets/styles/navbar.module.scss'

import type { TLinkProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMenuOutline } from 'react-icons/io5'

const menus: TLinkProps[] = [
    {
        href: '#',
        title: 'Home',
    },
    {
        href: '#',
        title: 'Vision',
    },
    {
        href: '#',
        title: 'Services',
    },
    {
        href: '#',
        title: 'About Us',
    },
]

type Props = {}

const NavBar = (props: Props) => {
    // resets page to scrollToTop
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, [])

    // handles onScroll sticky header
    useEffect(() => {
        window.addEventListener('scroll', isSticky)
        return () => {
            window.removeEventListener('scroll', isSticky)
        }
    })

    const isSticky = (e: any) => {
        const header = document.querySelector('.header-section') as any
        const scrollTop = window.scrollY
        scrollTop >= 70 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky')
    }

    const [isOpen, setIsOpen] = useState(false)

    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`${styles.nav} header-section`}>
            <div className="flex h-20 md:h-auto max-w-screen-2xl flex-wrap lg:flex-nowrap items-center justify-between mx-auto p-4">
                <div className="flex flex-row w-full lg:w-auto justify-between">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse mb-5 md:mb-0">
                        <Image
                            src={PaymentaLogo}
                            alt="Paymenta Logo"
                            className="h-16 w-auto"
                        />
                    </a>

                    <button
                        onClick={handleClick}
                        className="md:hidden">
                        <IoMenuOutline
                            size="32"
                            color="white"
                        />
                    </button>
                </div>

                <div className="hidden md:flex w-full md:w-auto lg:flex item-center order-2">
                    <Link
                        href={`#`}
                        title="Contacts"
                        className={`bg-white text-primary rounded-full px-4 py-2`}>
                        Contacts
                    </Link>
                </div>

                {/* Desktop */}
                <div className={`hidden md:flex w-full bg-black/[0.9] rounded-xl md:bg-transparent py-5 md:py-0 md:w-auto`}>
                    {/* Menu Lists */}
                    <ul className="flex flex-grow flex-wrap lg:flex-nowrap">
                        {menus.map((item, indx) => (
                            <li
                                key={indx}
                                className="w-full py-3 md:w-auto hover:bg-blue-600 md:rounded-full">
                                <Link
                                    href={item.href}
                                    title={item.title}
                                    className={`${item.className} ${styles.navbarAnchor} px-4 block whitespace-nowrap`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile */}
                <div
                    className={`md:hidden flex w-full bg-black/[0.9] rounded-xl md:bg-transparent py-5 md:py-0 md:w-auto transition ${
                        isOpen ? 'opacity-100 translate-y-1 scale-100' : 'opacity-0 scale-90 hidden'
                    }`}>
                    <ul className="flex flex-grow flex-wrap lg:flex-nowrap">
                        {menus.map((item, indx) => (
                            <li
                                key={indx}
                                className="w-full py-3 md:w-auto lg:py-0 hover:bg-blue-600 md:rounded-full">
                                <Link
                                    href={item.href}
                                    title={item.title}
                                    className={`${item.className} ${styles.navbarAnchor} px-4 block`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}

                        <li className="w-full py-3 md:w-auto lg:py-0">
                            <Link
                                href={`#`}
                                title="Contacts"
                                className={`${styles.navbarAnchor} px-4`}>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
