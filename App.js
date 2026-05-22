
import { fetchPosts } from "./api.js";

import saveToLocal from "./storage.js";

async function initApp() {
  const posts = await fetchPosts();

  const topFivePosts = posts.slice(0, 5);

  topFivePosts.forEach((post, index) => {
    console.log(`Post #${index + 1}`);
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log("---------------------------");
  });

  await saveToLocal(topFivePosts);
}

initApp();