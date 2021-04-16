// auto carousel
// $(document).ready(function () {
//   $(".carousel").carousel({
//     interval: 1200,
//   });
// });
// Đồng hồ đếm ngược
$(window).ready(function () {
  var t = $("#timer"),
    n = t.data("to-start");
  function e(n) {
    t.find(".seconds .value").text(a(n % 60)),
      t.find(".minutes .value").text(a(Math.trunc(n / 60) % 60)),
      t.find(".hours .value").text(a(Math.trunc(n / 60 / 60) % 24)),
      t.find(".days .value").text(a(Math.trunc(n / 60 / 60 / 24)));
  }
  function a(t) {
    return t <= 0 ? "00" : (t = t.toString()).length <= 1 ? "0" + t : t;
  }
  e(n),
    window.setInterval(function () {
      e((n -= 1));
    }, 1e3);
});
