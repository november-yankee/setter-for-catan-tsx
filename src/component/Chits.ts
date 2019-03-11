// export module Chits {

export class Chits {
    constructor(public values: number[]) {}

    odds(): number {
      function oddsOf(n: number): number {
        return 6 - Math.abs(7 - n);
      }

      return this.values.reduce((accum, n) => accum + oddsOf(n), 0);
    }
  }

  export const NO_CHITS = new Chits([]);

  export const CHITS_2 = new Chits([2]);
  export const CHITS_3 = new Chits([3]);
  export const CHITS_4 = new Chits([4]);
  export const CHITS_5 = new Chits([5]);
  export const CHITS_6 = new Chits([6]);
  export const CHITS_8 = new Chits([8]);
  export const CHITS_9 = new Chits([9]);
  export const CHITS_10 = new Chits([10]);
  export const CHITS_11 = new Chits([11]);
  export const CHITS_12 = new Chits([12]);

  export const CHITS_2_12 = new Chits([2, 12]);
  export const CHITS_3_11 = new Chits([3, 11]);
  export const CHITS_4_9 = new Chits([4, 9]);

  export const CHITS_2_3_11_12 = new Chits([2, 3, 11, 12]);

  export const BASE_PRODUCING_TERRAIN_CHIT_SET = [CHITS_2, CHITS_12]
      .concat(new Array(2).fill(CHITS_3))
      .concat(new Array(2).fill(CHITS_11))
      .concat(new Array(2).fill(CHITS_4))
      .concat(new Array(2).fill(CHITS_10))
      .concat(new Array(2).fill(CHITS_5))
      .concat(new Array(2).fill(CHITS_9))
      .concat(new Array(2).fill(CHITS_6))
      .concat(new Array(2).fill(CHITS_8));
  export const BASE_FISHERY_CHIT_SET = [CHITS_4, CHITS_5, CHITS_6, CHITS_8, CHITS_9, CHITS_10];

  export const EXTENSION_5_6_PRODUCING_TERRAIN_CHIT_SET = BASE_PRODUCING_TERRAIN_CHIT_SET
      .concat([CHITS_2, CHITS_3, CHITS_4, CHITS_5, CHITS_6, CHITS_8, CHITS_9, CHITS_10, CHITS_11, CHITS_12]);
  export const EXTENSION_5_6_FISHERY_CHIT_SET = BASE_FISHERY_CHIT_SET
      .concat([CHITS_5, CHITS_10]);

  export const EXTENSION_7_8_PRODUCING_TERRAIN_CHIT_SET = BASE_PRODUCING_TERRAIN_CHIT_SET
      .concat(BASE_PRODUCING_TERRAIN_CHIT_SET);
  export const EXTENSION_7_8_FISHERY_CHIT_SET = EXTENSION_5_6_FISHERY_CHIT_SET;

  export const BASE_3_EXPANSION_SEA_SCENARIO_HFNS_PRODUCING_TERRAIN_CHIT_SET = [CHITS_2, CHITS_3, CHITS_4, CHITS_9]
      .concat(new Array(2).fill(CHITS_5))
      .concat(new Array(2).fill(CHITS_6))
      .concat(new Array(2).fill(CHITS_8))
      .concat(new Array(2).fill(CHITS_10))
      .concat(new Array(2).fill(CHITS_11));
  export const BASE_3_EXPANSION_SEA_SCENARIO_HFNS_FISHERY_CHIT_SET = [CHITS_4, CHITS_5, CHITS_9, CHITS_10];
  export const BASE_3_EXPANSION_SEA_SCENARIO_HFNS_SMALL_ISLANDS_PRODUCING_TERRAIN_CHIT_SET = [CHITS_3, CHITS_5, CHITS_8, CHITS_9, CHITS_10, CHITS_12]
      .concat(new Array(2).fill(CHITS_4));

  export const BASE_4_EXPANSION_SEA_SCENARIO_HFNS_SMALL_ISLANDS_PRODUCING_TERRAIN_CHIT_SET = [
    CHITS_2,
    CHITS_3,
    CHITS_4,
    CHITS_5,
    CHITS_6,
    CHITS_8,
    CHITS_9,
    CHITS_10,
    CHITS_11];

  export const BASE_EXPANSION_TB_SCENARIO_TB_TERRAIN_CHIT_SET = new Array(2).fill(CHITS_3)
      .concat(new Array(2).fill(CHITS_11))
      .concat(new Array(2).fill(CHITS_4))
      .concat(new Array(2).fill(CHITS_10))
      .concat(new Array(2).fill(CHITS_5))
      .concat(new Array(2).fill(CHITS_9))
      .concat(new Array(2).fill(CHITS_6))
      .concat(new Array(2).fill(CHITS_8));
// }