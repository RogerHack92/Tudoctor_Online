import { useState } from "react";

const FormDoctores = () => {
    
    const [doctor, setDoctor] = useState({
        c: ''
    });


    const crearDoctor = async () => {
        const data = {
            nombre: doctor.nombres
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearDoctor();
    }

    return (
        <div className="container mt-3">
            <h3>Registro de Doctores</h3>
            <form className="container" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="nombre">Nombres *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="apellidos">Apellidos *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Documento *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="especialidad">Especialidad *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value=""></option>
                            <option value="Medico General">Medico General</option>
                            <option value="Ginecologo">Ginecologo</option>
                            <option value="Pediatra">Pediatra</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="direccion">Dirección *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="telefono">Telefono *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="correo">Correo *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="d-flex flex-row-reverse">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default FormDoctores;