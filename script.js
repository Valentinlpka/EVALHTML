let images = [];

images[0] = ["./img/bg-0.jpg"];
images[1] = ["./img/bg-1.jpeg"];
images[2] = ["./img/bg-2.jpeg"];
images[3] = ["./img/bg-3.jpg"];
let index = 0;


// Fonction permettant de changer d'image toutes les 5 secondes
function change() {
  document.getElementById("header").style.backgroundImage = "url('" + images[index] + "')";
  
  if (index == 3) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 5000);
}

change();



// Fonction permettant d'afficher la Div au scroll après 1300px
function scrollDiv () {
  myDiv = document.querySelector("#showDiv");

  var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 1300) {
          myDiv.className = ""
      } else {
          myDiv.className = "d-none"
      }
  };
  
  window.addEventListener("scroll", myScrollFunc);
}

scrollDiv();


function changeImg (arrayvehicule) {


  let current=0;



  $("#left").click(function(){
    if(current-1<0){
      current=arrayvehicule.length-1;
      $("#image").attr("src", arrayvehicule[current].src);  // Amendment as mentioned
    }
    else{
      current--;  //Slight change here
      $("#image").attr("src", arrayvehicule[current].src);
    }
  });

  $("#right").click(function(){
    if(current+1>arrayvehicule.length-1){
      current=0;
      $("#image").attr("src", arrayvehicule[current].src);
    }
    else{
      current++;  //Slight change here
      $("#image").attr("src", arrayvehicule[current].src);
    }
  });
}

let vehicule1=new Array();
vehicule1[0]=new Image();
vehicule1[0].src="./Annexes/vehicule1.png";
vehicule1[1]=new Image();
vehicule1[1].src="./Annexes/vehicule11.png";
vehicule1[2]=new Image();
vehicule1[2].src="./Annexes/vehicule111.jpeg";

let vehicule2=new Array();
vehicule2[0]=new Image();
vehicule2[0].src="./Annexes/vehicule2.png";
vehicule2[1]=new Image();
vehicule2[1].src="./Annexes/vehicule22.png";
vehicule2[2]=new Image();
vehicule2[2].src="./Annexes/vehicule222.png";

changeImg(vehicule1);
