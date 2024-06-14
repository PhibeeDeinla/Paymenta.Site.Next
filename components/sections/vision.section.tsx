import Image from 'next/image'
import MiniLabel from '@/components/miniLabel'

import VisionImageBg from '@/assets/images/our_vision_bg.png'
import AnimatedMotion from '@/components/animated/AnimateMotion'
import { fadeInLeft, fadeInUp } from '@/utils/animation'

type Props = {}

const VisionSection = (props: Props) => {
    return (
        <div className="px-10 max-w-screen-2xl mx-auto h-full">
            <div className={`flex flex-col lg:flex-row lg:h-[650px] lg:mb-32 pt-10`}>
                <div className={'lg:basis-1/4'}></div>
                <div className={'lg:basis-3/4 relative space-y-10'}>
                    <div className={`vision bg-white lg:absolute shadow-xl rounded-md px-12 py-12 min-h-[350px]`}>
                        <h2 className={'text-3xl text-primary font-bold tracking-wide mb-6'}>
                            <MiniLabel label={'WHO WE ARE'} />
                            <span className={'block'}>Our Vision</span>
                        </h2>
                        <p className={'text-gray-500 tracking-wide font-light leading-7'}>
                            We aspire to extend services to the unbanked populations throughout emerging markets, fostering financial inclusion on a mass scale.
                        </p>
                    </div>
                    <Image
                        src={VisionImageBg}
                        alt={'Our Vision'}
                        className={'object-fill w-full lg:h-full rounded-2xl lg:rounded-[40px]'}
                    />
                </div>
            </div>
        </div>
    )
}

export default VisionSection
