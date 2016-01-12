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

  // Once you get to the bottom of the window the down button is hidden
  $(window).on("scroll", function(){
    if ($(this).scrollTop() + $(this).height() === $(document).height()){
      $("#up").show()
      $("#down").hide()
    } else {
      $("#up").hide()
    }
  })
})
