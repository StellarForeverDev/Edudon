console.clear();
console.log("started");
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


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
function show1(id1, id2) {
  /*"none" in id2 to hide, "block" in id2 to show*/
  document.getElementById(id1).style.display = id2;
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
function sqrt(n) {
  return Math.sqrt(n);
};
pi = Math.PI;
function round(n) {
  return Math.round(n);
};
function pow(n, n1) {
  return Math.pow(n, n1);
};
function abs(n) {
  return Math.abs(n);
};
function ceil(n) {
  return Math.ceil(n);
};
function floor(n) {
  return Math.floor(n);
};
function sin(n) {
  return Math.sin(n * Math.PI / 180);
};
function cos(n) {
  return Math.cos(n * Math.PI / 180);
};
function tan(n) {
  return Math.tan(n);
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
function log(n) {
  return Math.log(n);
};

function decode_base64 (s)
{
    var e = {}, i, k, v = [], r = '', w = String.fromCharCode;
    var n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];

    for (z in n)
    {
        for (i = n[z][0]; i < n[z][1]; i++)
        {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++)
    {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i+=72)
    {
        var b = 0, c, x, l = 0, o = s.substring(i, i+72);
        for (x = 0; x < o.length; x++)
        {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8)
            {
                r += w((b >>> (l -= 8)) % 256);
            }
         }
    }
    return r;
}

var edudon = document.createElement("p");
edudon.id = "edudon";
edudon.innerHTML = "Edudon v9<br>Made By StellarForever Studios";
document.body.appendChild(edudon);

var showe = document.createElement("div");
showe.innerHTML = "Open Edudon";
showe.id = "showe";
document.body.appendChild(showe);
var num345 = 0;
showe.onclick = function(){
  if (num345 == 0) {
    showclass("e", "block");
    document.getElementById("showe").innerHTML = "Close Edudon";
    num345 = 1;
  } else {
    showclass("e", "none");
    document.getElementById("showe").innerHTML = "Open Edudon";
    num345 = 0;
    if (num244 == 1) {
      document.getElementById("showp").click();
    };
    if (num456 == 1) {
      document.getElementById("showb").click();
    };
    if (num982 == 1) {
      document.getElementById("showr").click();
    };
    if (document.getElementById("npi").style.display == "block") {
      document.getElementById("notepad").click();
    };
    if (document.getElementById("cook").style.display == "block") {
      document.getElementById("cookclick").click();
    };
    if (document.getElementById("calci").style.display == "block") {
      document.getElementById("calc").click();
    };
  };
}; 

var showb = document.createElement("div");
showb.innerHTML = "Open EdudonBasic";
document.body.appendChild(showb);
showb.id = "showb";
showb.classList.add("e");
var num456 = 0;
showb.onclick = function(){
  if (num456 == 0) {
    showclass("etb", "block");
    document.getElementById("showb").innerHTML = "Close EdudonBasic";
    num456 = 1;
  } else {
    showclass("etb", "none");
    document.getElementById("showb").innerHTML = "Open EdudonBasic";
    num456 = 0;
    if (document.getElementById("npi").style.display == "block") {
      document.getElementById("notepad").click();
    };
    if (document.getElementById("cook").style.display == "block") {
      document.getElementById("cookclick").click();
    };
    if (document.getElementById("calci").style.display == "block") {
      document.getElementById("calc").click();
    };
  };
};

var darkmode = document.createElement("div");
darkmode.id = "darkmode";
darkmode.classList.add("etb");
darkmode.innerHTML = "Dark Mode";
var dms = document.createElement("style");
dms.innerHTML = "*:not(img) {color: white !important; background-color: black !important}";
darkmode.onclick = function(){
  document.body.appendChild(dms);
};
document.body.appendChild(darkmode);

//js console
var jsc = document.createElement("div");
var jsci = document.createElement("input");
var jscs = document.createElement("button");
jsc.classList.add("etb");
jsc.id = "jsc";
jsci.id = "jsci";
jscs.id = "jscs";
jscs.innerHTML = "Run";
jsc.innerHTML = "JS Console"
jsci.placeholder = "Type Your JS Code Here..."
jsc.onclick = function(){
  show1("jsci", "block");
  show1("jscs", "block");
};
jscs.onclick = function(){
  var gencode = document.createElement("script");
  gencode.innerHTML = document.getElementById("jsci").value;
  document.getElementById("jsci").value = "";
  document.body.appendChild(gencode);
  show1("jsci", "none");
  show1("jscs", "none");
};
document.body.appendChild(jsc);
document.body.appendChild(jsci);
document.body.appendChild(jscs);
show1("jsci", "none");
show1("jscs", "none");

var notepad = document.createElement("div");
var npi = document.createElement("div");
notepad.classList.add("etb");
notepad.id = "notepad";
npi.id = "npi";
npi.contentEditable = "true";
notepad.innerHTML = "Notepad"
npi.placeholder = "Type something important here...";
var num924 = 0;
notepad.onclick = function(){
  if (num924 == 0) {
    show1("npi", "block");
    num924 = 1;
  } else {
    show1("npi", "none");
    num924 = 0;
  };
};
document.body.appendChild(notepad);
document.body.appendChild(npi);
show1("npi", "none");

var cookclick = document.createElement("div");
var cook = document.createElement("div");
var cookup = document.createElement("button");
var cooktxt = document.createElement("div");
cooktxt.id = "cooktxt";
cookclick.classList.add("etb");
cookclick.id = "cookclick";
cook.id = "cook";
cookup.id = "cookup";
//cook.src = "https://i.ibb.co/Jtkk1PT/art-16.png";
cook.innerHTML = "🍪";
var clks = 0;
var clkup = 1;
var num126 = 0;
var upc = 1
cookclick.innerHTML = "Cookie Clicker";
cookclick.onclick = function(){
  if (num126 == 0) {
    show1("cook", "block");
    show1("cookup", "block");
    show1("cooktxt", "block");
    num126 = 1;
  } else {
    show1("cook", "none");
    show1("cookup", "none");
    show1("cooktxt", "none");
    num126 = 0;
  };
};
cook.onclick = function(){
  clks = clks + clkup;
  document.getElementById("cooktxt").innerHTML = "🍪: " + clks;
  document.getElementById("cook").style.transform = "translate(-50%, -45%)";
  setTimeout(function(){document.getElementById("cook").style.transform = "translate(-50%, -50%)"}, 100);
};
cookup.onclick = function(){
  if (clks >= clkup * 50 * upc) {
    clks = clks - clkup * 50;
    clkup = clkup + 1;
    upc = upc * 1.5;
    document.getElementById("cookup").innerHTML = "Upgrade: " + clkup * 50 * upc + "🍪";
    document.getElementById("cooktxt").innerHTML = "🍪: " + clks;
  };
};
document.body.appendChild(cookclick);
document.body.appendChild(cook);
document.body.appendChild(cookup);
document.body.appendChild(cooktxt);
document.getElementById("cookup").innerHTML = "Upgrade: " + clkup * 50 + "🍪";
document.getElementById("cooktxt").innerHTML = "🍪: " + clks;
show1("cook", "none");
show1("cookup", "none");
show1("cooktxt", "none");

//calculator
var calc = document.createElement("div");
var calci = document.createElement("input");
var calcs = document.createElement("button");
calc.classList.add("etb");
calc.id = "calc";
calc.innerHTML = "Calculator";
calci.id ="calci";
calcs.id = "calcs";
calci.placeholder = "Type Your Equation Here...";
calcs.innerHTML = "Enter";
calcs.onclick = function(){
  var cans = eval(document.getElementById("calci").value);
  alert("Answer: " + cans);
  document.getElementById("calci").value = "";
  document.getElementById("calc").click();
};
var num692 = 0;
calc.onclick = function(){
  if (num692 == 1) {
    show1("calci", "none");
    show1("calcs", "none");
    num692 = 0;
  } else  {
    show1("calci", "block");
    show1("calcs", "block");
    num692 = 1;
  };
};
document.body.appendChild(calc);
document.body.appendChild(calci);
document.body.appendChild(calcs);
show1("calci", "none");
show1("calcs", "none");

//link to my website
var sfs = document.createElement("div");
sfs.classList.add("etb");
sfs.id = "sfs";
sfs.innerHTML = "More From SFS";
sfs.onclick = function(){
  window.location.href='https://stellarforever.github.io/';
};
document.body.appendChild(sfs);

var bstyle = document.createElement("style");
bstyle.innerHTML = `
  .etb {
    border-radius: 6px; 
    height: 30px; 
    width: 150px; 
    background: linear-gradient(90deg, #79ff00 0.000%, #00ffa1 50.000%, #46ffe8 100.000%);
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
    position: fixed;
    left: 15px;
  }
  #showb {
    border-radius: 6px; 
    background: linear-gradient(90deg, #79ff00 0.000%, #00ffa1 50.000%, #46ffe8 100.000%);
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
    position: fixed;
    top: 15px;
    left: 15px;
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
  #showe {
    position: fixed;
    bottom: 2px;
    right: 2px;
    color: black;
    font-size: 15px; 
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
    font-weight: 900; 
    user-select: none;
    background-color: white;
    z-index: 999999999999999;
    padding: 2px;
    border: 2px solid black;
  }
  #jsci {
    height: 25px;
    width: 200px;
    z-index: 999999999999999999999;
    position: fixed;
    left: 165px;
    top: 95px;
  }
  #jscs {
    height: 30px;
    width: 50px;
    z-index: 999999999999999999999;
    position: fixed;
    left: 370px;
    top: 95px;
  }
  #npi {
    position: fixed;
    top: 130px;
    left: 165px;
    height: 220px;
    width: 200px;
    background-color: #e6ed58;
    border: 3px solid #edcd58;
    border-radius: 10px;
    color: #171613; 
    vertical-align: text-top;
    overflow: auto;
    overflow-x: hidden;
    padding: 7px;
    font-family: Futura, Trebuchet MS, Arial,  sans-serif;
  }
  #cook {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    font-size: 30vh;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999999999999999999999999999;
  }
  #cookup {
    position: fixed;
    top: 70vh;
    left: 50vw;
    transform: translate(-50%, 0);
    height: 20px;
    width: 150px;
  }
  #cooktxt {
    position: fixed;
    bottom: 70vh;
    left: 50vw;
    transform: translate(-50%, 0);
    z-index: 999999999999999999999999999;
    color: black
    font-size: 4vh;
  }
  #calci {
    position: fixed;
    left: 165px;
    top: 200px;
    height: 20px;
    width: 170px;
    z-index: 99999999999999999999999999999;
  }
  #calcs {
    position: fixed;
    left: 345px;
    top: 200px;
    height: 25px;
    width: 60px;
    z-index: 99999999999999999999999999999;
  }
  #darkmode {
    top: 60px;
  }
  #jsc {
    top: 95px;
  }
  #notepad {
    top: 130px;
  }
  #cookclick {
    top: 165px;
  }
  #calc {
    top: 200px;
  }
  #sfs {
    top: 235px;
  }
`;
document.body.appendChild(bstyle);
showclass("etb", "none");
showclass("e", "none");


















var showp = document.createElement("div");
showp.innerHTML = "Open EdudonPlus";
document.body.appendChild(showp);
showp.id = "showp";
showp.classList.add("e");
var num244 = 0;
showp.onclick = function(){
  if (num244 == 0) {
    showclass("et", "block");
    document.getElementById("showp").innerHTML = "Close EdudonPlus";
    num244 = 1;
  } else {
    showclass("et", "none");
    document.getElementById("showp").innerHTML = "Open EdudonPlus";
    num244 = 0;
  };
};

var fontc = document.createElement("div");
var fonti = document.createElement("input");
var fontsub = document.createElement("button");
fonti.id = "fonti";
fontsub.id = "fontsub";
fontsub.innerHTML = "Change Font";
fonti.placeholder = "Type Font Name Here...";
fontc.id = "fontc";
fontc.classList.add("et");
fontc.onclick = function(){
  show1("fonti", "block");
  show1("fontsub", "block");
};
fontsub.onclick = function(){
  var fonts = document.createElement("style");
  fonts.innerHTML = "* {font-family: " + document.getElementById("fonti").value + " !important;}";
  document.body.appendChild(fonts);
  document.getElementById("fonti").value = "";
  show1("fonti", "none");
  show1("fontsub", "none");
};
document.body.appendChild(fontc);
document.body.appendChild(fonti);
document.body.appendChild(fontsub);
document.getElementById("fontc").innerHTML = "Font";
show1("fonti", "none");
show1("fontsub", "none");

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
  newcolorstyle.innerHTML = "*:not(img) {color: " + document.getElementById("colorin1").value + " !important; background-color: " + document.getElementById("colorin2").value + " !important;}";
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
  #showp {
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
    position: fixed;
    top: 15px;
    left: 230px;
  }
  #colortxt1 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 30vh;
    color: white;
    -webkit-text-stroke: 0.3px black;
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
    z-index: 99999999999;
  }
  #colorin1 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 40vh;
    z-index: 99999999999;
  }
  #colortxt2 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 50vh;
    color: white;
    -webkit-text-stroke: 0.3px black;
    font-family: Futura, Trebuchet MS, Arial,  sans-serif; 
    z-index: 99999999999;
  }
  #colorin2 {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 60vh;
    z-index: 99999999999;
  }
  #colorsub {
    position: fixed;
    left: 50vw;
    transform: translate(-50%, 0);
    top: 70vh;
    z-index: 99999999999;
  }
  #ce {
    position: fixed;
    top: -300vh;
    left: 50vw;
    transform: translate(-50%, 0);
    width: 100vw;
    z-index: 9999999999999999999;
  }
  #fontc {
    position: fixed;
    top: 60px;
    left: 230px;
  }
  #spin {
    position: fixed;
    top: 95px;
    left: 230px;
  }
  #rgb {
    position: fixed;
    top: 130px;
    left: 230px;
  }
  #colormode {
    position: fixed;
    top: 165px;
    left: 230px;
  }
  #confetti {
    position: fixed;
    top: 200px;
    left: 230px;
  }
  #editpage {
    position: fixed;
    top: 235px;
    left: 230px;
  }
  #crashpage {
    position: fixed;
    top: 270px;
    left: 230px;
  }
  #adblocker {
    position: fixed;
    top: 305px;
    left: 230px;
  }
  #fonti {
    position: fixed;
    top: 60px;
    left: 380px;
    width: 150px
    text-align: center;
  }
  #fontsub {
    position: fixed;
    top: 60px;
    left: 530px;
    text-align: center;
  }
