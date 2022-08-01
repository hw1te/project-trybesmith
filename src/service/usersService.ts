import usersModel from '../models/usersModel';
import { Users } from '../interfaces/users';
import authService from './authenticationService';

const usersService = {
  create: async (user: Users) => {
    const id = await usersModel.create(user);
    const token = await authService.create(id);

    return { code: 201, data: { id, token } };
  },

  // getAll: async () => {
  //   const data = await productsModel.getAll();
    
  //   return { code: 200, data };
  // },
};

export default usersService;