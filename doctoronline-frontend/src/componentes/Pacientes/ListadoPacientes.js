const ListadoPacientes = () => {
    return (
        <div className="container">
            <h3 className="mt-3">Lista de Pacientes</h3>
            <table className="table table-sm "> 
                <thead class="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Tipo de Identificación</th>
                        <th>Numero de Identificación</th>
                        <th>Nombre Completo</th>
                        <th>Correo</th>
                        <th>Celular </th>
                        <th>Motivo de Consulta</th>
                        <th>Fecha de Ultima Consulta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cedula</td>
                        <td>10534875</td>
                        <td>Gabriela Ordoñes Sandoval</td>
                        <td>Ggaby@hotmail.com</td>
                        <td>321987654</td>
                        <td>Medico General</td>
                        <td>09-10-2022</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cedula</td>
                        <td>1075985746</td>
                        <td>Victor Perez</td>
                        <td>vic45@gmail.com</td>
                        <td>310678345</td>
                        <td>Especialista</td>
                        <td>10-04-2022</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListadoPacientes;