import React from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState, } from 'react';
import About1 from './About1';
import '../Styles/Loader.css'

function Principal() {
  const [cursorX, setCoursorX] = useState(null);
  const [cursorY, setCoursorY] = useState(null);
  window.addEventListener('mousemove', (e) => {
    setCoursorX(e.pageX);
    setCoursorY(e.pageY);
  })
  const [mostrarLoader, setMostrarLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='ContenedorPrincipal'>


      {
        mostrarLoader ?
          <div className='Contenedor' >
            <ClimbingBoxLoader
              color='#D5D5D5' ></ClimbingBoxLoader>
          </div> :
          <div className='contenedor2'>
            <div className='cursorOne' style={{ left: cursorX + 'px', top: cursorY + 'px' }}>

            </div>
            <div className='cursorTwo' style={{ left: cursorX + 'px', top: cursorY + 'px' , duration:500, fill:'forwards' }} >

            </div>
            <About1></About1>
          </div>

      }

    </div>

  );
}

export default Principal;

