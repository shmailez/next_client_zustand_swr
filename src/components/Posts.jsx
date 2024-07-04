import Link from "next/link"

import { getAllPost } from "@/services/getPosts"
import { UsePost } from "@/store"
import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"

export default function Posts() {

    const [posts, loading, getAllPost] = UsePost(state => 
        [state.posts, state.loading, state.getAllPost],
        shallow
    )

    useEffect(() => {
        getAllPost()
    }, [getAllPost])
    
    return <>
        {loading ? (<h1>loadinger</h1>) : (
            <ul>
                {posts.map((post) => {
                    return (
                    // <li>post: {post.title}</li>
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>)
                })}
            </ul>
        )}
    </>
}