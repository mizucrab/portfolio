$(document).on("click","#choice1", function()

{
     window.location.href="#two";
});
$(document).on("click","#choice2", function()

{
     window.location.href="#three";
});
$(document).on("click","#choice3", function()
{
     window.location.href="#four";
});
$(document).on("click","#introduction", function()
{
     $("#introductionddiv").css("display", "block");
     $("#introlabel").css("text-decoration", "line-through");
     $("#introlabel").css("color", "#FFA500");
     
     $(".skillscontext").css("display", "none");
     $("#skilllabel").css("text-decoration", "none");
     $("#skilllabel").css("color", "white");

});
$(document).on("click","#skills", function()
{
     $("#introductionddiv").css("display", "none");
     $("#introlabel").css("text-decoration", "none");
     $("#introlabel").css("color", "white");

     $(".skillscontext").css("display", "block");
     $("#skilllabel").css("text-decoration", "line-through");
     $("#skilllabel").css("color", "#FFA500");
});

const carouselslide=document.querySelector('.slides');
const carouselImages=document.querySelectorAll('.slides img');

//button
const backbtn=document.querySelector('#back');
const nextbtn=document.querySelector('#next');

//counter
let counter=1;

const size=carouselImages[0].clientWidth;

carouselslide.style.transform='translateX('+(-size * counter)+'px)';

nextbtn.addEventListener('click',function(){
     if(counter>=carouselImages.length-1)return;
carouselslide.style.transition="transform 0.4s ease-in-out";
counter++;
carouselslide.style.transform='translateX('+(-size * counter)+'px)';


});
backbtn.addEventListener('click',function(){
     if(counter<=0)return;
     carouselslide.style.transition="transform 0.4s ease-in-out";
     counter--;
     carouselslide.style.transform='translateX('+(-size * counter)+'px)';
     
     
     });

carouselslide.addEventListener('transitionend',function(){
           if( counter>=carouselImages.length - 1){
               carouselslide.style.transition = "none";
               counter=1;
               carouselslide.style.transform='translateX('+(-size * counter)+'px)';
           }
           if(counter<=0){
               carouselslide.style.transition="none";
               counter=carouselImages.length-2;
               carouselslide.style.transform='translateX('+(-size * counter)+'px)';
           }
     });