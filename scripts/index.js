const header = document.getElementById("header");
const header2 = document.getElementById("header2");
const header3 = document.getElementById("header3");

const delay = ms => new Promise(res => setTimeout(res, ms));

async function easterEggLoad() {
    delay(1000);
    header2.innerHTML = "I see you want to try out my easter eggs?"
    delay(1000);

}

async function buttonClicked() {
    location.href = "./pages/doolhof"
}