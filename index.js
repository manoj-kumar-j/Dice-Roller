var randomNum1= Math.floor(Math.random()*6)+1;
var ranImg1="dice"+randomNum1+".png";
var ranImgSrc1="images/"+ranImg1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ranImgSrc1); 

var randomNum2=Math.floor(Math.random()*6)+1;
var ranImg2="dice"+randomNum2+".png";
var ranImgSrc2="images/"+ranImg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ranImgSrc2);

if (randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player1 Won";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player2 Won";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}