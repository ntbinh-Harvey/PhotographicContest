// auto carousel
// $(document).ready(function () {
//   $(".carousel").carousel({
//     interval: 1200,
//   });
// });
// Đồng hồ đếm ngược
var countDownDate = new Date("Apr 25,2021 12:30:00").getTime();
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
  // if (distance < 0) {
  //   clearInterval(x);
  //   $(".join").html("hết hạn");
  //   $(".countdown").addClass("count");
  //   $(".join").addClass("expire").removeClass("join");
  // }
}, 1000);
// load modal on first page
$(window).on("load", function () {
  $(".modal").modal("show");
});
