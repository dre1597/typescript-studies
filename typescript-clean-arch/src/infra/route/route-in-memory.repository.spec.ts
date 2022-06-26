import { RouteProps, routeObjectWithoutPoints, createRoute } from '../../domain';
import { createRouteInMemoryRepository } from './mocks';

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
