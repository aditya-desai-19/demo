import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const callApi = useCallback(async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      const data = [response.data];
      setPosts(data);
    } catch (error) {
      console.log({error});
    }
  }, []);

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      <h3>Posts</h3>
      {posts.map(post => 
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>)
      }
    </div>
  );
}

export default App;
