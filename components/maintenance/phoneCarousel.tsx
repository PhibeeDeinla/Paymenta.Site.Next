'use client'
import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { TCarouselProps } from '@/types/types'
import Image from 'next/image'

type Props = {}

import Frame1 from '@/assets/images/phone-screen/Frame1.jpg'
import Frame2 from '@/assets/images/phone-screen/Frame2.jpg'
import Frame3 from '@/assets/images/phone-screen/Frame3.jpg'
import Frame4 from '@/assets/images/phone-screen/Frame4.jpg'
import Phone from './phone'

const phoneScreens: TCarouselProps[] = [
    {
        icon: Frame1,
        title: 'Frame 1',
    },
    {
        icon: Frame2,
        title: 'Frame 2',
    },
    {
        icon: Frame3,
        title: 'Frame 3',
    },
    {
        icon: Frame4,
        title: 'Frame 4',
    },
]

const PhoneCarousel = (props: Props) => {
    return (
        <>
            <Swiper
                breakpoints={{
                    414: {
                        width: 414,
                        slidesPerView: 1,
                    },
                    576: {
                        width: 576,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}
                className="my-6"
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop
                spaceBetween={15}
                slidesOffsetBefore={50}
                onSwiper={(swiper) => console.log(swiper)}>
                <Phone />
                {phoneScreens.map(({ icon, ...item }, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="shadow-lg">
                        <Image
                            key={idx}
                            src={icon}
                            alt={item.title}
                            className="h-[450px] w-[235px]"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default PhoneCarousel
