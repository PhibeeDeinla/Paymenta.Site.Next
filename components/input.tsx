'use client'
import styled from '@emotion/styled'
import tw from 'twin.macro'

const InputStyled = styled.input`
    ${tw`bg-[#45598D] text-white text-sm rounded-full block w-full text-xl px-6 py-4 placeholder-white`}
`

type Props = {
    placeholder?: string
}

const Input = ({ placeholder }: Props) => {
    return (
        <div className="mb-8">
            <InputStyled placeholder={placeholder} />
        </div>
    )
}

export default Input
