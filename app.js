let baseUrl= 'http://www.numbersapi.com/'
factsArr=[]
factsArr2=[]
for (let i = 0; i < 4; i++) {
    
let random_num = Math.round(Math.random()*100)
factsArr.push(
axios.get(baseUrl+random_num))
}

Promise.all(factsArr)
.then(factList=>{
    for (res of factList){
        const newLi = document.createElement('li')
        newLi.innerText = res.data
        console.log(res.data)
        
const ul = document.getElementById('list1')
        ul.appendChild(newLi)
    }
})



let random_num2 = Math.round(Math.random()*100)
for (let i = 0; i < 4; i++) {
    factsArr2.push(
    axios.get(baseUrl+random_num2))
    }
    
    Promise.all(factsArr2)
    .then(factList2=>{
        for (res of factList2){
            const newLi = document.createElement('li')
            newLi.innerText = res.data
            console.log(res.data)
            
    const ul2 = document.getElementById('list2')
            ul2.appendChild(newLi)
        }
    })
    
    