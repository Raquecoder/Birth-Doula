const openBtn = document.getElementById('open-btn')
console.log(openBtn)
const closeBtn = document.getElementById('close-btn')
console.log(closeBtn)
const navList = document.getElementById('nav-list')
console.log(navList)
const nav = document.getElementById('nav')
console.log(nav)


openBtn.addEventListener('click',function(){
 nav.style.display='block';
 closeBtn.style.display="block";
})

closeBtn.addEventListener('click',function(){
navList.style.display='none';
openBtn.style.display='block';
})