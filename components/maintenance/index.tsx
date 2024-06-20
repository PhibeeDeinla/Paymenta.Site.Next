import React from 'react'
import MaintenanceFooter from './maintenanceFooter'
import Image from 'next/image'

import PaymentaLogo from '@/assets/images/paymenta_logo_white.svg'
import SouthAfrica from '@/assets/images/south-africa.png'
import PhoneCarousel from './phoneCarousel'

type Props = {}

const MaintenanceSection = (props: Props) => {
    return (
        <div
            id="maintenance-section"
            className="w-screen md:h-screen md:flex md:flex-col bg-primary">
            <section className="flex-grow">
                <div className="max-w-screen-2xl mx-auto h-full md:grid md:grid-cols-2 items-center">
                    {/*  Left Content */}
                    <div className="h-full text-center flex flex-col justify-center">
                        <h1
                            id="coming-soon-header"
                            className="text-white inline-flex flex-col mx-auto mb-16">
                            <span className="block text-xl uppercase z-10 transform translate-y-2">Coming</span>
                            <span className="block text-8xl uppercase font-extrabold tracking-wide z-10">Soon!</span>
                        </h1>

                        <div className="flex justify-center">
                            <div className="justify-center">
                                <PaymentaLogo className="h-10 w-auto px-3 mx-auto" />
                            </div>
                            <div className="justify-center border-l border-blue-700/[0.8] px-5">
                                <Image
                                    src={SouthAfrica}
                                    alt="South Africa Flag"
                                    title="South Africa Flag"
                                    className="h-10 w-auto mx-auto"
                                />
                            </div>
                        </div>

                        <div className="glass">
                            <p className="text-white font-light">
                                In today’s fast-paced world, managing various aspects of your daily life can be overwhelming. That's why we created Paymenta, an
                                all-in-one mobile app designed to simplify your life.
                            </p>
                            <p className="text-white font-light">
                                From financial management to social networking, shopping, purchasing airtime, utility payments, business-to-business
                                transacting, buying and selling crypto, and rewards, Paymenta is your go-to solution for everything you need.
                            </p>
                        </div>
                    </div>

                    {/*  Right Content */}
                    <div className="h-full text-center flex flex-col justify-center">
                        <div className="flex h-32 justify-center items-end pt-8">
                            <PaymentaLogo className="h-16 w-auto px-3 mx-auto" />
                        </div>
                        <div className="">
                            <PhoneCarousel />
                        </div>
                    </div>
                </div>
            </section>
            <MaintenanceFooter className="md:h-32 bg-[#F0F0F0]" />
        </div>
    )
}

export default MaintenanceSection
