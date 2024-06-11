import styles from '@/assets/styles/partners.module.scss'
import type { TPartnerProps } from '@/types/types'
import Image from 'next/image'
import HeaderTitle from '../headerTitle'

import Guulpay from '@/assets/images/partners/guulpay.png'
import PayQuick from '@/assets/images/partners/payquick.png'
import QMoney from '@/assets/images/partners/qmoney.png'
import SwiftPayment from '@/assets/images/partners/swiftpayment.png'
import KEGOW from '@/assets/images/partners/kegow.png'
import BANCORE from '@/assets/images/partners/bancore.png'
import AMAL from '@/assets/images/partners/amal.png'
import BananaPay from '@/assets/images/partners/banana.png'
import BSystems from '@/assets/images/partners/bsystems.png'

const partnersList: TPartnerProps[] = [
    {
        icon: Guulpay,
        title: 'Guulpay',
    },
    {
        icon: PayQuick,
        title: 'PayQuick',
    },
    {
        icon: QMoney,
        title: 'QMoney',
    },
    {
        icon: SwiftPayment,
        title: 'SwiftPayment',
    },
    {
        icon: KEGOW,
        title: 'SwiftPayment',
    },
    {
        icon: BANCORE,
        title: 'BANCORE',
    },
    {
        icon: AMAL,
        title: 'AMAL Express',
    },
    {
        icon: BananaPay,
        title: 'BananaPay',
    },
    {
        icon: BSystems,
        title: 'BSystems',
    },
]

type Props = {}

const PartnerSection = (props: Props) => {
    return (
        <div className={`${styles.partnersSection}`}>
            <div className="px-4 max-w-screen-2xl mx-auto h-full py-20 lg:py-32">
                <HeaderTitle
                    label="Partners"
                    className="lg:pt-32 lg:mb-20"
                    align="center">
                    <small className="block font-normal text-[16px] mt-5 text-gray-400">TRUSTED BY SOME AFFILIATE COMPANIES</small>
                </HeaderTitle>

                {/* Partners Company Logos */}
                <div className="grid lg:grid-cols-3 gap-4 h-full items-center px-20 lg:px-0">
                    {partnersList.map(({ icon, ...item }) => (
                        <div className="inline-flex flex-col items-center justify-center py-5 lg:px-20">
                            <Image
                                src={icon}
                                alt={item.title}
                                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 ease-in transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PartnerSection
