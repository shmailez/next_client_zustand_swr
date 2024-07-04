'use client'

import { getSearchPost } from "@/services/getPosts"
import { UsePost } from "@/store"
import { useState } from "react"

export default function PostSearch() {
    const [search, setSearch] = useState('')
    const getSearchPost = UsePost(state => state.getSearchPost)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const posts = await getSearchPost(search)

        await getSearchPost(search)

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