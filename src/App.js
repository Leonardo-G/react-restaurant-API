
import { useState } from "react";
import { ConsumoContainer } from "./components/ConsumoContainer";
import { FormularioContainer } from "./components/FormularioContainer";
import { Header } from "./components/Header";
import { ClientesContext } from "./contexrt/ClientesContext";

function App() {

  const [pedidoActivo, setPedidoActivo] = useState(false)

  const [cliente, setCliente] = useState({  
    mesa: "",
    hora: "",
    pedido: []
  })

  return (
    <ClientesContext.Provider value={{ cliente, setCliente, setPedidoActivo }}>
      <Header />
      <FormularioContainer/>
      {
        pedidoActivo && 
        <ConsumoContainer />
      }
    </ClientesContext.Provider>
  );
}

export default App;
