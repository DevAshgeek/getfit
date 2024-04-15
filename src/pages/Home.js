import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import ExerciseType from '../components/ExerciseType'
import Motivation from '../components/Motivation'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    // console.log(bodyPart)
    return (
        <Box
            justifyContent="space-around"
            sx={{
                gap: {
                    sm: '122px', xs: '40px'
                },
                mb: {
                    sm: '32px', xs: '20px'
                },

            }}
        >
            <HeroBanner />
            <ExerciseType />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Motivation />
            <Exercises
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
            />
        </Box>
    )
}

export default Home