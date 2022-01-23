const stack: Array<number> = []

// Puedes remplazar los elementos del final del stack así
stack.push(7)
stack.push(7)
stack.pop()
stack.push(stack.pop() * 3)
stack.push(40)
stack.push(stack.pop() / 2)

// El termino para referirse al accesso del elemento superior de el stack es el "peek"
// Este no cambia el stack al momento de acceder a él

// Ejemplo de estack con cambios en el estado

const stackExample: Array<number> = []

stackExample.push(1)
stackExample.push(2)
stackExample.push(3)
stackExample.push(4)
stackExample.push(5)
//? [1,2,3,4,5]

stack.push(stack.pop() + stack.pop()) // [1,2,3,9]
stack.push(stack.pop() * stack.pop()) // [1,2,27]
stack.push(stack.pop() + stack.pop()) // [1,29]
stack.push(stack.pop() * stack.pop()) // [29]
