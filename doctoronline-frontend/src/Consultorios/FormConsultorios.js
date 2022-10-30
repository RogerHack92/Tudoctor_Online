const FormConsultorios = () => {
    return (
        <div className="container mt-3">
            <h3>Registro de Consultorios</h3>
            <form className="container" action="">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="nombrecompleto">Nombres completos *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="tipo">Seleccione documento *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value=""></option>
                            <option value="Cedula">Cedula</option>
                            <option value="Cedula extranjería">Cedula extranjería</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Ingrese documento *</label>
                        <input className="form-control" type="text" name="documento" id="documento" placeholder="Ingrese documento"/>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </form>
        </div>
    )
}

export default FormConsultorios;