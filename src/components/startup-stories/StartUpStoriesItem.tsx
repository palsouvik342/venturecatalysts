import Image from 'next/image'
import { FC } from 'react'

interface StoryItemProps {
    image: string;
    logo: string;
    text: string;
}

const StartUpStoriesItem: FC<StoryItemProps> = ({ image, logo, text }) => {
    return (
        <div className='md:flex'>
            <div className="md:w-1/2">
                <div className="h-full flex flex-col justify-end py-10 pe-28">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={0}
                    />
                    <h3 className="text-[18px] text-white pt-3" dangerouslySetInnerHTML={{ __html: text }}>
                        { }
                    </h3>
                </div>
            </div>
            <div className="md:w-1/2">
                <Image
                    src={image}
                    alt="Logo"
                    width={500}
                    height={0}
                />
            </div>

        </div>
    )
}

export default StartUpStoriesItem
