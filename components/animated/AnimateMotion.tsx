'use client'
import { Variants } from 'framer-motion'
import { ElementType, PropsWithChildren } from 'react'
import { MotionBox } from './MotionBox'
import useFramerScrollAnimation from '@/hooks/useFramerScrollAnimation'

type Props = PropsWithChildren<{
    as?: ElementType
    className?: string
    duration?: number
    variants?: Variants
    animate?: string
    initial?: string
}>

const AnimatedMotion = ({ as = 'div', children, initial, animate, variants, ...rest }: Props) => {
    const { ref, controls, inView } = useFramerScrollAnimation()

    return (
        <MotionBox
            as={as}
            ref={ref}
            initial={initial}
            animate={controls}
            variants={variants}
            {...rest}>
            {children}
        </MotionBox>
    )
}

export default AnimatedMotion