`;
document.body.appendChild(style);
showclass("et", "none");
showclass("e", "none");














var showr = document.createElement("div");
showr.innerHTML = "Open EdudonPro";
document.body.appendChild(showr);
showr.id = "showr";
showr.classList.add("e");
var num982 = 0;
showr.onclick = function(){
  if (num982 == 0) {
    showclass("etr", "block");
    document.getElementById("showr").innerHTML = "Close EdudonPro";
    num982 = 1;
  } else {
    showclass("etr", "none");
    document.getElementById("showr").innerHTML = "Open EdudonPro";
    num982 = 0;
  };
};

var skipedpuzzle = document.createElement("div");
skipedpuzzle.id = "skipedpuzzle";
skipedpuzzle.classList.add("etr");
skipedpuzzle.innerHTML = "Skip EP Video";
skipedpuzzle.onclick = function(){
  if (window.location.href.includes("https://edpuzzle.com/assignments/") == true) {
    var rawseed = window.location.href ;
    var seed = rawseed.split("/")[4];
    $.get(`https://edpuzzle.com/api/v3/assignments/${seed}`).success((data) => {
      if (data.medias[0].source == "youtube") {
        alert("This Only Works For Non-Youtube Videos")
      } else {
        document.getElementsByTagName("video").item(0).currentTime = 9999;
        document.getElementsByTagName("video").item(0).currentTime = 9998;
      };
    });
  } else {
    alert("Go to an EdPuzzle video to skip it!");
  };
};
document.body.appendChild(skipedpuzzle);

