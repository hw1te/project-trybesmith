import { RowDataPacket } from 'mysql2';
import connection from './connection';

const ordersModel = {
  getAll: async (): Promise<RowDataPacket[]> => {
    const [orders] = await connection.query<RowDataPacket[]>(`
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Products as p INNER JOIN Trybesmith.Orders as o
    ON p.orderId = o.id GROUP BY o.id, o.userId ORDER BY o.userId;
  `);

    console.log(orders);
    return orders;
  },
};

export default ordersModel;