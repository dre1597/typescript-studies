import { Route, RouteRepositoryInterface } from '../../../domain';

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  public items: Route[] = [];

  async store(route: Route): Promise<void> {
    this.items.push(route);
  }
}
