/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;

 const Visiability1 = primaryNav.getAttribute("data-visible"); /*so when the primary navigation is out , the header will be at fixed"sticky" position of top: 0 always , so that the x sign will be present when the primary is out*/


if(Visiability1 == "false"){

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;

  }
else{
  document.getElementById("header").style.top = "0";
}
     



}





 




/* for cliking navigation button*/

var primaryNav = document.querySelector(".primary-navigation");
const nav_toggle = document.querySelector(".mobile-nav-toggle");


// const iconNav = document.createElement("i");
// const iconX = document.createElement("i");


// iconNav.className = "fas fa-bars fa-xl";
// iconX.className = "fa-solid fa-x";


// nav_toggle.appendChild(iconNav);



nav_toggle.addEventListener("click" , () => {
   const Visiability = primaryNav.getAttribute("data-visible");
  if(Visiability == "false"){
    primaryNav.setAttribute("data-visible", true);
    nav_toggle.setAttribute("aria-expanded",true);

    nav_toggle.firstElementChild.className = "fa-solid fa-x";  //to change between icons
    

    // nav_toggle.removeChild(iconNav);
   
    // nav_toggle.appendChild(iconX);
 
    
  }

  else if(Visiability == "true"){
    primaryNav.setAttribute("data-visible", false);
    nav_toggle.setAttribute("aria-expanded",false);

    nav_toggle.firstElementChild.className = "fas fa-bars fa-xl";

  }

   
})



/*  for clicking "view More"  in cards in sections */


/*we have multiple  " view more " buttons so inorder to see which button is clicked and control only its card we will use the following function*/ 
/*https://stackoverflow.com/questions/73227074/various-buttons-with-the-same-class-name-get-the-clicked-one*/

let buttons = document.querySelectorAll(".view"); // quaryselectorall will return and nodelist of button with classnaem .view
buttons.forEach((viewbtn, index) => {// index will be current button index //we will check each button in the list and see which one is clicked 
  viewbtn.addEventListener("click", function(e) {

       var card_container = viewbtn.parentNode;
       var card_contents =card_container.querySelector(".card_contents");

       const Visiability = card_contents.getAttribute("data-visible");


       if(Visiability == "false"){
        card_contents.setAttribute("data-visible", true);
        viewbtn.textContent = "View Less" ;
        card_container.setAttribute("extend",true);
        
      }
     
      else if(Visiability == "true"){  
        card_contents.setAttribute("data-visible", false);
        viewbtn.textContent = "View More" ;
        card_container.setAttribute("extend",false);
     

      }
       
    
  });
})




/**********  Animations   ************/

const fundingAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.5 ,yoyo: true });   /*https://greensock.com/docs/v3/GSAP/gsap.timeline()*/ /*https://greensock.com/forums/topic/24217-animation-only-plays-once-on-click/ */ /*https://greensock.com/forums/topic/23135-looping-animation/ */


window.onload = ()=>{
  fundingAnim.restart();
  JobAnim.restart();
  JobAnimGrass.restart();
  petAnim.restart();
  donateAnim.restart();
  talentyoyoAnim.restart();
  talentAnim.restart();
  plantyoyoAnim.restart();
  plantAnim.restart();
  mediateyoyoAnim.restart();
  sportsyoyoAnim.restart();
  depressionyoyoAnim.restart();
  depressionAnim.restart();

}

/***************Animations of funding ***********/


fundingAnim.to("#fundingUpperHand", 0.6, { x: -500 , autoAlpha: 0 , ease: Power4.easeIn});  /* https://greensock.com/forums/topic/9674-translate-and-translate3d/ */  /* https://2019.wattenberger.com/guide/scaling-svg */ /* https://css-tricks.com/scale-svg/ */
//the form will be (id name , duration, what i want to happen , delay)
fundingAnim.to("#fundingMoney" , 0.7, { y: 500 , scale:2  ,  ease: Power4.easeIn},0.2);  //https://greensock.com/forums/topic/27982-scaling/

