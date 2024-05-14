import dotenv from 'dotenv';
import express, { Request, Response, NextFunction  } from 'express';
import paymentCategoriesRoutes from './routes/paymentCategoriesRoutes';
import paymentFrequenciesRoutes from './routes/paymentFrequenciesRoutes';
import logger from './logger'; 
import merge from 'deepmerge';

// swagger
import swaggerUi from 'swagger-ui-express';
import * as paymentCategoriesSwaggerDocument from './swagger/paymentCategoriesSwagger.json';
import * as paymentFrequenciesSwaggerDocument from './swagger/paymentFrequenciesSwagger.json';
const combinedSwaggerDocument = merge(paymentCategoriesSwaggerDocument, paymentFrequenciesSwaggerDocument);

dotenv.config();

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(paymentCategoriesRoutes);
app.use(paymentFrequenciesRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(combinedSwaggerDocument));

const PORT = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('API REST Ver 1.0') ;
});

//handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    return next();
  }
  
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
