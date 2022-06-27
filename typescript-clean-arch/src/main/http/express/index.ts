import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application';
import { RouteInMemoryRepository } from '../../../infra';

const app: Express = express();
app.use(express.json());
const port: number = Number(process.env.PORT) || 3000;

const routeRepository = new RouteInMemoryRepository();

app.post('/routes', async (request: Request, response: Response): Promise<void> => {
  const createRouteUseCase = new CreateRouteUseCase(routeRepository);

  const output = await createRouteUseCase.execute(request.body);

  response.status(201).json(output);
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
