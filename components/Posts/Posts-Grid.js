

import PostItem from "./PostItem";

const PostsGrid = (props) => {

    const { posts } = props;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map( (post) => <PostItem key={post.slug} post={post}  />)}
    </ul>
  )
}

export default PostsGrid