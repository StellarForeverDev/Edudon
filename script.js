console.clear();
console.log("started");

var ans = 0;
function showclass(id1, id2) {
  /*"none" in id2 to hide, "block" in id2 to show*/
  var thatclass = document.getElementsByClassName(id1)
  var num464 = 0
  for (i = 0; i < thatclass.length; i++) {
    thatclass[num464].style.display = id2;
    num464 = num464 + 1;
  };
};
//document.getElementById(id1).classList.add(id2);
function playanimation(id2) {
  document.body.classList.remove(id2);
  void document.body.offsetWidth;
  document.body.classList.add(id2);
};
function playanimationid(id1, id2) {
  document.getElementById(id1).classList.remove(id2);
  void document.getElementById(id1).offsetWidth;
  document.getElementById(id1).classList.add(id2);
};

var show = document.createElement("div");
show.innerHTML = "Open Edudon+";
document.body.appendChild(show);
show.id = "show";
var num244 = 0;
show.onclick = function(){
  if (num244 == 0) {
    showclass("et", "block");
    document.getElementById("show").innerHTML = "Close Edudon+";
    num244 = 1;
  } else {
    showclass("et", "none");
    document.getElementById("show").innerHTML = "Open Edudon+";
    num244 = 0;
  };
};

var cookieclick = document.createElement("div");
var cooks = 0;
cookieclick.id = "cookieclick";
cookieclick.classList.add("et");
cookieclick.onclick = function(){
  cooks = cooks + 1;
  document.getElementById("cookieclick").innerHTML = "Cookies: " + cooks;
};
document.body.appendChild(cookieclick);
document.getElementById("cookieclick").innerHTML = "Cookies: " + cooks;

var spin = document.createElement("div");
spin.classList.add("et");
spin.id = "spin";
const barrelRollStyleTag = document.createElement("style");
barrelRollStyleTag.id = "barrelRollStyleTag"
spin.innerHTML = "Spin"
barrelRollStyleTag.innerHTML = `
  @keyframes roll {
    from { -webkit-transform: rotate(0deg) }
    to   { -webkit-transform: rotate(3600deg) }
  }
  .lollol1 {
    animation: roll 5s 1;
  }
`;
spin.onclick = function(){
  if (ans == 0) {
    ans = 1;
    playanimation("lollol1");
    setTimeout(function(){
      ans = 0;
      document.body.classList.remove("lollol1");
    }, 5000);
  }
};
document.head.appendChild(barrelRollStyleTag);
document.body.appendChild(spin);

var rgb = document.createElement("div");
var rgbs = document.createElement("style");
rgb.innerHTML = "RGB Mode"
rgb.id = "rgb";
rgbs.innerHTML = `
  @keyframes lollollol {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }   
  }
  @keyframes wordanime {
    0% {
      color: blue
    }
    16.666% {
      color: cyan
    }
    33.333% {
      color: chartreuse
    }
    50% {
      color: gold
    }
    66.666% {
      color: crimson
    }
    83.333% {
      color: deeppink
    }
    100% {
      color: blue
    }
  }
  img {
    animation: lollollol 10s infinite !important;
  }
  * {
    animation: wordanime 10s infinite !important;
  }
`;
rgb.classList.add("et");
document.body.appendChild(rgb);
var num346 = 0;
//document.body.appendChild(rgbs);
rgb.onclick = function(){
  if (num346 == 0) {
    if (ans == 0) {
      ans = 1;
      document.body.appendChild(rgbs);
      //playanimation("num3125");
      num346 = 1;
    };
  } else {
    ans = 0;
    document.body.removeChild(rgbs);
    num346 = 0;
  };
};

var colormode = document.createElement("div");
var colorin1 = document.createElement("input");
var colorin2 = document.createElement("input");
var colorsub = document.createElement("button");
var colortxt1 = document.createElement("p");
var colortxt2 = document.createElement("p");
colormode.id = "colormode";
colorin1.id = "colorin1";
colorin2.id = "colorin2";
colorsub.id = "colorsub";
colortxt1.id = "colortxt1";
colortxt2.id = "colortxt2";
colorin1.classList.add("cpe");
colorin2.classList.add("cpe");
colorsub.classList.add("cpe");
colortxt1.classList.add("cpe");
colortxt2.classList.add("cpe");
colortxt1.innerHTML = "Choose Text Color";
colortxt2.innerHTML = "Choose Background Color";
colorsub.innerHTML = "Change Colors";
//colorin1.innerHTML = "Choose Text Color";
colorin1.type = "color";
colorin2.type = "color";
colormode.classList.add("et");
colormode.innerHTML = "Color Mode"
colormode.onclick = function(){
  showclass("cpe", "block");
};
colorsub.onclick = function(){
  var newcolorstyle = document.createElement("style");
  newcolorstyle.innerHTML = "* {color: " + document.getElementById("colorin1").value + " !important; background-color: " + document.getElementById("colorin2").value + " !important;}";
  document.body.appendChild(newcolorstyle);
  showclass("cpe", "none");
};
document.body.appendChild(colormode);
document.body.appendChild(colorin1);
document.body.appendChild(colorin2);
document.body.appendChild(colortxt1);
document.body.appendChild(colortxt2);
document.body.appendChild(colorsub);
showclass("cpe", "none");

var confetti = document.createElement("div");
confetti.id = "confetti";
var ce = document.createElement("img");
var cea = document.createElement("style");
cea.innerHTML = `
  .confdown1 {
    animation-name: confdown;
    animation-duration: 4s;
  }
  @keyframes confdown {
    0% {
      top: -300vh;
    }
    100% {
      top: 300vh;
    }
  }`;
