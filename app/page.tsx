import NavBar from '@/components/navbar'
import AboutSection from '@/components/sections/about.section'
import CTASection from '@/components/sections/cta.section'
import FeatureSection from '@/components/sections/feature.section'
import FooterSection from '@/components/sections/footer.section'
import HeroSection from '@/components/sections/hero.section'
import PartnerSection from '@/components/sections/partners.section'
import ServicesSection from '@/components/sections/services.section'
import VisionSection from '@/components/sections/vision.section'
import WhyUsSection from '@/components/sections/whyus.section'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <PartnerSection />
                <VisionSection />
                <WhyUsSection />
                {/*<FeatureSection />*/}
                <ServicesSection />
                <AboutSection />

                <CTASection />
            </main>
            <FooterSection />
        </>
    )
}

export default Page
