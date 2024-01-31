const $ = selector =>{
    return document.querySelector(selector);
  };
  


  function next(){
    let hideElem;
    if($(".hide")){
        hideElem = $(".hide").cloneNode(true);
        hideElem.classList.remove('hide');
      $(".hide").remove();
    }
  
    if ($(".prev")){
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    
    if ($(".act")){
      $(".act").classList.add("prev");
      $(".act").classList.remove("act");
    }
  
    
    if ($(".next")){
      $(".next").classList.add("act");
      $(".next").classList.remove("next");
    }
  
  
    
    
      $(".new-next").classList.remove("new-next");
    const addedEl = hideElem;
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next","new-next");  
    
  }

  
  function prev(){
    
    let newNextElem = $(".new-next").cloneNode(true);
    newNextElem.classList.remove('new-next', 'next');
    $(".new-next").remove();
    
  
    $(".next").classList.add("new-next");
  
    
    $(".act").classList.add("next");
    $(".act").classList.remove("act");
    
    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");
    
    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");
    
   

    
    
    $(".list").insertBefore(newNextElem, $(".list").firstChild);
    newNextElem.classList.add("hide"); 
    
  }

  function actLink(){
    let arrLink = [['1.jpg', 'index.php'],['autowheels.jpg','https://autoshiny-diski.ru'],['PTEGroup.jpg','projects/RTEGroup/index.html'],['digitalPro.jpg','projects/prodsait/index.php'],['texnomarket.jpg','projects/texnoMarket/index.php']];
    let imgLink = $(".act").firstElementChild.src;
    for(let i = 0; i < arrLink.length; i++){
      if(imgLink.includes(arrLink[i][0])){
        window.open(arrLink[i][1], '_blank');
      }
    }
  }
  
  let slide = element =>{
    if (element.classList.contains('next')){
      next();
    }else if(element.classList.contains('prev')){
      prev();
    }else if(element.classList.contains('act')){
      actLink();
    }
  }
  
  
  let slider = document.querySelector('.list'),
        swipe = new Hammer($(".swipe"));
  slider.addEventListener('click',(event) => {slide(event.target.parentElement);})
  slider.onclick = event => {
    
  }
  
  swipe.on("swiperight", (ev) => {prev();});
  
  swipe.on("swipeleft", (ev) => {next();});
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

let parentImgSlider = $('.slider-big');
  let imgList = document.querySelectorAll('.slider-big-img');
  let sliderLiList = document.querySelector('.slider-nav').children;
 
  let lengthImg = imgList.length;
  let ulList = $('.slider-nav');
  let prevPoint = $('.activeLi');
  for(let child of sliderLiList){
    child.addEventListener('click', changeNew);
  }
  setInterval(change, 2000);

  function changeNew(){
    let sliderImgList = document.querySelectorAll('.slider-big-img');
    let activeImg;
    let numberI;
    for(let i = 0; i < lengthImg; i++){
      if (!sliderImgList[i].classList.contains('dn')){
        activeImg = sliderImgList[i];
        numberI = i;
      }
    } 
    for(let i = numberI; i < lengthImg + 1; i++){
      let classChange = 'point'+ String(i);
      
    if (this.classList.contains(classChange)){

    }
    else{
      document.querySelectorAll('.slider-big-img')[0].classList.remove('dn');
      let nextImg = document.querySelectorAll('.slider-big-img')[0];
      parentImgSlider.append(nextImg);
    }
    if (i = lengthImg){
      i = 0;
    }
    }
  }

  function change(){
    
    document.querySelectorAll('.slider-big-img')[0].classList.remove('dn');
    document.querySelectorAll('.slider-big-img')[lengthImg - 1].classList.add('dn');
    let nextImg = document.querySelectorAll('.slider-big-img')[0];
    parentImgSlider.append(nextImg);
    changeActiveLi(nextImg);
    
  }

  function changeActiveLi(nextElem){

    let pointsCount = document.querySelector('.slider-nav').childElementCount;
    for(let i = 1; i < pointsCount + 1; i++){
      let strClass = 'point' + String(i); 
      if (nextElem.classList.contains(strClass)){
        prevPoint.classList.remove('activeLi');
        ulList.querySelector('.'+ strClass).classList.add('activeLi');
        prevPoint =  ulList.querySelector('.' + strClass);
      }
    }
  }


  /////////////////////////////////////////////////////////////////////////////////////////
/*  function changeClass(elem, classRemove, classAdd){
    elem.classList.add(classAdd);
    elem.classList.remove(classRemove);
  }


 function nextImgFe(){

    let hideElem;
    
    hideElem = $(".prev-prev-fe").cloneNode(true);
    let nextNext = $('.next-next-fe');
    let next = $('.next-fe');
    let act1 = $('.act1-fe');
    let act2 = $('.act2-fe');
    let act3 = $('.act3-fe');
    let prev = $('.prev-fe');
    let prevPrev = $('.prev-prev-fe');
    prevPrev.remove();
    $('slider-fe-items').add('moveImg');
    setTimeout(()=>{
    changeClass(nextNext, 'next-next-fe', 'next-fe');
    changeClass(next, 'next-fe', 'act3-fe');
    changeClass(act3, 'act3-fe', 'act2-fe');
    changeClass(act2, 'act2-fe', 'act1-fe');
    changeClass(act1, 'act1-fe', 'prev-fe');
    changeClass(prev, 'prev-fe', 'prev-prev-fe');
    changeClass(hideElem, 'prev-prev-fe','next-next-fe');

    const addedEl = hideElem;
    $(".slider-fe-items").append(hideElem);
    
    $('slider-fe-items').remove('moveImg');
    }, 1000);
  }

 function prevImgFe(){

 }*/