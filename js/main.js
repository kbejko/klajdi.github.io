$(document).ready(function(){

  // On click removes active class to section and adds it to its next sibling.
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

  // Once you get to the bottom of the window the down button is hidden and up is show and vice versa.
  $(window).on("scroll", function(){
    if ($(window).scrollTop() + $(window).height() == $(document).height()){
      $("#down").hide(800)
      $("#up").show(1000)
    } else {
      $("#up").hide(800)
      $("#down").show(1000)
    }
  })

  // Clicking up takes you to home page and adds the active class to its section so the down button can work again.
  $("#up").on("click", function(event){
    event.preventDefault()
    window.location.href="#"
    $(".active").removeClass(function(){
      $("section:first").addClass("active")
      return "active"
    })
  })

})
