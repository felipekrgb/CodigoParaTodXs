import { Router } from 'express';
import User from '../models/User';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default userRouter;
