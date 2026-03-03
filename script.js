/* CONFETTI */
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let pieces=[];
for(let i=0;i<65;i++){
  pieces.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*5+2
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  pieces.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#FF7882";
    ctx.fill();
    p.y+=1;
    if(p.y>canvas.height)p.y=0;
  });
  requestAnimationFrame(draw);
}
draw();

/* DATE */
const dateText=document.getElementById("date-text");
const dateStr="27 May";
let i=0;
setInterval(()=>{
  if(i<dateStr.length){
    dateText.textContent+=dateStr[i];
    i++;
  }
},150);

/* MODAL */
const btn=document.getElementById("btn__letter");
const modal=document.getElementById("boxMail");
const close=document.getElementById("closeModal");
const letter=document.getElementById("letterText");

const message="Happy Birthday 💖 I wish you happiness and love always.";

btn.onclick=()=>{
  modal.classList.add("active");
  letter.textContent="";
  let j=0;
  const typing=setInterval(()=>{
    if(j<message.length){
      letter.textContent+=message[j];
      j++;
    }else clearInterval(typing);
  },30);
};

close.onclick=()=>{
  modal.classList.remove("active");
};
