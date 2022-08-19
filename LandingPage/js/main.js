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
    let modal = $(".myModal");
    let imgSource = $(this)[0].children[0].src;
    modal[0].children[0].src = imgSource;
    modal.css("display", "block");
    $(".fadeBackground").css("display", "block");
   });

   $(".closeBtn").click(function () {
    $(".myModal").css("display", "none");
    $(".fadeBackground").css("display", "none");
   });

   $(".fadeBackground").click(function () {
    $(".myModal").css("display", "none");
    $(".fadeBackground").css("display", "none");
   })
});
