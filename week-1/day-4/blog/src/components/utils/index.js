const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

   const firstTenPosts = data.slice(0, 10); 


  const enrichedPosts = firstTenPosts.map((post) => ({
    ...post,
    author: `Author ${post.userId}`,
    date: new Date().toLocaleDateString(),
    thumbnail: `https://picsum.photos/id/${post.id}/600/300`,
  }));

  return enrichedPosts;
};

const fetchPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    console.log(data);
  
    const enrichedPosts = {
      ...data,
      author: `Author ${data.userId}`,
      date: new Date().toLocaleDateString(),
      thumbnail: `https://picsum.photos/id/${data.id}/600/300`,
    };
    console.log(enrichedPosts);
    return enrichedPosts;
  };

export { fetchPosts , fetchPost };