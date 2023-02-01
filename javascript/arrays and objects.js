colors = ["red", "blue", "orange", "green"]
console.log(colors)
colors.push('yellow');
console.log(colors)
console.log(colors[3]);
console.log(colors.slice(1,5));
console.log(colors.length);
console.log(colors.indexOf('orange'));
console.log(colors.indexOf('blue'));
// objects 
// they can represent in two ways
// dot notation and bracket notation
let person = {
name: "rukia kuchiki",
hair: "black",
boyfrnd: "ichigo"
}
console.log(person.name)
console.log(person.hair)
console.log(person['boyfrnd']) 

 person2 = (name, shirt) =>{
    const parsan = {
        name: name,
        shirt: shirt
    }
    const intro = `hi my name is ${parsan.name} and  the color of shirt is ${parsan.shirt}`
     return intro
 }
 console.log(person2('nayeem', 'black'))
 console.log(person2('naruto', 'orange'))
 bleach = (name, jutsu) => {
         details = {
         name: name,
         jutsu: jutsu,
         assests: 1000000,
         liabilities: 500000,
         networth:  function  () {
             return this.assests - this.liabilities
         }
     }
     const sentence = ` orewa ${details.name} and my power is ${details.jutsu} and my networth is $${details.networth()} USD`
    return sentence
}
console.log(bleach('ichigo', 'bankai'))
console.log(bleach('naruto', 'rasengan'))



