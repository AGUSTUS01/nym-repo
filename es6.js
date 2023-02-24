// array destructuring and object destructuring
const bankai = { 
    renji: 'zabimaru',
    ichigo: 'tensa zangetsu',
    hitsugaya: 'hyorinmaru',
    shinsui:  'katen kyokotsu',
    others: {
        ikkaku: 'hozukimaru',
        aizen: 'kyoka sigetsu',
        byakuya: 'senbonzakura'
    }
    
}

const {renji, shinsui, hitsugaya, ichigo, others: {aizen, byakuya, ikkaku}} = bankai;
console.log(renji)
console.log(ichigo)
console.log(hitsugaya)
console.log(shinsui)
console.log(ikkaku)
console.log(byakuya)
console.log(aizen)

//  array destructuring

bleach = ['ichigo', 'rukia',' ikkaku', 'kenpachi', 'gin ichimaru', 'tosen', 'yamamoto', 'kira', 'hitsugaya', 'matsumoto', 'nanao', 'mayuri', 'nemu', 'ukitake', 'shinsui', 'soi fo', 'komamura', 'amagai', 'byakuya', 'unohana', 'aizen', 'hinamori', 'hanataro', 'urahara', 'ururu', 'jinta', 'yourichi', 'ishida uryu', 'sado yazutora', 'inoue orihime', 'ibasa', 'isshin', 'yuzu', 'karin', 'tatsuki', 'ulqiora', 'stark', 'grimmjow', 'yammy', 'mabashi', 'kariya', 'kon', 'lirin', 'kurodo', 'noba', 'chappy', 'ganju', 'kibune']
console.log(bleach.length)
const [len, , , , , , , , , , , , , , lenn, , , ,renn, ...rest] = bleach
console.log(lenn)
console.log(renn)
console.log(len)
console.log(rest)
mod_souls ={
    lirin: 'illusion',
    noba: 'alt dimension',
    kurodo: ['renji', 'ichigo', 'mabashi']
}
const {kurodo: [lanji, cichigo, mibashi]} = mod_souls
console.log(lanji)
console.log(cichigo)
//  spread operator

ids = [101, 102, 103, 104]
//  extract and copy 
newid = [...ids] 
console.log(newid)
console.log(ids)
//   merge 
a = [105, 106, 107]
b = [108, 109, 110]
c = [...a, ...b]
console.log(c)
//  extend 
newid = [...c, 111, 112, 113]
console.log(newid)