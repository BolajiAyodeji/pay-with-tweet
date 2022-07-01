import { Client } from "twitter-api-sdk";

const client = new Client(process.env.TW_BEARER_TOKEN as string);
const clTwitterId = process.env.CL_TWITTER_ID as string;

interface tweetUsers {
  id: string;
  username: string;
  name: string;
}

async function getUserTweets() {
  const mentions = await client.tweets.usersIdMentions(clTwitterId, {
    // start_time: "",
    // end_time: "",
    max_results: 10,
    "tweet.fields": ["author_id", "id", "created_at", "text"],
    expansions: ["author_id"],
    "user.fields": ["id", "username", "name"],
  });

  const tweets = mentions.data || [];
  const users = mentions.includes?.users || [];
  console.log("TWEETS AND USERS ---", tweets, users);

  const usersData: tweetUsers[] = [];
  tweets.forEach((tweet) => {
    const user = users.find((u) => u.id === tweet.author_id);
    if (user) {
      usersData.push({
        id: user.id,
        username: user.username,
        name: user.name,
      });
    }
  });
  console.log("MERGED TWEETS AND USERS ---", usersData);
  return tweets;
}

export default getUserTweets;
