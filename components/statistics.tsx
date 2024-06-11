import type { TStatisticsProps } from '@/types/types'

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
        <ul className="flex text-white space-x-16">
            {statistics_Data.map((item) => (
                <li className="flex flex-col items-center justify-center">
                    <span className="text-4xl">{`${item.counter}+`}</span>
                    <span className="font-thin">{item.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default Statistics
