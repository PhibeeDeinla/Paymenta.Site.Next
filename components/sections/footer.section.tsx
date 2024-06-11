import styles from '@/assets/styles/footer.module.scss'
import type { TFooterLinkProps, TSocialLinkProps } from '@/types/types'
import Image from 'next/image'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Logo from '@/assets/images/dssc_logo.png'
import Link from 'next/link'
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
            <div className="max-w-screen-2xl mx-auto h-full py-20">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src={Logo}
                        alt=""
                    />
                </a>

                <div className="footer_outer_container grid grid-cols-4 border-y-blue-600 border-y-2 mt-20 py-16 mb-10">
                    {/* Footer Links */}
                    <div className="footer_links_container col-span-3 grid grid-cols-4 gap-4">
                        {map(footerLinkListGrouped, (groupItem, key) => (
                            <div>
                                <div className="text-white uppercase mb-4 text-2xl font-bold tracking-wide">{key}</div>
                                <ul className="leading-[50px]">
                                    {map(groupItem, (item) => (
                                        <li>
                                            <a
                                                className="text-white text-xl font-light tracking-wide hover:underline"
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
                        <h2 className="text-white uppercase text-2xl font-bold pb-8">Subscribe to our Newsletter</h2>
                        <p className="text-white pb-8 text-[17px] tracking-wide font-extralight opacity-60">
                            Subscribe today to receive the latest updates, exclusive content, and valuable insights delivered right to your inbox.
                        </p>
                        <Input placeholder="Enter your email" />
                        <Link
                            href={`#`}
                            title="Contacts"
                            className={`bg-white text-primary rounded-full px-4 py-3 tracking-wide text-xl`}>
                            Subscribe
                        </Link>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-white flex flex-row justify-between">
                    <div className="text-xl tracking-wide font-light">Copyright &copy; 2024. DSSC Tech | All Rights Reserved.</div>
                    <div>
                        {/* Social links */}
                        <ul className="inline-flex space-x-8">
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
                </div>
            </div>
        </div>
    )
}

export default FooterSection
