import styles from '@/assets/styles/hero.module.scss'
import Image from 'next/image'

import AppStore from '@/assets/images/apple-173-svgrepo-com.svg'
import GooglePlayStore from '@/assets/images/google-play-svgrepo-com.svg'
import HeroPhoneImage from '@/assets/images/hero_phone_images.png'
import { fadeInDown, fadeInUp } from '@/utils/animation'
import AnimatedMotion from '../animated/AnimateMotion'
import CustomButton from '../customButton'
import Statistics from '../statistics'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className="bg-[#F7F9FF]">
            <div className={`${styles.heroSection} masked-me`}>
                <div className={`px-4 max-w-screen-2xl mx-auto h-full relative z-10`}>
                    <div className="h-full lg:flex lg:flex-row items-center">
                        <div className="lg:basis-1/2 space-y-8 mx-50">
                            <AnimatedMotion
                                as="h1"
                                initial="hidden"
                                variants={{
                                    hidden: fadeInUp.hidden,
                                    visible: {
                                        ...fadeInUp.visible,
                                    },
                                }}
                                className="text-white text-3xl md:text-5xl font-semibold tracking-wide">
                                Revolutionizing the Way
                                <br /> You Handle <span className={`${styles.heroSpan}`}>Finances</span>
                            </AnimatedMotion>
                            <AnimatedMotion
                                as="p"
                                initial="hidden"
                                variants={{
                                    hidden: fadeInUp.hidden,
                                    visible: {
                                        ...fadeInUp.visible,
                                        transition: { delay: 0.5 },
                                    },
                                }}
                                className="text-white pb-2 lg:pb-10 leading-8 tracking-wide max-w-[600px]">
                                Stay on top of your money and make informed decisions with our user-friendly interface and cutting-edge features. Experience the
                                future of banking at your fingertips.
                            </AnimatedMotion>

                            {/* Google Play */}
                            <AnimatedMotion
                                variants={{
                                    hidden: fadeInUp.hidden,
                                    visible: {
                                        ...fadeInUp.visible,
                                        transition: { delay: 0.8 },
                                    },
                                }}
                                initial="hidden"
                                className="flex justify-center lg:justify-normal">
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

                            {/* Statistics Counter */}
                            <Statistics />
                        </div>
                        <AnimatedMotion
                            variants={{
                                hidden: fadeInUp.hidden,
                                visible: {
                                    ...fadeInUp.visible,
                                },
                            }}
                            initial="hidden"
                            className="lg:basis-1/2 self-end">
                            <Image
                                src={HeroPhoneImage}
                                className="mx-auto transform scale-10 origin-top lg:origin-bottom"
                                alt="Hero Section Image"
                            />
                        </AnimatedMotion>
                    </div>
                </div>
                <div className={styles.heroSectionOverlayBg}></div>
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </div>
        </div>
    )
}

export default HeroSection
