import styles from '@/assets/styles/services.module.scss'

import React from 'react'
import HeaderTitle from '../headerTitle'
import type { TServicesProps } from '@/types/types'
import AnimatedMotion from '../animated/AnimateMotion'
import { staggerChildren, staggerContainer } from '@/utils/animation'

const servicesList: TServicesProps[] = [
    {
        title: '1Pay Voucher',
        description:
            '1Pay vouchers are a unique form of digital currency that you can use to top up your 1Pay balance. With a topped-up trading balance, you can pay suppliers and continue selling services such as airtime, data, electricity, prepaid water, and much more without any interruptions. ',
    },
    {
        title: 'Airtime Purchase',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum',
    },
    {
        title: 'Utility Payments',
        description: 'Pay for electricity, water, and other utilities effortlessly.',
    },
    {
        title: 'All other services from Flash',
    },
]

type Props = {}

const ServicesSection = (props: Props) => {
    return (
        <div className={`${styles.servicesSection}`}>
            <div className="px-4 max-w-screen-2xl mx-auto h-full py-20 lg:py-32">
                <div className="lg:grid lg:grid-cols-4 gap-4 h-full items-center">
                    <div className="col-span-1 self-baseline mb-10">
                        <HeaderTitle
                            label="Services"
                            className="py-5"
                            align={'left'}
                        />

                        <p className={'text-gray-800 tracking-wide font-light leading-8'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum. Suspendisse potenti. Ut quis
                            pretium odio, ut faucibus velit. Phasellus eget dui libero. Maecenas malesuada nisi a est sagittis tincidunt.{' '}
                        </p>
                    </div>
                    <div className="col-span-3 lg:px-10 relative">
                        {/* Services List */}
                        <div className="flex flex-col">
                            {servicesList.map(({ ...item }, indx) => (
                                <div
                                    key={indx}
                                    className="ease-out duration-300 transition-all group inline-flex flex-col bg-white hover:bg-primary border-solid border-l-8 mb-6 border-primary/[.10] px-8 py-2">
                                    <div className="group-hover:text-white text-primary text-2xl font-semibold pt-4">{item.title}</div>
                                    <div className="font-thin tracking-wide pt-2 group-hover:text-white pb-8">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
