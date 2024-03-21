import { Fragment } from "react"
import Hero from "../components/Homepage/Hero"
import Featured from "../components/Homepage/Featured"
import { getFeaturedPosts } from '../lib/posts-util.js'



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
    console.log(featuredPosts)

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage