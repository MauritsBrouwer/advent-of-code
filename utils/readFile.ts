import { readFileSync } from "fs";
import { join } from "path";

export function readFile(name: string) {
  const filePath = join(process.cwd(), `${name}.txt`);
  return readFileSync(filePath, "utf8");
}