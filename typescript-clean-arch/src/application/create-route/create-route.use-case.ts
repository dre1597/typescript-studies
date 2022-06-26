import { Route, RouteRepositoryInterface } from '../../domain';
import { CreateRouteInput, CreateRouteOutPut } from './types';

export class CreateRouteUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutPut> {
    const route = new Route(input);
    await this.routeRepository.store(route);
    return route.toJSON();
  }
}
