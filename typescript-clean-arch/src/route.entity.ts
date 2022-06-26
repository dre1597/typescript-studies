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

  updateTitle(title: string): void {
    this.title = title;
  }

  get title(): string {
    return this.props.title;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng): void {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  get startPosition(): LatLng {
    return this.props.startPosition;
  }

  get endPosition(): LatLng {
    return this.props.endPosition;
  }

  private set startPosition(startPosition: LatLng) {
    this.props.startPosition = startPosition;
  }

  private set endPosition(endPosition: LatLng) {
    this.props.endPosition = endPosition;
  }
}
