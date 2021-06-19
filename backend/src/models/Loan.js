import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema(
  {
    loan: {
      type: String,
      required: true,
    },
    interest: {
      type: Number,
      required: true,
    },
    loanTotal: {
      type: String,
      required: true,
    },
    installmentsQuantity: {
      type: Number,
      required: true,
    },
    installmentValue: {
      type: String,
      required: true,
    },
    firstInstallment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Loan', LoanSchema, 'loans');
