Array.prototype.map2 = function(callback){
  const newArray = [1]
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}
const carrinhos = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
]

const paraObjetos = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco

const resultadofinals = carrinhos.map2(paraObjetos).map2(apenasPrecos)
console.log(resultadofinals)