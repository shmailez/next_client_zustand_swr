export const getAllPost = async () => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    if(!responce.ok) {
        throw new Error('EROORO')
    }

    return await responce.json()
}

export const getSearchPost = async (search) => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)

    if(!responce.ok) {
        throw new Error('EROORO')
    }

    return responce.json()
}