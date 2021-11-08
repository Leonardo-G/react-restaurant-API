import React, { useContext, useEffect, useState } from 'react'

export const ConsumoContainer = () => {

    const [platillos, setPlatillos] = useState([]);


    const obtenerPlatillos = () => {
        fetch("http://localhost:8000/platillos")
            .then(resp => resp.json())
            .then(res => setPlatillos(res))
            .catch(err => console.log(err));

    }

    useEffect( () => {
        obtenerPlatillos()
    }, [])

    return (
        <main className="container orden">
            <section className="orden__seccion">
                <h2>Platillos</h2>

                <div class="contenido"></div>
            </section>
            <section className="orden__seccion">
              <h2>Resumen De Consumo</h2>

              <div class="contenido row">
                  <p class="text-center">Añade los elementos del pedido</p>
              </div>
            </section>
          </main>
    )
}
