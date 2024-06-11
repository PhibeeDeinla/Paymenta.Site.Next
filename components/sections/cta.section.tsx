import styles from '@/assets/styles/cta.module.scss'
import Image from 'next/image'

import AppStore from '@/assets/images/apple-173-svgrepo-com.svg'
import GooglePlayStore from '@/assets/images/google-play-svgrepo-com.svg'
import PhoneSideToSIde from '@/assets/images/phone-side-to-side.png'
import CustomButton from '../customButton'

type Props = {}

const CTASection = (props: Props) => {
    return (
        <div className={`${styles.ctaSection} max-w-screen-2xl mx-auto h-full rounded-3xl flex flex-col justify-center py-0 mb-32`}>
            <div className="h-full flex flex-row items-center">
                <div className="basis-3/4 pr-[200px] py-10 px-10">
                    <h1 className="text-white text-5xl font-semibold tracking-wide mb-5">
                        Download & Install Paymenta Now and <br />
                        Start Enjoying Digital Payment Convenience!
                    </h1>
                    <p className="text-white pb-10 leading-5 tracking-wide max-w-[700px]">
                        Register today and access a wide range of fantastic features, including easy transactions, quick payments, and efficient financial
                        management.
                    </p>

                    <div>
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
                    </div>
                </div>

                <div className="basis-1/4 relative self-end">
                    <Image
                        src={PhoneSideToSIde}
                        className="mx-auto absolute origin-bottom-right scale-[2.6] right-0 bottom-0"
                        alt="Hero Section Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default CTASection
