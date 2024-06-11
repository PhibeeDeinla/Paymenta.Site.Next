import { CSSProperties, ElementType } from 'react'

type Props = {
    Icon: ElementType
    label: string
    subLabel: string
    labelColor?: string
    containerStyles?: CSSProperties | undefined
    iconClassName?: string
}

const CustomButton = ({ containerStyles, Icon, iconClassName, label, labelColor, subLabel }: Props) => {
    return (
        <a
            href="#"
            className="inline-flex flex-row mx-2">
            <div
                className="flex flex-row flex-inline px-4 py-3 rounded-[10px] items-center"
                style={containerStyles}>
                <Icon className={`${iconClassName} h-10 pr-2`} />
                <div className="flex flex-col self-center">
                    <div
                        style={{ color: labelColor }}
                        className="text-[10px]">
                        {subLabel}
                    </div>
                    <div
                        style={{ color: labelColor }}
                        className="text-sm lg:text-xl tracking-wide whitespace-nowrap">
                        {label}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CustomButton