var epans = document.createElement("div");
epans.id = "epans";
epans.classList.add("etr");
epans.innerHTML = "EP Answers";
var epansi = document.createElement("div");
epansi.id = "epansi";
epansi.innerHTML = "Click Here To Close<br>";
epansi.onclick = function(){
  show1("epansi", "none");
};
epans.onclick = function(){
  if (window.location.href.includes("https://edpuzzle.com/assignments/") == true) {
    var finalansed = "Click Here To Close<br>";
    var rawseed = window.location.href;
    var seed = rawseed.split("/")[4];
    //console.log(seed);
    $.get(`https://edpuzzle.com/api/v3/assignments/${seed}`).success((data) => {
      show1("epansi", "block");
      document.getElementById("epansi").innerHTML = "Click Here To Close<br>";
      for (i=0; i < data.medias[0].questions.length; i++) {
        console.log(i);
        var curque = i;
        for (lol1=0; lol1 < data.medias[0].questions[curque].choices.length; lol1++) {
          if (data.medias[0].questions[curque].choices[lol1].isCorrect == true) {
            var correctquestionid = data.medias[0].questions[curque].choices[lol1].body[0].html;
            var html1 = correctquestionid;
            var div1 = document.createElement("div");
            div1.innerHTML = html1;
            var text1 = div1.textContent || div1.innerText || "";
            //alert("correct answer for Q" + eval(curque + 1) + ": " + text1);
            finalansed = finalansed + "Q" + eval(curque + 1) + ": " + text1 + "<br>";
            document.getElementById("epansi").innerHTML = finalansed;
          };
        };
      };
    });
  } else {
    alert("Go to an EdPuzzle video to get the answers for it!");
  };
};
document.body.appendChild(epans);
document.body.appendChild(epansi);
show1("epansi", "none");

