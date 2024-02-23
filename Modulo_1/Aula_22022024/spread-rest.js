// const aluno = {
//     nome: "Bruno",
//     turma: "Trip",
//     email: "email@email.com"
// }

// const aluno2 = aluno // clona e altera tanto o aluno2 quando o aluno 
// aluno2.nome = "Ricardo"

// const aluno2 = {...aluno}
// aluno2.nome = "Ricardo"

// // let aluno3 = {...aluno, nome: "Alex"}

// console.log(aluno)
// console.log(aluno2)

const frutas = ["Laranja", "Maçã", "Acerola", "Abacaxi"]
const frutas2 = ["Morango", "Pessego", "Pera"]

const frutas3 = [...frutas, ...frutas2] // os 3 pontos é o spread
frutas3.push("Manga")

console.log(frutas)
console.log(frutas3)