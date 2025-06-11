import {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { setSelectedFlower} from "../../../redux/slices/filterSlice.js";

import './sortSwiper.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {useDispatch, useSelector} from "react-redux";
import {fetchFlowers} from "../../../redux/slices/flowersSlice.js";

const FilterSlider = () => {
    const dispatch = useDispatch();
    const {flowers} = useSelector((state) => state.flowers);
    const {selectedFlower} = useSelector((state) => state.filter);
    const swiperRef = useRef(null);

    useEffect(() => {
        dispatch(fetchFlowers())
    }, [])

    const handleChooseFlower = (id) => {
        dispatch(setSelectedFlower(id === selectedFlower ? null : id));
    }

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
                        <div className={`flower-slide ${flower.id === selectedFlower ? 'active' : ''}`}
                             onClick={() => handleChooseFlower(flower.id)}>
                            <img src={`${import.meta.env.VITE_API_KEY}/products/images/${flower.image.imageId}`}
                                 alt={`Image for `}/>
                            <p className="slider-name-placeholder">{flower.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default FilterSlider;
