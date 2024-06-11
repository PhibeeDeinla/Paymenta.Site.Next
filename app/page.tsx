import NavBar from '@/components/navbar'
import FeatureSection from '@/components/sections/feature.section'
import HeroSection from '@/components/sections/hero.section'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <FeatureSection />
            </main>
        </>
    )
}

export default Page
