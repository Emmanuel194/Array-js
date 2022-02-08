Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}
const produto = [
  {nome: 'Nootebook', preco: 2499, fragil: true},
  {nome: 'ipad pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caros = produtos => produtos.preco >= 500
const fragils = produtos => produtos.fragil

console.log(produto.filter2(caros).filter2(fragils))
