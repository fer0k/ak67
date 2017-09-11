         
$(function(){
    if( $("#f1_date").length ){
                    $('#f1_date').daterangepicker({ 
                        locale: {
                                "format": "YYYY-MM-DD h:mm A",
                                "separator": " - ",
                                "applyLabel": "Принять",
                                "cancelLabel": "Отмена",
                                "fromLabel": "С",
                                "toLabel": "До",
                                "customRangeLabel": "Обычно",
                                "daysOfWeek": [
                                    "Вск",
                                    "Пн",
                                    "Вт",
                                    "Ср",
                                    "Чт",
                                    "Пт",
                                    "Сб"
                                ],
                                "monthNames": [
                                    "Январь",
                                    "Февраль",
                                    "Март",
                                    "Апрель",
                                    "Май",
                                    "Июнь",
                                    "Июль",
                                    "Август",
                                    "Сентябрь",
                                    "Октябрь",
                                    "Ноябрь",
                                    "Декабрь"
                                ],
                                "firstDay": 1
                            },
                            singleDatePicker: true,
                            timePicker: true,
                            timePickerIncrement: 30,
                            startDate: '2017-05-20',
                            endDate: '2017-06-20'
                    });
    }
    
   if( $("#slider_parik_i.owl-carousel").length ) {
        $("#slider_parik_i.owl-carousel").owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        nav:true,
        navText: [''],
        autoplay: true,
        autoWidth:false,
        autoplayTimeout:4500,
        smartSpeed:500,
        autoplayHoverPause:true,
        lazyLoad:true
        });
    }
    
    
$('.mail-form').submit(function(){
 	  var form   = $(this);
        //console.log($(form));
 	  var msg   = $(form).serialize();
        $.ajax({
          type: 'POST',
          url: 'http://academiakrasoty67.ru/services/post.php',
          data: msg,
          success: function(data) {
            $(form).find(".result").html(data);
            $(form).find('button[type="submit"]').hide();
          },
          error:  function(xhr, str){
	    console.log('Возникла ошибка: ' + xhr.responseCode);
          }
        });
});


/*

        $(window).scroll(function() {
                    $('.row.intensive a').each(function(){
                      if ($(this).offset().top < ($(window).scrollTop() + $(window).height()) ) {
                        $(this).addClass('animated bounceInUp');
                      }
                    });
        });
*/

$('input[name="privacy_policy"]').each(function(){
     $(this).parents('form').find('[type="submit"]').attr("disabled", true);
});

$('input[name="privacy_policy"]').bind("change click", function () {
    if( $(this).prop("checked") ){
       $(this).parents('form').find('[type="submit"]').removeAttr("disabled");  
    }else{
       $(this).parents('form').find('[type="submit"]').attr("disabled", true);
    }
});


});