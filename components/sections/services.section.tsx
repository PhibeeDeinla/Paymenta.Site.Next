import styles from '@/assets/styles/services.module.scss'

import React from 'react'
import HeaderTitle from '../headerTitle'
import type { TServicesProps } from '@/types/types'
import AnimatedMotion from '../animated/AnimateMotion'
import { staggerChildren, staggerContainer } from '@/utils/animation'

const servicesList: TServicesProps[] = [
    {
        title: 'Development & Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum',
    },
    {
        title: 'Development & Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum',
    },
    {
        title: 'Development & Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum',
    },
]

type Props = {}

const ServicesSection = (props: Props) => {
    return (
        <div className={`${styles.servicesSection}`}>
            <div className="px-4 max-w-screen-2xl mx-auto h-full py-20 lg:py-32">
                <div className="lg:grid lg:grid-cols-3 gap-4 h-full items-center">
                    <div className="col-span-1">
                        <HeaderTitle
                            label="Services"
                            className="py-5"
                        />

                        <p className="px-5 font-thin tracking-wide pt-6 mb-4 lg:mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum. Suspendisse potenti. Ut quis
                            pretium odio, ut faucibus velit. Phasellus eget dui libero. Maecenas malesuada nisi a est sagittis tincidunt.{' '}
                        </p>
                    </div>
                    <div className="col-span-2 lg:px-10">
                        {/* Services List */}
                        <AnimatedMotion
                            as={'ul'}
                            variants={staggerContainer}
                            initial="hidden"
                            className="flex flex-wrap lg:inline-flex lg:flex-nowrap lg:space-x-0 justify-center">
                            {servicesList.map(({ ...item }, indx) => (
                                <AnimatedMotion
                                    as={'li'}
                                    key={indx}
                                    variants={staggerChildren}
                                    className="ease-out duration-300 transition-all group inline-flex flex-col bg-white hover:bg-primary shadow-lg px-8 py-10">
                                    <div className="group-hover:text-white text-primary text-lg pt-4">{item.title}</div>
                                    <div className="font-thin tracking-wide pt-6 group-hover:text-white">{item.description}</div>
                                </AnimatedMotion>
                            ))}
                        </AnimatedMotion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
