clicked = 1;
divSW = document.getElementByClassName('audio').scrollWidth;
$('.imagen').click(function(){
    divSL = $('div.audio').scrollLeft();
    if(divSW > divSL){
        clicked++;
        divW = $('div.audio').width();
        moveW = divW * clicked;
        $('div.audio').animate({
            scrollLeft : moveW
        })
    }
})