import NavBar from '@/components/navbar'
import AboutSection from '@/components/sections/about.section'
import CTASection from '@/components/sections/cta.section'
import FeatureSection from '@/components/sections/feature.section'
import FooterSection from '@/components/sections/footer.section'
import HeroSection from '@/components/sections/hero.section'
import PartnerSection from '@/components/sections/partners.section'
import ServicesSection from '@/components/sections/services.section'

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
                <CTASection />
            </main>
            <FooterSection />
        </>
    )
}

export default Page
