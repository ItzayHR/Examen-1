import React from "react";
import '../CSS/Ticket.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const Ticket = (props) => {
    return ( 
        <div className="Contenedor2">
          {
            Object.keys(props.compra).length!==0
          
           ?
            <div>
                <h2>Compra</h2>
                <div className="Ticket">
                  <p><strong>{props.compra.nombre}</strong> ({props.compra.idioma})</p>
                  <p><strong>Hora: </strong>{props.compra.horario}</p>
                  <p><strong>Cantidad: </strong><input type='number' value={props.compra.cantidad} min="1" max="110" onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p><strong>Total: </strong>${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  <div className="Botones">
                    <Button onClick={()=>props.eliminarCompra()}variant="danger">Cancelar</Button> 
                    <Button onClick={()=>props.comprar(props.compra)}variant="success">Comprar</Button> 
                  </div>
                </div> 
            </div> 
            
            :
              <div className="VacioTicket">
                <p>Selecciona una película dando click en su horario</p>
              </div>

            }
          </div>
     );
}

export default Ticket;