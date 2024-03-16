import PostsGrid from "../Posts/Posts-Grid"



const FeaturedPosts = (props) => {
  return (
    <section className="container mx-auto">
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default FeaturedPosts