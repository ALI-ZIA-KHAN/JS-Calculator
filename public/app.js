var output="";

var getwhatsent=document.getElementById('outcome');



function send(n){

getwhatsent.value+=n;

}

function clearAll(){
    getwhatsent.value="";
}

function calcResult(){

    output=eval(getwhatsent.value);
    getwhatsent.value=output.toFixed(2);
}