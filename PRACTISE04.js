var day = 'monday'
if (day=="monday"){
    console.log('i should wake up at 6am')
}
else {
    console.log('i will wake up at 10am')
}
// boom = 'HAPPY BIRTHDAY'
// namaewa = prompt('what is your name')
// moshi = boom+ " " + namaewa
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

// const lul = () => {
//     const sentence = prompt('write here')
//     for(lee in sentence){
//         console.log(lee)
//     }
// }
// lul()

function lol(){
    console.log('laughing out loud')
}
lol()

function one1() {
    console.log('bum')
}
one1()

obj = {
    name:'nayeem',
    age: 21
}
console.log(obj.name)

let anime = 'bleach'
if ('bleach'){
    console.log('bankai hihio zabimaru')
}
else if ('naruto'){
    console.log('nande dattebayo')
}
else {
    console.log('orewa monkey d luffy')
}

    dialogues={
    ichigo: 'bankai! tensa zagetsu!',
    naruto: 'cho odema rasengan!',
    luffy: 'orewa monkey d luffy!'}

console.log(dialogues.ichigo)
console.log(dialogues.naruto)
console.log(dialogues.luffy)

names=(name1, name2, name3) =>{
    object={
        name1: name1,
        name2: name2,
        name3: function () {
            return 'toshiro-hitsugaya'
        }
    }
    const dialogue = `orewa ${object.name1}, omaewa bankai namaewa zabimaru! orewa ${object.name2}, omaewa bankai namaewa ryoman hozukimaru! orewa ${object.name3()}, omaewa bankai namaewa daiguren hyorinmaru`

    return dialogue
}
console.log(names('abarai-renji', 'madarame-ikkaku'))

let wifus = ['rukia', 'matsumoto', 'soi-fu', 'unohana']
console.log(wifus)
for (wifu of wifus)
console.log(wifu)
for (wifu in wifus)
console.log(wifu)

// line = 'kuj v yaad ni tenu, ji aaja ve maarde meinu'
// for (linn of line)
// console.log(linn)
// for(linn in line)
// console.log(linn)
// console.log(moshi)
//  break

// functions

function myFunction () {
    const sentence =  "ikkaku madarame is almost captain level shinigami "
    return sentence
}
console.log(myFunction())
// while doing the normal functions we must mention keyword function
 myFunction=()=> {
    const nation = 'america'
    return nation
 }
 console.log(myFunction())
//  Arrays
var arabic = ['saudi', 'kuwait', 'dubai', 'qatar']
arabic.push('oman')
console.log(arabic)
arabic.pop()
console.log(arabic)
arabic.shift()
console.log(arabic)
arabic.unshift('saudi')
console.log(arabic)
// objects
var arabic = {
    name: 'nayeem',
    age: 21,
    nickname: 'agustus'
}
console.log(arabic.name)

// if else
var day = "monday" 
var age = 19
if (day=='tuesday' && age==192){
    console.log('i wake up at 5am')}

    else{
        console.log('i wake at 9am')
    }
    lieutnents = ['ikkaku', 'renji', 'matsumoto', 'kira', 'izuru', 'hinamori', 'nemu', 'nanao']
console.log(lieutnents)
for (rh of lieutnents) {
    console.log(rh)
}
for (rh in lieutnents) {
    console.log(rh)
}
for (rh in lieutnents) {
    console.log (Number(rh)+1)
}
var bankai = "hozukimaru"
switch('bankai'){
    case 'hyorinmaru':
    console.log('toshiro hitsugaya');
    break;
    case 'zabimaru':
    console.log('renji abarai');
    break;
    case "hozukimaru":
    console.log('ikkaku madarame');
    break;
    default :
    console.log('len lenn lennn');
}
 let lyric = ()=> {
    const line = "befikar hogaya mein kidhar khogaya"
    let len = 0;
    for (index in line){
        console.log(Number(index)+1)
        len = index
    }
    return {result: len}

}
console.log(lyric())
//  functions + loops + objects

 let kenpachi = ()=>{
    const pathan = "jhume jo pathaan jo pathan, meri jaan mehfil hee lutt jaaye"
    let lenn = 1;
    for (srk in pathan){
        console.log(srk)
        lenn = srk
}
    return {result: lenn}
 }
 console.log(kenpachi())

//  ternary operator
var age = 21;
let msg = (age => 19)? 'then you are an adult' : 'you arent an adult';
console.log(msg)
// break
 
// functiom + loop + array
const sumArray = (numbers)=>{
    let result = 0;
    for (const number of numbers){
        console.log(number)
        result = result + number
    }
    return {result}
}
const numb = [1,2,3,4]
console.log(sumArray(numb))
//  break

const SumArray = (numbers) =>{
    let total = 0;
    for (const number of numbers){
        console.log(number)
        total = total + number
        }
        return {total} 
        
        
}
const nums = [1,2,3,4,5,6]
console.log(SumArray(nums))
// break 
// function + loops + if + array

