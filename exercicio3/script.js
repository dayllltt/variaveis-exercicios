const nome= prompt("Informe o seu nome completo")
const data= prompt("Data de nascimento")
let endereco= prompt("Informe o endereço")
const cpf= Number(prompt("informe o cpf"))
let Escolaridade= ("nivel de escolaridade")
const cnh= prompt("Possui cnh?")
let filhes= Number(prompt("Quantos filhos você tem?"))
let cargo= prompt ("cargo atual?")
let salario= Number(prompt("informe o seu salario"))
let comissão= confirm("Você recebe comissão?")
let anoadmissao= Number(prompt("Informe o ano de admissao"))

console.log(typeof nome, typeof data, typeof endereco, typeof cpf, typeof Escolaridade, typeof cnh, typeof filhes, typeof cargo, typeof salario, typeof comissão, typeof anoadmissao)
console.log("Seu nome completo é ", nome , "nasceu em" , data, "seu endereço é", endereco, "cpf:", cpf, "qual sua escolaridade", Escolaridade, "tem cnh?", cnh, "quantos filhos vc tem?", filhes,"qual o seu cargo?", cargo, "qual o seu salario", salario, "voce recebe comissao?", comissão,"qual o seu ano de admissao?", anoadmissao )


