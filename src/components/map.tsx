import * as React from "react";
import { SVGMap } from "react-svg-map";
import Mexico, { Location } from "../lib/map/mexico";
export type IMapProps = {};

export default class Map extends React.Component<IMapProps> {
  getLocationClassName = (location: Location, index: number) => {
    return `fill-red-100 hover:fill-red-500`;
  };
  public render() {
    return (
      <SVGMap
        map={Mexico}
        className="w-1/2 text-gray-200"
        locationClassName={this.getLocationClassName}
      />
    );
  }
}
