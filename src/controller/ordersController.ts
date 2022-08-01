import { Request, Response } from 'express';
import ordersService from '../service/ordersService';

const ordersController = {
  getAll: async (req: Request, res: Response) => {
    const { code, data } = await ordersService.getAll();
    
    return res.status(code).json(data);
  },
};

export default ordersController;