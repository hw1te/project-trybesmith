import { OkPacket } from 'mysql2';
import connection from './connection';
import { Users } from '../interfaces/users';

const usersModel = {
  create: async (user: Users) => {
    console.log(user);
    const { username, classe, level, password } = user;
    const [{ insertId }] = await connection
      .query<OkPacket>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
      
    return insertId;
  },
};

export default usersModel;