import MaintenanceSection from '@/components/maintenance'
import NavBar from '@/components/navbar'
import AboutSection from '@/components/sections/about.section'
import CTASection from '@/components/sections/cta.section'
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
            {process.env.SITE_MODE === 'LIVE' && (
                <>
                    <NavBar />
                    <main>
                        <HeroSection />
                        <PartnerSection />
                        <VisionSection />
                        <WhyUsSection />
                        <ServicesSection />
                        <AboutSection />
                        <CTASection />
                    </main>
                    <FooterSection />
                </>
            )}
            {process.env.SITE_MODE === 'COMING_SOON' && <MaintenanceSection />}
        </>
    )
}

export default Page
