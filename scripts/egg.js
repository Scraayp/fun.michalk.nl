const egg = document.getElementById("egg");

const eggHeader = document.getElementById("eggHeader");
const eggParagprah = document.getElementById("eggParagprah");
const message = document.getElementById("messageDont");

let eggClicked = 0;

async function makeBroken() {
    egg.classList.add("brokenEgg")
}

async function changeText() {
    eggHeader.innerHTML = "Not a normal egg anymore";
    eggParagprah.innerHTML = "";
}

egg.addEventListener('click', async function handleclick() {
    console.log("Oh no you clicked the egg! Don't do that again!");
    message.innerHTML = "Oh no you clicked the egg! Don't do that again, you will break the egg!";
    message.classList.add('messageStyle')
    if(eggClicked != 3){
        eggClicked++;
    }else {
            await makeBroken();
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(2000);
            await alert("Oh no, look what you did. You broke the egg!!!")
            await alert("Just leave now! No one wants you here!")
            location.href = "../index"
    }
})