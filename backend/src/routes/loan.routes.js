import { Router } from 'express';
import Loan from '../models/Loan';

const loanRouter = Router();

loanRouter.post('/', async (req, res) => {
  try {
    const loan = await Loan.create(req.body);

    return res.json({ loan });
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao solicitar o empréstimo' });
  }
});

export default loanRouter;
