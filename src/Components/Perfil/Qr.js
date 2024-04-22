import React from "react";
import { Grid } from "@mui/material";
import QRCode from 'qrcode.react';


function Qr() {
    return (
        <Grid container style={{ marginTop: '4rem', }}>
            <Grid xs={12}>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <hr style={{ width: '70%', margin: '0 10px' }} />
                    <span>Linkedin</span>
                </div>

                

                <div style={{ width: '75%', borderLeft:'2px solid #ffff' ,paddingRight: '1rem', padding: '10px' }}>
                    <QRCode value={"https://www.linkedin.com/in/felipe-camilo-galindo-melo-172b011a4"} style={{ width: '100%', height: 'auto' }} />

                </div>

            </Grid>

        </Grid>
    )
}

export default Qr;