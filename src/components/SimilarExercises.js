import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrolbar from "./HorizontalScrolbar"
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    console.log(targetMuscleExercises, targetMuscleExercises.length);
    console.log(equipmentExercises, equipmentExercises.length);
    return (
        <Box sx={{
            mt: { lg: '100px', xs: '0' }
        }}>
            <Typography variant='h3' mb={5}>
                Exercises that target same muscle group
            </Typography>
            <Stack
                direction='row'
                sx={{ p: '2', position: 'relative' }}
            >
                {
                    targetMuscleExercises.length ? <HorizontalScrolbar data={targetMuscleExercises} />
                        : <Loader />
                }
            </Stack>
            <Typography variant='h3' mb={5}>
                Exercises that use the same equipment
            </Typography>
            <Stack
                direction='row'
                sx={{ p: '2', position: 'relative' }}
            >
                {
                    equipmentExercises.length ? <HorizontalScrolbar data={equipmentExercises} />
                        : <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises