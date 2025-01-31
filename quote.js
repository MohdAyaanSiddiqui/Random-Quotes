const btn1 = document.getElementById("btn1");
const Div2 = document.querySelector(".Div2");

let Quotes = [
    "Hardwork Without Talent Is Nothing...",
    "Character Is Power...",
    "Mistakes Are Proof That You Are Trying...",
    "Die With Memories , Not Dreams...",
    "In My Mind I'm Always The Best..."
]
btn1.addEventListener('click',()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*Quotes.length);
    Div2.textContent = Quotes[random];
})