import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Ventana } from './Ventana';

export const FormularioContainer = () => {

    const [form, setForm] = useState(false);

    const handleShow = () => {
        setForm(true);
    }

    return (
        <>
            <div class="nuevaOrden">
                <button 
                    type="button" 
                    class="btn btn--nuevaOrden"
                    onClick={ handleShow }
                >
                    Nueva Orden
                    <FontAwesomeIcon className="icon--added" icon={ faPlus }/>
                </button>

            </div>    
            {
                form &&
                <Ventana setForm={ setForm }/>
            }
        </>    
    )
}
