$(document).ready(function(){

  $("#down").on("click", function(event){
    event.preventDefault()

    $(".active").removeClass(function(){
      $(this).next().addClass("active")
      return "active"
    })

    $("body, html").animate({
      scrollTop: $(".active").offset().top
    }, 1000)
  })

  $(window).on("scroll", function(){
    if ($(window).scrollTop() + $(window).height() == $(document).height()){
      $("#down").hide(800)
      $("#up").show(1000)
    } else {
      $("#up").hide(800)
      $("#down").show(1000)
    }
  })

  $("#up").on("click", function(event){
    event.preventDefault()
    window.location.href="#"

    $(".active").removeClass(function(){
      $("section:first").addClass("active")
      return "active"
    })
  })

})
