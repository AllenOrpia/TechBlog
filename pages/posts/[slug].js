import PostContent from "../../components/Posts/post-detail/PostContent";

import { getPostData, getAllPosts, getPostFiles } from '../../lib/posts-util.js';


const SinglePostPage = (props) => {
  return (
    <PostContent post={props.post}/>
  )
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export function getStaticPaths() {

  const postFilenames = getPostFiles();

  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''));


  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallbacK: false
  }
}

export default SinglePostPage