import { TargetSend } from './types';
import { parse } from 'yaml';
import { readdir, readFile, access } from 'fs/promises';
import * as path from 'path';

const VALID_IMAGES = ["png","jpg","jpeg","webp"];

async function getMediaFile(dir: string): Promise<string | null> {
    try {
        const allfiles = await readdir(dir, { withFileTypes: true });
        const images = allfiles
            .filter((file) => file.isFile()
                && VALID_IMAGES.includes(file.name.substring(file.name.lastIndexOf('.')+1)))
            .map((file) => file.name);
        if (images.length === 0) return null;
        const image = images[images.length === 1 ? 0 : Math.floor(Math.random() * images.length)];
        return path.join(dir, image);
    } catch {
        return null;
    }
}

async function getQuote(dir: string): Promise<string | null> {
    try {
        await access(`${dir}/quotes.yaml`);
        const file = await readFile(`${dir}/quotes.yaml`, 'utf8');
        const quotes = parse(file) as string[];
        if (quotes.length === 0) return null;
        return quotes[quotes.length === 1 ? 0 : Math.floor(Math.random() * quotes.length)];
    } catch {
        return null;
    }
}

export async function getTarget(files: string): Promise<TargetSend> {
    try {
        const allfiles = await readdir(files, { withFileTypes: true });
        const dirs = allfiles
            .filter((file) => file.isDirectory())
            .map((file) => file.name);
        if (dirs.length === 0) {
            throw new Error("No target directories found");
        }
        const targetDir = dirs.length === 1 ? dirs[0]
            : dirs[Math.floor(Math.random() * dirs.length)];
        const finalPath = path.join(files,targetDir);
        return {
            filePath: await getMediaFile(finalPath),
            quote: await getQuote(finalPath)
        }
    }
    catch (error) {
        console.error(`Failed to get target to send: ${error}`);
        return { filePath: null, quote: null }
    }
}