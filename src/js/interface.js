$(".button").click(function(e){
  
    $(".button").removeClass("active")

    $(e.target).addClass("active")
    console.log($(e.target))

    $(".navbar-brand").text($(e.target).text())
    changeOption($(e.target).data().item, $(e.target).text())

})

$("#button-submmit").click(function(e){
    stringFormatter($("#input-text").val())
})