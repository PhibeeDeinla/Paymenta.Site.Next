import type { TStatisticsProps } from '@/types/types'
import AnimatedMotion from './animated/AnimateMotion'
import { fadeInDown } from '@/utils/animation'

const statistics_Data: TStatisticsProps[] = [
    {
        title: 'Customers',
        counter: 780,
    },
    {
        title: 'Clients',
        counter: 200,
    },
    {
        title: 'Countries',
        counter: 25,
    },
]

type Props = {}

const Statistics = (props: Props) => {
    return (
        <AnimatedMotion
            variants={{
                hidden: fadeInDown.hidden,
                visible: {
                    ...fadeInDown.visible,
                    transition: { delay: 0.8 },
                },
            }}
            animate="visible"
            initial="hidden"
            className="flex text-white space-x-16 justify-center lg:justify-normal">
            {statistics_Data.map((item) => (
                <li className="flex flex-col items-center justify-center">
                    <span className="text-2xl md:text-4xl">{`${item.counter}+`}</span>
                    <span className="font-thin">{item.title}</span>
                </li>
            ))}
        </AnimatedMotion>
    )
}

export default Statistics
