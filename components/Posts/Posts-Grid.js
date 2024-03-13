



const PostsGrid = (props) => {

    const { posts } = props;
  return (
    <ul>
        {posts.map( (post) => <PostItem post={post}  />)}
    </ul>
  )
}

export default PostsGrid