const headerEl = document.querySelector(".header");
var iconlar= document.querySelector('.iconlar')
var iconlar1= document.querySelector('.iconlar1')
var iconlar2= document.querySelector('.iconlar2')
var iconlar3= document.querySelector('.iconlar3')
var yazi=document.querySelector('.yazi')
var yazi1=document.querySelector('.yazi1')
var yazi2=document.querySelector('.yazi2')
var yazi3=document.querySelector('.yazi3')

var mainimg=document.getElementById('imgg');
var images=[  'images/hotel.jpg', 'images/loby.jpg', 'images/havuz.jpg' ,'images/hoteldeniz.jpg' ];
var num=0;
const auto=true;
const IntervalTime=5000;
let SlideInterval;






window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerEl.classList.add("header-scrolled");
      iconlar.style.color='white'
      iconlar1.style.color='white' 
      iconlar2.style.color='white'
      iconlar3.style.color='white'
      yazi.style.color='white' 
      yazi1.style.color='white' 
      yazi2.style.color='white' 
      yazi3.style.color='white'
    } else if (window.scrollY <= 50) {
      headerEl.classList.remove("header-scrolled");
      iconlar.style.color='black'
      iconlar1.style.color='black' 
      iconlar2.style.color='black' 
      iconlar3.style.color='black'
      yazi.style.color='black' 
      yazi1.style.color='black' 
      yazi2.style.color='black' 
      yazi3.style.color='black'
    }
  });


  function next(){
    num++
    if(num>=images.length){
        num=0,
        mainimg.src=images[num]
    }else{
        mainimg.src=images[num]
    }
  }
  
  function back(){
    num--
    if(num<0){
        num=images.length-1;
        mainimg.src=images[num]
    }else{
        mainimg.src=images[num]
    }
  }
  
  if(auto){
    SlideInterval=setInterval(next,IntervalTime)
  }


  function açacak(){
    document.getElementById('gökyüzü').style.width="100%"
  }
  
  function kapatacak(){
    document.getElementById('gökyüzü').style.width="0%"
  }


