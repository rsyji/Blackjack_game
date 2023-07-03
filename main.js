let message = document.querySelector("#message")
let sum= document.querySelector("#sum")
let shownCards = document.querySelector("#cards")
let cards =[Math.floor(Math.random()*10)+1,Math.floor(Math.random()*10)+1]
let cardsSum=0
let messageEl


function startGame(){
    renderGame()
}

function drawNewCard(){
    cards.push(Math.floor(Math.random()*10)+1)
    renderGame()
}
function renderGame(){
    // These are Hard Coded values 
    // shownCards.textContent+=cards[0] + " " + cards[1]
    // cardsSum= cards[0]+cards[1]
    // sum.textContent+=cardsSum

    // Updating cards using loop

    for (let card = 0; card<cards.length;card++){
        shownCards.textContent+=" " + cards[card]
        cardsSum+=cards[card]
    }
    sum.textContent=`Sum: ${cardsSum}`

    if(cardsSum<=20){
        messageEl=`Sum is ${cardsSum}. Do You want to draw a New Card ? 😀`
        message.textContent= messageEl
    } 
    else if(cardsSum==21){
        messageEl=`Byooo!!!! You've got Blackjack.... 🤩`
        message.textContent=messageEl
    }
    else{
        messageEl=`Sum is ${cardsSum} You've lost ... 😭`
        message.textContent=messageEl
    }

    cards=[]
}
