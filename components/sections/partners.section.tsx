'use client'
import styles from '@/assets/styles/partners.module.scss'
import 'swiper/css'
import type { TPartnerProps } from '@/types/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

import Guulpay from '@/assets/images/partners/guulpay.png'
import PayQuick from '@/assets/images/partners/payquick.png'
import QMoney from '@/assets/images/partners/qmoney.png'
import SwiftPayment from '@/assets/images/partners/swiftpayment.png'
import KEGOW from '@/assets/images/partners/kegow.png'
import BANCORE from '@/assets/images/partners/bancore.png'
import AMAL from '@/assets/images/partners/amal.png'
import BananaPay from '@/assets/images/partners/banana.png'
import BSystems from '@/assets/images/partners/bsystems.png'
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
    {
        icon: KEGOW,
        title: 'KEGOW',
    },
    {
        icon: AMAL,
        title: 'AMAL',
    },
    {
        icon: BSystems,
        title: 'BSystems',
    },
    {
        icon: BANCORE,
        title: 'BANCORE',
    },
]

type Props = {}

const PartnerSection = (props: Props) => {
    return (
        <div className={`${styles.partnersSection}`}>
            <div className="px-4 md:px-10 max-w-screen-2xl mx-auto h-full text-center transform translate-y-[-60px]">
                <MiniLabel label={'OUR TRUSTED PARTNERS'} />

                {/* Partners Company Logos */}
                <div className="overflow-x-hidden">
                    <div className="flex items-center justify-center gap-x-4 pt-0 pb-12 whitespace-nowrap ">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={0}
                            slidesPerView={4}
                            loop
                            speed={6000}
                            autoplay={{
                                delay: 100,
                                disableOnInteraction: false,
                            }}>
                            {partnersList.map(({ icon, ...item }, idx) => (
                                <SwiperSlide key={idx}>
                                    <Image
                                        key={idx}
                                        src={icon}
                                        alt={item.title}
                                        className="min-w-20 transform scale-50 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 ease-in transition-all"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSection
