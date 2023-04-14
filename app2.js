const cardlist=[];
let counter = 0;
const card_btn = document.getElementById('drawCard');
const body = document.querySelector('body');
axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => {
return res.data.deck_id
})
.then(res => {
    axios.get(`https://deckofcardsapi.com/api/deck/${res}/draw/?count=52`)
    .then(res=>{
        for(card of res.data.cards) {

        cardlist.push(card)
        }
})})
card_btn.addEventListener('click',drawNextCard)

function drawNextCard(){
    if(counter <= 51){
const newimg = document.createElement('img')
newimg.src=cardlist[counter].image;
counter++;
newimg.classList.add('center')
newimg.style.transform = 'rotate(-30deg)';
const rotated = Math.floor((Math.random()*100)/2)
newimg.style.transform = `rotate(${rotated}deg)`;
body.appendChild(newimg)
}
}


class Pokemon {
    constructor(id){
        this.id = id;
        this.t=[];
    }
    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        this.name=res.data.name
        for(let type of res.data.types){
            this.t.push(type.type.name)
        }
    }
}