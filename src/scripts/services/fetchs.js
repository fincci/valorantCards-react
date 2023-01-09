
const fetchDB = async (url) => {
    const response = await fetch(url)
    return await response.json()
}

export { fetchDB }