// $
// $("<div></div>")

$("<img></img>",
    {src: "img/image1.jpg",
    title: "Good cat",
    click: function() {
        alert("This is cat");
    }
}).appendTo("body");

// $("a")
// $("#some-id")
// $(".someclass")
// $("header > ul:has(a)")

$("#test").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")

// $("селектор").имяМетода(параметры);

$("#text").fadeOut("slow");

$("#style").addClass("betterStyle");

$("#test").removeClass("defaultStyle");

$("#test").css("color", "green");

//******************* */

$("#clickme").click(function() {
    $("#cat").slideDown("slow", function() {});
})

//****************** */

$(document).ready(function () {
    $(".btn-slide").click(function () {
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    })
})

//****************** */

$(".run").click(function () {
    $("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
        .animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
        .animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
        .animate({top: "0"}, "fast")
        .slideUp()
        .slideDown("slow");      
})

//****************** */

$(".accordion h3:first").addClass("active");
$(".accordion p:not(:first)").hide();

$(".accordion h3").click(function () {
    $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h3").removeClass("active");   
});

//****************** */

$(".thumbs a").click(function () {
    let largePath = $(this).attr("href");
    let largeAlt = $(this).attr("title");

    $("#largeImg").attr({src: largePath, alt: largeAlt});

    // $("h2 em").html(" (" + largeAlt + ")");
    return false;
})

// Slider

$(function() {      
    let width=$('.slider-box').width();                     // Ширина слайдера.
    let interval = 4000;                                    // Интервал смены слайдов.
   
    $('.slider img:last').clone().prependTo('.slider');     // Копия последнего слайда помещается в начало.
    $('.slider img').eq(1).clone().appendTo('.slider');     // Копия первого слайда помещается в конец.  
    $('.slider').css('margin-left', -width);                // Контейнер .slider сдвигается влево на ширину одного слайда.
    setInterval('animation()',interval);                    // Запускается функция animation(), выполняющая смену слайдов.
  });

function animation(){   
    let margin = parseInt($('.slider').css('marginLeft'));  // Текущее смещение блока .slider
    let width=$('.slider-box').width();                    // Ширина слайдера.
    let slidersAmount=$('.slider').children().length;       // Количество слайдов в слайдере.
    if(margin!=(-width*(slidersAmount-1)))                  // Если текущий слайд не последний,
    {
      margin=margin-width;                                  // то значение margin уменьшается на ширину слайда.
    } else {                                                  // Если показан последний слайд,
      $('.slider').css('margin-left', -width);              // то блок .slider возвращается в начальное положение,
      margin=-width*2;         
    }
    $('.slider').animate({marginLeft:margin},1000);          // Блок .slider смещается влево на 1 слайд.
  };


// Modal

$(document).ready(function() {
    //отбираем все теги a с name modal
    $('a[name=modal]').click(function(e) {
        //Отменяем поведение ссылки (по умолчанию)
        e.preventDefault();

        //Получаем href ссылки
        var id = $(this).attr('href');

        //Получаем высоту и щирину  окна просмотра
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Устанавливаем ширину и высоту маски равной (см. выше)
        $('#mask').css({'width':maskWidth,'height':maskHeight});

        //Анимация
        $('#mask').fadeIn(1000);
        $('#mask').fadeTo("slow",0.8);

        //Получаем ширину и высоту window
        var winH = $(window).height();
        var winW = $(window).width();

        //Для центрирования модал. окна
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        // Анимация
        $(id).fadeIn(2000);
    });

    //закрываем модал. окно при клике по .close
    $('.window .close').click(function (e) {
        //Отменяем обычное поведение ссылки
        e.preventDefault();
        $('#mask, .window').hide();
    });
});




