import { Link, useParams } from "react-router-dom";
import posts from "../post";

export default function PostScreen() {
  const { id: postId } = useParams();

  const post = posts.find((p) => p._id === postId);

  console.log(post);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <div>
        {post?.title}
        {post?.content}
      </div>
    </>
  );
}
