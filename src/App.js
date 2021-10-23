import './CSS/App.css';
import React, {Component} from "react";
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './COMPONENTS/Header';
import Movies from './COMPONENTS/Movies';
import Ticket from './COMPONENTS/Ticket';


class App extends Component 
{
    constructor() 
    {
        super();
        this.state = {
          compra:{},
          cartelera:[
            {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00pm','17:50pm','20:30pm'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
            {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00am','11:30am','13:pm'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
            {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00am','13:50pm','19:40pm'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
            {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30am','14:20pm','18:30pm'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
          ],
        };
    }

    agregar=(movie,horario)=>{
        const temp={
          codigo:movie.codigo,
          nombre:movie.nombre, 
          idioma:movie.idioma, 
          clasificacion:movie.clasificacion,
          horario:horario,
          cantidad:0,
          duracion:movie.duracion,
          total:0
        }
         this.setState({
            ...this.state,
            compra:temp
        })
    }
   
    calcular=(e,movie)=>{
  
      var precio;

      if(movie.clasificacion==='A')
      {
        precio=50;
      }
      if(movie.clasificacion==='B')
      {
        precio=80; 
      }    
      if(movie.clasificacion==='C')
      {
        precio=95;
      }

        if (e < 0 || e > 110)
        {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Estas agregando un valor negativo o muy grande, por favor agrega valores entre 1 y 110.',
              })
              return false;
        }

        const temp={
            codigo:movie.codigo,
            nombre:movie.nombre, 
            idioma:movie.idioma, 
            clasificacion:movie.clasificacion,
            horario:movie.horario,
            cantidad:e,
            duracion:movie.duracion,
            total:e*precio
          }
  
      this.setState({
        ...this.state,
        compra:temp,
      })
  
    }
    
    eliminarCompra=()=>{
      this.setState({
        ...this.state,
        compra:[],
      })
  
    }  
    
    comprar=(movie)=>{
  
      if(movie.cantidad<=0)
      {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Ingresa la cantidad de boletos',
        })
      }
      else if(movie.cantidad>0)
      {
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Disfruta la película ',
        })   
        
        this.setState({
          ...this.state,
          compra:[],
        })
      }
    }

    render(){
        return (
          <div className="App">
            <Header/>

            <div className="Contenedor">
                <Movies
                    cartelera={this.state.cartelera}
                    agregar={this.agregar}
                />
                <Ticket
                    compra={this.state.compra}
                    calcular={this.calcular}
                    eliminarCompra={this.eliminarCompra}
                    comprar={this.comprar}
                />
            </div>
          </div>
        );
      }
}

export default App;
