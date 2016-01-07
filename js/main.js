$(document).ready(function(){

  $("#down").on("click", function(event){
    event.preventDefault()

    $('.active').removeClass(function(){
      $(this).next().addClass('active')
      return 'active'
    })

    $("body, html").animate({
      scrollTop: $(".active").offset().top
    }, 1000)
  })

  $("#up").on("click", function(event){
    event.preventDefault()

    $('.active').removeClass(function(){
      $(this).prev().addClass('active')
      return 'active'
    })

    $("body, html").animate({
      scrollTop: $(".active").offset().top
    }, 1000)
  })

})
