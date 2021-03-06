import * as Chits from './Chits';
import * as Coordinates from './Coordinates';
import * as Tiles from './Tiles';

// export module Configuration {
export class Configuration {
  constructor(
    public tile: Tiles.Tile,
    public coordinate: Coordinates.Coordinate,
    public chit: Chits.Chits
  ) {
    this.validateConfiguration();
  }

  validateConfiguration() {
    console.log(
      `tile = ${JSON.stringify(this.tile)}, coordinate = ${JSON.stringify(
        this.coordinate
      )}, chits = ${JSON.stringify(this.chit)}`
    );

    const tileEdgeCount = this.tile.edgeCount();

    console.log(
      `tileEdgeCount = ${tileEdgeCount}, edgePositions = ${this.coordinate.edgePositions}`
    );
    if (
      this.coordinate.edgePositions.length < tileEdgeCount[0] ||
      tileEdgeCount[1] < this.coordinate.edgePositions.length
    ) {
      throw new Error(
        `Invalid configuration: Coordinate \`${JSON.stringify(
          this.coordinate
        )}\` is not appropriate for the tile \`${JSON.stringify(
          this.tile
        )}\` with edge count \`{this.tile.edgeCount()\``
      );
    }
  }
}
// }
