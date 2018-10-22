import 'paroller.js';
import 'jquery-lazy';
import 'slick-carousel';

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

//LAZYLOAD

$(function() {
        $('.lazy').lazy({
          effect: "fadeIn",
          effectTime: 2000,
          threshold: 0
        });
    });

//CHECKBOX

var fSelect = document.getElementById('fSelect')
var fSelectTitle = document.getElementById('fSelectTitle')

fSelectTitle.addEventListener('click', (e)=>{
    fSelect.classList.toggle('form__select--is-open');
})


//SLICK

$('.footer__news-inner').slick({
  slidesToShow: 1,
  nextArrow: '.footer__news-next',
  prevArrow: '.footer__news-prev'
});

$('.footer__contacts').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.footer__nav',
  fade: true,
  cssEase: 'linear'
});


$('.footer__nav').slick({ 
        slidesToShow: 4, 
        asNavFor: '.footer__contacts', 
        focusOnSelect: true
    });


//MAPS




 google.maps.event.addDomListener(window, 'load', init_map);

function init_map(){
  var myOptions = {zoom:10,center:new google.maps.LatLng(50.4345671,30.50138560000005),
    mapTypeId: google.maps.MapTypeId.ROADMAP};

    map = new google.maps.Map(document.getElementById('kievMap'), myOptions);
    marker = new google.maps.Marker({
      map: map,position: new google.maps.LatLng(50.4345671,30.50138560000005)
    });

    infowindow = new google.maps.InfoWindow({
      content:'<strong>Название</strong><br>Киев ул. Гайдара 58/10, БЦ Европассаж, оф. 31 <br>'
    });
    google.maps.event.addListener(marker, 'click', function(){
      infowindow.open(map,marker);});
    infowindow.open(map,marker);
}
   


    


 







 