ce.id = "ce";
ce.src = "https://i.postimg.cc/BZYfKVRG/art-7.png";
confetti.classList.add("et");
confetti.innerHTML = "Confetti Effect"
confetti.onclick = function(){
  if (ans == 0) {
    ans = 1;
    document.body.appendChild(cea);
    playanimationid("ce", "confdown1");
    setTimeout(function(){
      document.body.removeChild(cea);
    }, 4000);
    setTimeout(function(){ans = 0;}, 4000);
  };
};
document.body.appendChild(confetti);
document.body.appendChild(ce);
document.body.appendChild(cea);

var editpage = document.createElement("div");
editpage.classList.add("et");
editpage.id = "editpage";
editpage.innerHTML = "Editable Page";
var num897 = 0;
editpage.onclick = function(){
  if (num897 == 0) {
    document.body.contentEditable = "true"; document.designMode = "on";
    num897 = 1;
  } else {
    document.body.contentEditable = "false"; document.designMode = "off";
    num897 = 0;
  };
};
document.body.appendChild(editpage);

var crashpage = document.createElement("div");
crashpage.classList.add("et");
crashpage.id = "crashpage";
crashpage.innerHTML = "Crash Webpage";
crashpage.onclick = function(){
  //remove the comments 
  txt = "a";
  while(1){
    txt = txt += "a";
  };
};
document.body.appendChild(crashpage);

var adblocker = document.createElement("div");
adblocker.classList.add("et");
adblocker.id = "adblocker";
adblocker.innerHTML = "Ad Blocker";
adblocker.onclick = function(){
  (function() {
    function R(w) {
        try {
          var d = w.document,
              j, i, t, T, N, b, r = 1,
              C;
          for (j = 0; t = ["object", "embed", "applet", "iframe"][j]; ++j) {
              T = d.getElementsByTagName(t);
              for (i = T.length - 1;
              (i + 1) && (N = T[i]); --i) if (j != 3 || !R((C = N.contentWindow) ? C : N.contentDocument.defaultView)) {
                b = d.createElement("div");
                b.style.width = N.width;
                b.style.height = N.height;
                b.innerHTML = "<del>" + "</del>";
                N.parentNode.replaceChild(b, N);
              }
          }
        } catch (E) {
         r = 0
        }
        return r
    }
    R(self);
    var i, x;
    for (i = 0; x = frames[i]; ++i) R(x)
  })()
};
document.body.appendChild(adblocker);

var sfs = document.createElement("div");
sfs.classList.add("et");
sfs.id = "sfs";
sfs.innerHTML = "More From SFS";
sfs.onclick = function(){
  window.location.href='https://stellarforever.github.io/';
};
document.body.appendChild(sfs);

var edudon = document.createElement("p");
edudon.id = "edudon";
edudon.innerHTML = "Edudon+ v4<br>Made By StellarForever Studios";
document.body.appendChild(edudon);

var style = document.createElement("style");
style.innerHTML = `
  .et {
    border-radius: 6px; 
    height: 30px; 
    width: 150px; 
    background: linear-gradient(90deg, #ff00ee 0.000%, #ff635f 50.000%, #ffdd33 100.000%);
    color: white; 
    font-size: 15px; 
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
    font-weight: 900; 
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); 
    line-height: 30px; 
    vertical-align: middle; 
    text-align: center; 
    user-select: none; 
    z-index: 99999999999;
  }
  #show {
    border-radius: 6px; 
    background: linear-gradient(90deg, #ff00ee 0.000%, #ff635f 50.000%, #ffdd33 100.000%);
    color: white; 
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
    font-weight: 900; 
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); 
    vertical-align: middle; 
    text-align: center; 
    user-select: none; 
    z-index: 99999999999;
    height: 40px;
    width: 200px;
    font-size: 20px;
    line-height: 40px; 
  }
  #colortxt1 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 30vh;
    color: white;
    -webkit-text-stroke: 0.3px black;
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
  }
  #colorin1 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 40vh;
  }
  #colortxt2 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 50vh;
    color: white;
    -webkit-text-stroke: 0.3px black;
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
  }
  #colorin2 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 60vh;
  }
  #colorsub {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 70vh;
  }
  #ce {
    position: fixed;
    top: -300vh;
    left: 50vw;
    transform: translate(-50%, 0);
    width: 100vw;
    z-index: 9999999999999999999;
  }
  #edudon {
    position: fixed;
    left: 5px;
    bottom: -5px;
    font-size: 2vh;
    color: black;
    font-family: Futura, Trebuchet MS, Arial,  sans-serif;
    z-index: 999999999999;
    filter: grayscale(100%);
  }
  #show {
    position: fixed;
    top: 15px;
    left: 15px;
  }
  #cookieclick {
    position: fixed;
    top: 60px;
    left: 15px;
  }
  #spin {
    position: fixed;
    top: 95px;
    left: 15px;
  }
  #rgb {
    position: fixed;
    top: 130px;
    left: 15px;
  }
  #colormode {
    position: fixed;
    top: 165px;
    left: 15px;
  }
  #confetti {
    position: fixed;
    top: 200px;
    left: 15px;
  }
  #editpage {
    position: fixed;
    top: 235px;
    left: 15px;
  }
  #crashpage {
    position: fixed;
    top: 270px;
    left: 15px;
  }
  #adblocker {
    position: fixed;
    top: 305px;
    left: 15px;
  }
  #sfs {
    position: fixed;
    top: 340px;
    left: 15px;
  }
`;
document.body.appendChild(style);
showclass("et", "none");
completion();
