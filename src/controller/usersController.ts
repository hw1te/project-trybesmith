import { Request, Response } from 'express';
import usersService from '../service/usersService';

const usersController = {
  create: async (req: Request, res: Response) => {
    const user = req.body;
    const { code, data } = await usersService.create(user);

    return res.status(code).json(data);
  },
};
export default usersController;