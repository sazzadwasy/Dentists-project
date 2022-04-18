import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='carouusel mt-4' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption className='banner-caption'>
                    <h3>Dental Health</h3>
                    <p>Dental and oral health is an essential part of your overall health and well-being. Poor oral hygiene can lead to dental cavities and gum disease, and has also been linked to heart disease, cancer, and diabetes.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption className='banner-caption'>
                    <h3>Oral Health</h3>
                    <p>Dental and oral health is an essential part of your overall health and well-being. Poor oral hygiene can lead to dental cavities and gum disease, and has also been linked to heart disease, cancer, and diabetes.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                />

                <Carousel.Caption className='banner-caption'>
                    <h3>Dental Health</h3>
                    <p>Dental and oral health is an essential part of your overall health and well-being. Poor oral hygiene can lead to dental cavities and gum disease, and has also been linked to heart disease, cancer, and diabetes.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;