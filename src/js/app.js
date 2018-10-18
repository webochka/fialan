import 'paroller.js'
import 'jquery-lazy'

$(".about__bg, [data-paroller-factor]").paroller({ 
	factor: 0.5, 
    factorXs: 0.05,
	type: 'background', 
	direction: 'vertical' 
});



$(".about__icon, [data-paroller-factor]").paroller({
    factor: 0.09,            
    factorXs: 0.05,           
    type: 'foreground',     
    direction: 'vertical' 
    });


$(".article__img2, [data-paroller-factor]").paroller({
    factor: 0.09,            
    factorXs: 0.05,           
    type: 'foreground',     
    direction: 'vertical' 
    });

$(".article__img3, [data-paroller-factor]").paroller({
    factor: 0.1,            
    factorXs: 0.1,           
    type: 'foreground',     
    direction: 'vertical' 
    });

$(".article__img4, [data-paroller-factor]").paroller({
    factor: 0.1,            
    factorYs: 0.1,           
    type: 'foreground',     
    direction: 'vertical' 
    });

$(".advice__header-text, [data-paroller-factor]").paroller({
    factor: 0.4,            
    factorYs: 0.4,           
    type: 'foreground',     
    direction: 'vertical' 
    });

$(function() {
        $('.lazy').lazy({
          effect: "fadeIn",
          effectTime: 2000,
          threshold: 0
        });
    });


var fSelect = document.getElementById('fSelect')
var fSelectTitle = document.getElementById('fSelectTitle')

fSelectTitle.addEventListener('click', (e)=>{
    fSelect.classList.toggle('form__select--is-open');
})



 










