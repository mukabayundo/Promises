import { fetchPosts } from "./API.js";

import saveToLocal from "./torage.js";

function initApp() {

  fetchPosts()

    .then((posts) => {

      const top5Posts = posts.slice(0, 5);

      top5Posts.forEach((post, index) => {
        console.log(`Post Number : ${index + 1}`);
        console.log(`Title       : ${post.title}`);
        console.log(`Body        : ${post.body}`);
        
      });

      saveToLocal(top5Posts);

    });

}

// Execute the app
initApp();        