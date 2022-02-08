const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // esse metodo 'pop' remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen') // esse metodo 'push' adiciona um novo elemento no array
console.log(pilotos) 

pilotos.shift() // esse metodo 'shift' ele remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('hamilton') // esse metodo 'unshift' adicona um elemento na primeira posição do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// primeiro adicionar
pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)


// remover elementos
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos01 = pilotos.splice(2) // novo array
console.log(algunsPilotos01)

const algunsPilotos02 = pilotos.splice(1, 4) // ele gera um novo array com uma parte do array 
console.log(algunsPilotos02)