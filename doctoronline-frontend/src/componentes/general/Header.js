import iconoppal from "../imgs/iconoprincipalinicio.jpg"
import React, { useState, useEffect } from 'react';
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
//import logo from "../componentes/";//
import EstadoLogin from "../../enums/EstadoLogin";
import { ContextoUsuario } from "./ContextoUsuario";

const Header = () => {
    const navigateTo = useNavigate();
    const { usuario, setUsuario } = useContext(ContextoUsuario);

    const revisarSesion = () => {
        if (sessionStorage.getItem("estadologin") != null) {
            const usuarioSesion = {
                nombres: sessionStorage.getItem("nombres"),
                estadologin: parseInt(sessionStorage.getItem("estadologin"))
            }
            console.log(usuarioSesion);
            setUsuario(usuarioSesion);
        }
        else {
            setUsuario({nombres: "", estadologin: EstadoLogin.NO_LOGUEADO});
        }
    }

    const cerrarSesion = () => {
        sessionStorage.clear();
        revisarSesion();
        navigateTo("/");
    }

    useEffect(() => {
        revisarSesion();
    }, [])

    return (
        <nav className="px-3" style={{background: "#7030a0"}}>
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

                <button className="btn btn-outline-light me-1" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">+</span>
                </button>
                <a href="/login" type="button" className="btn btn-outline-light me-1">Ingresar</a>
                <a href="/pacientes/form" type="button" className="btn btn-outline-light me-1" style={{background: "#7420d4"}}>REGISTRATE</a>
                {
                    usuario.estadologin === EstadoLogin.NO_LOGUEADO ? (
                        <>
                            <div className="collapse navbar-collapse" id="menu">
                                <div className="navbar-nav" style={{ fontWeight: 700 }}>
                                    <a className="nav-link text-light" href="/categorias-mosaico">Categorías</a>
                                    <a className="nav-link text-light" href="/">Productos</a>
                                </div>
                            </div>

                        </>
                    ) :
                    usuario.estadologin === EstadoLogin.ADMIN ? (
                            <>
                                <div className="collapse navbar-collapse" id="menu">
                                    <div className="navbar-nav" style={{ fontWeight: 700 }}>
                                        <a className="nav-link text-light" href="/categorias">Categorías</a>
                                        <a className="nav-link text-light" href="/productos">Productos</a>
                                        <a className="nav-link text-light" href="/clientes">Clientes</a>
                                    </div>
                                </div>
                                <div className="col-md-4 text-end text-light">
                                    {usuario.nombres}
                                    <button onClick={cerrarSesion} type="button" className="btn btn-sm btn-warning ms-2">Cerrar sesion</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="collapse navbar-collapse" id="menu">
                                    <div className="navbar-nav" style={{ fontWeight: 700 }}>
                                        <a className="nav-link text-light" href="/categorias-mosaico">Categorías</a>
                                        <a className="nav-link text-light" href="/">Productos</a>
                                        <a className="nav-link text-light" href="/carrito">Carrito</a>
                                    </div>
                                </div>
                                <div className="col-md-4 text-end text-light">
                                    {usuario.nombres}
                                    <button onClick={cerrarSesion} type="button" className="btn btn-sm btn-warning">Cerrar sesion</button>
                                </div>
                            </>
                        )
                }
            </div>
        </nav>
    )
}

export default Header;