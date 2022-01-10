// Basis Types
let id: number = 5
let company: string = 'Type Media'
let inPublished: boolean = true
console.log("Hello World")


let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true,'hello']

//Tuple
let person: [number, string, boolean] = [1,'Book', true]
//Tuple Array
let employee: [number, string] []
employee = [
    [1, 'C#'],
    [2, 'TS'],
    [3, 'NG']
]
//Union
let pid: string | number 
pid = '22'

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Left)

//functions
function addNum (x: number, y: number): number{
    return x + y
}
console.log(addNum(5,5))