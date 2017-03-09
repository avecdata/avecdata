jQuery(document).ready(function($){
  if ($(window).scrollTop() > 100) {
    $('.header__navbar').not(".header__navbar--internal").addClass('header__navbar--fixed');
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $('.header__navbar').not(".header__navbar--internal").addClass('header__navbar--fixed');
  }
  else{
    $('.header__navbar').not(".header__navbar--internal").removeClass('header__navbar--fixed');
  }
});

$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });

    $('.banner-search__input-search').on('input', function () {
      var val = this.value;
      var datalist = $('#browsers').find('option').filter(function(){
          return this.value.toUpperCase() === val.toUpperCase();
      });
      if(datalist.length) {
        window.location = '/' + datalist[0].title
      }
    });
});
