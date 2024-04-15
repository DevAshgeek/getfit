import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import aboutfitnessImg from '../assets/images/aboutfitness.png'
import weightTrainingIcon from '../assets/icons/equipment.png'
import generalFitnessIcon from '../assets/icons/body-part.png'
import funtionalTrainingIcon from '../assets/icons/target.png'


const ExerciseType = () => {
    return (
        <Stack
            display="flex"
            height={{ sm: "170vh", md: "100vh" }}
            p="0px"
            direction={{ sm: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            width="100vw"
        >

            <Stack height="inherit" width={{ sm: "100%", md: "50%" }}
                direction="column" justifyContent="space-evenly"
                sx={{ mt: "auto", mb: "auto", ml: "25px", mr: "25px" }}
            >
                <div className='exctypes' style={{ marginTop: "1.5vh" }}>
                    <Typography color="#ff2625" variant="h3" sx={{ fontSize: '2.8rem' }}><img src={weightTrainingIcon} alt='weighttraining icon' width="35vw" /> Weight Training</Typography>
                    <Typography sx={{ fontSize: '1.1rem' }}>
                        From bodybuilding to powerlifting and everything in between, the Fitness Factory has the equipment to help you reach your goals. With dumbbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2 competition benches, and a variety of plate loaded and pin loaded machines, we have everything you need.
                    </Typography>
                </div>
                <div className='exctypes'>
                    <Typography color="#ff2625" variant="h3" sx={{ fontSize: '2.8rem' }}><img src={funtionalTrainingIcon} alt='funtionalTraining icon' width="35vw" /> Functional Training</Typography>
                    <Typography sx={{ fontSize: '1.1rem' }}>
                        With 60 feet of turf with a sled, stackable plyometric boxes, weighted medicine balls, battle ropes, squat racks, and deadlift platforms, our functional training room has all the equipment you need to take your training to the next level.
                    </Typography>
                </div>
                <div className='exctypes' style={{ marginBottom: "1.5vh" }}>
                    <Typography color="#ff2625" variant="h3" sx={{ fontSize: '2.8rem' }}><img src={generalFitnessIcon} alt='generalFitness icon' width="35vw" /> General Fitness</Typography>
                    <Typography sx={{ fontSize: '1.1rem' }}>
                        If your goals are to improve your overall health and wellness, we have everything you need. We have cardio equipment spanning two floors including 8 stepmills, 15+ treadmills, row machines, exercise bikes, spin bikes, ellipticals, arc trainers, and even a Jacob’s Ladder. In addition to cardio equipment, we have stretching areas with mats, foam rollers, bands, light weights, and much more.
                    </Typography>
                </div>

            </Stack>

            <Box display={{ xs: "none", sm: "inline-table" }} height={{ sm: "80%", md: "inherit" }} paddingLeft="15vh" paddingBottom="2vh" paddingTop={{ sm: "10vh", md: "25vh", lg: "20vh" }} width={{ sm: "100%", md: "50%" }} bgcolor="#ff2625">
                <img width="90%" src={aboutfitnessImg} alt="" />
            </Box>

        </Stack >
    )
}

export default ExerciseType