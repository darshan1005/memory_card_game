const emojis = ["😍","😍","😜","😜","😂","😂","😎",
"😎","😡","😡","😭","😭","🥶","🥶","🤯","🤯","🍾",
"🍾","🎂","🎂","😈","😈","🤡","🤡","👻","👻","🦊",
"🦊","🐼","🐼","🦥","🦥","🐉","🐉","🦀","🦀","🦉",
"🦉","📸","📸","📭","📭","🍕","🍕","🚎","🚎","✈️","✈️"];

let shuffleEmojies = emojis.sort(()=> (Math.random() > .5)? 2:-1);

for(let i=0;i<emojis.length;i++){
    let box = document.createElement('div');

    box.classList.add('item');

    box.onclick = (e) => {
        // (1) Check if the box is already open or matched, if so, do nothing
        if (e.target.classList.contains('boxOpen') || e.target.classList.contains('boxMatch')) {
            return;
        }
        // (2) Add the boxOpen class to the clicked box
        e.target.classList.add('boxOpen');
        // (3) Get all the open boxes and store them in a variable
        let openBoxes = document.querySelectorAll('.boxOpen');
        // (4) Check if there are two open boxes
        if (openBoxes.length === 2) {
            // (5) Check if the open boxes have the same emoji
            if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                // (6) If they match, add the boxMatch class and remove the boxOpen class
                openBoxes[0].classList.add('boxMatch');
                openBoxes[1].classList.add('boxMatch');
                openBoxes[0].classList.remove('boxOpen');
                openBoxes[1].classList.remove('boxOpen');
                // (7) Check if all the boxes are matched
                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    // (8) If so, reload the game
                    window.location.reload();
                }
            } else {
                // (9) If they don't match, set a timeout to remove the boxOpen class after 500ms
                setTimeout(() => {
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                }, 500)
            }
        }
    }

    box.innerHTML = shuffleEmojies[i];
    document.querySelector('.container .game').appendChild(box);

}
