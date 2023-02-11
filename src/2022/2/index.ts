import { readFileSync } from "fs";
import sum from "lodash/sum";

const FIGURE = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const RESULTS = {
  LOST: 0,
  DRAW: 3,
  WIN: 6,
};

const MAP_1: Record<string, Record<string, number>> = {
  A: {
    X: FIGURE.ROCK + RESULTS.DRAW,
    Y: FIGURE.PAPER + RESULTS.WIN,
    Z: FIGURE.SCISSORS + RESULTS.LOST,
  },
  B: {
    X: FIGURE.ROCK + RESULTS.LOST,
    Y: FIGURE.PAPER + RESULTS.DRAW,
    Z: FIGURE.SCISSORS + RESULTS.WIN,
  },
  C: {
    X: FIGURE.ROCK + RESULTS.WIN,
    Y: FIGURE.PAPER + RESULTS.LOST,
    Z: FIGURE.SCISSORS + RESULTS.DRAW,
  },
};

const MAP_2: Record<string, Record<string, number>> = {
  A: {
    X: FIGURE.SCISSORS + RESULTS.LOST,
    Y: FIGURE.ROCK + RESULTS.DRAW,
    Z: FIGURE.PAPER + RESULTS.WIN,
  },
  B: {
    X: FIGURE.ROCK + RESULTS.LOST,
    Y: FIGURE.PAPER + RESULTS.DRAW,
    Z: FIGURE.SCISSORS + RESULTS.WIN,
  },
  C: {
    X: FIGURE.PAPER + RESULTS.LOST,
    Y: FIGURE.SCISSORS + RESULTS.DRAW,
    Z: FIGURE.ROCK + RESULTS.WIN,
  },
};

export const main = () => {
  const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
  const rows = input.split("\n").filter((e) => e !== "");

  const results1 = rows.map((row) => {
    const [opp, me] = row.split(" ");
    return MAP_1[opp][me];
  });
  const total1 = sum(results1);
  console.log(`Day 2, part 1: ${total1}`);

  const results2 = rows.map((row) => {
    const [opp, me] = row.split(" ");
    return MAP_2[opp][me];
  });

  const total2 = sum(results2);
  console.log(`Day 2, part 2: ${total2}`);
};
