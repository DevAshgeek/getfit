import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderBottom: bodyPart === item ? '4px solid #ff2625' : ''
                , borderRight: bodyPart === item ? '4px solid #ff2625' : ''
                , backgroundColor: bodyPart === item ? '#F8F7F1' : '#fff'
                , borderRadius: "20px"
                , width: "260px"
                , height: "270px"
                , cursor: "pointer"
                , gap: "47px"
            }}
            onClick={() => {
                setBodyPart(item);
                // window.scrollTo({ top: 2700, left: 100, behavior: 'smooth' })
                const exercisesSection = document.getElementById('exercises');
                exercisesSection.scrollIntoView({ behavior: 'smooth' });

            }}
        >
            <img src={Icon} alt='dumbbell'
                style={{ width: '40px', height: '40px' }}
            />
            <Typography fontSize="24px"
                fontWeight="bold"
                color="#3A1212"
                textTransform="capitalize"
            >{item}</Typography>
        </Stack>
    )
}

export default BodyPart