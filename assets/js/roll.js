
document.querySelector('.portfolio').addEventListener("click", function(event){
      clickScroll(this);
      }
  );

  document.querySelector('.work').addEventListener("click", function(event){
    clickScroll(this);
    }
);
document.querySelector('.study').addEventListener("click", function(event){
    clickScroll(this);
    }
);
document.querySelector('.make').addEventListener("click", function(event){
    clickScroll(this);
    }
);
document.querySelector('.program').addEventListener("click", function(event){
    clickScroll(this);
    }
);

document.querySelector('.hobby').addEventListener("click", function(event){
    clickScroll(this);
    }
);


function scrollStart(elem){
    console.log(elem);
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}


function clickScroll(button)
{
  let id = button.getAttribute('data-id');
  let element = document.getElementById(id);
  scrollStart(element);
}











let writeList = document.querySelectorAll('.button-write');
for(let elem of writeList){
  elem.addEventListener('click', elem.showModal);

}