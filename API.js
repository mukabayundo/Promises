function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      return [];
    });
}

export { fetchPosts };