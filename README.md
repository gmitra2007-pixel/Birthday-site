<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Birthday Surprise 🎉</title>

<style>
body {
    margin:0;
    font-family: Arial;
    overflow:hidden;
    background:black;
    color:white;
    text-align:center;
}

.screen {
    position:absolute;
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    transition:1s;
}

.hidden {
    opacity:0;
    pointer-events:none;
}

button {
    padding:10px 20px;
    border:none;
    border-radius:10px;
    background:#ff4081;
    color:white;
    font-size:18px;
}

/* Balloons */
.balloon {
    position:absolute;
    width:40px;
    height:50px;
    border-radius:50%;
    animation: float 5s linear forwards;
}
@keyframes float {
    from {bottom:0;}
    to {bottom:100vh;}
}
</style>
</head>

<body>

<!-- Screen 1 -->
<div class="screen" id="s1">
    <h1>🎁 Tap to Start</h1>
    <button onclick="next(1)">Start</button>
</div>

<!-- Screen 2 -->
<div class="screen hidden" id="s2">
    <h1>🎉 Happy Birthday 🎉</h1>
    <button onclick="next(2)">Next</button>
</div>

<!-- Screen 3 -->
<div class="screen hidden" id="s3">
    <div onclick="cutCake()" id="cake" style="font-size:80px;">🎂</div>
    <p>Click cake 🎂</p>
    <button onclick="next(3)">Next</button>
</div>

<!-- Screen 4 -->
<div class="screen hidden" id="s4">
    <button onclick="balloons()">🎈 Release Balloons</button>
    <button onclick="next(4)">Next</button>
</div>

<!-- Screen 5 -->
<div class="screen hidden" id="s5">
    <h2>💖 You are my everything 💖</h2>
    <button onclick="next(5)">Next</button>
</div>

<!-- Screen 6 -->
<div class="screen hidden" id="s6">
    <h1>🎉 Surprise 🎉</h1>
    <p>I love you 💖</p>
</div>

<script>

function next(n){
    document.getElementById("s"+n).classList.add("hidden");
    document.getElementById("s"+(n+1)).classList.remove("hidden");
}

/* Cake */
function cutCake(){
    document.getElementById("cake").innerHTML="🍰";
}

/* Balloons */
function balloons(){
    for(let i=0;i<10;i++){
        let b=document.createElement("div");
        b.className="balloon";
        b.style.left=Math.random()*100+"vw";
        b.style.background=`hsl(${Math.random()*360},70%,60%)`;
        document.body.appendChild(b);
        setTimeout(()=>b.remove(),5000);
    }
}

</script>

</body>
</html>
