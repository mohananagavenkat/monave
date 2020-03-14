$(function(){

  new WOW().init();
  
	if($("#home-page").length= 1) {
    $('#header .navbar-brand').addClass('animated slideInLeft');
    $('#header .center-block').addClass('animated slideInDown');
    $('#header .charry-socials').addClass('animated slideInRight');
    $('.carousel_caption h2').addClass('animated fadeInUp');
    $('.item').mousemove(function(e){
      var x = -(e.pageX + this.offsetLeft) / 10;
      var y = -(e.pageY + this.offsetTop) / 10;
      var x1 = -(e.pageX + this.offsetLeft) / 30;
      var y1 = -(e.pageY + this.offsetTop) / 30;
      $('h2,this').css('left', x + 'px');
      $('h2,this').css('top', y + 'px');
      $('.item .carousel_caption').css("background-position", x1 + "px     " + y1 + "px");
    }); 
  }

  if($("#about-page").length!= 0) {
    $('body').addClass('innerpages');
  }
  
  if($("#programs-page").length!= 0) {
    $('body').addClass('innerpages');
  }

  if($("#donate-page").length!= 0) {
    $('body').addClass('innerpages');
  }

  if($("#gallery-page").length!= 0) {
    $('body').addClass('innerpages');
      // LightBox Plugin
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
  }
	  // Contact Us page
  if ($("#contact-page").length!= 0) {
    $('body').addClass('innerpages');
    // Map script
    $( "#contact-us" ).on('submit',function( event ){    
      event.preventDefault();
      $('.error').empty();
      var url = 'https://testapple.com/1.0/save-lead';     
      $.ajax({
        url: url,
        type: 'POST',
        crossDomain: true,
        data: $(this).serialize(),
        dataType: 'json',
        success: function(data) {
          $('#contact-us')[0].reset(); 
          $('.sMessage').empty().html(data.message);
        },
        error: function(data)
        {
          var errors = $.parseJSON(data.responseText);
          $.each(errors,function(key,value){
            $('#'+key+'_error').html(value);            
          });
        }
      }); //endajax     
    });
  }
});


