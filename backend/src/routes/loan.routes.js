import { Router } from 'express';
import Loan from '../models/Loan';
import User from '../models/User';

const loanRouter = Router();

loanRouter.post('/', async (req, res) => {
  try {
    const loan = await Loan.create(req.body.loanInfo);

    const user = await User.findById(req.body.userId);
    await user.updateOne({
      $push: {
        loans: loan,
      },
    });

    return res.json({ loan });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Falha ao solicitar o empréstimo' });
  }
});

export default loanRouter;
