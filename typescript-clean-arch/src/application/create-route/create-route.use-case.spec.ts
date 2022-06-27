import { routeObjectWithoutPoints } from '../../domain';
import { RouteInMemoryRepository } from '../../infra';
import { CreateRouteUseCase } from './create-route.use-case';
import { CreateRouteOutPut } from './types';

export const createRepository = (): RouteInMemoryRepository => {
  return new RouteInMemoryRepository();
};

export const createRouteUseCase = (repository: RouteInMemoryRepository): CreateRouteUseCase => {
  return new CreateRouteUseCase(repository);
};

describe('CreateRouteUseCase', (): void => {
  it('should create a new route', async (): Promise<void> => {
    const repository: RouteInMemoryRepository = createRepository();
    const createUseCase: CreateRouteUseCase = createRouteUseCase(repository);

    const output: CreateRouteOutPut = await createUseCase.execute(routeObjectWithoutPoints());

    expect(output).toStrictEqual({ ...routeObjectWithoutPoints(), points: [] });
    expect(repository.items).toHaveLength(1);
  });
});
