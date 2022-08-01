import ordersModel from '../models/ordersModel';

const ordersService = {
  getAll: async () => {
    const data = await ordersModel.getAll();
    
    return { code: 200, data };
  },
};

export default ordersService;