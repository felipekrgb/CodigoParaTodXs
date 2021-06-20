import mongoose from 'mongoose';
import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.mongo();
  }

  async mongo() {
    try {
      await mongoose.connect(databaseConfig.mongoose.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log('Database connected.');
    } catch (err) {
      console.log('Failed to connect.', err);
    }
  }
}

export default new Database();
