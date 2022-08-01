import { OkPacket } from 'mysql2';
import connection from './connection';
import { Products } from '../interfaces';

const productsModel = {
  create: async (product: Products) => {
    const { name, amount } = product;
    const [{ insertId }] = await connection
      .query<OkPacket>(
      'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?)',
      [name, amount],
    );
      
    return insertId;
  },
};

export default productsModel;