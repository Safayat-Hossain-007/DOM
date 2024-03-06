 //Synchronous means executing step by step or line by line
function callBackExplanation(name,age,task){
    console.log('You are ',name);
    console.log("you are ",age);
    task();

 }
 function takeShower(){
    console.log('taking shower');
 }
 function scrollFacebook(){
    console.log("Scrolling facebook");
 }
 function brushYourTeeth(){
    console.log("Brushing teeth");
 }
 callBackExplanation("safayat",24,takeShower);
 callBackExplanation("Imrul",27,scrollFacebook);
