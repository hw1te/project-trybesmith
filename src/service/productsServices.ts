import productsModel from '../models/productsModel';
import { Products } from '../interfaces';

const productsServices = {
  create: async (product: Products) => {
    const id = await productsModel.create(product);
    return { code: 201, data: { id, name: product.name, amount: product.amount } };
  },
};

export default productsServices;