fundingAnim.to("#fundingLowerHand" , 0.6, {autoAlpha: 1 ,x: 340 , ease: Power4.easeIn},0.3); /* 0.4 is the delay */

fundingAnim.to("#fundingOpportunity" , 0.6, {autoAlpha: 1 , scale:1.5, transformOrigin: "center center" , ease: Power4.easeIn},1);  //https://greensock.com/forums/topic/24898-how-to-make-a-hidden-element-visable/
  //https://greensock.com/forums/topic/23268-scaling-from-different-origins/ //to scale the text from the middle point 


/*******************Animation of job***********/

const JobAnim = gsap.timeline({paused: true , repeat:-1,
  yoyo: true , repeatDelay:0.5 });   /*https://greensock.com/forums/topic/15996-timeline-reverse-repeat/*/ /* https://greensock.com/forums/topic/22564-reverse-animation-in-a-timeline-for-an-object/ */

JobAnim.fromTo("#JobAnimFace", 1, { rotation:15 , transformOrigin:"center bottom", ease: Power4.easeInOut}, { rotation:-20 , transformOrigin:"center bottom", ease: Power4.easeInOut}); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/

const JobAnimGrass = gsap.timeline({paused: true , repeat:-1, yoyo: true , repeatDelay:0.2}); 

  JobAnimGrass.to("#JobAnimGrass2",0.4,  { rotation:-10 , transformOrigin:"center bottom", ease: Power4.easeOut});
  JobAnimGrass.to("#JobAnimGrass2",0.7, { rotation:10 , transformOrigin:"center bottom", ease: Power4.easeIn});
  JobAnimGrass.to("#JobAnimGrass1",0.4, { rotation:-10 , transformOrigin:"center bottom", ease: Power4.easeOut});
  JobAnimGrass.to("#JobAnimGrass1",0.7, { rotation:10 , transformOrigin:"center bottom", ease: Power4.easeIn});


/****************** Animation of cats ****************/

const petAnim = gsap.timeline({paused: true , repeat:-1,
  yoyo: true , repeatDelay:0.01});   /*https://greensock.com/forums/topic/15996-timeline-reverse-repeat/*/ /* https://greensock.com/forums/topic/22564-reverse-animation-in-a-timeline-for-an-object/ */

petAnim.to("#petsAnimCat",0.55,{ rotation:-20 , transformOrigin:"30% bottom", ease: Power4.easeInOut},0); /*https://greensock.com/forums/topic/18947-two-separate-transforms-simultaneously/ */
petAnim.to("#petsAnimBlackcattail",1,{ rotation:-30 , transformOrigin:"30% bottom", ease: Power4.easeInOut},0);
petAnim.to("#petsAnimBall",1,{ x:400,ease: Power4.easeInOut},0);

petAnim.to("#petsAnimEye",0.4,{ x:630,ease: Power4.easeInOut},0);
petAnim.to("#petsAnimEye",0.6,{x:640,ease: Power4.easeInOut},0.4);


petAnim.to("#petsAnimEye2",0.4,{ x:670,ease: Power4.easeInOut},0);
petAnim.to("#petsAnimEye2",0.6,{x:677,ease: Power4.easeInOut},0.4);


/****************** Animation of donation ***********/

const donateAnim = gsap.timeline({paused: true , repeat:-1,
  yoyo: true , repeatDelay:0.8});


donateAnim.to("#donationPart1",0.8,{ rotate:0 , transformOrigin:"right", ease: Power4.easeInOut},0);
donateAnim.to("#donationPart2",0.6,{rotate:0 ,ease: Power4.easeInOut},0.3);



/**********************talent animation**************************/
const talentyoyoAnim = gsap.timeline({paused: true , repeat:-1 ,repeatDelay:0.01 , yoyo:true }); 

const talentAnim = gsap.timeline({paused: true , repeat:-1 ,repeatDelay:0.1 }); 


