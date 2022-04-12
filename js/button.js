var i=0;
document.getElementById("next").onclick = function(){
    var audio=document.getElementById("audio1");
  //     var add = document.getElementById()
    
    if(i==0){
        var div=document.createElement("a");
        div.id="language";
        div.style.width="100px";
        div.style.backgroundColor="blue";
        div.style.height="40px";
        div.style.display="inline-block";
        div.style.float="left";
        div.innerHTML="中/日";
        div.style.fontSize="30px";
        div.style.marginLeft="14px";
        div.style.marginRight="14px";
        div.style.borderRadius="3px";
        i++;
    }
    audio.insertBefore(div,audio.lastElementChild);
}