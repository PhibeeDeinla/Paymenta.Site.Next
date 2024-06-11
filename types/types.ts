import { ElementType } from 'react'

export interface TLinkProps {
    href: string
    title: string
    className?: string
}

export interface TStatisticsProps {
    title: string
    counter: number
}

export interface TFeatureProps {
    icon: ElementType
    title: string
    description?: string
}
