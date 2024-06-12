'use client'
import { AnimatePresence, Variants, animate, useAnimation, useAnimationControls, useInView } from 'framer-motion'
import { ElementType, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react'
import { MotionBox } from './MotionBox'
// import { useInView } from 'react-intersection-observer'
import useFramerScrollAnimation from '@/hooks/useFramerScrollAnimation'
import useIntersection from '@/hooks/useIntersection'

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
