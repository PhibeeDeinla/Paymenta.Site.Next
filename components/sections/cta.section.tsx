import styles from '@/assets/styles/cta.module.scss'
import Image from 'next/image'

import AppStore from '@/assets/images/apple-173-svgrepo-com.svg'
import GooglePlayStore from '@/assets/images/google-play-svgrepo-com.svg'
import PhoneSideToSIde from '@/assets/images/phone-side-to-side.png'
import { fadeInLeft, fadeInUp } from '@/utils/animation'
import AnimatedMotion from '../animated/AnimateMotion'
import CustomButton from '../customButton'

type Props = {}

const CTASection = (props: Props) => {
    return (
        <AnimatedMotion
            variants={fadeInUp}
            initial="hidden"
            className={`w-full md:px-4 h-full flex flex-col justify-center lg:py-0 mx-30 md:mb-32`}>
            <div className="flex justify-center">
                <div className={`${styles.ctaSection} w-full h-full md:rounded-3xl flex lg:flex-row items-center max-w-[1250px] sm:px-10 lg:px-5`}>
                    <div className="lg:basis-3/4 lg:pr-[200px] py-10 lg:px-10">
                        <h1 className="text-white text-3xl lg:text-5xl font-semibold tracking-wide mb-5">
                            Download & Install Paymenta Now and <br className="hidden lg:visible" />
                            Start Enjoying Digital Payment Convenience!
                        </h1>
                        <p className="text-white pb-10 leading-5 tracking-wide max-w-[700px]">
                            Register today and access a wide range of fantastic features, including easy transactions, quick payments, and efficient financial
                            management.
                        </p>

                        <AnimatedMotion
                            variants={fadeInUp}
                            initial="hidden"
                            className="flex justify-center lg:justify-normal">
                            {/* Google Play */}
                            <CustomButton
                                Icon={GooglePlayStore}
                                label="Google Play"
                                subLabel="Get It On"
                                labelColor="#ffffff"
                                containerStyles={{ backgroundColor: '#000000' }}
                            />

                            {/* App Store */}
                            <CustomButton
                                Icon={AppStore}
                                iconClassName="fill-white"
                                label="Google Play"
                                subLabel="Download on the"
                                labelColor="#ffffff"
                                containerStyles={{ backgroundColor: '#000000' }}
                            />
                        </AnimatedMotion>
                    </div>

                    <AnimatedMotion
                        variants={fadeInLeft}
                        initial="hidden"
                        className="lg:basis-1/4 relative self-end">
                        <Image
                            src={PhoneSideToSIde}
                            className="mx-auto absolute origin-bottom-right scale-[2.6] right-0 bottom-0"
                            alt="Hero Section Image"
                        />
                    </AnimatedMotion>
                </div>
            </div>
        </AnimatedMotion>
    )
}

export default CTASection
