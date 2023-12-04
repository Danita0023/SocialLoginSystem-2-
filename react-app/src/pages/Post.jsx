import {posts} from "../data";
import { useLocation } from "react-router";


const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);

  // split the path in item 2 and find the port at that No.
  // and then convert to string and find the post no. from path
 
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;