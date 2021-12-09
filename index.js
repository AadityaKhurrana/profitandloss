var input1=document.querySelector(".inp1");
var input2=document.querySelector(".inp2");
var input3=document.querySelector(".inp3");
var btn=document.querySelector(".btn");
var res=document.querySelector(".result");

console.log("in iy")

function clickHandler()
{
var val1=input1.value;
var val2=input2.value;
var val3=input3.value;

var prev=val1*val2;
var present=val2*val3;
var per=(present/prev)*100;
var i=Math.round(per)

if(prev>present)
{
    res.innerText="sorry you are in lose! "+" Effective Price is: "+present+"and Wealth Gain is: "+i+" %";
    res.style.color="red";
}
else if(prev==present)
{
    res.innerText="No Pain No Gain";
    res.style.color="White";

}
else{
    res.innerText="Congratulations you are in Profit!"+" Effective Price is: "+present
    +" and Wealth Gain is: "+i+"% ";
    res.style.color="green";

}

}
btn.addEventListener('click',clickHandler);
