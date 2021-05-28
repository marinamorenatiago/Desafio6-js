const sobre = [
    {
        nome: "Marina",
        idade: 21,
        hobbie: "ler"
    }
]

console.log(sobre)

sobre.profissao = "estudante"

console.log(sobre)

delete sobre.profissao
console.log(sobre)

const cadastro = [
    {
        nome: "Hermione",
        idade: 18,
        telefone: 9-8790-9098,
        amigos: ["Ron", "Harry", "Gina", "Luna"]
    },
    {
        nome: "Harry",
        idade: 17,
        telefone: 9-9089-7654,
        amigos: ["Ron", "Hermione", "Neville", "Luna"]
    },
    {
        nome: "Ron",
        idade: 18,
        telefone: 9-9530-9282,
        amigos: ["Harry", "Dino", "Neville", "Simas"]
    },
    {
        nome: "Hagrid",
        idade: 69,
        telefone: 9-8765-2631,
        amigos: ["Dumbledore", "Harry", "Ron", "Hermione"]
    },
    {
        nome: "Voldemort",
        idade: 71,
        telefone: 9-8292-8263,
        amigos: ["Bellatrix", "Rabicho", "Bartô", "Lucius"]
    }
]
console.log(cadastro)

console.log(cadastro[0].amigos[0], cadastro[1].amigos[1], cadastro[2].amigos[2], cadastro[3].amigos[3], cadastro[4].amigos[0])
