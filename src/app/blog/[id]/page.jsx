import Link from "next/link";

async function getPost(id) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return responce.json()
}

export async function generateMetadata({params: {id}}) {
    const post = await getPost(id)

    return {
        title: post.title
    }
}


export default async function Post({params: {id}}) {
    const post = await getPost(id)

    return  <>
        <div className="blog_wrapper">
        <Link className="go_back-button" href="/blog">Go Back to Blog</Link>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
        </div>
               
            </>
}