'use client'
import { DistributiveOmit } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { ComponentPropsWithRef, ElementType, ForwardedRef, forwardRef } from 'react'

type Props = {}

export const UnwrappedAnyComponent = <TAs extends ElementType>(
    props: {
        as?: TAs
    } & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'a' : TAs>, 'as'>,
    ref: ForwardedRef<any>
) => {
    const { as: Comp = 'a', ...rest } = props
    return (
        <Comp
            {...rest}
            ref={ref}
        />
    )
}

type FixedForwardRef = <T, P = {}>(render: (props: P, ref: React.Ref<T>) => React.ReactNode) => (props: P & React.RefAttributes<T>) => React.ReactNode

const fixedForwardRef = forwardRef as FixedForwardRef

// Can be passed 'as' prop but defaults to 'a'
const AnyComponent = fixedForwardRef(UnwrappedAnyComponent)

export const MotionBox = styled(motion(AnyComponent))``

export default MotionBox
