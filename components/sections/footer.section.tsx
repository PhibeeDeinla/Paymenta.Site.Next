import styles from '@/assets/styles/footer.module.scss'
import type { TFooterLinkProps, TSocialLinkProps } from '@/types/types'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import Image from 'next/image'

import PaymentaLogo from '@/assets/images/paymenta_logo_white.png'
import { fadeInDown, fadeInUp } from '@/utils/animation'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import AnimatedMotion from '../animated/AnimateMotion'
import Input from '../input'

const footerLinkList: TFooterLinkProps[] = [
    {
        href: '#',
        category: 'Company',
        title: 'About Us',
    },
    {
        href: '#',
        category: 'Company',
        title: 'Our Team',
    },
    {
        href: '#',
        category: 'Company',
        title: 'Career',
    },
    {
        href: '#',
        category: 'Company',
        title: 'Contact Us',
    },
    {
        href: '#',
        category: 'Company',
        title: 'Blog',
    },

    // Support
    {
        href: '#',
        category: 'Support',
        title: 'Getting Started',
    },
    {
        href: '#',
        category: 'Support',
        title: 'Help Center',
    },
    {
        href: '#',
        category: 'Support',
        title: 'Report a Bug',
    },
    {
        href: '#',
        category: 'Support',
        title: 'Chat Support',
    },
    // Products
    {
        href: '#',
        category: 'Products',
        title: 'Features',
    },
    {
        href: '#',
        category: 'Products',
        title: 'Review',
    },
    {
        href: '#',
        category: 'Products',
        title: 'Update',
    },
    // Downloads
    {
        href: '#',
        category: 'Downloads',
        title: 'IOS',
    },
    {
        href: '#',
        category: 'Downloads',
        title: 'Android',
    },
]

const footerLinkListGrouped = groupBy<TFooterLinkProps>(footerLinkList, 'category')

const socialLinks: TSocialLinkProps[] = [
    {
        icon: FaFacebookF,
        href: '#',
        title: 'Facebook',
    },
    {
        icon: FaTwitter,
        href: '#',
        title: 'Twitter',
    },

    {
        icon: FaInstagram,
        href: '#',
        title: 'Instagram',
    },
    {
        icon: FaLinkedin,
        href: '#',
        title: 'LinkedIn',
    },
    {
        icon: FaYoutube,
        href: '#',
        title: 'Youtube',
    },
]

type Props = {}

const FooterSection = (props: Props) => {
    return (
        <div className={`${styles.footerSection} `}>
            <div className="px-4 md:px-10 max-w-screen-2xl mx-auto h-full py-20 lg:py-32">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={PaymentaLogo}
                        alt="Paymenta Logo"
                        className="h-16 w-auto"
                    />
                </a>

                <AnimatedMotion
                    variants={fadeInUp}
                    animate="visible"
                    initial="hidden"
                    className="footer_outer_container grid lg:grid-cols-4 border-y-blue-600 border-y-2 mt-20 py-16 mb-10">
                    {/* Footer Links */}
                    <div className="footer_links_container col-span-3 grid lg:grid-cols-4 gap-4">
                        {map(footerLinkListGrouped, (groupItem, key) => (
                            <div className="mb-5">
                                <div className="text-white uppercase mb-4 text-xl font-bold tracking-wide text-center lg:text-left">{key}</div>
                                <ul className="leading-[50px]">
                                    {map(groupItem, (item, indx) => (
                                        <li key={indx}>
                                            <a
                                                className="text-white text-md font-light tracking-wide hover:underline"
                                                href={item.href}>
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Subscription to newsletter */}
                    <div className="col-span-1">
                        <h2 className="text-white uppercase text-xl font-bold pb-8">Subscribe to our Newsletter</h2>
                        <p className="text-white pb-8 text-[17px] tracking-wide font-extralight opacity-60">
                            Subscribe today to receive the latest updates, exclusive content, and valuable insights delivered right to your inbox.
                        </p>
                        <Input placeholder="Enter your email" />
                        <Link
                            href={`#`}
                            title="Contacts"
                            className={`bg-white text-primary rounded-full px-4 py-3 tracking-wide text-xl block lg:inline`}>
                            Subscribe
                        </Link>
                    </div>
                </AnimatedMotion>

                {/* Footer Bottom */}
                <AnimatedMotion
                    variants={fadeInDown}
                    animate="visible"
                    initial="hidden"
                    className="text-white flex flex-col lg:flex-row justify-between">
                    <div className="text-xl tracking-wide font-light mb-10 text-center lg:text-left">
                        Copyright &copy; 2024.
                        <br className="lg:hidden" />
                        Paymenta | All Rights Reserved.
                    </div>
                    <div>
                        {/* Social links */}
                        <ul className="flex lg:inline-flex space-x-8 justify-center">
                            {map(socialLinks, ({ icon: Icon, ...item }) => (
                                <li>
                                    <a
                                        className="text-white text-xl font-light tracking-wide hover:underline"
                                        href={item.href}
                                        title={item.title}>
                                        {Icon && <Icon />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedMotion>
            </div>
        </div>
    )
}

export default FooterSection
