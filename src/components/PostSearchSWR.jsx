'use client'

import { getSearchPost } from "@/services/getPosts"
import { UsePost } from "@/store"
import { useState } from "react"
import useSWR from "swr"

export default function PostSearchSWR() {
    const {mutate} = useSWR('posts')
    const [search, setSearch] = useState('')
    // const getSearchPost = UsePost(state => state.getSearchPost)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const posts = await getSearchPost(search)

        const posts = await getSearchPost(search)

        mutate(posts)

        // onSearch(posts)
    }

    return <>
    <form onSubmit={handleSubmit}>
        <input 
        type="search"
        placeholder="search"
        value={search}
        onChange={
        (e) => setSearch(e.target.value)
        } />
        <button type="submit">search</button>
    </form>
    </>
}