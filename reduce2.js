const aluno = [
  {nome: 'joao', nota: 7.3, bosista: false},
  {nome: 'maria', nota: 9.2, bosista: true},
  {nome: 'pedro', nota: 9.8, bosista: false},
  {nome: 'ana', nota: 8.7, bosista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(aluno.map(a => a.bosista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bosista?
const algumBolsista = (resultado, bolsistas) => resultado || bolsistas
console.log(aluno.map(a => a.bolsista).reduce(algumBolsista))