import express, { Express, Request, Response } from 'express';

import { CreateRouteUseCase, ListAllRoutesUseCase } from '../../../application';
import { RouteInMemoryRepository } from '../../../infra';

const app: Express = express();

app.use(express.json());

const port: number = Number(process.env.PORT) || 3000;

const routeRepository = new RouteInMemoryRepository();

app.get('/routes', async (_request: Request, response: Response): Promise<void> => {
  const listAllUseCase = new ListAllRoutesUseCase(routeRepository);

  const output = await listAllUseCase.execute();

  response.status(200).json(output);
});

app.post('/routes', async (request: Request, response: Response): Promise<void> => {
  const createRouteUseCase = new CreateRouteUseCase(routeRepository);

  const output = await createRouteUseCase.execute(request.body);

  response.status(201).json(output);
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
