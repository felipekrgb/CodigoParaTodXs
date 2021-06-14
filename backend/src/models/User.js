import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    income: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  const hashedPassword = await bycrypt.hash(this.password, 8);
  this.password = hashedPassword;

  next();
});

export default mongoose.model('User', UserSchema, 'users');
