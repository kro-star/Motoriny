let accordList = document.querySelectorAll('.accordion-item');
for(let elem of accordList){
    elem.addEventListener('click',showAccordion);
}

function showAccordion(event){
    event.target.parentElement.querySelector('.accordion-body').classList.toggle('dn');
}

document.querySelector('.icon').addEventListener('click', (e) => {
    document.querySelector('.navGlobal').classList.toggle('open');
    e.target.parentElement.classList.toggle('krest');
    
});


document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    let open = document.querySelectorall('[href="#openModal"]');
    for(let elem of open){
        elem.addEventListener('click', function () {
            document.body.style.overflow = 'hidden';
            document.querySelector('#openModal').style.marginLeft = scrollbar;
          });
    } 
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });