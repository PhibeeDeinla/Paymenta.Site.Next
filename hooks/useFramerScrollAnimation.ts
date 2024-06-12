import React from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useFramerScrollAnimation = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    React.useEffect(() => {
        if (inView) controls.start('visible')
        else {
            controls.start('hidden')
        }
    }, [controls, inView, ref])

    return { controls, ref, inView }
}

export default useFramerScrollAnimation
