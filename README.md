# daily-poster
A daily poster bot that takes a given folder of image folders and quotes
and makes a random post to twitter.

## Features
* **Images**: Posts a random image from the image folders
* **Quotes**: Posts a random quote from the quotes.yaml file in the image folders

## Setup
### 1. Clone and Configure
```shell
git clone https://github.com/nakedmcse/daily-poster.git
cd daily-poster
npm install
```
Edit `config.yaml` with your twitter API credentials and files directory location:
```yaml
# Twitter Auth
Twitter:
  appKey: your-twitter-appkey
  appSecret: your-twitter-appsecret
  accessToken: your-twitter-accesstoken
  accessSecret: your-twitter-accesssecret

# Files path
FilesPath: files
```

### 2. Add Images and Quotes
In the `FilesPath` create folders for each of your characters, and in those folders 
copy in the image files you want to use.  The image posted will be randomly chosen.

You can also add an optional `quotes.yaml` file in each folder containing quotes that
are appropriate to the character.  If found a random chosen quote will be used with 
the image.

```yaml
# Victorique Quotes
- I'm Bored
- You were chosen as a single fragment with which I will fill up my boredom
- Seeing you huffing and puffing in agony, your out-of-shape thighs straining as you plod up and down the stairs for me... is one of my great pleasures!
- My five senses are on high alert, gathering fragments of chaos from the world around me. The fountain of knowledge inside me toys with them out of sheer boredom, reconstructing them
```

### 3. Run Locally
```shell
# Test your directory to see what would be posted
npm run dryrun
```
```shell
# Actually Post 
npm run post
```
