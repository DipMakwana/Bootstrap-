$("#one").click(function () {
    $("#oneclick").show();
    $("#roundclick").hide();
    $("#multiclick").hide();
})

$("#round").click(function () {
    $("#roundclick").show();
    $("#oneclick").hide();
    $("#multiclick").hide();
})

$("#multi").click(function () {
    $("#multiclick").show();
    $("#oneclick").hide();
    $("#roundclick").hide();
})
$(".btn1").click(function () {
    $(this).hide();
    $(".extraflight1").show();
    $(".btn2").show();
})
$(".btn2").click(function () {
    $(this).hide();
    $(".extraflight2").show();
    $(".btn3").show();
})
$(".btn3").click(function () {
    $(this).hide();
    $(".extraflight3").show();
})