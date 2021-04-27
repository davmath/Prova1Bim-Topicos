import { Router } from "express";
import { MedController } from "../controllers/MedController"

const router = Router();
const medController = new MedController();

//Funcionalidades
//Métodos/Verbos HTTP -> POST e GET ...
router.get("/medico/listar", medController.listar);
router.get("/medico/buscar", medController.buscarPorCrm);
router.get("/medico/remover", medController.removerPorCrm);
router.get("/medico/alterar", medController.alterar);
router.post("/medico/cadastrar", medController.cadastrar);

export { router };