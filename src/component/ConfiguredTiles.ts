import * as Chits from "./Chit";
import * as Coordinates from "./Coordinates";
import * as Tiles from "./Tiles";

// export module ConfiguredTiles {
  export class ConfiguredTile {
    constructor(public tile: Tiles.Tile, public coordinate: Coordinates.Coordinate, public chits: Chits.Chits) {
      this.validateConfiguration(tile, coordinate, chits);
    }
    
    validateConfiguration(tile: Tiles.Tile, coordinate: Coordinates.Coordinate, chits: Chits.Chits) {
      console.log(`ConfiguredTile.validateConfiguration: tile = ${JSON.stringify(tile)}, coordinate = ${JSON.stringify(coordinate)}, chits = ${JSON.stringify(chits)}`);

      if (tile.edgeCount() !== coordinate.positions.length) {
        throw new Error(`Invalid configuration: Coordinate \`${JSON.stringify(coordinate)}\` is not appropriate for the tile \`${JSON.stringify(tile)}\` with edge count \`{tile.edgeCount()\``);
      }
    }
  }
// }