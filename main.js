let message = document.querySelector("#message")
let sum= document.querySelector("#sum")
let shownCards = document.querySelector("#cards")
let cards =[]
let cardsSum=0
let messageEl
let isAlive = true
let hasBlackjack = false

function getRandomNumber(){
    let number = Math.floor(Math.random()*13)+1
    if(number>=10){
        return 10
    } else if (number==1){
        return 11
    }else{
        return number
    }
}


function startGame(){
    isAlive= true
    cards[0]=getRandomNumber()
    cards[1]=getRandomNumber()
    cardsSum= cards[0]+cards[1]
    renderGame()
    
}

function drawNewCard(){
    if(isAlive===true && hasBlackjack===false && cards.length>0){
        let newCard=getRandomNumber()
        cards.push(newCard)
        cardsSum+=newCard
        renderGame()
    }
}
function renderGame(){
    // These are Hard Coded values 
    // shownCards.textContent+=cards[0] + " " + cards[1]
    // cardsSum= cards[0]+cards[1]
    // sum.textContent+=cardsSum
    

    shownCards.textContent="Cards: "
    // Updating cards using loop

    for (let card = 0; card<cards.length;card++){
        shownCards.textContent+=cards[card]+ " "
        // cardsSum+=cards[card]
    }
    sum.textContent=`Sum: ${cardsSum}`

    if(cardsSum<=20){
        messageEl=`Sum is ${cardsSum}. Do You want to draw a New Card ? 😀`
    } 
    else if(cardsSum==21){
        hasBlackjack=true
        messageEl=`Byooo!!!! You've got Blackjack.... 🤩`
    }
    else{
        isAlive= false
        messageEl=`Sum is ${cardsSum} You've lost ... 😭`
    }
    message.textContent= messageEl
    // cards=[]
}
