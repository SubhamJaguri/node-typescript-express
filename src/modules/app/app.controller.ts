import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';

export const hello = expressAsyncHandler(async (_: Request, res: Response) => {
  res.send('hello from app');
});
