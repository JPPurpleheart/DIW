$(document).ready(function () {
    var scalesize = (Math.random())*2;
    var size = (Math.random())*100;
    var numdir = Math.floor((Math.random())*4);
    if(numdir == 0){
        numdir = 1;
    }
    var i = 0;
    $('div').click(function(){
        i ++;
        $('#movresize').get(0).animate([{"transform": "scale(" + scalesize + ")"}],
        {duration: 5000,easing:'linear'});
        switch(numdir){
            case 1:
                $('#movresize').animate({"bottom":size},700);
                scalesize = (Math.random())*2;
                size = (Math.random())*100;
                numdir = Math.floor((Math.random())*4);
                if(numdir == 0){
                    numdir = 1;
                }
                break;
            case 2:
                $('#movresize').animate({"left":size},700);
                scalesize = (Math.random())*2;
                size = (Math.random())*100;
                numdir = Math.floor((Math.random())*4);
                if(numdir == 0){
                    numdir = 1;
                }
                break;
            case 3:
                $('#movresize').animate({"right":size},700);
                scalesize = (Math.random())*2;
                size = (Math.random())*100;
                numdir = Math.floor((Math.random())*4);
                if(numdir == 0){
                    numdir = 1;
                }
                break;
            case 4:
                $('#movresize').animate({"top":size},700);
                scalesize = (Math.random())*2;
                size = (Math.random())*100;
                numdir = Math.floor((Math.random())*4);
                if(numdir == 0){
                    numdir = 1;
                }
                break;
        }
        var midiv = document.getElementById("movresize").innerHTML = i;
    });
});