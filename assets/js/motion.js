document.querySelector('.container').addEventListener('mousemove',motion);

let yMouse = 0;
let xMouse = 0;
let xPersent = 0;
let yPersent = 0;
let motionX = 50;
let motionY = 50;

let allForm = document.querySelectorAll('.motion');

function motion(event){    
    if (xPersent == 0 && yPersent == 0){
        xPersent = (motionx * event.clientX) / document.documentElement.clientWidth;
        yPersent = (motionY * event.clientY) / document.documentElement.clientHeight;

    }
    if(xMouse > event.clientX && yMouse == event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionLeft();
    }
    if(xMouse < event.clientX && yMouse == event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionRight();
    }
    if(xMouse > event.clientX && yMouse > event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionLeftUp();
    }
    if(xMouse > event.clientX && yMouse < event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionLeftDown();
    }
    if(xMouse < event.clientX && yMouse > event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionRightUp();
    }
    if(xMouse < event.clientX && yMouse < event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionRightDown();
    }
    
    if(xMouse == event.clientX && yMouse > event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionUp();
    }
    if(xMouse == event.clientX && yMouse < event.clientY){
        xMouse = event.clientX;
        yMouse = event.clientY;
        motionDown();
    }
}

function motionRight(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    

    for(let elem of allForm){
        xNew = Number(getComposedStyle(elem).left.slice(0,-2)) + xMotion;
        elem.style.left = String(xNew) + 'px';
    } 
}

function motionRightUp(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    for(let elem of allForm){
        xNew = xMotion + Number(getComputedStyle(elem).left.slice(0,-2));
        yNew = Number(getComputedStyle(elem).top.slice(0, -2)) - yMotion;
        elem.style.left = String(xNew) + 'px';
        elem.style.top = String(yNew) + 'px';
    } 
}

function motionRightDown(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    
    for(let elem of allForm){
        xNew = Number(getComputedStyle(elem).left.slice(0,-2)) + xMotion;
        yNew = Number(getComputedStyle(elem).top.slice(0, -2)) + yMotion;
        elem.style.left = String(xNew) + 'px';
        elem.style.top = String(yNew) + 'px';
    } 
}

function motionLeft(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    
    for(let elem of allForm){
        xNew = Number(getComputedStyle(elem).left.slice(0,-2)) - xMotion;
        elem.style.left = String(xNew) + 'px';
    } 
}

function motionLeftUp(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    for(let elem of allForm){
        xNew = Number(getComputedStyle(elem).left.slice(0,-2)) - xMotion;
        yNew = Number(getComputedStyle(elem).top.slice(0, -2)) - yMotion;
        elem.style.left = String(xNew) + 'px';
        elem.style.top = String(yNew) + 'px';
    } 
}

function motionLeftDown(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    
    for(let elem of allForm){
        xNew = Number(getComputedStyle(elem).left.slice(0,-2)) - xMotion;
        yNew = Number(getComputedStyle(elem).top.slice(0, -2)) + yMotion;
        elem.style.left = String(xNew) + 'px';
        elem.style.top = String(yNew) + 'px';
    } 
}

function motionUp(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    
    for(let elem of allForm){
        
        yNew = parseFloat(getComputedStyle(elem).top.slice(0, -2)) - yMotion;
        elem.style.top = String(yNew) + 'px';
    } 
}
function motionDown(){
    
    let widthDocument = document.documentElement.clientWidth;
    let heightDocument = document.documentElement.clientHeight;
    let xPersentNew = (motionX * xMouse) / widthDocument;
    let yPersentNew = (motionY * yMouse) / heightDocument;
    xPersent = Math.abs(xPersent - xPersentNew);
    yPersent = Math.abs( yPersentNew - yPersent);
    let xMotion = (2 * xPersent);
    let yMotion = (2 * yPersent);
    xPersent = xPersentNew;
    yPersent = yPersentNew;
    let xNew;
    let yNew;
    
    for(let elem of allForm){

        yNew = Number(getComputedStyle(elem).top.slice(0, -2)) + yMotion;
        elem.style.top = String(yNew) + 'px';
    } 
}