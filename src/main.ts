import { getTarget } from './targets'
import { twitterPost } from './processor/twitter';
import { blueskyPost } from './processor/bluesky';
import { threadsPost } from './processor/threads';
import * as path from 'path';
import { parseConfig } from './config';

async function main() {
    const args = process.argv.slice(2);
    const config = await parseConfig();
    const target = await getTarget(path.resolve(config.FilesPath));
    console.log(`Sending: "${target.filePath}", "${target.quote}"`);
    if (args.length > 0 && args[0] === '--dry-run') {
        return;
    }
    if(config.Twitter) await twitterPost(config.Twitter, target);
    if(config.Bluesky) await blueskyPost(config.Bluesky, target);
    if(config.Threads) await threadsPost(config.Threads, target);
}

main();