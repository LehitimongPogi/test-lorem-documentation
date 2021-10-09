$(document).ready(function() {
    $("#target4").addClass("btn-success");
    $("#target5").addClass("btn-danger");
    $("h3").text("new text");
    $("#target4").html("<em>target4</em>");
    $("#target1").remove();
    $("#target2").prop("disabled", true);
    $("#target2").appendTo("#right-well");
    $("#target4").appendTo("#left-well");
    $("#target5").clone().appendTo("#left-well");
    $("h3").parent().css("background-color", "green");
    $("#right-well").children().children().css("color", "orange");
    $(".target:nth-child(3)").css("background-color", "yellow").css("color", "black");
    $(".target:even").addClass("btn-info");
});