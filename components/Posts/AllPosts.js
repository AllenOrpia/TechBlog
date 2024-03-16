
import PostsGrid from "./Posts-Grid"

const AllPosts = (props) => {
  return (
    <section className="container mx-auto">
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts}/>
    </section>
  )
}

export default AllPosts