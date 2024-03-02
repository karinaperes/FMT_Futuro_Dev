function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userInfo = {
                nome: "Karina Peres",
                idade: 44,
                email: "email@email.com",
            };
            resolve(userInfo)
            reject("Algo de errado aconteceu")
        }, 2000)
    })
}

async function displayUserInfo() {

    console.log("As informações do usuário são: ")

    try {
        const userInfo = await getUserInfo()

        console.log(`Nome: ${userInfo.nome}`)
        console.log(`Idade: ${userInfo.idade}`)
        console.log(`Email: ${userInfo.email}`)

    }
    catch (erro) {
        console.log(erro)
    }
}

displayUserInfo()