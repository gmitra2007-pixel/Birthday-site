function showScreen(id){
    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("show");
    });

    document.getElementById(id).classList.add("show");
}
function cutCake(){
    let cake = document.getElementById("cake");

    cake.style.transform = "scale(1.3)";
    
    setTimeout(()=>{
        cake.innerHTML="🍰";
        cake.style.transform="scale(1)";
    },300);
}
function openLetter(){
    document.getElementById("letter").classList.add("show");
}
function typeText(text, elementId){
    let i = 0;
    let speed = 50;
    let el = document.getElementById(elementId);
    el.innerHTML = "";

    function typing(){
        if(i < text.length){
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
typeText("Happy Birthday My Love 💖", "msg");