talentyoyoAnim.to("#singerfaceAnim",0.55,{ rotation:-15 , transformOrigin:"30% bottom", ease: Power4.easeInOut},0); 

talentAnim.to("#singerMusicAnim",1,{ x:70,y:-5, scale: 0.8,transformOrigin:"30% bottom", ease: Power4.easeInOut},0); 

talentyoyoAnim.to("#carpnterworkAnim",0.55,{ x:30,rotation:15 , transformOrigin:"30% bottom", ease: Power4.easeInOut},0); 
talentyoyoAnim.to("#carpnterfaceAnim",0.55,{ rotation:-6 , transformOrigin:"30% bottom", ease: Power4.easeInOut},0); 


/********************** plant animation *********************/

const plantyoyoAnim = gsap.timeline({paused: true , repeat:-1 ,repeatDelay:0.01 , yoyo:true }); 

const plantAnim = gsap.timeline({paused: true , repeat:-1}); 


plantyoyoAnim.to("#plantsmoveAnim",0.8,{ rotation:7 , transformOrigin:"center bottom", ease: Power4.easeInOut},0); 

plantAnim.to("#plantwaterAnim",1,{ y:1000 ,transformOrigin:"30% bottom", ease: Power4.easeInOut},0); 


/***************** mediate animation *************/

const mediateyoyoAnim = gsap.timeline({paused: true , repeat:-1, yoyo:true }); 



mediateyoyoAnim.to("#mediatePlant1",1.5,{ rotation:-10 , transformOrigin:"30% bottom", ease: Power4.linear},0);
mediateyoyoAnim.to("#mediatePlant2",1.5,{ rotation:10 , transformOrigin:"30% bottom", ease: Power4.linear},0);



mediateyoyoAnim.to("#plantEffect" , 1, {autoAlpha: 0 , ease: Power4.easeIn},0);
mediateyoyoAnim.to("#plantEffect2" , 1, {autoAlpha: 0 , ease: Power4.easeIn},0.4);
mediateyoyoAnim.to("#plantEffect3" , 1, {autoAlpha: 0 , ease: Power4.easeIn},0.9);



/******************* sports animation ****************/

const sportsyoyoAnim = gsap.timeline({paused: true , repeat:-1,repeatDelay:0.1, yoyo:true }); 

sportsyoyoAnim.to("#sportPlayerJumping" ,0.3, {y: 400 , ease: Power4.easeOut},0.2);
sportsyoyoAnim.to("#sportPlayer1" ,0.3, {rotation:20 , transformOrigin:"left bottom" ,ease: Power4.easeOut},0);


/**************** depression animation ************/
const depressionyoyoAnim = gsap.timeline({paused: true , repeat:-1,repeatDelay:0.05, yoyo:true }); 
const depressionAnim = gsap.timeline({paused: true , repeat:-1 }); 

depressionAnim.to("#depressedEffect" ,0.3, {rotation:360 , transformOrigin:"center center" ,ease: Power4.easeOut},0);

depressionyoyoAnim.to("#doctorFace" ,0.5, {rotation:10 , transformOrigin:"center bottom" ,ease: Power4.linear},0);

depressionAnim.to("#talkdoc1" ,0.3, {y:15 , transformOrigin:"center center" ,ease: Power4.easeOut},0);
depressionAnim.to("#talkdoc1" ,0.3, {y:20 , transformOrigin:"center center" ,ease: Power4.easeOut},0.2);

depressionAnim.to("#talkdoc2" ,0.3, {y:15 , transformOrigin:"center center" ,ease: Power4.easeOut},0.1);
depressionAnim.to("#talkdoc2" ,0.3, {y:20 , transformOrigin:"center center" ,ease: Power4.easeOut},0.3);

depressionAnim.to("#talkdoc3" ,0.3, {y:15 , transformOrigin:"center center" ,ease: Power4.easeOut},0.3);
depressionAnim.to("#talkdoc3" ,0.3, {y:20 , transformOrigin:"center center" ,ease: Power4.easeOut},0.4);
