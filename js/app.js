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
    
    //CALCULATOR
   var listArrow = document.getElementsByClassName("list_arrow");
  var listPanel_1 = document.getElementsByClassName("list_panel")[0].children;
  var listPanel_2 = document.getElementsByClassName("list_panel")[1].children;
  var listPanel_3 = document.getElementsByClassName("list_panel")[2].children;
  var transport = document.getElementById("transport");
  var sumPrice = document.getElementsByClassName("sum")[0];

  var name = document.getElementsByClassName("title")[0];
  var color = document.getElementsByClassName("color")[0];
  var pattern = document.getElementsByClassName("pattern")[0];
  var transportValue = document.getElementsByClassName("transport")[0];

  var priceName = document.getElementsByClassName("title")[1];
  var priceColor = document.getElementsByClassName("color")[1];
  var pricePattern = document.getElementsByClassName("pattern")[1];
  var priceTransport = document.getElementsByClassName("transport")[1];

  function showList(){
    this.parentNode.getElementsByClassName("list_panel")[0].classList.toggle("show");
  }

    
//    toggle
    
  function calculatePrice(){
    var num1 = isNaN(parseInt(priceName.innerText)) ? 0 : parseInt(priceName.innerText);
    var num2 = isNaN(parseInt(priceColor.innerText)) ? 0 : parseInt(priceColor.innerText);
    var num3 = isNaN(parseInt(pricePattern.innerText)) ? 0 : parseInt(pricePattern.innerText);
    var num4 = isNaN(parseInt(priceTransport.innerText)) ? 0 : parseInt(priceTransport.innerText);

    sumPrice.innerText = num1 + num2 + num3 + num4 + " zł";
  }

  function selectChair(){
    document.getElementsByClassName("list_label")[0].innerText = this.innerText;
    name.innerText = this.innerText;
    priceName.innerText = this.dataset.namePrice + " zł";
    calculatePrice();
  }

  function selectColor(){
    document.getElementsByClassName("list_label")[1].innerText = this.innerText;
    color.innerText = this.innerText;
    priceColor.innerText = this.dataset.colorPrice + " zł";
    calculatePrice();
  }

  function selectMaterial(){
    document.getElementsByClassName("list_label")[2].innerText = this.innerText;
    pattern.innerText = this.innerText;
    pricePattern.innerText = this.dataset.materialPrice + " zł";
    calculatePrice();
  }

  function selectTransport(){
    transportValue.innerText = "Transport";
    priceTransport.innerText = this.dataset.transportPrice + " zł";
    if (transport.checked === false){
      transportValue.innerText = "";
      priceTransport.innerText = "";
    }
    calculatePrice();
  }

  for (var i = 0; i < listArrow.length; i++){
    listArrow[i].addEventListener("click", showList);
  }
  for (var i = 0; i < listPanel_1.length; i++){
      listPanel_1[i].addEventListener("click", selectChair);
  }
  for (var i = 0; i < listPanel_2.length; i++){
      listPanel_2[i].addEventListener("click", selectColor);
  }
  for (var i = 0; i < listPanel_3.length; i++){
      listPanel_3[i].addEventListener("click", selectMaterial);
  }
  transport.addEventListener("click", selectTransport);
  
    
    
    function hideList(){
    this.parentNode.getElementsByClassName("list_panel")[0].classList.remove("show");
      
  }
    
    
    
for (var i = 0; i < listPanel_1.length; i++){
      listPanel_1[i].addEventListener("click", showList);
       
}
//    listPanel_1
    
    
    
}); 
    
    
    
    
    
    
    
    
    
    
    
    
    