import { Router } from 'express';
import bycrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

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

    let interest;
    if (user.score < 100) {
      interest = 10.34;
    } else if (user.score < 200) {
      interest = 9.78;
    } else if (user.score < 300) {
      interest = 9.13;
    } else if (user.score < 400) {
      interest = 8.34;
    } else if (user.score < 500) {
      interest = 7.52;
    } else if (user.score < 600) {
      interest = 6.84;
    } else if (user.score < 700) {
      interest = 5.52;
    } else if (user.score < 800) {
      interest = 4.24;
    } else if (user.score < 900) {
      interest = 3.19;
    } else {
      interest = 2.12;
    }

    const { id } = user;
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id }, secret, {
      expiresIn,
    });

    return res.json({ user, interest, token });
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao fazer login' });
  }
});

export default sessionsRouter;
