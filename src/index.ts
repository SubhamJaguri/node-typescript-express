import 'dotenv/config';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'colors';
import express from 'express';

import {
  errorHandler,
  notFound,
} from './modules/common/middlewares/error.middleware';
import connectDB from './modules/common/drivers/database';
import appRoutes from './modules/app/app.route';
(async () => {
  // app code
  const app = express();

  await connectDB();

  // Connect to database

  /* Required middlewares */
  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  app.use(cookieParser());

  if (process.env.NODE_ENV === 'development') {
  }

  /* Routes */
  app.get('/', (_, res) => res.send('API is running..'));
  app.use('/app', appRoutes);

  /* Custom Middlewares */
  app.use(notFound);
  app.use(errorHandler);

  /* Server */
  const PORT = process.env.PORT || 4001;

  app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    );
  });
})();
