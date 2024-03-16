import PostHeader from "./PostHeader";
import ReactMarkdown from 'react-markdown';




const dummyPost = {
    slug: 'getting-started-with-nextjs',
    title: 'Gettin Started',
    image: 'getting-started-nextjs.png',
    date: '2022-02-10',
    content: '# This is a first post'
}

const PostContent = () => {
    const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`
    return (
        <article className="container mx-auto">
            <PostHeader
                title={dummyPost.title}
                image={imagePath}


            />
            <hr className="mt-3 "/>
            <ReactMarkdown>
                {dummyPost.content}

            </ReactMarkdown>
        </article>
    )
}

export default PostContent