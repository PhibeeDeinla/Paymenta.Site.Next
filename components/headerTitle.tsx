import React from 'react'

type Props = {
    label: string
}

const HeaderTitle = ({ label }: Props) => {
    return (
        <div className="text-center text-primary uppercase font-semibold text-4xl pt-20 mb-20">
            <span
                data-label={label}
                className={`header__title`}>
                {label}
            </span>
        </div>
    )
}

export default HeaderTitle
