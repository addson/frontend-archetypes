
/* 18 Objetos */
console.log("");

//forma 1 de criar um objeto
//simplesmente abrindo e fechando chaves
//atribuição das propriedades com nome:valor
var aluno = {nome:"Addson", nota1:10, nota2:8.5}
//acessando propriedades
console.log("acesso a propriedade nome: " + aluno.nome);
console.log("acesso a propriedade nome: " + aluno["nome"]);
//imprimindo objeto original
console.log(aluno);
//atribuindo propriedade dinamica ao objeto
var novaProp = "idade";
aluno[novaProp] = 45;
//imprimindo novo objeto
console.log(aluno);

//forma 1 de criar um objeto adicionando um método
//definição novo objeto adicionando métodos ao objeto
var aluno = {   nome: "Addson", 
                nota1: 10, 
                nota2: 8.5, 
                media: function media() {
                    return (this.nota1 + this.nota2) / 2;
                }
}
//imprimindo novo objeto
console.log(aluno);
//chamando a nova função do objeto
console.log("Media: " + aluno.media());

//forma 2 de criar um objeto com construtor
//NÃO necessario usar o new
//criamos uma função possui o return
function criarAluno(nome, n1, n2) {
    return {
        nome: nome, 
        nota1: n1, 
        nota2: n2, 
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}
//criando 3 alunos
var turma = [
    criarAluno("Addson", 8, 9),
    criarAluno("Claudia", 9, 10),
    criarAluno("Lis", 10, 10)
];
//imprimindo todos alunos do array
turma.forEach(element => {
    console.log(element);
});


//forma 3 (mais original) de criar um objeto com construtor
//definição novo objeto com construtor - necessario usar o new
function Aluno(nome, n1, n2) {
        
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2; 
        
        this.media = function media() {
            return (this.nota1 + this.nota2) / 2;
    }
}
//chamando esse novo objeto
var aluno =  new Aluno("Addson", 10, 8);
console.log(aluno.nome + " - Média: " + aluno.media());
console.log();







