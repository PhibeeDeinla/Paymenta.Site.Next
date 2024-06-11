import styles from '@/assets/styles/features.module.scss'
import HeaderTitle from '../headerTitle'
import type { TFeatureProps } from '@/types/types'

import { LiaUserCheckSolid } from 'react-icons/lia'

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
        <div className={`${styles.featureSection} bg-[#F7F9FF]`}>
            <div className="max-w-screen-2xl mx-auto h-full">
                <HeaderTitle label="Features" />

                {/* Features List */}
                <ul className="inline-flex lg:space-x-64">
                    {featuresList.map(({ icon: Icon, ...item }) => (
                        <li className="inline-flex flex-col">
                            {Icon && (
                                <span className="inline-block mx-auto bg-primary text-white rounded-full p-4 text-2xl">
                                    <Icon />
                                </span>
                            )}
                            <div className="text-primary text-lg text-center pt-4">{item.title}</div>
                            <div className="px-5 font-thin tracking-wide text-center pt-6">{item.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FeatureSection
