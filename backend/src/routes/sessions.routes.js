import { Router } from 'express';
import bycrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    if (!(await bycrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Senha inválida' });
    }

    user.password = undefined;

    const { id } = user;

    const token = sign({ id }, '3f56f7b818e86fb3ac0b54fa5c8d671f', {
      expiresIn: '7d',
    });

    return res.json({ user, token });
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao fazer login' });
  }
});

export default sessionsRouter;
