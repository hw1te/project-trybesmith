import { Request, Response } from 'express';
import productsServices from '../service/productsServices';

const productsController = {
  create: async (req: Request, res: Response) => {
    console.log(req.body);
    const product = req.body;
    const { code, data } = await productsServices.create(product);

    return res.status(code).json(data);
  },

  getAll: async (req: Request, res: Response) => {
    const { code, data } = await productsServices.getAll();
    
    return res.status(code).json(data);
  },
};
export default productsController;