import Img from '@/assets/images/dssc_logo.png'
import styles from '@/assets/styles/navbar.module.scss'

import type { TLinkProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'

const menus: TLinkProps[] = [
    {
        href: '#',
        title: 'Home',
    },
    {
        href: '#',
        title: 'Features',
    },
    {
        href: '#',
        title: 'Services',
    },
    {
        href: '#',
        title: 'About Us',
    },
    {
        href: '#',
        title: 'Partners',
    },
]

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className={styles.nav}>
            <div className="flex max-w-screen-2xl flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={Img}
                        alt=""
                    />
                </a>

                <div className="flex item-center lg:order-2">
                    <Link
                        href={`#`}
                        title="Contacts"
                        className={`bg-white text-primary rounded-full px-4 py-2`}>
                        Contacts
                    </Link>
                </div>

                <div className="flex">
                    {/* Menu Lists */}
                    <ul className="flex flex-grow">
                        {menus.map((item) => (
                            <li>
                                <Link
                                    href={item.href}
                                    title={item.title}
                                    className={`${item.className} ${styles.navbarAnchor} px-4`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
