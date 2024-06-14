import styles from '@/assets/styles/partners.module.scss'
import type { TPartnerProps } from '@/types/types'
import Image from 'next/image'
import { staggerChildren, staggerContainer } from '@/utils/animation'

import Guulpay from '@/assets/images/partners/guulpay.png'
import PayQuick from '@/assets/images/partners/payquick.png'
import QMoney from '@/assets/images/partners/qmoney.png'
import SwiftPayment from '@/assets/images/partners/swiftpayment.png'
import KEGOW from '@/assets/images/partners/kegow.png'
import BANCORE from '@/assets/images/partners/bancore.png'
import AMAL from '@/assets/images/partners/amal.png'
import BananaPay from '@/assets/images/partners/banana.png'
import BSystems from '@/assets/images/partners/bsystems.png'
import AnimatedMotion from '../animated/AnimateMotion'
import MiniLabel from '@/components/miniLabel'

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
        icon: BananaPay,
        title: 'BananaPay',
    },
]

type Props = {}

const PartnerSection = (props: Props) => {
    return (
        <div className={`${styles.partnersSection}`}>
            <div className="px-4 max-w-screen-2xl mx-auto h-full text-center transform translate-y-[-60px]">
                <MiniLabel label={'OUR TRUSTED PARTNERS'} />

                {/* Partners Company Logos */}
                <div className="overflow-x-hidden">
                    <div className="flex items-center justify-center gap-x-4 pt-0 pb-12 whitespace-nowrap ">
                        {partnersList.map(({ icon, ...item }, indx) => (
                            <span>
                                <Image
                                    src={icon}
                                    alt={item.title}
                                    className="min-w-20 transform scale-50 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 ease-in transition-all"
                                />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSection
