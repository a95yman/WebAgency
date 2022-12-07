var main = document.getElementsByTagName("main")[0];
var projects = document.getElementById("projects");
var showcase = document.getElementById("showcase");
function ShowProjects(){
    main.style.width="90%";
    main.style.height="90%";
    main.style.boxShadow="rgba(0,0,0,0.2) -10px -10px 50px";
    main.style.border="1px solid #666";
    main.style.transform="skewX(-2deg) skewY(-5deg)";
    setTimeout(function(){
        main.style.left="110%";
        projects.style.left="0";
        setTimeout(function(){
            projects.style.width="100%";
            projects.style.height="100%";
            projects.style.border="none";
            projects.style.transform="none";
        }, 1000);
    }, 1000);
}
var products = document.getElementsByClassName("product");
var dark = false;
var light = false;
setInterval(function(){
    if(checkFifty(products[1])){
        light = false;
        if(!dark){
            dark = true;
            projects.style.background="#333";
        }
    }
    else{
        dark = false;
        if(!light){
            light=true;
         projects.style.background="#fff";   
        }
    }
}, 100);
function checkFifty(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top + (rect.height/2) > 0 && // top
        rect.left + (rect.width/2) > 0 && // left
        rect.top + (rect.height/2) < (window.innerHeight || document.documentElement.clientHeight) && // bottom
        rect.left + (rect.width/2) < (window.innerWidth || document.documentElement.clientWidth) // right
    );
}
var sc = false;
var sc2 = false;
setInterval(function(){
    if(checkFull(showcase)){
        sc2 = true;
        if(!sc){
            sc = true;
            showcase.getElementsByClassName('part')[1] .style.left = "0";
        }
    }
    else{
            sc = false;
            if(sc2){
                sc2 = false;
                showcase.getElementsByClassName('part')[1] .style.left = "100%";
            }
        }
}, 100);
function checkFull(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top + (rect.height/1.3) > 0 && // top
        rect.left + (rect.width/1.3) > 0 && // left
        rect.top + (rect.height/1.3) < (window.innerHeight || document.documentElement.clientHeight) && // bottom
        rect.left + (rect.width/1.3) < (window.innerWidth || document.documentElement.clientWidth) // right
    );
}
function ReturnHome(){
    
    projects.style.width="90%";
    projects.style.height="90%";
    projects.style.boxShadow="rgba(0,0,0,0.2) -10px -10px 50px";
    projects.style.border="1px solid #666";
    projects.style.transform="skewX(-2deg) skewY(-5deg)";
    
    setTimeout(function(){
        main.style.left="0";
        projects.style.left="-100%";
            setTimeout(function(){
        main.style.width="100%";
    main.style.height="100%";
    main.style.boxShadow="none";
    main.style.border="none";
    main.style.transform="none";
        }, 1000);
    }, 1000);
}
var videos = document.getElementsByTagName("video");
var vids = [];
for(var i=0; i<videos.length; i++){
    vids.push(videos[i].offsetWidth);
    CLICK(videos[i], i);
}
var cover = document.getElementsByClassName('cover')[0];
var vdtmp;
var vdtmpi;
function CLICK(vd,i){
    vd.onclick=function(){
        vdtmp = vd;
        vdtmpi = i;
        vdtmpx = vd.offsetWidth;
        vdtmpy = vd.offsetHeight;
        cover.style.visibility="visible";
        cover.style.opacity ="1";
        vd.style.position="fixed";
        vd.style.left="50%";
        vd.style.top="50%";
        vd.style.zIndex="4";
        vd.style.transform="translate(-50%,-50%)";
        vd.style.width=(Number(window.innerWidth)-400)+"px";
    };
   
}
cover.onclick=function(){
        cover.style.visibility="hidden";
        cover.style.opacity ="0";
        vdtmp.style.position="relative";
        vdtmp.style.left="0";
        vdtmp.style.top="0";
        vdtmp.style.zIndex="2";
        vdtmp.style.transform="skewX(-2deg) skewY(-2deg)";
        vdtmp.style.width=vids[vdtmpi]+"px";
    };
var cards = document.getElementsByClassName('card');
var intr;
var intr2;
var cardsh = false;
var cardhd = false;
var sh = false;
var hd = false;
setInterval(function(){
    if(checkFifty(document.getElementById("pricing"))){
        cardhd=false;
        if(!cardsh)
        {
            cardsh=true;
            intr = 100;
            PRICINGS();   
        }
    }
    else{
        cardsh=false;
        if(!cardhd)
        {
            cardhd=true;
        intr2 = 100;
            PRICINGSOUT();      
        }
    }
}, 100);
function PRICINGS(){
    for(var i=0; i<cards.length; i++){
        DO1(cards[i], intr);
        intr+=100;
    }
}
function PRICINGSOUT(){
    for(var i=cards.length; i>=0; i--){
        DO2(cards[i], intr2);
        intr2+=100;
    }
}
function DO1(c,i){
    setTimeout(function(){
        c.style.left="0";
    },i);
}
function DO2(c,i){
    setTimeout(function(){
        c.style.left="100%";
    },i);
}