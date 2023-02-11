import { readFileSync } from "fs";

export const main = () => {
  const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
  const rows = input.split("\n").filter((e) => e !== "");

  let totalOverlap = 0;
  let partialOverlap = 0;
  rows.forEach((row) => {
    const [[aS, aE], [bS, bE]] = row
      .split(",")
      .map((e) => e.split("-").map(Number));
    if ((aS <= bS && bE <= aE) || (bS <= aS && aE <= bE)) {
      totalOverlap++;
    }
    if (
      (aS <= bS && bS <= aE) ||
      (aS <= bE && bE <= aE) ||
      (bS <= aS && aS <= bE) ||
      (bS <= aE && aE <= bE)
    ) {
      partialOverlap++;
    }
  });

  console.log(`Day 4, part 1: ${totalOverlap}`);
  console.log(`Day 4, part 2: ${partialOverlap}`);
};
