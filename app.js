const cardArray = [
    {
        name: 'fries',
        img:  'assets/fries.jpg'
    },

    {
        name: 'burger',
        img: 'assets/burger.png'
    },

    {
        name: 'hot_dog',
        img: 'assets/hot dog.jpg'
    },

    {
        name: 'ice_cream',
        img: 'assets/ice cream.jpg'
    },

    {
        name: 'milkshake',
        img: 'assets/milkshake.jpg'
    },

    {
        name: 'pizza',
        img: 'assets/pizza.png'
    },

    {
        name: 'fries',
        img:  'assets/fries.jpg'
    },

    {
        name: 'burger',
        img: 'assets/burger.png'
    },

    {
        name: 'hot_dog',
        img: 'assets/hot dog.jpg'
    },

    {
        name: 'ice_cream',
        img: 'assets/ice cream.jpg'
    },

    {
        name: 'milkshake',
        img: 'assets/milkshake.jpg'
    },

    {
        name: 'pizza',
        img: 'assets/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

// console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen= []
let cardsChosenId=[]
const cardsWon = []

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
       const card =  document.createElement('img')
       card.setAttribute('src','assets/blank_2.jpg')
       card.setAttribute('data-id',i)
       card.addEventListener('click',flipcard)
       card.style.width = '170px'; 
        card.style.height = '170px';
       grid.appendChild(card)
    }
}

gridDisplay.style.display = 'grid';
gridDisplay.style.gridTemplateColumns = 'repeat(4, 1fr)';



function checkForMatch(){

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    // console.log(cards)
    // console.log('check for match')

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'assets/blank_2.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/blank_2.jpg')
        alert('You have clicked the same image! ')
    }

    else if(cardsChosen[0] === cardsChosen[1])
    {
        // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'assets/white.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/white.jpg')
        cards[optionOneId].removeEventListener('click',flipcard)
        cards[optionTwoId].removeEventListener('click',flipcard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'assets/blank_2.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/blank_2.jpg  ')
        // alert('Sorry try again')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenId=[]
    
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'CONGRATULATIONS You found them all !'
        resultDisplay.style.setProperty("color", "yellow")
    }
}

function flipcard(){
    // console.log(cardArray)
    let cardId= this.getAttribute('data-id')
    // console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    // console.log(cardsChosen)
    // console.log(cardsChosenIds)
    // console.log('clicked',cardId)
    // console.log(cardsChosen)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
