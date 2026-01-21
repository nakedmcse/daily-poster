import { getTarget } from './targets'
import { twitterPost } from './processor/twitter';
import * as path from 'path';
import {parseConfig} from "./config";

async function main() {
    const args = process.argv.slice(2);
    const config = await parseConfig();
    const target = await getTarget(path.resolve(config.FilesPath));
    console.log(`Sending: "${target.filePath}", "${target.quote}"`);
    if (args.length > 0 && args[0] === '--dry-run') {
        return;
    }
    await twitterPost(config.Twitter, target);
}

main();