// import { getAllPost } from "@/services/getPosts"
// import Link from "next/link"

// import Blog from "@/components/Blog";

// async function getList() {
//     const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     return responce.json()
// }

// export default async function Blog() {
//     const list = await getAllPost()

//     console.log("list", list)

//     return (<><h1>Blog</h1>
//             <ul>{list.map(post => 
//                         <li key={post.id}>
//                             <Link href={`/blog/${post.id}`}>{post.title}</Link>
//                         </li>)}
//             </ul></>)
// }


"use client"
import PostsSWR from "@/components/PostSWR"
import PostSearch from "@/components/PostSearch"
import PostSearchSWR from "@/components/PostSearchSWR"
import Posts from "@/components/Posts"
import { getAllPost } from "@/services/getPosts"
import { UsePost } from "@/store"
import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"

export default function Blog() {

    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     getAllPost()
    //     .then(setPosts)
    //     .finally(() => setLoading(false)) 
    // }, [])

    // const [posts, loading, getAllPost] = UsePost(state => 
    //     [state.posts, state.loading, state.getAllPost],
    //     shallow
    // )

    // useEffect(() => {
    //     getAllPost()
    // }, [getAllPost])

    return <>
    <div className="blog_wrapper">
    <h1 >Blog Page</h1>
        {/* <PostSearch onSearch={setPosts}/> */}
        {/* <PostSearch/> */}
        <PostSearchSWR/>
        <PostsSWR/>
        {/* <Posts/> */}
        {/* {loading ? (<h1>loadinger</h1>) : (
            <Posts posts={posts}/>
        )} */}
    </div>
        
        
    </>
}

// export default function BlogPage() {
//     return<>
    
//     blod
//     <Blog/>
//     </>
// }