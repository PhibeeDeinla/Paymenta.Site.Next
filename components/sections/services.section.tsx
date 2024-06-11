import styles from '@/assets/styles/services.module.scss'

import React from 'react'
import HeaderTitle from '../headerTitle'
import type { TServicesProps } from '@/types/types'

const featuresList: TServicesProps[] = [
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
            <div className="max-w-screen-2xl mx-auto h-full">
                <div className="grid grid-cols-3 gap-4 h-full items-center">
                    <div className="col-span-1">
                        <HeaderTitle label="Services" className='py-5'/>

                        <p className="px-5 font-thin tracking-wide pt-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie euismod ex non bibendum. Suspendisse potenti. Ut quis
                            pretium odio, ut faucibus velit. Phasellus eget dui libero. Maecenas malesuada nisi a est sagittis tincidunt.{' '}
                        </p>
                    </div>
                    <div className="col-span-2 px-10">
                        {/* Services List */}
                        <ul className="inline-flex lg:space-x-0">
                            {featuresList.map(({ ...item }) => (
                                <li className="ease-out duration-300 transition-all group inline-flex flex-col bg-white hover:bg-primary shadow-lg px-8 py-10">
                                    <div className="group-hover:text-white text-primary text-lg pt-4">{item.title}</div>
                                    <div className="font-thin tracking-wide pt-6 group-hover:text-white">{item.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
