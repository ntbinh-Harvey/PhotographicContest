// auto carousel
// $(document).ready(function () {
//   $(".carousel").carousel({
//     interval: 1200,
//   });
// });
// Đồng hồ đếm ngược
var countDownDate = new Date("Jun 25,2021 12:30:00").getTime();
var x = setInterval(() => {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#days-value").html(days);
  $("#minutes-value").html(minutes);
  $("#hours-value").html(hours);
  $("#seconds-value").html(seconds);
}, 1000);
// load modal on first page
$(window).on("load", function () {
  $(".modal").modal("show");
});
//handle rating part
$(function () {
  $(document).on(
    {
      mouseover: function (event) {
        $(this).find(".far").addClass("star-over");
        $(this).prevAll().find(".far").addClass("star-over");
      },
      mouseleave: function (event) {
        $(this).find(".far").removeClass("star-over");
        $(this).prevAll().find(".far").removeClass("star-over");
      },
    },
    ".rate"
  );

  $(document).on("click", ".rate", function () {
    if (!$(this).find(".star").hasClass("rate-active")) {
      $(this)
        .siblings()
        .find(".star")
        .addClass("far")
        .removeClass("fas rate-active");
      $(this)
        .find(".star")
        .addClass("rate-active fas")
        .removeClass("far star-over");
      $(this)
        .prevAll()
        .find(".star")
        .addClass("fas")
        .removeClass("far star-over");
    } else {
      console.log("has");
    }
  });
});
