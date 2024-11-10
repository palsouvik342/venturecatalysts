import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import StartUpStoriesItem from './startup-stories/StartUpStoriesItem';
import CallToAction from './startup-stories/CallToAction';

const StartUpStories = () => {
    const statupStoriesData = [
        {
            image: '/images/startup1.jpg',
            logo: '/images/beardo-white.svg',
            text: '<strong>Ashotosh Valani says</strong> "Raising funds from Venture Catalysts certainly helped our business to expand our reach…"'
        },
        {
            image: '/images/startup2.jpg',
            logo: '/images/suprr-daily.png',
            text: '\"Being chosen for investment by angels  for Venture Catalysts, which is India\'s most active seed investment platform, validates our approach."'
        },
        {
            image: '/images/startup3.jpg',
            logo: '/images/fynd_portfolio copy.png',
            text: '\"Turnaround from \'Premium Fashion Marketplace\' to \'O2O Retail"'
        },
        {
            image: '/images/startup4.jpg',
            logo: '/images/coutloot.svg',
            text: '\"Turnaround from \'C2C Fashion Marketplace\' to \'O2O Retail Marketplace\"'
        },

    ]

    const callToAction = [
        {
            link: '/',
            text: 'Startups looking to raise funds'
        },
        {
            link: '/',
            text: 'Investors looking to join the network'
        },
    ]
    return (
        <>
            <section className='relative py-20 after:bg-[--primary-theme-color] after:h-[300px] max-sm:after:h-[73%] after:w-full after:absolute after:left-0 after:bottom-0 after:right-0 after:z-[-1] max-sm:px-4'>
                <div className="container relative">
                    <div className='md:absolute top-0 left-0'>
                        <div className="section-title max-w-96">
                            <span className="text-[--primary-theme-color]">Success</span>
                            <h2 className="py-3 text-4xl font-bold">Startup Stories</h2>
                            <p className="text-xl text-[--secondary-text-color]"> Creating the World’s Largest Community for Entrepreneurs and Investors</p>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            enabled: true,
                        }}
                        // scrollbar={{ draggable: true, enabled: false }}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            statupStoriesData.map((sartupStory, index) => (
                                <SwiperSlide key={index}>
                                    <StartUpStoriesItem
                                        image={sartupStory.image}
                                        logo={sartupStory.logo}
                                        text={sartupStory.text}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
            <div className='bg-[--primary-theme-color] py-20 max-sm:pt-0 max-sm:px-4'>
                <div className="container">
                    <div className='md:px-28'>
                        <h4 className="text-xl font-bold text-white text-center">
                            Let's get started! As a budding entrepreneur, you can apply for raising funds & as for investors, if you're looking to join the network, click below.
                        </h4>
                        <div className='flex max-sm:flex-col max-sm:gap-4 justify-between pt-10'>
                            {callToAction.map((callToAction, index) => (
                                <CallToAction
                                    link={callToAction.link}
                                    text={callToAction.text}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartUpStories
