/* $(document).ready(function(){
	// появление/затухание кнопки #back-top
	$(function (){
		// прячем кнопку #back-top
		$("#back-top").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$("#back-top").fadeIn();
			} else{
				$("#back-top").fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$("#back-top a").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
}); */
 var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });




var user = {
	name: 'Alex',

	sayHi: function() {
		console.log(this.name);
	}
};
user.sayHi();



























