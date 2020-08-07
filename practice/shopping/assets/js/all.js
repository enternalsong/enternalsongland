"use strict";

console.log("hello");
$(document).ready(function () {
  //header
  $(".menuBtn").click(function (e) {
    e.preventDefault();
    $(".menu").toggleClass("active");
  }); //常見問題 faq

  $('.abox').hide();
  /*$('.abox').eq(0).addClass('active');
  $('.abox').eq(0).show();*/

  $(".faqrow").click(function (e) {
    e.preventDefault(); // 加上 active 屬性，並把其他有 active 的移除

    $(this).toggleClass('active').siblings().removeClass('active'); // 讓自己的 li body 切換收合

    $(this).children().next().slideToggle(); // 讓其他 li body 收合

    $(this).siblings().children().next().slideUp();
  });
});
"use strict";

$(document).ready(function () {
  $(".qbox").click(function (e) {
    e.preventDefault();
    $(".abox").toggleClass("active");
  });
});
//# sourceMappingURL=all.js.map