var kaans = document.createElement("div");
kaans.classList.add("etr");
kaans.id = "kaans";
kaans.style.top = "130px";
kaans.innerHTML = "KA Answers"
kaans.onclick = function(){
  alert("(ask the creator for help)To get correct questions, split screen the browser and write random thing on one window and see what was the correct answer and then write the correct answer on another window");
};
document.body.appendChild(kaans);

var freans = document.createElement("div");
freans.classList.add("etr");
freans.id = "freans";
freans.innerHTML = "FR Answers";
document.body.appendChild(freans);
freans.onclick = function(){
  if (window.location.href.includes("https://student.freckle.com/#/questions/") == true) {
    var seed2 = document.querySelector("#dashboard-content > div > div > div.session__layVertically___3Hliu > div.session__layHorizontally___1mupr > div.scrollable__scrollableWrapper___2Sb4W.session__scrollableWrapper___30XKI > div > div > div:nth-child(2) > div").dataset.questionId;
    $.get(`https://api.freckle.com/2/math/questions/${seed2}`).success((data) => {
      var ourans = data["obfuscated-correct-answers"];
      var finans1 = decode_base64(ourans);
      alert("Answer is " + finans1 + "!");
    });
  } else {
    alert("you have to go to a math freckle assignment to get the answer for it!");
  };
};
document.body.appendChild(freans);
//document.querySelector("#dashboard-content > div > div > div.session__layVertically___3Hliu > div.session__layHorizontally___1mupr > div.scrollable__scrollableWrapper___2Sb4W.session__scrollableWrapper___30XKI > div > div > div:nth-child(2) > div").dataset.questionId
//freckle farm
var frefarm = document.createElement("div");
frefarm.classList.add("etr");
frefarm.id = "frefarm";
frefarm.innerHTML = "FR Coin Farm";
document.body.appendChild(frefarm);
frefarm.onclick = function(){
  
};
document.body.appendChild(frefarm);

