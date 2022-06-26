import { LatLng } from '../../../domain/route';

export type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
};

export type CreateRouteOutPut = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
};
