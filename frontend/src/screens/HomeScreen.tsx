import { Col, Row } from "react-bootstrap";
import posts from "../post";
import Post from "../components/Post";

export default function HomeScreen() {
  return (
    <>
      <h1>Latest Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </>
  );
}
