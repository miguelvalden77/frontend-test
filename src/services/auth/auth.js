
const base = "http://localhost:5005/api/auth"

const loginUser = async (dataForm) => {
    const result = await fetch(base + "/login",
        {
            method: "POST",
            body: JSON.stringify(dataForm),
            headers: { "Content-type": "application/json" }
        })
    const { email } = dataForm
    const { authToken, username } = await result.json()
    console.log({ authToken, email, username })
    return { authToken, email, username }
}

const registerUser = async (dataForm) => {
    const result = await fetch(base + "/signup",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataForm)
        })
    const data = await result.json()
    return data
}

export { loginUser, registerUser }