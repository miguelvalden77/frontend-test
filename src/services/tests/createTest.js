const base = "http://localhost:5005/api/test"

const createTestService = async (test) => {
    const result = await fetch(base + "/create",
        {
            method: "POST",
            body: JSON.stringify(test),
            headers: { "Content-type": "application/json" }
        })
    const data = await result.json()
    console.log(data)
}

export { createTestService }