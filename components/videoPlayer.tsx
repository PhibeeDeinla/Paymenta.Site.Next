import AboutImg from '@/assets/images/about_bg.png'
import Image from 'next/image'
import React from 'react'

import GradientButton from '@/assets/images/gradient_arrow_button.svg'

type Props = {}

const VideoPlayer = (props: Props) => {
    return (
        <div className="video_player">
            <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                aria-label="Watch the video">
                <Image
                    className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                    src={AboutImg}
                    width="677"
                    height="550"
                    alt="Modal video thumbnail"
                />

                <GradientButton className="absolute pointer-events-none opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
            </button>
        </div>
    )
}

export default VideoPlayer
