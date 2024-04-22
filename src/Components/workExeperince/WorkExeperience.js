import { React } from "react";
import Grid from '@mui/material/Grid';
import SectionExperiece from "./SectionExperiece";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import SkillExperiece from "./SkillExperiece";



const WorkExeperience = () => {

    return (
        <Grid container >
            <Grid xs={12}>
                <SectionExperiece textTitle={"Work Experiences"} icon1={<AiFillAlipayCircle size={30} />} icon2={<AiFillRightCircle size={30} />} />
            </Grid>
            <Grid xs={12}>  <SkillExperiece/> </Grid>
        </Grid>
    )
}


export default WorkExeperience;
