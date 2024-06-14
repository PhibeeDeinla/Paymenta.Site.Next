import MiniLabel from '@/components/miniLabel'

type Props = {}

const WhyUsSection = (props: Props) => {
    return (
        <div className="max-w-screen-2xl mx-auto mb-10">
            <div className={`flex flex-col lg:flex-row lg:h-[650px] mb-10 pt-10`}>
                {/* Left Content */}
                <div className={'w-full lg:basis-2/4 shadow-xl border'}>
                    <div className="bg-white px-10 py-10">
                        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
                            <div className="p-4 max-w-xl mx-auto">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-primary">How To Get Started?</h3>
                                </div>

                                <div className="flex">
                                    <div className="mr-4 flex flex-col items-center">
                                        <div>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 my-4 text-primary font-bold">
                                                1
                                            </div>
                                        </div>
                                        <div className="h-full w-px bg-gray-300 dark:bg-gray-400"></div>
                                    </div>
                                    <div className="pt-1 pb-8">
                                        <p className="my-4 text-xl font-bold text-primary">Download the App</p>
                                        <p className="font-light text-gray-600">Available on iOS and Android platforms.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-4 flex flex-col items-center">
                                        <div>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 my-4 text-primary font-bold">
                                                2
                                            </div>
                                        </div>
                                        <div className="h-full w-px bg-gray-300 dark:bg-gray-400"></div>
                                    </div>
                                    <div className="pt-1 pb-8">
                                        <p className="my-4 text-xl font-bold text-primary">Create an Account</p>
                                        <p className="font-light text-gray-600">Sign up quickly with your email or social media accounts.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="mr-4 flex flex-col items-center">
                                        <div>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 my-4 text-primary font-bold">
                                                3
                                            </div>
                                        </div>
                                        <div className="h-full w-px bg-gray-300 dark:bg-gray-400"></div>
                                    </div>
                                    <div className="pt-1 pb-8">
                                        <p className="my-4 text-xl font-bold text-primary">Customize Your Experience</p>
                                        <p className="font-light text-gray-600">Set up your preferences and add your favorite services.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="mr-4 flex flex-col items-center">
                                        <div>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 my-4 text-primary font-bold">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-1 pb-8">
                                        <p className="my-4 text-xl font-bold text-primary">Enjoy the Convenience</p>
                                        <p className="font-light text-gray-600">Sign up quickly with your email or social media accounts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className={'lg:basis-2/4'}>
                    <div className="bg-white px-20 py-10">
                        <h2 className={'text-primary font-bold tracking-wide mb-6 with_gradient'}>
                            <MiniLabel label={'WHO WE ARE'} />
                            <div className={'mt-2 text-4xl'}>Why Paymenta?</div>
                            <div className={'font-normal py-2 text-2xl'}>Simplify Your Life with Paymenta</div>
                        </h2>
                        <p className={'text-gray-800 tracking-wide font-light leading-8'}>
                            WIn today’s fast-paced world, managing various aspects of your daily life can be overwhelming. That's why we created Paymenta, an
                            all-in-one mobile app designed to simplify your life. From financial management to social networking, shopping, purchasing airtime,
                            utility payments, business-to-business transacting, buying and selling crypto, and rewards, Paymenta is your go-to solution for
                            everything you need.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsSection
