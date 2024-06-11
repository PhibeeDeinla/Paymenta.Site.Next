import styles from '@/assets/styles/hero.module.scss'
import Image from 'next/image'

import AppStore from '@/assets/images/apple-173-svgrepo-com.svg'
import GooglePlayStore from '@/assets/images/google-play-svgrepo-com.svg'
import HeroPhoneImage from '@/assets/images/hero_phone_images.png'
import CustomButton from '../customButton'
import Statistics from '../statistics'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className={`${styles.heroSection}`}>
            <div className="max-w-screen-2xl mx-auto h-full">
                <div className="h-full flex flex-row items-center">
                    <div className="basis-1/2 space-y-8">
                        <h1 className="text-white text-5xl font-semibold tracking-wide">
                            Revolutionizing the Way
                            <br /> You Handle <span className={`${styles.heroSpan}`}>Finances</span>
                        </h1>
                        <p className="text-white pb-10 leading-8 tracking-wide max-w-[600px]">
                            Stay on top of your money and make informed decisions with our user-friendly interface and cutting-edge features. Experience the
                            future of banking at your fingertips.
                        </p>

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

                        {/* Statistics Counter */}
                        <Statistics />
                    </div>
                    <div className="basis-1/2 self-end">
                        <Image
                            src={HeroPhoneImage}
                            className="mx-auto"
                            alt="Hero Section Image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
