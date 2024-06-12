export const fade = {
    visible: {
        opacity: 1,
        transition: { duration: 0.75 },
    },
    hidden: { opacity: 0 },
}

export const fadeInDown = {
    visible: {
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.75 },
    },
    hidden: { opacity: 0, translateY: -10 },
}

export const fadeInUp = {
    visible: {
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.75 },
    },
    hidden: { opacity: 0, translateY: 10 },
}

export const fadeInLeft = {
    visible: {
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.75 },
    },
    hidden: { opacity: 0, translateX: -10 },
}

export const fadeInRight = {
    visible: {
        opacity: 1,
        translateX: 0,
        transition: { duration: 0.75 },
    },
    hidden: { opacity: 0, translateX: 10 },
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
}

export const staggerChildren = {
    hidden: { opacity: 0, translateY: 55, transition: { delay: 1 } },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
}

export default { fade, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, staggerContainer, staggerChildren }
