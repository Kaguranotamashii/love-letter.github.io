// var lit = document.getElementsByClassName('litters');
// var litremove=document.getElementsByClassName('litter');
// lit.onclick=function(){
//     litremove.remove();
// }

function deleteChild() {
    var e = document.getElementsByClassName("litter");
    var first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
}
var btn = document.getElementById("btn").onclick = function () {
    deleteChild();
}