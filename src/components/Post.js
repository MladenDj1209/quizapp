
const Post = (props) => {
  const post = props.post;
  return (
    <>
    <h2>{post.id}: {post.title}</h2>
    <p>{post.body}</p>
    </>
  )
}

export default Post;