$(document).ready(function () {
   $(".myCard").fadeOut();

   $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y < 100) {
         $(".myCard").fadeOut(3000);
      } else {
         $(".myCard").fadeIn(3000);
      }
   });

   $(".myCard").click(function () {
    $(".myModal").css("display", "block");
   })
});
