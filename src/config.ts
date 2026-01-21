import { Config } from "./types";
import fs from "fs/promises";
import { parse } from "yaml";

export async function parseConfig(): Promise<Config> {
    try {
        const file = await fs.readFile('./config.yaml', 'utf8');
        return parse(file) as Config;
    }
    catch (error) {
        console.error(error);
        throw new Error("Could not parse config");
    }
}