const mimeMap:Map<string,string> = new Map<string,string>([
    ["png","image/png"], ["jpg","image/jpeg"], ["jpeg","image/jpeg"], ["gif","image/gif"], ["webp","image/webp"]
]);

export async function getMimeType(filepath: string): Promise<string | null> {
    try {
        const ext = filepath.substring(filepath.lastIndexOf(".")+1).toLowerCase();
        return mimeMap.get(ext) ?? null;
    } catch {
        return null;
    }
}