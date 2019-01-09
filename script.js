$(document).ready(function(){
  $('#Login-Form').parsley();
  $('#Signin-Form').parsley();
  $('#Forgot-Password-Form').parsley();
    	
  $('#signupModal').click(function(){			    		
  	$('#login-modal-content').fadeOut('fast', function(){
  	   $('#signup-modal-content').fadeIn('fast');
    });
  });
    		   		
  $('#loginModal').click(function(){			    			
    $('#signup-modal-content').fadeOut('fast', function(){
       $('#login-modal-content').fadeIn('fast');
    });
  });
    		
  $('#FPModal').click(function(){			   			
    $('#login-modal-content').fadeOut('fast', function(){
       $('#forgot-password-modal-content').fadeIn('fast');
    });
  });
    		
  $('#loginModal1').click(function(){			    			
    $('#forgot-password-modal-content').fadeOut('fast', function(){
       $('#login-modal-content').fadeIn('fast');
    });
  });

  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});