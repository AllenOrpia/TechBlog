import { Fragment } from "react"
import Hero from "../components/Homepage/Hero"
import Featured from "../components/Homepage/Featured"
import { getFeaturedPosts } from '../lib/posts-util'



const HomePage = (props) => {
    return (
        <Fragment >
            <Hero />
            <Featured posts={props.posts} />
        </Fragment>
    )
}


export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage