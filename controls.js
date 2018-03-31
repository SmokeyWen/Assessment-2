document.getElementById("colorinput").addEventListener("change",function(){
    document.getElementById("preview").style.backgroundColor = colorinput.value;
});

document.getElementById("range").addEventListener("click",function(){
    changeType("range");
});

document.getElementById("number").addEventListener("click",function(){
    changeType("number")
});

document.getElementById("input1").addEventListener("change",function(){
    document.getElementById("hair").style.width = input1.value+"%";
});

document.getElementById("input2").addEventListener("change",function(){
    document.getElementById("eyes").style.width = input2.value+"%";
});

document.getElementById("input3").addEventListener("change",function(){
    document.getElementById("nose").style.width = input3.value+"%";
});

document.getElementById("input4").addEventListener("change",function(){
    document.getElementById("mouth").style.width = input4.value+"%";
});

document.getElementById("hair").addEventListener("click",function(){
    if(document.getElementById("hair").src.match("img/hair1.png")){
        document.getElementById("hair").src = "img/hair2.png";
    }
    else if(document.getElementById("hair").src.match("img/hair2.png")){
        document.getElementById("hair").src = "img/hair3.png";
    }
    else if(document.getElementById("hair").src.match("img/hair3.png")){
        document.getElementById("hair").src = "img/hair1.png";
    }
});

document.getElementById("mouth").addEventListener("click",function(){
    if(document.getElementById("mouth").src.match("img/mouth1.png")){
        document.getElementById("mouth").src = "img/mouth2.png";
    }
    else if(document.getElementById("mouth").src.match("img/mouth2.png")){
        document.getElementById("mouth").src = "img/mouth3.png";
    }
    else if(document.getElementById("mouth").src.match("img/mouth3.png")){
        document.getElementById("mouth").src = "img/mouth1.png";
    }
});

document.getElementById("eyes").addEventListener("click",function(){
    if(document.getElementById("eyes").src.match("img/eyes1.png")){
        document.getElementById("eyes").src = "img/eyes2.png";
    }
    else if(document.getElementById("eyes").src.match("img/eyes2.png")){
        document.getElementById("eyes").src = "img/eyes3.png";
    }
    else if(document.getElementById("eyes").src.match("img/eyes3.png")){
        document.getElementById("eyes").src = "img/eyes1.png";
    }
});

document.getElementById("nose").addEventListener("click",function(){
    if(document.getElementById("nose").src.match("img/nose1.png")){
        document.getElementById("nose").src = "img/nose2.png";
    }
    else if(document.getElementById("nose").src.match("img/nose2.png")){
        document.getElementById("nose").src = "img/nose3.png";
    }
    else if(document.getElementById("nose").src.match("img/nose3.png")){
        document.getElementById("nose").src = "img/nose1.png";
    }
});

document.getElementById("plus").addEventListener("click",function(){
    createFace();
});

document.getElementById("random").addEventListener("click",function(){
    randomFace();
});

function createFace(){
    var newpic = document.createElement("div");
    var newhair = document.createElement("img");
    var neweyes = document.createElement("img");
    var newnose = document.createElement("img");
    var newmouth = document.createElement("img");
    document.getElementById("smalldiv").appendChild(newpic);
    newpic.className = "newdiv";
    newpic.appendChild(newhair);
    newpic.appendChild(neweyes);
    newpic.appendChild(newnose);
    newpic.appendChild(newmouth);
    newhair.className = "newitems";
    neweyes.className = "newitems";
    newnose.className = "newitems";
    newmouth.className = "newitems";
    newpic.style.backgroundColor = preview.style.backgroundColor;
    newhair.src = document.getElementById("hair").src;
    neweyes.src = document.getElementById("eyes").src;
    newnose.src = document.getElementById("nose").src;
    newmouth.src = document.getElementById("mouth").src;
    newhair.style.width = document.getElementById("input1").value+"%";
    neweyes.style.width = document.getElementById("input2").value+"%";
    newnose.style.width = document.getElementById("input3").value+"%";
    newmouth.style.width = document.getElementById("input4").value+"%";
    newhair.style.top = "0%";
    neweyes.style.top = "40%";
    newnose.style.top = "55%";
    newmouth.style.top = "75%";
}

function randomFace(){
    var random1 = Math.random();
    var random2 = Math.random();
    var random3 = Math.random();
    var random4 = Math.random();
    if(random1 <=0.33){
        document.getElementById("hair").src = "img/hair1.png";
    }
    else if(random1 <= 0.66){
        document.getElementById("hair").src = "img/hair2.png";
    }
    else if(random1 <= 1){
        document.getElementById("hair").src = "img/hair3.png";
    }
    if(random2 <=0.33){
        document.getElementById("eyes").src = "img/eyes1.png";
    }
    else if(random2 <= 0.66){
        document.getElementById("eyes").src = "img/eyes2.png";
    }
    else if(random2 <= 1){
        document.getElementById("eyes").src = "img/eyes3.png";
    }
    if(random3 <=0.33){
        document.getElementById("nose").src = "img/nose1.png";
    }
    else if(random3 <= 0.66){
        document.getElementById("nose").src = "img/nose2.png";
    }
    else if(random3 <= 1){
        document.getElementById("nose").src = "img/nose3.png";
    }
    if(random4 <=0.33){
        document.getElementById("mouth").src = "img/mouth1.png";
    }
    else if(random4 <= 0.66){
        document.getElementById("mouth").src = "img/mouth2.png";
    }
    else if(random4 <= 1){
        document.getElementById("mouth").src = "img/mouth3.png";
    }
    
    document.getElementById("input1").value = random1*100;
    document.getElementById("input2").value = random2*100;
    document.getElementById("input3").value = random3*100;
    document.getElementById("input4").value = random4*100;
    
    document.getElementById("preview").style.backgroundColor = 'rgba('+Math.round(random1*255)+','+ Math.round(random2*255)+','+ Math.round(random3*255)+','+ Math.round(random4*255)+')';
}

function changeType(range){
    document.getElementById("input1").type = range;
    document.getElementById("input2").type = range;
    document.getElementById("input3").type = range;
    document.getElementById("input4").type = range;
}

function changeType(number){
    document.getElementById("input1").type = number;
    document.getElementById("input2").type = number;
    document.getElementById("input3").type = number;
    document.getElementById("input4").type = number;
}

var timer = null;

document.getElementById("autocreate").addEventListener("click",function(){
    timer = setInterval(function(){
        randomFace();
        createFace(); 
    },500);
});

document.getElementById("stopcreat").addEventListener("click",function(){
    clearInterval(timer);
});

