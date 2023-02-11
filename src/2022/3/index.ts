import { readFileSync } from "fs";
import chunk from "lodash/chunk";

const charToPriority = (char: string) => {
  const charcode = char.charCodeAt(0);
  const priority = charcode >= 97 ? charcode - 96 : charcode - 38;
  return priority;
};

export const main = () => {
  const input = readFileSync(`${__dirname}/input.txt`, "utf-8");
  const rows = input.split("\n").filter((e) => e !== "");

  let sum1 = 0;
  rows.forEach((row) => {
    const first = row.slice(0, row.length / 2);
    const second = row.slice(row.length / 2);
    const char = first.split("").find((char) => second.includes(char)) ?? "";
    sum1 += charToPriority(char);
  });

  console.log(`Day 3, part 1: ${sum1}`);

  let sum2 = 0;
  chunk(rows, 3).forEach(([first, second, third]) => {
    const char =
      first
        .split("")
        .find((char) => second.includes(char) && third.includes(char)) ?? "";
    sum1 += charToPriority(char);
  });
  console.log(`Day 3, part 2: ${sum2}`);
};
