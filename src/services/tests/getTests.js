const base = "http://localhost:5005/api/test"

const getTestsByCategory = async (category) => {
    const result = await fetch(base + `/category/${category}`)
    const data = await result.json()
    return data
}

const getTestInfo = async (id) => {
    const result = await fetch(base + `/info/${id}`)
    const data = await result.json()
    return data
}

export { getTestsByCategory, getTestInfo }