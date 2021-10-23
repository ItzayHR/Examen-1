import React from "react";
import '../CSS/Movies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const Movies = (props) => 
{
    return(
        <div className="Cartelera">
                <h2>Cartelera</h2>
                  {
                    props.cartelera.map((p,a)=>{
                      return (
                         <div className="Peliculas" key={a}>
                        
                            <div  className="PosterPelicula">
                              <img src={p.url} alt={p.nombre} />
                            </div>
                            
                            <div className="Propiedades">
                                <p>{p.nombre}</p>
                                <p>{p.idioma}</p>
                                <p>{p.clasificacion}</p>
                                <p>{p.duracion}</p>
                                
                                <div className="Horarios">
                                  {p.horarios.map((h,index)=><Button variant="primary" className="Boton" key={index} onClick={()=>props.agregar(p,h)}>{h}</Button>)}
                                </div>
                            </div>
                          </div>)
                   
                    })
                  }
            </div>
    )
}

export default Movies;