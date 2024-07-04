"use client"
import PostSearch from "@/components/PostSearch"
import Posts from "@/components/Posts"
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

    const [posts, loading, getAllPost] = UsePost(state => 
        [state.posts, state.loading, state.getAllPost],
        shallow
    )

    useEffect(() => {
        getAllPost()
    }, [getAllPost])

    return <>
        <h1>Blog Page</h1>
        {/* <PostSearch onSearch={setPosts}/> */}
        <PostSearch/>
        {loading ? (<h1>loadinger</h1>) : (
            <Posts posts={posts}/>
        )}
        
    </>
}