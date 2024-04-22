import React from "react";
import Grid from '@mui/material/Grid';
import { AiFillAlipayCircle } from "react-icons/ai";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useCountUp } from 'use-count-up';



const SkillExperiece = () => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 5,
        easing: 'linear',
        start: 0,
        end: 75,
        onComplete: () => ({
            shouldRepeat: true,
            delay: 2,
        }),
    });

    return (
        <div style={{ width: '100%' , marginTop:'1rem' }}>
            <Grid container >
                <Grid xs={3} size={34} style={{ display: 'flex', alignItems: 'center' }}> <AiFillAlipayCircle size={30} /> </Grid>
                <Grid xs={9}  ><div>
                    <h4 style={{display:'flex', margin:'0' }}>habilidad cualquiera</h4>
                    <LinearProgress value={70} variant="determinate" color="secondary" thickness={24} sx={{
                        '--LinearProgress-radius': '30px',
                        '--LinearProgress-thickness': '24px',
                        'height':'15px',
                        'borderRadius':'10px'
                    
                    }} /></div> </Grid>

            </Grid>


        </div>
    )
}

export default SkillExperiece;


