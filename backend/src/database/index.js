import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  async mongo() {
    try {
      await mongoose.connect(
        'mongodb+srv://felipe:123@cluster0.7i983.mongodb.net/CodigoParaTodXs?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        },
      );
      console.log('Database connected.');
    } catch (err) {
      console.log('Failed to connect.', err);
    }
  }
}

export default new Database();
