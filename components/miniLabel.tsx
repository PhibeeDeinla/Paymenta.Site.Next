type Props = {
    label?: string
}
const MiniLabel = ({ label }: Props) => {
    return <label className={`bg-[#E0F3FB] inline font-light tracking-wider text-primary px-3 py-1 text-[12px] rounded-full mb-5`}>{label}</label>
}

export default MiniLabel
