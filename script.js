document.addEventListener('DOMContentLoaded', () => {


//This array is what establishes the card tiles that are used in the game//
const tileArray = [
    {
        name: 'axe',
        img: 'assets/img/axe.png'
    },
    {
        name: 'axe',
        img: 'assets/img/axe.png'
    },
    {
        name: 'halberd',
        img: 'assets/img/halberd.png'
    },
    {
        name: 'halberd',
        img: 'assets/img/halberd.png'
    },
    {
        name: 'hammer',
        img: 'assets/img/hammer.png'
    },
    {
        name: 'hammer',
        img: 'assets/img/hammer.png'
    },
    {
        name: 'mace',
        img: 'assets/img/mace.png'
    },
    {
        name: 'mace',
        img: 'assets/img/mace.png'
    },
    {
        name: 'spear',
        img: 'assets/img/spear.png'
    },
    {
        name: 'spear',
        img: 'assets/img/spear.png'
    },
    {
        name: 'sword',
        img: 'assets/img/sword.png'
    },
    {
        name: 'sword',
        img: 'assets/img/sword.png'
    }
   
]    



const tiles = document.querySelector('.tiles');
let tilesPicked = [];
let tilesPickedId = [];
let tilesDefeated = [];


function generateBoard() {
    for (let i = 0; i < tileArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/img/dragon.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', revealCard);
        tiles.appendChild(card);
    }
}

function revealCard() {
    if (tilesPicked.length < 2) {
        let tileId = this.getAttribute('data-id');
        tilesPicked.push(tileArray[tileId].name);
        tilesPickedId.push(tileId);
        this.setAttribute('src', tileArray[tileId].img);
        if (tilesPicked.length === 2) {
            setTimeout(isCorrect, 500)
        }
    }
}

function isCorrect() {
    let cards = document.querySelectorAll('img');
    const choiceOneId = tilesPickedId[0];
    const choiceTwoId = tilesPickedId[1];
    if (tilesPicked[0] === tilesPicked[1]) {
        alert('You have got a match!');
        cards[choiceOneId].setAttribute('src', 'assets/img/gold.png');
        cards[choiceTwoId].setAttribute('src', 'assets/img/gold.png');
        tilesDefeated.push(tilesPicked);
    } else {
        cards[choiceOneId].setAttribute('src', 'assets/img/dragon.png');
        cards[choiceTwoId].setAttribute('src', 'assets/img/dragon.png');
        alert('Sorry, try again')
    }
    tilesPicked = [];
    tilesPickedId = [];
    earnedScore.textContent = ((tilesDefeated.length) * 100);
    if (tilesDefeated.length === tileArray.length/2) {
        earnedScore.textContent = 'You have won!'
    }
}

generateBoard();































})
