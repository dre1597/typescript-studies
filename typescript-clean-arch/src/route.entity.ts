export type LatLng = {
  lat: number;
  lng: number;
};

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public props: Required<RouteProps>;

  constructor(props: RouteProps) {
    this.props = { ...props, points: props.points || [] };
  }

  get title(): string {
    return this.props.title;
  }

  get startPosition(): LatLng {
    return this.props.startPosition;
  }

  get endPosition(): LatLng {
    return this.props.endPosition;
  }

  get points(): LatLng[] {
    return this.props.points;
  }

  private set startPosition(startPosition: LatLng) {
    this.props.startPosition = startPosition;
  }

  private set endPosition(endPosition: LatLng) {
    this.props.endPosition = endPosition;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  private set points(points: LatLng[]) {
    this.props.points = points;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng): void {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updateTitle(title: string): void {
    this.title = title;
  }

  updatePoints(points: LatLng[]): void {
    this.points = points;
  }
}
