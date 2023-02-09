var day = 'monday'
if (day=="monday"){
    console.log('i should wake up at 6am')
}
else {
    console.log('i will wake up at 10am')
}
power = ['shikai', 'bankai', 'rasengan', 'chidori', 'shakkaho', 'roar-zabimaru']
power.push('bla')
console.log(power)
power.shift('boom')
console.log(power)
console.log(power.length)
power.unshift('edoTensei')
console.log(power)
power[2] = 'lenn'
console.log(power)
power.pop()
console.log(power)
power.shift()
console.log(power)
const str = 'orewa kurosaki ichigo da! rukia kanose te nande koros'

console.log(str.slice(31));
let fruit = 'banana'
if (fruit == 'apple')
{
    console.log('heiki heiki')
}
else{
    console.log('somane')
    
}
let x=10;
let y=15;
if (x===y){
    console.log('x and y are equal')
}
else {
    console.log('x and y are not equal')
}


const howmanyletters = () => {
    const phrase = 'bankai mizunaki atewa koros'
    for (letter in phrase){
        console.log(letter)
    }
} 
howmanyletters()

const lul = () => {
    const sentence = prompt('write here')
    for(lee in sentence){
        console.log(lee)
    }
}
lul()