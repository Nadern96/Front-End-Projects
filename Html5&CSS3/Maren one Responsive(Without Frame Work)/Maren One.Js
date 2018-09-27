var menu = document.getElementById("menu"),
    nav = document.getElementById("nav"),
    container = document.getElementsByClassName("container");
    var i;
menu.onclick = function () {
    "use strict";
    nav.classList.toggle('hide');
};
window.onclick = nav.classList.add("hide");
document.getElementById("nav").children[0].onclick = function (){
    "use strict";
    nav.classList.add("hide");
};
document.getElementById("nav").children[1].onclick = function (){
    "use strict";
    nav.classList.add("hide");
};document.getElementById("nav").children[2].onclick = function (){
    "use strict";
    nav.classList.add("hide");
};document.getElementById("nav").children[3].onclick = function (){
    "use strict";
    nav.classList.add("hide");
};document.getElementById("nav").children[4].onclick = function (){
    "use strict";
    nav.classList.add("hide");
};document.getElementById("nav").children[5].onclick = function (){
    "use strict";
    nav.classList.add("hide");
};