'use client'
import tw from 'twin.macro'
import styled from '@emotion/styled'

const SpanStyled = styled.span<Pick<Props, 'label' | 'shadowOpacity'>>`
    & {
        position: relative;
        isolation: isolate;
        z-index: 0;
    }

    &:before {
        content: ${(props) => `'${props.label}'`};
        position: absolute;
        z-index: -1;
        top: -1.04rem;
        color: #161b31;
        white-space: nowrap;
        opacity: ${(props) => props.shadowOpacity};

        ${tw`text-8xl font-extrabold`}
    }

    &.center:before {
        right: 50%;
        transform: translate(50%, -50%);
    }

    &.left:before {
        left: -3%;
        transform: translate(0%, -50%);
    }

    &.right:before {
        right: -3%;
        transform: translate(0%, -50%);
    }
`

const DEFAULT_SHADOW_OPACITY: number = 0.03

type Props = {
    /** sets the container's class attribute values*/
    className?: string
    /** sets the label value */
    label: string
    /** sets the label's class attribute values */
    labelClassName?: string
    /**
     * sets the transparency of the shadow
     * @default 0.03
     */
    shadowOpacity?: number
    /**
     * aligns both label and shadow relative to declared alignment
     * @default center
     */
    align?: 'center' | 'left' | 'right'
}

const HeaderTitle = ({ align = 'center', className, label, labelClassName, shadowOpacity = DEFAULT_SHADOW_OPACITY }: Props) => {
    return (
        <div className={`text-${align} text-primary uppercase font-semibold text-4xl ${className}`}>
            <SpanStyled
                label={label}
                shadowOpacity={shadowOpacity}
                className={`${labelClassName} ${align}`}>
                {label}
            </SpanStyled>
        </div>
    )
}

export default HeaderTitle
