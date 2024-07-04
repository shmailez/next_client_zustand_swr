"use client"
import Posts from "@/components/Posts"
import { getAllPost } from "@/services/getPosts"
import { useEffect, useState } from "react"

const Blog = () => {

    const [posts, setPosts] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        getAllPost()
        .then(setPosts).finally(() => setLoad(false))
        
    }, [])

    return <>
        <h1>Blog</h1>
        {load ? (<h1>loadinger</h1>) : (
            <Posts posts={posts}/>
        )}
        
    </>
}

export default Blog