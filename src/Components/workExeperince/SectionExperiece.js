import React from "react";

import Grid from '@mui/material/Grid';

import SkillExperiece from "./SkillExperiece";





const SectionExperiece = ({textTitle ,icon1 , icon2}) =>{

    return (
        <div style={{height:'30px', backgroundColor:'black' , width:'80%' , borderRadius:'10px' , alignContent:'center' , alignItems:'center' , padding:'0.5rem'}}>
                <Grid container >
                   <Grid xs={1} style={{display:'flex' , alignItems:'center' }}> {icon1}</Grid>
                   <Grid xs={7}> <h2>{textTitle}</h2> </Grid>
                   <Grid xs={4} style={{display:'flex', justifyContent:'end'  , alignItems:'center' }}> {icon2}</Grid>
                   
                   
                </Grid>
        </div>
    )
}


export default SectionExperiece;