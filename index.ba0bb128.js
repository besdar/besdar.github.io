document.querySelectorAll(".tech-stack-item").forEach(e=>{e.addEventListener("focus",({currentTarget:e})=>{if(window.innerWidth<700)return;let t=e?.querySelector(".tooltip");if(!t)return;let i=t.getBoundingClientRect();i.x<10?t.style.left=`${t.offsetLeft+10-i.x}px`:i.x+i.width>window.innerWidth-10&&(t.style.left=`${window.innerWidth+t.offsetLeft-20-i.x-i.width}px`)})});//# sourceMappingURL=index.ba0bb128.js.map

//# sourceMappingURL=index.ba0bb128.js.map
