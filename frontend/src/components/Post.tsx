import { Card } from "react-bootstrap";
import { IPost } from "../types";
import { Link } from "react-router-dom";
import PostLikeButton from "./PostLikeButton";

interface PostProps {
  post: IPost;
}

export default function Post({ post }: PostProps) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/posts/${post._id}`}>
        <Card.Title as="div">
          <strong>{post.title}</strong>
        </Card.Title>
      </Link>
      <Card.Body>
        <Card.Text as="p">{post.content}</Card.Text>
      </Card.Body>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {post.likes} Likes
        <div>
          <PostLikeButton />
        </div>
      </div>
    </Card>
  );
}
