const pacienteOperaciones = require("../operaciones/PacienteOperaciones");
const router = require("express").Router();

router.get("/", pacienteOperaciones.buscarPaciente);
router.post("/", pacienteOperaciones.crearPaciente);

module.exports = router;