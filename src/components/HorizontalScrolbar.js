// // "react-loader-spinner": "^6.0.0-0"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard'

const HorizontalScrolbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust the number of visible items
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1296,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {data.map((item) => (
                <Box key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {
                        isBodyParts ?
                            <BodyPart
                                item={item}
                                bodyPart={bodyPart}
                                setBodyPart={setBodyPart}
                            />
                            : <ExerciseCard exercise={item} />
                    }
                </Box>
            ))}
        </Slider>
    );
};

export default HorizontalScrolbar;