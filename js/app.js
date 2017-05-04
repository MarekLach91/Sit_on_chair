document.addEventListener("DOMContentLoaded", function(){
    
// change chair 
    
var leftBtn = document.getElementsByClassName('buttonLeft')[0];
  var rightBtn = document.getElementsByClassName('buttonRight')[0];    
var classPhoto = document.getElementsByClassName('chair1')[0];    
var pictureIndex = 1;    
    
    
   function wrap(){
    if (pictureIndex < 1){
      pictureIndex = 3;
    }
    else if (pictureIndex > 3){
      pictureIndex = 1;
    }
  }

  function prev(){
    pictureIndex--;
    wrap()
    changeImage();
    console.log(pictureIndex);
  }

  function next(){
    pictureIndex++;
    wrap()
    changeImage();
    console.log(pictureIndex);
  } 
    
    
    
    function changeImage(e){
    if (pictureIndex == 1){
      e.classPhoto.removeClass('.chair1');
    }
    else if (pictureIndex == 2){
      classPhoto.removeClass('.chair1');
    }
    else if (pictureIndex == 3){
     classPhoto.removeClass('.chair1');
    }
  }
    
  
  leftBtn.addEventListener('click', prev);
  rightBtn.addEventListener('click', next);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});