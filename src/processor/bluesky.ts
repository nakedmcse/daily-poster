import { AtpAgent } from '@atproto/api';
import { TargetSend, BSkyAuth } from '../types';
import { readFile } from 'fs/promises';

export async function blueskyPost(auth: BSkyAuth, target: TargetSend)  {
    try{
        const agent = new AtpAgent({ service: 'https://bsky.social' });
        await agent.login(auth);
        if (target.filePath) {
            const image = await readFile(target.filePath);
            const { data } = await agent.uploadBlob(image, { encoding: 'image/jpeg' });  //TODO: get mime type from file
            await agent.post({
                text: target.quote ?? "",
                createdAt: new Date().toISOString(),
                embed: {
                    $type: 'app.bsky.embed.images',
                    images: [
                        {
                            alt: target.quote ?? "",
                            image: data.blob
                        }
                    ]
                }
            })
        }
        else {
            await agent.post({
                text: target.quote ?? "",
                createdAt: new Date().toISOString()
            })
        }
    } catch(error) {
        console.error(`Bluesky send failed: ${error}`)
    }
}