var srjs = document.createElement("div");
var srfr1 = document.createElement("script");
srfr1.id = "srfr1";
srfr1.src = "https://redditjs.com/subreddit.js";
srfr1.setAttribute("data-height", "400");
srfr1.setAttribute("data-width", "600");
srfr1.setAttribute("data-theme", "dark");
srfr1.setAttribute("data-subreddit", "dankmemes");
srjs.classList.add("etr");
srjs.id = "srjs";
srjs.innerHTML = "r/dankmemes";
document.body.appendChild(srjs);
srjs.onclick = function(){
  document.body.appendChild(srfr1);
};
document.body.appendChild(srjs);

var gsae = document.createElement("div");
var gsif = document.createElement("iframe");
gsif.id = "gsif";
gsif.src = "https://thememedone.github.io/GSAE/";
gsif.setAttribute("height", "400");
gsif.setAttribute("width", "600");
gsae.classList.add("etr");
gsae.id = "gsae";
gsae.innerHTML = "play Gs:AE";
document.body.appendChild(srjs);
gsae.onclick = function(){
  document.body.appendChild(gsif);
};
document.body.appendChild(gsae);


var styler = document.createElement("style");
styler.innerHTML = `
.etr {
  border-radius: 6px; 
  height: 30px; 
  width: 150px; 
  background: linear-gradient(90deg, #4dd5ff 0.000%, #00a6ff 50.000%, #ac47ff 100.000%);
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
  position: fixed;
  left: 445px;
}
#showr {
  border-radius: 6px; 
  background: linear-gradient(90deg, #4dd5ff 0.000%, #00a6ff 50.000%, #ac47ff 100.000%);
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
  position: fixed;
  top: 15px;
  left: 445px;
}
#epansi {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 140px;
  width: 120px;
  background-color: #ffff66;
  border: 2px solid #ffcc00;
  padding: 2px;
}
#skipedpuzzle {
  top: 60px;
}
#epans {
  top: 95px;
};
#kaans {
  top: 130px;
}
#freans {
  top: 165px;
}
#frefarm {
  top: 200px;
}
#srjs {
  top: 235px;
}
#gsae {
  top: 270px;
}
`;
document.body.appendChild(styler);
showclass("etr", "none");
showclass("e", "none");

completion();



/*if (window.location.href.includes("https://edpuzzle.com/assignments/") == true) {
  var rawseed = window.location.href ;
  var seed = rawseed.split("/")[4];
  //console.log(seed);
  $.get(`https://edpuzzle.com/api/v3/assignments/${seed}`).success((data) => {
    for (i=0; i < data.medias[0].questions.length; i++) {
      console.log(i);
      var curque = i;
      for (lol1=0; lol1 < data.medias[0].questions[curque].choices.length; lol1++) {
        if (data.medias[0].questions[curque].choices[lol1].isCorrect == true) {
          var correctquestionid = data.medias[0].questions[curque].choices[lol1].body[0].html;
          var html1 = correctquestionid;
          var div1 = document.createElement("div");
          div1.innerHTML = html1;
          var text1 = div1.textContent || div1.innerText || "";
          alert("correct answer for Q" + eval(curque + 1) + ": " + text1);
        };
      };
    };
  });
};*/
