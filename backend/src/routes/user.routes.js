import { Router } from 'express';
import User from '../models/User';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    const checkUserExists = await User.findOne({ email });

    if (checkUserExists) {
      return res.status(401).send({ error: 'E-mail já cadastrado' });
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao registrar' });
  }
});

export default userRouter;
