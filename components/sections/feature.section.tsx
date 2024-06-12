'use client'
import styles from '@/assets/styles/features.module.scss'
import type { TFeatureProps } from '@/types/types'
import HeaderTitle from '../headerTitle'

import { staggerChildren, staggerContainer } from '@/utils/animation'
import { AnimatePresence, motion } from 'framer-motion'
import { LiaUserCheckSolid } from 'react-icons/lia'
import AnimatedMotion from '../animated/AnimateMotion'

const featuresList: TFeatureProps[] = [
    {
        icon: LiaUserCheckSolid,
        title: 'Loyalty Program Integration',
        description:
            'This feature makes it easy for users to access and redeem their rewards when making purchases, helping them save money and get the most out of their loyalty programs',
    },
    {
        icon: LiaUserCheckSolid,
        title: 'Module Payment Options',
        description: 'Eliminates the need to carry physical credit cards and provides a convenient way to pay for goods and services on the go',
    },
    {
        icon: LiaUserCheckSolid,
        title: 'Budget Tracking & Expense Managment',
        description: 'Help users monitor their spending habits, set financial goals, and stay on top of their finances',
    },
]

type Props = {}

const FeatureSection = (props: Props) => {
    return (
        <div className={`${styles.featureSection} bg-[#F7F9FF] pb-20 lg:pb-32`}>
            <div className="max-w-screen-2xl mx-auto h-full">
                <HeaderTitle
                    label="Features"
                    className="mb-10 lg:mb-20 mt-0"
                    align="center"
                />

                <AnimatedMotion
                    as={'ul'}
                    variants={staggerContainer}
                    initial="hidden"
                    className="inline-flex flex-wrap lg:flex-nowrap lg:space-x-64">
                    <AnimatePresence>
                        {featuresList.map(({ icon: Icon, ...item }, indx) => (
                            <motion.li
                                key={indx}
                                variants={staggerChildren}
                                className="inline-flex lg:flex-nowrap flex-col">
                                {Icon && (
                                    <span className="inline-block mx-auto bg-primary text-white rounded-full p-4 text-2xl">
                                        <Icon />
                                    </span>
                                )}
                                <div className="text-primary text-lg text-center pt-4">{item.title}</div>
                                <div className="px-5 font-thin tracking-wide text-center pt-6">{item.description}</div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </AnimatedMotion>
            </div>
        </div>
    )
}

export default FeatureSection
