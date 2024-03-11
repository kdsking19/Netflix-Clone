const tabitems=document.querySelectorAll('.tab-item');
const tabcontentitems=document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabcontentitems =document.querySelector(`#${this.id}-content`);
tabcontentitems.classList.add('show');
}
function removeBorder(){
    tabitems.forEach(item => {item.classList.remove('tab-border')});
}
function removeShow(){
    tabcontentitems.forEach(item=>{item.classList.remove('show')});
}   
tabitems.forEach(item=>{item.addEventListener('click',selectItem)});