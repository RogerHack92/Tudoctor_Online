import fondopage1 from "../imgs/fondopage1.png"

import beneficios from "../imgs/beneficios.png"

//import aaacitamedicaok from "../imgs/aaacitamedicaok.png"
//import aaadinerook from "../imgs/aaaaaadinerook.png"
//import aaahogarok from "../imgs/aaahogarok.png"
//import aaaseguridadinformaticaok from "../imgs/aaaseguridadinformaticaok.png"
//import aaatiempook from "../imgs/aaatiempook.png"
//import aaavideollamadaok from "../imgs/aaavideollamadaok.png"



import equipomedico from "../imgs/equipomedico.png"

import cita from "../imgs/cita.png"

import metododepago from "../imgs/metododepago.png"

import administracion from "../imgs/administracion.png"

import paciente from "../imgs/paciente.png"

import hospital from "../imgs/hospital.png"

import pasos123 from "../imgs/pasos123.png"

import pasos456 from "../imgs/pasos456.png"


const Inicio = () => {
    return (
        <><><><div className="container col-6 py-1 px-4 mt-3">
            <h1 className="container" align="center">
                Atiende a tus pacientes 100% ON-line
            </h1>
            <h5 className="container" align="center">
                Con TuDoctorOnline puedes atender a tus pacientes de forma 100% virtual, vía chat o videollamada en una web segura y privada. Ahorra tiempo y entrega tu diagnóstico fácilmente con nuestras plantillas personalizadas.
                <img className="container" src={fondopage1} alt="" />
            </h5>
            <img className="container mt-3" align="center" width="800" height="400" src={beneficios} alt="" />
            <h1 className="container mt-3" align="center">
                Módulos de atención
            </h1>


        </div><div className="container col-3 py-3 px-2 mt-3 mb-2" class="row row-cols-6 md-3 g-2" width="300" height="300">
                <div class="col 2">
                    <div class="card h-100">
                        <img src={equipomedico} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 align="center" class="card-title">MÉDICOS ESPECIALISTAS</h5>
                            <p class="card-text">Contamos con execlentes profesionales de la salud.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Click aqui para más información.</small>
                        </div>
                    </div>
                </div>
                <div class="col 2">
                    <div class="card h-100">
                        <img src={cita} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 align="center" class="card-title">AGENDA TUS CITAS</h5>
                            <p class="card-text">Desde la comodidad de tu hogar o trabajo, agenda facilmente tus citas</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Click aqui para más información.</small>
                        </div>
                    </div>
                </div>
                <div class="col 2">
                    <div class="card h-100">
                        <img src={metododepago} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 align="center" class="card-title">GESTIONA TUS COBROS</h5>
                            <p class="card-text">Recibe cualquier medio de pago a través de las pasarelas de pago más reconocidas.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Click aqui para más información.</small>
                        </div>
                    </div>
                </div>
                <div class="col 2">
                    <div class="card h-100">
                        <img src={administracion} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 align="center" class="card-title">ADMINISTRA TU SITIO</h5>
                            <p class="card-text">Crea tu consultorioOnline, configura los medios de pago y crea los usuarios de acuerdo a tus necesides.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Click aqui para más información.</small>
                        </div>
                    </div>
                </div>
                <div class="col 2">
                    <div class="card h-100">
                        <img src={paciente} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 align="center" class="card-title">AUTOGESTION PACIENTES</h5>
                            <p class="card-text">Inscríbete de manera fácil y segura, agenda tu cita con el especialista de tu interés, para la consulta y listo, ¡Ya puedes tener tu diagnóstico 100% Online.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Click aqui para más información.</small>
                        </div>
                    </div>
                </div>
                <div class="col 2">
                    <div class="card h-100">
                        <img src={hospital} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 align="center" class="card-title">CENTROS DE SALUD</h5>
                            <p class="card-text">Encuentra la información de todos nuestros consultorios de cientos de médicos y profesionales de la salud asociados a TuDoctorOnline cerca a tu ubicación.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Click aqui para más información.</small>
                        </div>
                    </div>
                </div>
            </div></>
            <div clasname="container col-6 mb-3 px-3 py-3 px-4 mt-10"><h1 align="center">
                ¿Cómo funciona TuDoctorOnline?</h1>
                <img className="container mt-3" align="center" width="800" height="400" src={pasos123} alt="" />
                <img className="container mt-3" align="center" width="800" height="400" src={pasos456} alt="" />
            </div></><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
    </div></>












                )
                }

                export default Inicio;