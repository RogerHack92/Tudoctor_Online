import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoPacientes from "./componentes/Pacientes/ListadoPacientes";
import FormPacientes from "./componentes/Pacientes/FormPacientes";
import ListadoDoctores from "./componentes/Doctores/ListadoDoctores";
import FormDoctores from "./componentes/Doctores/FormDoctores";
import ListadoConsultorios from "./componentes/Consultorios/ListadoConsultorios";
import FormConsultorios from "./componentes/Consultorios/FormConsultorios";
import Inicio from "./componentes/general/Inicio";
import Header from "./componentes/general/Header";
import Login from "./componentes/general/Login";
import MosaicoCategorias from "./componentes/categorias/MosaicoCategorias";
import Dashboard from "./componentes/general/Dashboard";
import { ContextoUsuario } from "./componentes/general/ContextoUsuario";
import { useState } from "react";

const App = () => {

  const [usuario, setUsuario] = useState({nombres: "", estadologin: 0});

  return (
    <>
      
      <BrowserRouter>

      <ContextoUsuario.Provider value={{usuario, setUsuario}}>

      <Header />  
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/categorias-mosaico" element={<MosaicoCategorias />} exact />

          <Route path="/" element={<Inicio/>} exact></Route>
          <Route path="/pacientes" element={<ListadoPacientes/>} exact></Route>
          <Route path="/pacientes/form" element={<FormPacientes/>} exact></Route>
          <Route path="/pacientes/form/:id" element={<FormPacientes/>} exact />
          <Route path="/doctores" element={<ListadoDoctores/>} exact></Route>
          <Route path="/doctores/form" element={<FormDoctores/>} exact></Route>
          <Route path="/doctores/form/:id" element={<FormDoctores/>} exact />
          <Route path="/consultorios" element={<ListadoConsultorios/>} exact></Route>
          <Route path="/consultorios/form" element={<FormConsultorios/>} exact></Route>
          <Route path="/consultorios/form/:id" element={<FormConsultorios/>} exact />
        </Routes>
        </ContextoUsuario.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;