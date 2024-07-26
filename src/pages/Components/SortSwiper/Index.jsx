import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import './sortSwiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FilterSlider = () => {
    const [flowers, setFlowers] = useState(['asdasd', 'asda', 'asdas', 'asdasdasdasd', 'asdasd', 'asda', 'asdas', 'asdasdasdasd', 'asdasd', 'asda', 'asdas', 'asdasdasdasd', 'asdasd', 'asda', 'asdas', 'asdasdasdasd']);
    const [activeSlideIndex, setActiveSlideIndex] = useState(null);
    const swiperRef = useRef(null);

    return (
        <div className="slider-container">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={6}
                spaceBetween={260}
                loop={true}
                centeredSlides={true}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }}
                // pagination={{ clickable: true }}
            >
                {flowers.map((flower, index) => (
                    <SwiperSlide key={index}>
                        <div className={`flower-slide`}>
                            <img src={`https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg`} alt={`Image for `} />
                            <p className="slider-name-placeholder">{flower}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default FilterSlider;
