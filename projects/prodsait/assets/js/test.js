let rateList = document.querySelectorAll('.rate');
console.log(rateList);

for(let rate of rateList){
    rate.addEventListener('mouseover', shadowToggle);
    rate.addEventListener('mouseout', shadowToggle);
}

function shadowToggle(){
    this.classList.toggle('shadow06100');
}

let cardList = document.querySelectorAll('.card');

for(let card of cardList){
    card.addEventListener('click', changeCard);
}

function changeCard(){
    let ParentChildren = this.parentElement.children;
    for(let child of ParentChildren){
        let back = child.querySelector('.back');
        console.log('child  ' + child);
        console.log('this  ' + this);
        if(back != null && !back.classList.contains('dn') && child != this){
            back.previousElementSibling.classList.remove('dn');
            back.classList.add('dn');
        }
    }
    this.firstElementChild.classList.toggle('dn');
    this.lastElementChild.classList.toggle('dn');
}