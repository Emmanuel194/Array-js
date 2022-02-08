const alunos = [
  {nome: 'joao', nota: 7.3, bosista: false},
  {nome: 'maria', nota: 9.2, bosista: true},
  {nome: 'pedro', nota: 9.8, bosista: false},
  {nome: 'ana', nota: 8.7, bosista: true},
]
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log(acumulador,atual)
  return acumulador + atual
})

console.log(resultados)