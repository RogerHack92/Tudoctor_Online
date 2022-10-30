import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoPacientes from "./Pacientes/ListadoPacientes";
import FormPacientes from "./Pacientes/FormPacientes";
import ListadoDoctores from "./Doctores/ListadoDoctores";
import FormDoctores from "./Doctores/FormDoctores";
import ListadoConsultorios from "./Consultorios/ListadoConsultorios";
import FormConsultorios from "./Consultorios/FormConsultorios";
import Inicio from "./general/Inicio";
import Header from "./general/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} exact></Route>
          <Route path="/pacientes" element={<ListadoPacientes/>} exact></Route>
          <Route path="/pacientes/form" element={<FormPacientes/>} exact></Route>
          <Route path="/doctores" element={<ListadoDoctores/>} exact></Route>
          <Route path="/doctores/form" element={<FormDoctores/>} exact></Route>
          <Route path="/consultorios" element={<ListadoConsultorios/>} exact></Route>
          <Route path="/consultorios/form" element={<FormConsultorios/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;