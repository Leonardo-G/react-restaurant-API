import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ClientesContext } from '../contexrt/ClientesContext';

export const Ventana = ({ setForm }) => {

    const { cliente, setCliente, setPedidoActivo } = useContext(ClientesContext);
    const [error, setError] = useState(false);

    const handleClose = () => {
        setForm(false);
    }

    const handleChangeInput = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleGetOrder = () => {
        
        const camposVacios = [ cliente.hora, cliente.mesa ].some( campo => campo === "") 
        
        if(camposVacios){
            setError(true);
            return;
        }
        setError(false);
        setPedidoActivo(true)
        setForm(false);
    }

    return (
        <div className="fondoVentana">
            <div className="ventana">
                <div className="ventana__cabezado">
                    <h2 className="modal-title">Restaurant App</h2>
                    <FontAwesomeIcon 
                        className="icon--close" 
                        icon={ faTimes }
                        onClick={ handleClose }
                        />
                </div>
                {
                    error &&
                    <p className="error">Todos los campos son obligatorios</p>
                }
                <form className="formulario">
                    <div className="formulario__fila">
                        <label className="form-label" forhtml="mesa">Mesa</label>
                        <input 
                            type="number" 
                            id="mesa" 
                            name="mesa" 
                            value={ cliente.mesa }
                            onChange={ handleChangeInput } 
                        />
                    </div>
                    <div className="formulario__fila">
                        <label class="form-label" forhtml="hora">Hora</label>
                        <input 
                            type="time" 
                            id="hora" 
                            name="hora"
                            value={ cliente.hora }
                            onChange={ handleChangeInput }
                        />
                    </div>
                </form>
                <div className="ventana__btns">
                    <button 
                        type="button" 
                        className="btn btn--close"
                        onClick={ handleClose }
                    >Cerrar</button>
                    <button 
                        type="button" 
                        className="btn btn--create"
                        onClick={ handleGetOrder }
                    >Crear Orden</button>
                </div>
            </div>
        </div>
    )
}
