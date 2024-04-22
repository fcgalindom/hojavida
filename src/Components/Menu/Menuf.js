import React from 'react';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DiamondIcon from '@mui/icons-material/Diamond';
import CircleIcon from '@mui/icons-material/Circle';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';

function Menuf() {
   
    return (
        <Grid container style={{backgroundColor:'black'}} >
            <Grid xs={3} style={{display:'flex' , marginLeft:'5rem' ,alignItems:'center', justifyContent:'space-evenly'}}>
                <div>  
                    <DiamondIcon style={{color:'red' , marginTop:'0.5rem'}}/>
                    <CircleIcon style={{color:'blue', fontSize: 12  ,marginLeft:'0.5rem' , marginBottom:'0.4rem'}}/>  
                </div>
                <div>
                    <h2>WEB DEVELOPER</h2>
                </div>
                

            </Grid>
            <Grid xs={1} style={{display:'flex' , marginLeft:'5rem' ,alignItems:'center'}}>
                 <ReplyAllOutlinedIcon style={{transform: 'rotate(180deg)' , color:'red'}}/>
            </Grid>
            <Grid xs={5} style={{display:'flex' , justifyContent:'space-evenly' , alignItems:'center'}}>
                <div>
                    <h5 style={{margin:'0' , padding:'0' , color : 'red'}}>Texto 1</h5>
                    <h5 style={{margin:'0' , padding:'0' , color: 'blue'}}>Texto 2</h5>
                </div>
                <div>
                    <h5 style={{margin:'0' , padding:'0'}}>Texto 1</h5>
                    <h5 style={{margin:'0' , padding:'0' , color:'grey'}}>Texto 2</h5>
                    
                </div>
                <div>
                    <h5 style={{margin:'0' , padding:'0'}}>Texto 1</h5>
                    <h5 style={{margin:'0' , padding:'0', color:'blue'}}>Texto 2</h5>
                </div>
                <div>
                    <h3 style={{margin:'0' , padding:'0' , fontFamily:'cursive'}}>Texto 1</h3>
                    <h3 style={{margin:'0' , padding:'0' ,fontFamily:'cursive' , color:'grey'}}>Texto 2</h3>
                    
                </div>
            </Grid>
        </Grid>

    )

}

export default Menuf;