import { TwitterApi } from 'twitter-api-v2'
import { TargetSend, TwitterAuth } from '../types'

export async function twitterPost(auth: TwitterAuth, target: TargetSend) {
    try {
        const client = new TwitterApi(auth);
        const mediaId = target.filePath ?
            await client.v1.uploadMedia(target.filePath) : null;
        if (mediaId && target.quote) {
            await client.v2.tweet({
                text: target.quote,
                media: { media_ids: [mediaId] }
            });
        }
        else if (mediaId && !target.quote) {
            await client.v2.tweet({
                media: { media_ids: [mediaId] }
            });
        }
        else {
            await client.v2.tweet(target.quote ?? "");
        }
    } catch(error) {
        console.error(`Twitter send failed: ${error}`);
    }
}