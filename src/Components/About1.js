import React from 'react';
import Grid from '@mui/material/Grid';
import Menuf from './Menu/Menuf';
import Perfil from './Perfil/Perfil';
import Qr from './Perfil/Qr';
import WorkExeperience from './workExeperince/WorkExeperience';

function About1() {
    return (
        <div style={{ width: '100%' }} > 
        <Grid container >
            <Grid xs={12}>
                <Menuf/>
               
            </Grid>
            <Grid xs = {8}>
                <Perfil/>
            </Grid>
            <Grid xs = {4}>
                 <Qr/>
            </Grid>
            <Grid xs={12}>
               <hr></hr>
            </Grid>
            <Grid xs={6}>
              <WorkExeperience/>
            </Grid>
            
            
        </Grid>
        </div>

    )


}
export default About1;