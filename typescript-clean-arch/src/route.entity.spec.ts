import { LatLng, Route, RouteProps } from './route.entity';

const routeObjectWithoutPoints = (): RouteProps => {
  return {
    title: 'any_title',
    startPosition: { lat: 0, lng: 0 },
    endPosition: { lat: 0, lng: 0 },
  };
};

const routeObjectWithPoints = (): RouteProps => {
  return {
    title: 'any_title',
    startPosition: { lat: 0, lng: 0 },
    endPosition: { lat: 0, lng: 0 },
    points: [{ lat: 0, lng: 0 }],
  };
};

const createRoute = (routeProps: RouteProps): Route => {
  return new Route(routeProps);
};

describe('Route Entity', () => {
  test('should be possible to create a new route without points', () => {
    const routeProps: RouteProps = routeObjectWithoutPoints();
    const routeWithoutPoints: Route = createRoute(routeProps);

    expect(routeWithoutPoints.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
  });

  test('should be possible to create a new route with points', () => {
    const routeProps: RouteProps = routeObjectWithPoints();
    const routeWithPoints = createRoute(routeProps);

    expect(routeWithPoints.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 0, lng: 0 }],
    });
  });

  test('should be possible to update the title', () => {
    const routeProps: RouteProps = routeObjectWithoutPoints();

    const route: Route = createRoute(routeProps);

    route.updateTitle('updated_title');
    expect(route.title).toBe('updated_title');
  });

  test('should be possible to update the positions', () => {
    const routeProps: RouteProps = routeObjectWithoutPoints();

    const route: Route = createRoute(routeProps);

    const startPosition = { lat: 1, lng: 1 };
    const endPosition = { lat: 2, lng: 2 };

    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toEqual(startPosition);
    expect(route.endPosition).toEqual(endPosition);
  });

  test('should be possible to update points', () => {
    const routeProps: RouteProps = routeObjectWithoutPoints();

    const route: Route = createRoute(routeProps);

    const points: LatLng[] = [
      { lat: 0, lng: 0 },
      { lat: 1, lng: 1 },
    ];

    route.updatePoints(points);

    expect(route.points).toHaveLength(2);
    expect(route.points).toStrictEqual(points);
  });
});
