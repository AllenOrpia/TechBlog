
import Image from "next/image";
import Link from "next/link";

const PostItem = (props) => {



    const { title, image, excerpt, date, slug } = props.post;
    
    const linkPath = `/posts/${slug}`
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`
    return (
        <li className="">
            <Link href={linkPath}>
                <div>
                    <Image src={imagePath} alt={title} width={300} height={200}  />
                </div>
                <div>
                    <h3>{title}</h3>
                    <time>
                        {formattedDate}
                    </time>
                    <p>{excerpt}</p>
                </div>

            </Link>
        </li>
    )
}

export default PostItem