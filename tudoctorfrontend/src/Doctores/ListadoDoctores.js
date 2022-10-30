const ListadoDoctores = () => {
    return (
        <div className="container">
            <h3 className="mt-3">Lista de Doctore</h3>
            <table className="table table-sm"> 
                <thead>
                    <tr>
                        <th>Nombres completos</th>
                        <th>Documento</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carlos Palma</td>
                        <td>12345</td>
                        <td>32165</td>
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

export default ListadoDoctores;