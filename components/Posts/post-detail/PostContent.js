import PostHeader from "./PostHeader";
import ReactMarkdown from 'react-markdown';






const PostContent = (props) => {
    const { post } = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className="container mx-auto">
            <PostHeader
                title={post.title}
                image={imagePath}


            />
            <hr className="mt-3 "/>
            <ReactMarkdown>
                {post.content}

            </ReactMarkdown>
        </article>
    )
}

export default PostContent