//all the four buttons
let buttons = document.querySelectorAll('.animebtn>li>button');
let check = false

//click trigger for first button
buttons[0].addEventListener('click', ()=>{
    if(!check){
        check = true;
        buttons[0].classList.add('started');
        let start = document.querySelector('.anime1>span:first-child');
        start.classList.add('anime1-start');
        setTimeout(()=>{
            start.classList.remove('anime1-start'); 
            buttons[0].classList.remove('started');
            check = false;
        }, 4000);
    }
});

//click trigger for second button
buttons[1].addEventListener('click', ()=>{
    if(!check){
        check = true;
        buttons[1].classList.add('started');
        let start = document.querySelector('.anime1>span:first-child');
        start.classList.add('anime2-start');
        setTimeout(()=>{
            start.classList.remove('anime2-start'); 
            buttons[1].classList.remove('started');
            check = false
        }, 5000);
    }
});
//click trigger for third button
buttons[2].addEventListener('click', ()=>{
    if(!check){
        check = true;
        buttons[2].classList.add('started');
        let start = document.querySelector('.anime1>span:nth-child(2)');
        let delay = document.querySelector('.anime1>span:first-child');
        start.style.clipPath = "inset(0 100% 0 0)";
        delay.style.zIndex = "10";
        delay.classList.add('anime3-delay');
        start.classList.add('anime3-start');
        setTimeout(()=>{
            delay.classList.remove('anime3-delay');
            start.classList.remove('anime3-start');
            start.style.clipPath = "unset";
            delay.style.zIndex = "unset";
            buttons[2].classList.remove('started');
            check = false;
        }, 5000);
    }
});

//click trigger for fourth button
buttons[3].addEventListener('click', ()=>{
    if(!check){
        check = true;
        buttons[3].classList.add('started');

        //first anime elements
        let start = document.querySelector('.anime1>span:nth-child(2)');
        let delay = document.querySelector('.anime1>span:first-child');
        //----------------------
        //second anime elements
        let middle = document.querySelector('.anime2>span:nth-child(2)');
        let middleDelay = document.querySelector('.anime2>span:first-child');
        //----------------------
        //third anime elements
        let last = document.querySelector('.anime3>span:nth-child(2)');
        let lastDelay = document.querySelector('.anime3>span:first-child');
        //--------------------------

        //first anime
        start.style.clipPath = "inset(0 100% 0 0)";
        start.classList.add('anime3-start');
        delay.style.zIndex = "10";
        delay.classList.add('anime3-delay');
        //-----------------

        //second anime
        setTimeout(()=>{
            middle.classList.add('anime4-start');
            middleDelay.style.zIndex = "10";
            middleDelay.classList.add('anime4-delay');
        }, 1000);
        //--------------

        //third anime
        setTimeout(()=>{
            last.classList.add('anime4-start');
            lastDelay.style.zIndex = "10";
            lastDelay.classList.add('anime4-delay');
        }, 2000);
        //-----------------

        setTimeout(()=>{
            start.classList.remove('anime3-start');
            start.style.clipPath = "unset";
            delay.classList.remove('anime3-delay');
            delay.style.zIndex = "unset";

            middle.classList.remove('anime4-start');
            middleDelay.style.zIndex = "unset";
            middleDelay.classList.remove('anime4-delay');

            last.classList.remove('anime4-start');
            lastDelay.style.zIndex = "unset";
            lastDelay.classList.remove('anime4-delay');
            buttons[3].classList.remove('started');
            check = false;
        }, 6500);
    }
});