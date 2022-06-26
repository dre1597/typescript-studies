import { RouteInMemoryRepository } from '../route-in-memory.repository';

export const createRouteInMemoryRepository = () => {
  return new RouteInMemoryRepository();
};
