import { readFileSync } from "fs";
import sum from "lodash/sum";

export const main = () => {
  const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
  const chunks = input.split("\n\n");
  const sums = chunks.map((chunk) =>
    sum(chunk.split("\n").map((e) => Number(e)))
  );
  const orderedSums = sums.sort((a, b) => b - a);

  const max = orderedSums[0];
  console.log(`Day 1, part 1: ${max}`);

  const top3 = sum(orderedSums.slice(0, 3));
  console.log(`Day 1, part 2: ${top3}`);
};
