import { readFileSync } from "fs";
import { join } from "path";

export function readFile(name: string): string[] {
  const filePath = join(process.cwd(), `${name}.txt`);
  const content = readFileSync(filePath, "utf8");

  return content.trim().split("\n");
}