import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const authService = {
  create: async (id: number) => {
    const token = jwt.sign({ data: id }, secret);

    return token;
  },
};

export default authService;