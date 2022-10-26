const PacienteModelo = require("../modelos/PacienteModelo");
const PacienteOperaciones = {}

PacienteOperaciones.crearPaciente = async (req, res)=>{
    try {
        const objeto = req.body;
        console.log(objeto);
        const paciente = new PacienteModelo(objeto);
        const pacienteGuardado = await paciente.save();
        res.status(201).send(pacienteGuardado);
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

PacienteOperaciones.buscarPaciente = async (req, res)=>{
    try {
        const listapacientes = await PacienteModelo.find();
        if (listapacientes.length > 0){
            res.status(200).send(listapacientes);
        } else {
            res.status(404).send("No hay datos");
        }
    } catch (error) {
        res.status(400).send("Mala petición. "+error);
    }
}

PacienteOperaciones.modificarPacientes = async (req, res)=>{
    
}

module.exports = PacienteOperaciones;