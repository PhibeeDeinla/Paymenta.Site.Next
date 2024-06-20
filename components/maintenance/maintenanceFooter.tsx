import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { map } from 'lodash'

import Pay1Logo from '@/assets/images/logos/1pay_logo.png'
import CryptxLogo from '@/assets/images/logos/cryptx_logo.png'
import Pay2Pay from '@/assets/images/logos/pay2pay_logo.png'
import AnimatedMotion from '../animated/AnimateMotion'
import { fadeInUp } from '@/utils/animation'

type TLogoNames = 'cryptx' | '1pay' | 'pay2pay'

type Props = {
    className?: string
}

const logoList: Record<TLogoNames, StaticImageData | string> = {
    cryptx: CryptxLogo,
    '1pay': Pay1Logo,
    pay2pay: Pay2Pay,
}

const MaintenanceFooter = ({ className }: Props) => {
    return (
        <section className={`${className} flex justify-center`}>
            <div className="max-w-screen-2xl w-full md:grid md:grid-cols-3 gap-4 overflow-hidden">
                {map(logoList, (logo, key) => (
                    <AnimatedMotion
                        variants={fadeInUp}
                        initial="hidden"
                        className="flex justify-center items-center my-8 md:my-0">
                        <Image
                            alt={key}
                            src={logo}
                            className="w-auto h-16"
                        />
                    </AnimatedMotion>
                ))}
            </div>
        </section>
    )
}

export default MaintenanceFooter
