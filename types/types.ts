import { StaticImageData } from 'next/image'
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
    icon?: ElementType
    title: string
    description?: string
}

export interface TServicesProps {
    title: string
    description?: string
}

export interface TPartnerProps {
    icon: StaticImageData | string
    title: string
    description?: string
}

export interface TFooterLinkProps {
    category: string
    title: string
    href: string
}

export interface TSocialLinkProps {
    icon?: ElementType
    title: string
    href: string
}

export interface TCarouselProps {
    icon: StaticImageData | string
    title: string
}