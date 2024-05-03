import express, { Request, Response } from "express";
import paymentCategoriesRoutes from './src/api/routes/paymentCategoriesRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json()); 
app.use(paymentCategoriesRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("API REST Ver 1.0");
});

app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});