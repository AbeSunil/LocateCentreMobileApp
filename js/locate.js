$(function(){
    $("#go").click(function(e) {
        e.preventDefault();
                  var content=$(this).load("../getParameters.html");
                  $('#content').replaceWith(content); } )
})