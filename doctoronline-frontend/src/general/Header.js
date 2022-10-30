import iconoppal from "../imgs/iconoprincipalinicio.jpg"

const Header = () => {
    return (
        
          <header className="px-3" style={{background: "#7030a0"}}>
            <div>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <a href="/"><img src={iconoppal} alt=""/></a>
                        <li><a href="/" className="nav-link px-2 text-white">INICIO</a></li>
                        <li><a href="/" className="nav-link px-2 text-secondary">CONSULTORIOS</a></li>

                        <li><a href="/doctores" className="nav-link px-2 text-white">DOCTORES</a></li>
                        <li><a href="/pacientes" className="nav-link px-2 text-white">PACIENTES</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-" style={{background: "#e0d8e8"}} placeholder="Buscar..." aria-label="Buscar" />
                    </form>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-1">LOGIN</button>
                        <a href="/pacientes/form" type="button" className="btn btn-outline-light me-1" style={{background: "#7420d4"}}>REGISTRATE</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;