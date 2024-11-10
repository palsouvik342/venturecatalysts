import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from 'next/image';
import ClientSliderItem from './ClientSliderItem';

const ClientsSlider = () => {
    const clients = [
        '/images/clients/feature1.svg',
        '/images/clients/feature2.svg',
        '/images/clients/feature3.svg',
        '/images/clients/feature4.svg',
        '/images/clients/feature2.svg',
    ]
    return (
        <div className="container">
            <div className='py-28'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            slidesOffsetBefore: 300
                        },
                    }}

                    centeredSlides={true}
                    pagination={{ clickable: true, enabled: false }}
                    scrollbar={{ draggable: true, enabled: false }}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                <ClientSliderItem client={client} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default ClientsSlider;
