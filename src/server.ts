import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import createRoutes from './routes';

const PORT: number = config.get('port') || 5000;
const DB: string = config.get('db');
const mongoUri: string = config.get('mongoUri');

const app: express.Express = express();

createRoutes(app);

function startServer(): void {
  try {
    // подключение к базе MongoDB
    mongoose.connect(
      `${mongoUri}/${DB}`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
      (err: any) => {
        if (err) {
          throw Error(err);
        } else console.log(`Подключен к базе Mongodb: ${DB}`);
      }
    );
    // запуск сервера
    app.listen(PORT, (): void => {
      console.log(`> Сервер стартовал на ${PORT} порту`);
    });
  }catch(e: any) {
    // если есть ошибка при запуске приложения выдаем ошибку и выходим из программы с кодом 1
    console.log('Server error', e.message);
    process.exit(1);
  }
}

startServer();
