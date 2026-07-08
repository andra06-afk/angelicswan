document.addEventListener("DOMContentLoaded", () => {

for(let i=0;i<30;i++){

let petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";
petal.style.left=Math.random()*100+"vw";
petal.style.top="-50px";
petal.style.fontSize=(15+Math.random()*20)+"px";
petal.style.opacity="0.8";
petal.style.pointerEvents="none";
petal.style.animation=`fall ${5+Math.random()*8}s linear infinite`;

petal.style.animationDelay=Math.random()*8+"s";

document.body.appendChild(petal);

}

});
