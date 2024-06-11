import NavBar from '@/components/navbar'
import AboutSection from '@/components/sections/about.section'
import FeatureSection from '@/components/sections/feature.section'
import HeroSection from '@/components/sections/hero.section'
import PartnerSection from '@/components/sections/partners.section'
import ServicesSection from '@/components/sections/services.section'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <FeatureSection />
                <ServicesSection />
                <AboutSection />
                <PartnerSection />
            </main>
        </>
    )
}

export default Page
