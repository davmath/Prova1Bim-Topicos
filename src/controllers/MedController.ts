import { Request, Response } from "express";
import MedicoSchema from "../models/MedicoSchema";

class MedController {
    async listar(request: Request, response: Response) {
    const med = await MedicoSchema.find();
    response.status(200).json(med);
  }

  async buscarPorCrm(request: Request, response: Response) {
    const { crm } = request.params;
    const medic = await MedicoSchema.find({ _id: crm });
    response.status(200).json(medic);
  }
  async alterar(request: Request, response: Response) {
    const { medico } = request.params;
    const medic = await MedicoSchema.find({ _id: medico });
    response.status(200).json(medic);
  }
  async removerPorCrm(request: Request, response: Response) {
    const { crm } = request.params;
    const medic = await MedicoSchema.find({ _id: crm });
    response.status(200).json(medic);
  }

  async cadastrar(request: Request, response: Response) {
    try {
        const novoMedico = await MedicoSchema.create(request.body);
        response.status(201).json({
        objeto: novoMedico,
        msg: "Médico cadastrado com sucesso",
        erro: false
      });
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha na validação",
        erro: true
      });
    }
  }
}

export { MedController };