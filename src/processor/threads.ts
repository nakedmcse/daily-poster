import { ThreadsAPI } from 'threads-api';
import { TargetSend, ThreadsAuth } from '../types';

export async function threadsPost(auth: ThreadsAuth, target: TargetSend) {
    try {
       const threadsApi = new ThreadsAPI(auth);
       if (target.filePath) {
           await threadsApi.publish({
               text: target.quote ?? "",
               attachment: {
                  image: { path: target.filePath },
               }
           })
       }
       else {
           await threadsApi.publish({
               text: target.quote ?? ""
           })
       }
    } catch(error) {
        console.error(`Threads post failed: ${error}`);
    }
}