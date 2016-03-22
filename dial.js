$(document).ready(function(){
  var rotate_degree;
  var show_container;
  $(".dial-1 > a, .dial-2 > a").click(function(){
      //rotate code
      rotate_degree = $(this).attr("data-rotate-value");
      $(".dial-circle").css('-webkit-transform','rotate('+rotate_degree+'deg)');
    
      //show container
      show_container = $(this).attr("data-content-value");
      $(".container > div").hide();
      $('#content-container-'+show_container+'').show();
      return false;
  });
})