import AllPosts from "../../components/Posts/AllPosts"
import { getAllPosts } from "../../lib/posts-util"


const AllPostsPage = (props) => {
    return (
        <AllPosts posts={props.posts} />
    )
}


export function getStaticProps() {
    const AllPosts = getAllPosts();

    return {
        props: {
            posts: AllPosts
        }
    }
}


export default AllPostsPage