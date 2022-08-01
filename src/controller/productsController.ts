import { Request, Response } from 'express';
import productsServices from '../service/productsServices';

const productsController = {
  create: async (req: Request, res: Response) => {
    const product = req.body;
    const { code, data } = await productsServices.create(product);

    return res.status(code).json(data);
  },

};
export default productsController;