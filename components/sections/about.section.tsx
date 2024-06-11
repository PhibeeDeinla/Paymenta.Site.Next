import styles from '@/assets/styles/about.module.scss'
import HeaderTitle from '../headerTitle'
import VideoPlayer from '../videoPlayer'

type Props = {}

const AboutSection = (props: Props) => {
    return (
        <div className={`${styles.aboutSection} `}>
            <div className="image-container"></div>
            <div className="max-w-screen-2xl mx-auto h-full">
                <div className="grid grid-cols-2 gap-4 h-full items-center space-x-56">
                    <div className="col-span-1 mix-blend-luminosity">
                        <HeaderTitle
                            label="About Us"
                            labelClassName="text-white"
                            shadowOpacity={0.1}
                            align="left"
                            className="mb-10"
                        />

                        <p className="text-white leading-8 font-thin tracking-wide">
                            At DSSC, we are passionate about revolutionizing the financial industry through innovative design solutions. Our team of experienced
                            designers combine cutting-edge technology with user-centered design principles to create seamless and intuitive fintech products. We
                            believe that good design goes beyond aesthetics; it is about creating products that are user-friendly, functional, and visually
                            appealing. By focusing on user experience, we aim to simplify complex financial processes and empower users to take control of their
                            finances with confidence. From mobile apps to websites and more, we strive to deliver designs that not only meet the needs of our
                            clients but also exceed the expectations of their users. Our commitment to quality and creativity sets us apart in the fintech
                            industry, and we are dedicated to helping our clients succeed in a rapidly evolving digital landscape.
                        </p>
                    </div>

                    <div className="col-span-1">
                        {/* Video Player */}
                        <VideoPlayer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