max = (numbers)=>{
var result = 0;
for (const number of numbers ){
    if (number > result){
        result = number
    }
}
return {result}
}
console.log(max([1,2,3,4,5,6,10,181,19,111,8383]))
// break
const letterFrequency = (phrase)=>{
    console.log(phrase)
    let frequency = {}
    for (const letter of phrase){
        if (letter in frequency){
            frequency[letter]++
        }
        else{
            frequency[letter]=1
        }
        
    }
       return frequency
}
console.log(letterFrequency('lalalala soniye leja leja soniye leja leja'))

// using objects and template literals
console.log('i love coding')
var len = {
    name: 'ichigo',
    bankai: 'tensa zangetsu',
    age: 21,
    phrase: function (){
        console.log(`orewa ${this.name} da! omae zitte mamor minna`)
    }
}
len.phrase()

var power = 'kido';
 var powerr ='bankai';

if (power == 'kido'){
    console.log('shinigamis can use kido power')
}
else if (powerr == 'bankai'){
    console.log('whoever have zanpakuto can attain bankai with great spirtual powers')
}
else{
    console.log('humans can use all these powers')
}

//  functions
function myfunction (a, b){
    return a**2 + b**2
}
let assign = myfunction(2, 3)
console.log(assign)

myFunction =(a, b) => {return a**2 + b**2}
console.log(myFunction(2, 4))

var lenn = () => (console.log('lenn paat dui'))
lenn();

// ternary operator + fat arrow function
 var age = 21;
 welcome = (age == 21)?
 ()=> {console.log('zabimaru wins')}: ()=> {console.log('hozukimaru wins')};
 welcome();

 let sum = (a, b) => {
    let result = a**2 + b*2
    return result
 }
 console.log(sum(2, 4))

//  OBJECTS

const captains = {
first_div: 'yamamoto taicho -  Zanka no Tachi',
second_div: 'kyoraku taicho - Katen Kyōkotsu Karamatsu Shinjū',
third_div: 'gin ichimaru taicho - Kamishini no Yari',
fourth_div: 'unohana taicho - minazuki',
fivth_div: 'aizen taicho - Kyoka Suigetsu',
sixth_div: 'byakuya taicho - Senbonzakura Kageyoshi',
seventh_div: 'komamura taicho -  Kokujō Tengen Myoo',
eighth_div: 'tosen taicho - Enma Kōrogi',
ninth_div: 'soi fo taicho - Jakuho Raikoben',
tenth_div: 'hitsugaya taicho - daiguren hyorinmaru',
eleventh_div: 'kenpachi zaraki taicho(fuckin monster) - Yachiru Nozarashi',
twelth_div: 'mayuri taicho - Konjiki Ashisogi Jizō',
thirteenth_div: 'ukitake taicho - Sogyo no Kotowari',
zero_div: function (){
    const unknown = `ychibase the captain of zero division. he probably stronger than ${this.first_div}.`
    return unknown
}

}
console.log(`The name is ${captains.first_div}`)
console.log(`The name is ${captains.second_div}`)
console.log(`The name is ${captains.third_div}`)
console.log(`The name is ${captains.fourth_div}`)
console.log(`The name is ${captains.fivth_div}`)
console.log(`The name is ${captains.sixth_div}`)
console.log(`The name is ${captains.seventh_div}`)
console.log(`The name is ${captains.eighth_div}`)
console.log(`The name is ${captains.ninth_div}`)
console.log(`The name is ${captains.tenth_div}`)
console.log(`The name is ${captains.eleventh_div}`)
console.log(`The name is ${captains.twelth_div}`)
console.log(`The name is ${captains.thirteenth_div}`)
console.log(`The name is ${captains.zero_div()}`)
console.log(captains['first_div'])

const lekkalu = [1, 2, 3, 4, 5, 6]
for (lekka of lekkalu){
    console.log(lekka)
}
for (lekka in lekkalu){
    console.log(lekka)
}

// functions + loops + object
var lyrics = 'soniye leja leja'
soniye=()=>{
let result = 0;
for (const ren in lyrics){
    console.log(Number(ren)+1)
    result = ren
}
return {result: result}
}
console.log(soniye(lyrics))

// function + loop + array
 let sumarray = (numbers) => {
    let result = 0;
    for (number of numbers){
        console.log(number)
        result+=number;
    }
    return {result: result}
 }
 numbers = [1,2,3,4,5]
 console.log(sumarray(numbers))

//   function + loop + array + if else + object

const letterfrequency = (line) =>{
    console.log(line);
    let frequency ={}
    for (const ren of line){
        if(ren in frequency){
            frequency[ren]++
        }
        else{
            frequency[ren] = 1;
        }
    }
    return frequency
}
console.log(letterfrequency( 'laila mein laila'))
//   function + loops + array + objects + if else
 
const  wordfrequency = (line) => {
    let frequency = {}
    words = line.split(' ')
    for (const word of words){
        console.log(word)
        if (word in frequency)
        {
            frequency[word] +=1
        }
        else {frequency[word]=1
        }
    }
    console.log(words)
    return frequency
}
console.log(wordfrequency('lol what lol laila mei laila '));
console.log(wordfrequency('zingle bell zingle bell zingle on the well'))