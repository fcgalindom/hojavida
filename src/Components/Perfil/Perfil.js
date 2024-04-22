import React from "react";
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DiamondIcon from '@mui/icons-material/Diamond';


function Perfil() {

    return (
        <>

            <Grid container style={{ marginTop: '4rem' }}>
                <Grid xs={5} style={{ marginLeft: '5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2.5rem' }}>
                        <hr style={{ width: '50%', margin: '0 10px' }} />
                        <span>Perfil</span>
                    </div>
                </Grid>
                <Grid xs={5} style={{ marginLeft: '5rem' }}>
                    <AccountCircleIcon style={{ fontSize: 350 }} />
                </Grid>
                <Grid xs={5}>
                    <h2 style={{ display: 'flex', margin: '0', padding: '0' }}> Galindo Melo </h2>
                    <h1 style={{ display: 'flex', margin: '0', padding: '0' }}>Felipe Camilo </h1>
                    <div style={{ display: 'flex', margin: '1rem', padding: '0' }}><DiamondIcon /><p style={{ marginLeft: '0.5rem', margin: '0', padding: '0' }}>texto largo ffff</p></div>
                    <div style={{ display: 'flex', margin: '1rem', padding: '0' }}><DiamondIcon /><p style={{ marginLeft: '0.5rem ', margin: '0', padding: '0' }}>texto largo ffff</p></div>
                    <div style={{ display: 'flex', margin: '1rem', padding: '0' }}><DiamondIcon /><p style={{ marginLeft: '0.5rem', margin: '0', padding: '0' }}>texto largo ffff</p></div>
                    <div style={{ display: 'flex', margin: '1rem', padding: '0' }}><DiamondIcon /><p style={{ marginLeft: '0.5rem', margin: '0', padding: '0' }}>texto largo ffff</p></div>
                    <hr></hr>

                    <Grid container>
                        <Grid xs={3} item>
                            <div style={{ display: 'flex' }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>

                        </Grid>
                        <Grid xs={4} item>
                            <div style={{ display: 'flex'  }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>
                            <div style={{ display: 'flex', }}>
                                <p>fff</p>
                                <p>ddddf</p>
                            </div>
                            <div style={{ display: 'flex' , }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>

                        </Grid>
                        <Grid xs={3} item >
                            <div style={{ display: 'flex' ,  alignItems :"end",  justifyContent:"end" }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>
                            <div style={{ display: 'flex',   alignItems :"end",  justifyContent:"end" }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>
                            <div style={{ display: 'flex' ,  alignItems :"end",  justifyContent:"end" }}>
                                <p>fff</p>
                                <p>dddd</p>
                            </div>

                        </Grid>
                    </Grid>

                </Grid>




            </Grid>
        </>
    )

}

export default Perfil;