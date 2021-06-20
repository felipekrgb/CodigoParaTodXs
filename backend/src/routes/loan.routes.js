import { Router } from 'express';
import Loan from '../models/Loan';
import User from '../models/User';

import auth from '../middlewares/auth';

const loanRouter = Router();

loanRouter.use(auth);

loanRouter.post('/', async (req, res) => {
  try {
    const loan = await Loan.create(req.body.loanInfo);

    const user = await User.findById(req.userId);
    await user.updateOne({
      $push: {
        loans: loan,
      },
    });

    return res.json({ loan });
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao solicitar o empréstimo' });
  }
});

loanRouter.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate('loans');

    const { loans } = user;

    return res.json({ loans });
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao exibir os empréstimos' });
  }
});

export default loanRouter;
