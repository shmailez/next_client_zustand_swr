import { getAllPost, getSearchPost } from "@/services/getPosts";
import { create } from "zustand";

export const UsePost = create((set) => ({
    posts: [],
    loading: false,
    getAllPost: async () => {
        set({loading: true})
        const posts = await getAllPost()
        set({posts, loading: false})
    },
    getSearchPost: async (search) => {
        set({loading: true})
        const posts = await getSearchPost(search)
        set({posts, loading: false})
    }
}))