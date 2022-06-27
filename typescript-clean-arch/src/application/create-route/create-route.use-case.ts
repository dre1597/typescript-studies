import { Route, RouteRepositoryInterface } from '../../domain';
import { CreateRouteInput, CreateRouteOutput } from './index';

export class CreateRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepository.store(route);
    return route.toJSON();
  }
}
