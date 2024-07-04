import Link from "next/link"

import { getAllPost } from "@/services/getPosts"
import { UsePost } from "@/store"
import { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"
import useSWR from "swr"

export default function PostsSWR() {

    const {data: posts, isLoading} = useSWR('posts', getAllPost)

    // const [posts, loading, getAllPost] = UsePost(state => 
    //     [state.posts, state.loading, state.getAllPost],
    //     shallow
    // )

    // useEffect(() => {
    //     getAllPost()
    // }, [getAllPost])
    
    return <>
        {isLoading? (<h1>loadinger</h1>) : (
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