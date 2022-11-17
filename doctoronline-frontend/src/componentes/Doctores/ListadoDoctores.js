import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";

const ListadoDoctores = () => {

    
    const [doctores, setDoctores] = useState([]);
    
    const cargarDoctores = async () => {
        const response = await APIInvoke.invokeGET(`/doctores`);
        console.log(response);
        setDoctores(response);
    }

    useEffect(() => {
        cargarDoctores();
    }, [])

    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-header">
                    <h3 className="card-title d-flex">
                        <div style={{flex: 1}}>
                            Lista de Doctores
                        </div>

                        <Link to={`/doctores/form`} className="btn btn-block btn-primary btn-sm">Registrar Doctor</Link>
                    </h3>
                </div>
                <div className="card-body">
                    <table className="table table-sm"> 
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Documento</th>
                                <th>Especialidad</th>
                                <th>Dirección</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctores.map(
                                    item =>
                                        <tr key={item._id}>
                                            <td>{item.nombres}</td>
                                            <td>{item.apellidos}</td>
                                            <td>{item.documento}</td>
                                            <td>{item.especialidad}</td>
                                            <td>{item.direccion}</td>
                                            <td>{item.telefono}</td>
                                            <td>{item.correo}</td>
                                            <td>
                                                <Link to={`/tareas-editar/${item._id}`} className="btn btn-sm btn-primary">Editar</Link>&nbsp;&nbsp;
                                                <button className="btn btn-sm btn-danger">Borrar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListadoDoctores;