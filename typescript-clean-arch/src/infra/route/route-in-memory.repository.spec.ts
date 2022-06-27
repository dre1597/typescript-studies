import { RouteProps, routeObjectWithoutPoints, Route } from '../../domain';
import { RouteInMemoryRepository } from './route-in-memory.repository';

export const createRoute = (routeProps: RouteProps): Route => {
  return new Route(routeProps);
};

export const createRouteInMemoryRepository = () => {
  return new RouteInMemoryRepository();
};

describe('RouteInMemoryRepository', () => {
  it('should store a new route', async () => {
    const repository = createRouteInMemoryRepository();

    const routeProps: RouteProps = routeObjectWithoutPoints();

    const route = createRoute(routeProps);

    await repository.store(route);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
